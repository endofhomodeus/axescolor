import React, { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import { Helmet } from 'react-helmet-async';
import { RefreshCw, Copy, Check, ChevronLeft, ChevronRight, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import { PREDEFINED_PALETTES } from '../data/palettes';

// Levenshtein mesafe hesaplama fonksiyonu
const levenshteinDistance = (str1: string, str2: string): number => {
  const matrix: number[][] = [];

  for (let i = 0; i <= str1.length; i++) {
    matrix[i] = [i];
  }

  for (let j = 0; j <= str2.length; j++) {
    matrix[0][j] = j;
  }

  for (let i = 1; i <= str1.length; i++) {
    for (let j = 1; j <= str2.length; j++) {
      if (str1[i - 1] === str2[j - 1]) {
        matrix[i][j] = matrix[i - 1][j - 1];
      } else {
        matrix[i][j] = Math.min(
          matrix[i - 1][j - 1] + 1,
          matrix[i][j - 1] + 1,
          matrix[i - 1][j] + 1
        );
      }
    }
  }

  return matrix[str1.length][str2.length];
};

// Benzerlik skoru hesaplama (0-1 arasında, 1 en benzer)
const calculateSimilarity = (str1: string, str2: string): number => {
  const maxLength = Math.max(str1.length, str2.length);
  const distance = levenshteinDistance(str1.toLowerCase(), str2.toLowerCase());
  return 1 - distance / maxLength;
};

// Maksimum tolerans değerini hesapla
const getMaxTolerance = (length: number): number => {
  if (length < 4) return 0;  // 3 karakter ve altı için tolerans yok
  if (length <= 6) return 1; // 4-6 karakter arası için 1 tolerans
  return Math.min(2, Math.floor(length * 0.2)); // Uzun kelimeler için max 2 tolerans
};

const calculateRelevanceScore = (palette: ColorPalette, searchTerm: string): number => {
  const searchTermLower = searchTerm.toLowerCase().trim();
  
  if (searchTermLower.length < 3) {
    // 3 karakterden az ise sadece tam eşleşme ara
    return palette.name.toLowerCase().includes(searchTermLower) || 
           palette.tags.some(tag => tag.toLowerCase().includes(searchTermLower)) ? 1 : 0;
  }

  // Arama terimini kelimelere ayır
  const searchWords = searchTermLower.split(' ').filter(word => word.length > 0);
  
  // Palette'in aranabilir içeriğini hazırla
  const paletteContent = [
    ...palette.name.toLowerCase().split(' '),
    ...palette.tags.map(tag => tag.toLowerCase())
  ];

  if (searchWords.length > 1) {
    // Çoklu kelime araması için
    let totalScore = 0;
    for (const searchWord of searchWords) {
      let bestWordScore = 0;
      const maxTolerance = getMaxTolerance(searchWord.length);

      for (const content of paletteContent) {
        if (content.includes(searchWord)) {
          bestWordScore = 1;
          break;
        }

        const distance = levenshteinDistance(searchWord, content);
        if (distance <= maxTolerance) {
          const score = 1 - (distance / Math.max(searchWord.length, content.length));
          bestWordScore = Math.max(bestWordScore, score);
        }
      }
      totalScore += bestWordScore;
    }
    return totalScore / searchWords.length;
  } else {
    // Tek kelime araması için
    let bestMatchScore = 0;
    const maxTolerance = getMaxTolerance(searchTermLower.length);

    for (const content of paletteContent) {
      if (content.includes(searchTermLower)) {
        return 1;
      }

      const distance = levenshteinDistance(searchTermLower, content);
      if (distance <= maxTolerance) {
        const score = 1 - (distance / Math.max(searchTermLower.length, content.length));
        bestMatchScore = Math.max(bestMatchScore, score);
      }
    }

    return bestMatchScore;
  }
};

const PaletteGeneratorPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedPalettes, setSelectedPalettes] = useState<ColorPalette[]>([]);
  const [copiedColor, setCopiedColor] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const palettesPerPage = 18;
  const dropdownRef = useRef<HTMLDivElement>(null);
  const selectedOptionRef = useRef<HTMLButtonElement>(null);

  // SEO için title ve description oluştur
  const pageTitle = "Color Palette Gallery - Browse Beautiful Color Combinations";
  const pageDescription = "Explore our curated collection of color palettes. Find the perfect color scheme for your next project with our extensive palette library.";

  // Memoize categories
  const categories = useMemo(() => [
    { value: 'all', label: 'All Categories' },
    ...Object.keys(PREDEFINED_PALETTES)
      .sort((a, b) => a.localeCompare(b))
      .map(category => ({
        value: category,
        label: category.split('-').map(word => 
          word.charAt(0).toUpperCase() + word.slice(1)
        ).join(' ')
      }))
  ], []);

  // Optimize filterPalettes with useCallback
  const filterPalettes = useCallback(() => {
    let filtered = [];
    const searchTermLower = searchTerm.trim().toLowerCase();
    
    if (selectedCategory === 'all') {
      filtered = Object.values(PREDEFINED_PALETTES).flat();
    } else {
      filtered = PREDEFINED_PALETTES[selectedCategory] || [];
    }

    if (searchTermLower !== '') {
      const scoredPalettes = filtered
        .map(palette => ({
          palette,
          score: calculateRelevanceScore(palette, searchTermLower)
        }))
        .filter(item => item.score > 0) // Sadece pozitif skora sahip paletleri al
        .sort((a, b) => b.score - a.score); // Skora göre sırala

      filtered = scoredPalettes.map(item => item.palette);
    }

    setSelectedPalettes(filtered);
    setCurrentPage(1);
  }, [searchTerm, selectedCategory]);

  // selectedCategory değiştiğinde otomatik filtreleme yap
  useEffect(() => {
    filterPalettes();
  }, [selectedCategory]); // searchTerm'i kaldırdık

  // Click-outside handler
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Scroll to selected option when dropdown opens
  useEffect(() => {
    if (isDropdownOpen && selectedOptionRef.current) {
      selectedOptionRef.current.scrollIntoView({
        block: 'center',
        behavior: 'auto'
      });
    }
  }, [isDropdownOpen]);

  // Kategori seçimi için dropdown komponenti
  const CategoryDropdown = () => (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        className="w-full md:w-52 px-4 py-3 text-left bg-white dark:bg-gray-800 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-purple-500 focus:border-transparent shadow-lg flex items-center justify-between"
      >
        <span className="text-gray-700 dark:text-gray-300 truncate">
          {categories.find(cat => cat.value === selectedCategory)?.label || 'All Categories'}
        </span>
        <ChevronDown className={`w-5 h-5 flex-shrink-0 transition-transform ${isDropdownOpen ? 'transform rotate-180' : ''}`} />
      </button>

      {isDropdownOpen && (
        <div className="absolute z-50 w-full md:w-52 mt-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-xl max-h-96 overflow-y-auto">
          {categories.map((category) => (
            <button
              key={category.value}
              ref={category.value === selectedCategory ? selectedOptionRef : null}
              onClick={() => {
                setSelectedCategory(category.value);
                setIsDropdownOpen(false);
              }}
              className={`w-full px-4 py-2 text-left hover:bg-gray-50 dark:hover:bg-gray-700 ${
                selectedCategory === category.value 
                ? 'bg-indigo-50 dark:bg-indigo-900/20 text-indigo-600 dark:text-indigo-400' 
                : 'text-gray-700 dark:text-gray-300'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );

  // Mevcut sayfadaki paletleri al
  const currentPalettes = useMemo(() => {
    const indexOfLastPalette = currentPage * palettesPerPage;
    const indexOfFirstPalette = indexOfLastPalette - palettesPerPage;
    return selectedPalettes.slice(indexOfFirstPalette, indexOfLastPalette);
  }, [selectedPalettes, currentPage, palettesPerPage]);

  // Toplam sayfa sayısını hesapla
  const totalPages = Math.ceil(selectedPalettes.length / palettesPerPage);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const getRandomKeyword = () => {
    // Tüm palette isimlerini ve etiketleri topla
    const allKeywords = Object.values(PREDEFINED_PALETTES)
      .flat()
      .reduce((acc: string[], palette) => {
        // Palette ismini kelimelere ayır
        const nameWords = palette.name.split(' ');
        // Etiketleri ve isim kelimelerini birleştir
        return [...acc, ...nameWords, ...palette.tags];
      }, []);

    // Tekrar eden kelimeleri kaldır
    const uniqueKeywords = [...new Set(allKeywords)];
    // Rastgele bir kelime seç
    const randomKeyword = uniqueKeywords[Math.floor(Math.random() * uniqueKeywords.length)];
    // Sadece search term'i güncelle, otomatik arama yapma
    setSearchTerm(randomKeyword);
  };

  const handleSearch = () => {
    if (searchTerm.trim() === '') {
      const allPalettes = Object.values(PREDEFINED_PALETTES).flat();
      setSelectedPalettes(allPalettes);
    } else {
      const searchTermLower = searchTerm.toLowerCase();
      const filteredPalettes = Object.values(PREDEFINED_PALETTES)
        .flat()
        .filter(palette => 
          palette.name.toLowerCase().includes(searchTermLower) ||
          palette.tags.some(tag => tag.toLowerCase().includes(searchTermLower))
        );
      setSelectedPalettes(filteredPalettes);
    }
    // Reset to first page when searching
    setCurrentPage(1);
  };

  // Optimize copyToClipboard with useCallback
  const copyToClipboard = useCallback(async (color: string) => {
    try {
      await navigator.clipboard.writeText(color);
      setCopiedColor(color);
      setTimeout(() => setCopiedColor(null), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  }, []);

  // Pagination Component
  const PaginationControls = useMemo(() => {
    return ({ currentPage, totalPages, onPageChange }: {
      currentPage: number;
      totalPages: number;
      onPageChange: (page: number) => void;
    }) => (
      <div className="flex justify-center items-center space-x-2">
        <button
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="p-2 rounded-lg bg-white dark:bg-gray-800 shadow-lg border border-gray-200 dark:border-gray-700 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-200 dark:text-gray-300 hover:shadow-xl"
          aria-label="Previous page"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        {/* İlk sayfa her zaman göster */}
        <button
          onClick={() => onPageChange(1)}
          className={`w-10 h-10 rounded-lg shadow-lg border transition-all duration-200 hover:shadow-xl ${
            currentPage === 1
            ? 'bg-gradient-to-r from-indigo-500 to-purple-600 text-white border-transparent'
            : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 border-gray-200 dark:border-gray-700'
          }`}
        >
          1
        </button>

        {/* Soldaki üç nokta */}
        {currentPage > 3 && (
          <span className="px-2 text-gray-500 dark:text-gray-400 font-medium">...</span>
        )}

        {/* Ortadaki sayfalar */}
        {Array.from({ length: totalPages }, (_, i) => i + 1)
          .filter(num => num !== 1 && num !== totalPages && Math.abs(currentPage - num) <= 1)
          .map(num => (
            <button
              key={num}
              onClick={() => onPageChange(num)}
              className={`w-10 h-10 rounded-lg shadow-lg border transition-all duration-200 hover:shadow-xl ${
                currentPage === num
                ? 'bg-gradient-to-r from-indigo-500 to-purple-600 text-white border-transparent'
                : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 border-gray-200 dark:border-gray-700'
              }`}
            >
              {num}
            </button>
          ))}

        {/* Sağdaki üç nokta */}
        {currentPage < totalPages - 2 && (
          <span className="px-2 text-gray-500 dark:text-gray-400 font-medium">...</span>
        )}

        {/* Son sayfa her zaman göster */}
        {totalPages > 1 && (
          <button
            onClick={() => onPageChange(totalPages)}
            className={`w-10 h-10 rounded-lg shadow-lg border transition-all duration-200 hover:shadow-xl ${
              currentPage === totalPages
              ? 'bg-gradient-to-r from-indigo-500 to-purple-600 text-white border-transparent'
              : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 border-gray-200 dark:border-gray-700'
            }`}
          >
            {totalPages}
          </button>
        )}

        <button
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="p-2 rounded-lg bg-white dark:bg-gray-800 shadow-lg border border-gray-200 dark:border-gray-700 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-200 dark:text-gray-300 hover:shadow-xl"
          aria-label="Next page"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    );
  }, []);

  // Add lazy loading for palette images
  const handlePaletteInView = useCallback((node: HTMLElement | null) => {
    if (node && 'IntersectionObserver' in window) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              node.classList.add('loaded');
              observer.unobserve(node);
            }
          });
        },
        { rootMargin: '50px' }
      );
      observer.observe(node);
    }
  }, []);

  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta name="keywords" content="color palettes, color combinations, color schemes, design inspiration, color library" />
        
        {/* Open Graph Tags */}
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={window.location.href} />
        
        <link rel="canonical" href={window.location.href} />

        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            "name": pageTitle,
            "description": pageDescription,
            "about": {
              "@type": "Thing",
              "name": "Color Palettes",
              "description": "Collection of curated color combinations"
            },
            "numberOfItems": "500+",
            "mainEntity": {
              "@type": "ItemList",
              "itemListElement": selectedPalettes.slice(0, 10).map((palette, index) => ({
                "@type": "ListItem",
                "position": index + 1,
                "item": {
                  "@type": "Thing",
                  "name": palette.name,
                  "description": `Color palette with ${palette.colors.length} colors`,
                  "identifier": palette.colors.join(",")
                }
              }))
            }
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
        {/* Üst Dekoratif Dalga */}
        <div className="absolute top-0 left-0 right=0 h-48 overflow-hidden z-0">
          <svg className="absolute bottom-0 w-full h-48" viewBox="0 0 1440 320" preserveAspectRatio="none">
            <path
              fill="rgba(129, 140, 248, 0.1)"
              d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,106.7C960,117,1056,139,1152,138.7C1248,139,1344,117,1392,106.7L1440,96L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
            ></path>
          </svg>
        </div>

        <main className="max-w-7xl mx-auto px-4 py-16 relative z-10">
          <header className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-600 dark:from-indigo-400 dark:to-purple-500">
              Generate Color Palette from Keywords
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Enter any keyword to discover beautiful color combinations
            </p>
          </header>

          <section className="mb-12" aria-label="Search and Filter">
            <div className="max-w-2xl mx-auto space-y-4">
              {/* Search and Filter Section */}
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1 relative">
                  <label htmlFor="palette-search" className="sr-only">Search palettes</label>
                  <input
                    id="palette-search"
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && filterPalettes()}
                    placeholder="Try: sunset, digital, forest, spring, dream, cyber..."
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent dark:bg-gray-800 dark:border-gray-600 dark:text-white pr-24 shadow-lg"
                  />
                  <button
                    onClick={getRandomKeyword}
                    className="absolute right-3 top-1/2 -translate-y-1/2 p-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200"
                  >
                    <RefreshCw className="w-5 h-5" />
                  </button>
                </div>
                <CategoryDropdown />
              </div>
              <button
                onClick={filterPalettes}
                className="mt-4 px-8 py-3 bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl mx-auto block w-full md:w-auto"
              >
                Generate Palette
              </button>
            </div>
          </section>

          {/* Üst Sayfalama */}
          {totalPages > 1 && (
            <div className="mb-8">
              <PaginationControls
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={handlePageChange}
              />
            </div>
          )}

          {/* Grid yapısını 3'lü sisteme güncelleme */}
          <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6" aria-label="Color Palettes">
            {currentPalettes.map((palette, paletteIndex) => {
              const category = Object.keys(PREDEFINED_PALETTES).find(key => PREDEFINED_PALETTES[key].some(p => p.name === palette.name));
              return (
                <article 
                  key={paletteIndex}
                  ref={handlePaletteInView}
                  className="opacity-0 transform translate-y-4 transition-all duration-300 loaded:opacity-100 loaded:translate-y-0 bg-white dark:bg-gray-800 rounded-xl shadow-xl border border-gray-200 dark:border-gray-700 overflow-hidden hover:scale-[1.02]"
                >
                  <div className="p-4">
                    <Link
                      to={`/palette/${category}/${palette.name}`}
                      className="block mb-3 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg transition-all duration-200 p-3 group cursor-pointer border-2 border-dashed border-transparent hover:border-indigo-300 dark:hover:border-indigo-600"
                    >
                      <div className="flex items-center justify-between">
                        <h3 className="text-base font-semibold text-gray-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400">
                          {palette.name}
                        </h3>
                        <div className="text-gray-400 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transform group-hover:translate-x-1 transition-all">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M5 12h14m-7-7 7 7-7 7"/>
                          </svg>
                        </div>
                      </div>
                    </Link>

                    <div className="grid grid-cols-5 gap-1.5 mb-3">
                      {palette.colors.map((color, index) => (
                        <button
                          key={index}
                          onClick={() => copyToClipboard(color)}
                          className="relative group rounded-lg overflow-hidden transition-transform hover:scale-105 shadow-lg aspect-square"
                          style={{ backgroundColor: color }}
                        >
                          <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 bg-black/40 transition-opacity">
                            {copiedColor === color ? (
                              <>
                                <Check className="w-4 h-4 text-white" />
                                <span className="text-white text-xs mt-1">{color}</span>
                              </>
                            ) : (
                              <>
                                <Copy className="w-4 h-4 text-white" />
                                <span className="text-white text-xs mt-1">{color}</span>
                              </>
                            )}
                          </div>
                        </button>
                      ))}
                    </div>
                    <div className="flex flex-wrap gap-1.5 mt-3"> {/* gap'i azaltıyoruz */}
                      {palette.tags.map((tag, index) => (
                        <span
                          key={index}
                          className="px-2 py-0.5 bg-gray-100 dark:bg-gray-700 rounded-full text-xs text-gray-600 dark:text-gray-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              );
            })}
          </section>

          {/* Alt Sayfalama */}
          {totalPages > 1 && (
            <div className="mt-12">
              <PaginationControls
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={handlePageChange}
              />
            </div>
          )}
        </main>

        {/* Alt Dekoratif Dalga */}
        <div className="absolute bottom-0 left-0 right-0 h-48 overflow-hidden z-0">
          <svg className="absolute bottom-0 w-full h-48" viewBox="0 0 1440 320" preserveAspectRatio="none">
            <path
              fill="rgba(129, 140, 248, 0.1)"
              d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,106.7C960,117,1056,139,1152,138.7C1248,139,1344,117,1392,106.7L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>
        </div>
      </div>
    </>
  );
};

// Add display name for better debugging
PaletteGeneratorPage.displayName = 'PaletteGeneratorPage';

export default React.memo(PaletteGeneratorPage);

