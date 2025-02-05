import React, { useState, useCallback, useRef, useEffect, useMemo } from 'react';
import { Helmet } from 'react-helmet-async';
import ColorPalette from '../components/ColorPalette';
import ImageUploader from '../components/ImageUploader';
import { Link } from 'react-router-dom';
import { ChevronRight, Copy, Check, Palette, Share2, X, Pin, Twitter, Instagram, MessageCircle, Send, Mail, Link2, MoreHorizontal, Pipette, Grid, Compass, Droplet } from 'lucide-react';

// ShareMenu component'ini buraya ekleyelim (PaletteDetailPage'dekiyle aynı)
const ShareMenu = React.memo(({ isOpen, onClose, onShare, shareMenuRef }: {
  isOpen: boolean;
  onClose: () => void;
  onShare: (platform: string) => void;
  shareMenuRef: React.RefObject<HTMLDivElement>;
}) => {
  return (
    <div className="relative" ref={shareMenuRef}>
      <button 
        onClick={onClose}
        className="p-3 rounded-full bg-gradient-to-r from-violet-500/90 to-fuchsia-500/90 shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-200 backdrop-blur-sm group"
        title="Share Palette"
      >
        <Share2 className="w-5 h-5 text-white group-hover:rotate-12 transition-transform" />
      </button>
      
      {isOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50"
          onClick={onClose} // Dışarı tıklamayı yakalayacak onClick handler
        >
          <div 
            className="bg-white dark:bg-gray-800 rounded-xl shadow-2xl w-full max-w-[600px] overflow-hidden relative"
            onClick={(e) => e.stopPropagation()} // Event'in yukarı yayılmasını engelleyerek modal içine tıklamayı koruyoruz
          >
            <div className="sticky top-0 px-4 py-3 border-b border-gray-200 dark:border-gray-700 flex justify-between items-center bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Share Palette</h3>
              <button
                onClick={onClose}
                className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              >
                <X className="w-5 h-5 text-gray-500 dark:text-gray-400" />
              </button>
            </div>

            <div className="p-6">
              <div className="grid grid-cols-4 sm:grid-cols-4 lg:grid-cols-8 gap-6">
                <div className="flex flex-col items-center gap-2">
                  <button
                    onClick={() => onShare('copy')}
                    className="w-14 h-14 flex items-center justify-center rounded-xl transition-all duration-200 bg-violet-500 hover:bg-violet-600 text-white hover:scale-105 relative group"
                    title="Copy Link"
                  >
                    <div className="absolute inset-0 flex items-center justify-center rounded-xl bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <Link2 className="w-6 h-6 relative z-10" />
                  </button>
                  <span className="text-[11px] font-medium text-gray-700 dark:text-gray-300 whitespace-nowrap">Copy Link</span>
                </div>

                <div className="flex flex-col items-center gap-2">
                  <button
                    onClick={() => onShare('pinterest')}
                    className="w-14 h-14 flex items-center justify-center rounded-xl transition-all duration-200 bg-[#E60023] hover:bg-[#ad021b] text-white hover:scale-105"
                  >
                    <Pin className="w-6 h-6" />
                  </button>
                  <span className="text-[11px] font-medium text-gray-700 dark:text-gray-300">Pinterest</span>
                </div>

                <div className="flex flex-col items-center gap-2">
                  <button
                    onClick={() => onShare('twitter')}
                    className="w-14 h-14 flex items-center justify-center rounded-xl transition-all duration-200 bg-black hover:bg-gray-800 text-white hover:scale-105"
                  >
                    <Twitter className="w-6 h-6" />
                  </button>
                  <span className="text-[11px] font-medium text-gray-700 dark:text-gray-300">Twitter</span>
                </div>

                <div className="flex flex-col items-center gap-2">
                  <button
                    onClick={() => onShare('instagram')}
                    className="w-14 h-14 flex items-center justify-center rounded-xl transition-all duration-200 bg-gradient-to-tr from-[#FF0069] via-[#E4405F] to-[#FD1D1D] hover:from-[#FF1A75] hover:via-[#E45E7A] hover:to-[#FD3434] text-white hover:scale-105"
                  >
                    <Instagram className="w-6 h-6" />
                  </button>
                  <span className="text-[11px] font-medium text-gray-700 dark:text-gray-300">Instagram</span>
                </div>

                <div className="flex flex-col items-center gap-2">
                  <button
                    onClick={() => onShare('whatsapp')}
                    className="w-14 h-14 flex items-center justify-center rounded-xl transition-all duration-200 bg-[#25D366] hover:bg-[#128C7E] text-white hover:scale-105"
                  >
                    <MessageCircle className="w-6 h-6" />
                  </button>
                  <span className="text-[11px] font-medium text-gray-700 dark:text-gray-300">WhatsApp</span>
                </div>

                <div className="flex flex-col items-center gap-2">
                  <button
                    onClick={() => onShare('telegram')}
                    className="w-14 h-14 flex items-center justify-center rounded-xl transition-all duration-200 bg-[#0088cc] hover:bg-[#006699] text-white hover:scale-105"
                  >
                    <Send className="w-6 h-6" />
                  </button>
                  <span className="text-[11px] font-medium text-gray-700 dark:text-gray-300">Telegram</span>
                </div>

                <div className="flex flex-col items-center gap-2">
                  <button
                    onClick={() => onShare('gmail')}
                    className="w-14 h-14 flex items-center justify-center rounded-xl transition-all duration-200 bg-[#EA4335] hover:bg-[#D33828] text-white hover:scale-105"
                  >
                    <Mail className="w-6 h-6" />
                  </button>
                  <span className="text-[11px] font-medium text-gray-700 dark:text-gray-300">Gmail</span>
                </div>

                {navigator.share && (
                  <div className="flex flex-col items-center gap-2">
                    <button
                      onClick={() => onShare('native')}
                      className="w-14 h-14 flex items-center justify-center rounded-xl transition-all duration-200 bg-gray-600 hover:bg-gray-700 text-white hover:scale-105"
                    >
                      <MoreHorizontal className="w-6 h-6" />
                    </button>
                    <span className="text-[11px] font-medium text-gray-700 dark:text-gray-300">More</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
});

interface HomePageProps {}

const MemoizedColorPalette = React.memo(ColorPalette);

// Example palettes'i component dışına taşıyalım
const examplePalettes = [
  {
    name: "Solar Eclipse",
    colors: [
      { hex: '#03012C'},
      { hex: '#2C0735'},
      { hex: '#7A1E3C'},
      { hex: '#DB4D6D'},
      { hex: '#FAA4BD'},
    ],
    tags: ['astronomical', 'eclipse viewing', 'sun moon', 'celestial event', 'space phenomenon']
  },
  {
    name: "Tropical Sunset",
    colors: [
      { hex: '#FFC371'},
      { hex: '#FF5F6D'},
      { hex: '#6A0572'},
      { hex: '#26081C'},
      { hex: '#0F0C29'},
    ],
    tags: ['tropical', 'vibrant', 'exotic', 'pink', 'purple']
  },
  {
    name: "Metropolitan Glow",
    colors: [
      { hex: '#FFC300'},
      { hex: '#FF5733'},
      { hex: '#C70039'},
      { hex: '#900C3F'},
      { hex: '#581845'},
    ],
    tags: ['city', 'gold', 'vibrant', 'evening', 'urban']
  },
  {
    name: "Generative Flow",
    colors: [
      { hex: '#FF3366'},
      { hex: '#33CCFF'},
      { hex: '#33FF99'},
      { hex: '#FFCC33'},
      { hex: '#FF99CC'},
    ],
    tags: ['processing', 'algorithmic art', 'code based', 'parametric', 'creative tech']
  },
  {
    name: "Neon Nights",
    colors: [
      { hex: '#FF1493'},
      { hex: '#00FFFF'},
      { hex: '#7B68EE'},
      { hex: '#8A2BE2'},
      { hex: '#32CD32'},
    ],
    tags: ['city', 'night', 'vibrant', 'party', 'neon']
  },
  {
    name: "Breaking Bad",
    colors: [
      { hex: '#556B2F'},
      { hex: '#FFD700'},
      { hex: '#708090'},
      { hex: '#2F4F4F'},
      { hex: '#000000'},
    ],
    tags: ['tv series', 'crime', 'drama', 'chemistry', 'desert']
  }
];

const HomePage: React.FC<HomePageProps> = () => {
  // State'leri optimize edelim
  const [state, setState] = useState({
    uploadedImage: null as string | null,
    copiedColor: null as string | null,
    extractedColors: [] as { name: string, hex: string }[],
    showShareMenu: false
  });

  const shareMenuRef = useRef<HTMLDivElement>(null);

  // ShareText'i memoize edelim
  const shareText = useMemo(() => {
    const colorText = state.extractedColors
      .slice(0, 4)
      .map(color => `${color.name} (${color.hex})`)
      .join('\n');
    
    return {
      title: 'Color Palette from Image',
      text: `🎨 Check out this color palette I extracted from an image:\n\nColors:\n${colorText}`,
      url: window.location.href,
      image: state.uploadedImage
    };
  }, [state.extractedColors, state.uploadedImage]);

  // Handler'ları useCallback ile optimize edelim
  const copyColor = useCallback((color: string) => {
    navigator.clipboard.writeText(color);
    setState(prev => ({ ...prev, copiedColor: color }));
    setTimeout(() => setState(prev => ({ ...prev, copiedColor: null })), 2000);
  }, []);

  const handleShare = useCallback(async (platform: string) => {
    const { title, text, url, image } = shareText;
    // ...existing share logic...
    setState(prev => ({ ...prev, showShareMenu: false }));
  }, [shareText]);

  const handleClickOutside = useCallback((event: MouseEvent) => {
    if (shareMenuRef.current && !shareMenuRef.current.contains(event.target as Node)) {
      setState(prev => ({ ...prev, showShareMenu: false }));
    }
  }, []);

  const handleDeleteImage = useCallback(() => {
    setState(prev => ({
      ...prev,
      uploadedImage: null,
      extractedColors: []
    }));
  }, []);

  // Image uploader callbacks
  const handleImageUpload = useCallback((imageUrl: string) => {
    setState(prev => ({ ...prev, uploadedImage: imageUrl }));
  }, []);

  const handleExtractColors = useCallback((colors: Array<{ name: string; hex: string }>) => {
    setState(prev => ({ ...prev, extractedColors: colors }));
  }, []);

  // Click outside effect
  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [handleClickOutside]);

  // Memoize ShareMenu component
  const shareMenuComponent = useMemo(() => (
    <ShareMenu 
      isOpen={state.showShareMenu}
      onClose={() => setState(prev => ({ ...prev, showShareMenu: !prev.showShareMenu }))}
      onShare={handleShare}
      shareMenuRef={shareMenuRef}
    />
  ), [state.showShareMenu, handleShare]);

  // Memoize example palettes grid
  const examplePalettesGrid = useMemo(() => (
    <div className="mt-8 sm:mt-12 lg:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 max-w-7xl mx-auto px-2 sm:px-4">
      {examplePalettes.map((palette, index) => (
        <div 
          key={index}
          className="relative bg-white dark:bg-gray-800/90 rounded-lg sm:rounded-xl shadow hover:shadow-lg transition-shadow duration-200 overflow-hidden border border-gray-200 dark:border-gray-700"
        >
          <div className="p-4 sm:p-6">
            {/* Removed Link component and replaced with simple div */}
            <div className="mb-4">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                {palette.name}
              </h3>
            </div>

            <div className="grid grid-cols-5 gap-2 sm:gap-3 mb-3 sm:mb-4">
              {palette.colors.map((color, colorIndex) => (
                <button
                  key={colorIndex}
                  onClick={() => copyColor(color.hex)}
                  className="relative aspect-square rounded-lg shadow-md overflow-hidden group focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 dark:focus:ring-offset-gray-800 border-2 border-gray-200 dark:border-gray-700"
                >
                  <div 
                    className="absolute inset-0"
                    style={{ backgroundColor: color.hex }}
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-200 flex items-center justify-center">
                    {state.copiedColor === color.hex ? (
                      <Check className="w-5 h-5 text-white drop-shadow-lg" />
                    ) : (
                      <Copy className="w-5 h-5 text-white opacity-0 group-hover:opacity-100 drop-shadow-lg" />
                    )}
                  </div>
                </button>
              ))}
            </div>

            <div className="flex flex-wrap gap-1.5 sm:gap-2">
              {palette.tags.map((tag, tagIndex) => (
                <span
                  key={tagIndex}
                  className="px-2 sm:px-3 py-1 text-xs sm:text-sm bg-gray-100 dark:bg-gray-700/50 text-gray-600 dark:text-gray-400 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  ), [copyColor, state.copiedColor]);

  return (
    <>
      <Helmet>
        <title>Color Palette Generator - Extract Colors from Images | ColorGenerator</title>
        <meta name="description" content="Transform your images into beautiful color palettes. Free online tool for designers and artists to extract colors from images and create custom color schemes." />
        <meta name="keywords" content="color palette generator, color extraction, image colors, design tools, color schemes, color combinations" />
        <link rel="canonical" href="https://axescolor.com/" />
        
        {/* Open Graph / Social Media Meta Tags */}
        <meta property="og:title" content="Color Palette Generator - Extract Colors from Images" />
        <meta property="og:description" content="Transform your images into beautiful color palettes. Extract colors from any image instantly." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://axescolor.com/" />
        {state.uploadedImage && <meta property="og:image" content={state.uploadedImage} />}
        
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Color Palette Generator - Extract Colors from Images" />
        <meta name="twitter:description" content="Transform your images into beautiful color palettes. Extract colors from any image instantly." />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        <meta name="google-adsense-account" content="ca-pub-9867578754430987" />
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9867578754430987" crossorigin="anonymous"></script>
      </Helmet>

      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
        {/* Top Decorative Wave */}
        <div className="absolute top-0 left-0 right-0 h-24 sm:h-32 md:h-48 overflow-hidden z-0">
          <svg className="absolute bottom-0 w-full h-32 sm:h-48" viewBox="0 0 1440 320" preserveAspectRatio="none">
            <path
              fill="rgba(129, 140, 248, 0.1)"
              d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,106.7C960,117,1056,139,1152,138.7C1248,139,1344,117,1392,106.7L1440,96L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
            ></path>
          </svg>
        </div>

        <main className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-16 py-4 sm:py-8 lg:py-16 relative z-10" role="main">
          <h2 className="text-2xl sm:text-3xl font-medium text-center bg-gradient-to-r from-rose-500 to-blue-800 hover:from-rose-400 hover:to-blue-700 dark:from-rose-300 dark:to-blue-400 bg-clip-text text-transparent transition-all duration-300 mb-8">
            Discover Your Perfect Color Palette with AI-Powered Image Analysis
          </h2>
          
          <section aria-label="Image Upload and Color Extraction">
            <div className="flex flex-col lg:flex-row gap-4 sm:gap-6 lg:gap-8 items-start">
              {/* Left side - Image Display */}
              <article className="w-full lg:w-1/2">
                <div className="h-[200px] xs:h-[250px] sm:h-[300px] lg:h-[400px] w-full bg-gray-100 dark:bg-gray-800 rounded-xl sm:rounded-2xl shadow-lg overflow-hidden relative group">
                  {state.uploadedImage ? (
                    <div className="relative w-full h-full">
                      <img 
                        src={state.uploadedImage} 
                        alt="Uploaded" 
                        className="w-full h-full object-contain"
                      />
                      <div className="absolute inset-0 bg-black/0 hover:bg-black/10 transition-colors duration-300" />
                      
                      {/* Delete Button - Opacity değiştirildi */}
                      <button
                        onClick={handleDeleteImage}
                        className="absolute top-3 right-3 p-2 rounded-full bg-white/80 dark:bg-gray-800/80 hover:bg-white dark:hover:bg-gray-800 shadow-lg backdrop-blur-sm transition-all duration-300 hover:scale-110"
                        title="Remove image"
                      >
                        <X className="w-5 h-5 text-gray-600 dark:text-gray-300" />
                      </button>

                      {/* Share Button - Opacity değiştirildi */}
                      <div className="absolute bottom-4 right-4 transition-opacity duration-300">
                        {shareMenuComponent}
                      </div>
                    </div>
                  ) : (
                    <div className="h-full flex items-center justify-center p-6">
                      <div className="w-full h-full border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-xl flex flex-col items-center justify-center">
                        <div className="text-center p-6 max-w-sm">
                          <p className="text-base font-medium text-gray-600 dark:text-gray-300 mb-2">
                            Upload an image to generate a color palette
                          </p>
                          <p className="text-sm text-gray-500 dark:text-gray-400">
                            Use the uploader on the right
                          </p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Existing color palette display */}
                {state.extractedColors.length > 0 && (
                  <div className="mt-3 sm:mt-6">
                    <div className="hidden sm:block">
                      <MemoizedColorPalette 
                        colors={state.extractedColors.slice(0, 4)} 
                        gridCols={2}
                        smGridCols={4}
                        mdGridCols={4}
                        showName={true} 
                        stretch={false}
                      />
                    </div>

                    <div className="block sm:hidden">
                      <div className="grid grid-cols-2 gap-2">
                        {state.extractedColors.slice(0, 4).map((color, index) => (
                          <div 
                            key={index} 
                            className="flex items-center gap-2 p-2 rounded-lg border border-gray-200 dark:border-gray-700 relative group"
                            onClick={() => copyColor(color.hex)}
                          >
                            <div 
                              className="w-16 h-16 rounded-lg border border-gray-300 dark:border-gray-600 shrink-0 cursor-pointer transition-transform active:scale-95 relative"
                              style={{ backgroundColor: color.hex }}
                            >
                              {state.copiedColor === color.hex && (
                                <div className="absolute inset-0 flex items-center justify-center bg-black/30 rounded-lg">
                                  <Check className="w-6 h-6 text-white" />
                                </div>
                              )}
                            </div>
                            <div className="min-w-0">
                              <p className="text-xs font-medium text-gray-900 dark:text-white truncate">
                                {color.name}
                              </p>
                              <p className="text-xs text-gray-500 dark:text-gray-400">
                                {color.hex}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </article>

              {/* Right side - Upload Section */}
              <aside className="w-full lg:w-1/2 mt-4 lg:mt-0">
                <div className="flex flex-col h-full">
                  <ImageUploader onUpload={handleImageUpload} onExtractColors={handleExtractColors} />
                  <p className="mt-6 text-sm sm:text-base text-gray-600 dark:text-gray-300 text-center leading-relaxed">
                    Transform your favorite images into stunning color palettes in seconds. 
                    Perfect for designers, artists, and color enthusiasts.
                  </p>
                </div>
              </aside>
            </div>
          </section>

          <section aria-label="Example Palettes" className="mt-8 sm:mt-12 lg:mt-20">
            <h2 className="sr-only">Example Color Palettes</h2>
            
            {/* New minimal divider */}
            <div className="w-full max-w-sm mx-auto h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-600 to-transparent opacity-75 mb-8" />

            {examplePalettesGrid}

            <div className="mt-6 sm:mt-8 text-center">
              <Link 
                to="/palette-generator" 
                className="inline-flex items-center px-4 sm:px-6 py-2.5 sm:py-3 text-sm font-medium text-white bg-gradient-to-r from-purple-600 to-indigo-600 rounded-lg hover:from-purple-700 hover:to-indigo-700 transition-all duration-300 shadow-lg hover:shadow-purple-500/25 hover:scale-105 w-full sm:w-auto justify-center"
              >
                <Palette className="w-5 h-5 mr-2" />
                Explore More Color Combinations
                <ChevronRight className="ml-2 w-4 h-4" />
              </Link>
            </div>

            {/* Tools Section */}
            <div className="mt-20 max-w-7xl mx-auto px-2 sm:px-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Color Harmony Wheel */}
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl blur opacity-25 group-hover:opacity-40 transition-opacity duration-300" />
                  <div className="relative h-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col">
                    <div>
                      <div className="w-12 h-12 mb-4 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center text-white">
                        <Compass className="w-6 h-6" />
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Color Harmony Wheel</h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        Create custom color palettes using our interactive color wheel and advanced harmony tools.
                      </p>
                    </div>
                    <div className="mt-auto pt-6">
                      <Link 
                        to="/explore" 
                        className="inline-flex items-center px-4 py-2 text-sm font-medium text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-900/30 rounded-lg group-hover:bg-indigo-100 dark:group-hover:bg-indigo-900/50 transition-colors"
                      >
                        Open Color Wheel
                        <ChevronRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Screen Color Picker */}
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-teal-500 to-emerald-500 rounded-2xl blur opacity-25 group-hover:opacity-40 transition-opacity duration-300" />
                  <div className="relative h-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col">
                    <div>
                      <div className="w-12 h-12 mb-4 rounded-xl bg-gradient-to-br from-teal-500 to-emerald-500 flex items-center justify-center text-white">
                        <Droplet className="w-6 h-6" />
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Screen Color Picker</h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        Pick colors from anywhere on your screen with our advanced color sampling tool.
                      </p>
                    </div>
                    <div className="mt-auto pt-6">
                      <Link 
                        to="/color-picker" 
                        className="inline-flex items-center px-4 py-2 text-sm font-medium text-teal-600 dark:text-teal-400 bg-teal-50 dark:bg-teal-900/30 rounded-lg group-hover:bg-teal-100 dark:group-hover:bg-teal-900/50 transition-colors"
                      >
                        Launch Picker
                        <ChevronRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Pattern Generator */}
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-rose-500 to-pink-500 rounded-2xl blur opacity-25 group-hover:opacity-40 transition-opacity duration-300" />
                  <div className="relative h-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col">
                    <div>
                      <div className="w-12 h-12 mb-4 rounded-xl bg-gradient-to-br from-rose-500 to-pink-500 flex items-center justify-center text-white">
                        <Grid className="w-6 h-6" />
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Pattern Creator</h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        Transform your color palettes into beautiful repeating patterns and designs.
                      </p>
                    </div>
                    <div className="mt-auto pt-6">
                      <Link 
                        to="/pattern-maker" 
                        className="inline-flex items-center px-4 py-2 text-sm font-medium text-rose-600 dark:text-rose-400 bg-rose-50 dark:bg-rose-900/30 rounded-lg group-hover:bg-rose-100 dark:group-hover:bg-rose-900/50 transition-colors"
                      >
                        Create Patterns
                        <ChevronRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
};

// Component'i memoize edelim
export default React.memo(HomePage);