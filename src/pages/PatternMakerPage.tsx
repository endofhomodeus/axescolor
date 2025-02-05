import React, { useState, useCallback, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Download, X } from 'lucide-react';

// Lazy loading kaldırıldı, normal import kullanılacak
import { ImageUploader, PatternSelector, ImageEditor, PatternPreview } from '../components/PatternMaker';

const ComponentsPage: React.FC = () => {
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [selectedPattern, setSelectedPattern] = useState('grid');
  const [selection, setSelection] = useState<{ x: number; y: number; width: number; height: number } | null>(null);
  const [sourceCanvas, setSourceCanvas] = useState<HTMLCanvasElement | null>(null);
  const [isDownloading, setIsDownloading] = useState<string | null>(null);

  // SEO için sayfa başlığı ve açıklaması
  const pageTitle = "Pattern Maker - Create Beautiful Image Patterns Online";
  const pageDescription = "Transform your images into stunning patterns with our free online pattern generator. Create seamless patterns for your designs easily.";

  const handleImageUpload = useCallback((file: File) => {
    const url = URL.createObjectURL(file);
    setImageUrl(url);
    setSelection(null);
  }, []);

  const handleRemoveImage = () => {
    setImageUrl(null);
    setSelection(null);
    setSourceCanvas(null);
  };

  // Optimize download handling
  const handleDownload = useCallback(async (format: 'png' | 'jpg' | 'svg' | 'pdf') => {
    setIsDownloading(format);
    const sourceCanvas = document.querySelector('#patternCanvas') as HTMLCanvasElement;
    if (!sourceCanvas) return;

    // Çözünürlüğü 4x'ten 2x'e düşür
    const highResCanvas = document.createElement('canvas');
    const scale = 2; // 4x yerine 2x çözünürlük
    highResCanvas.width = sourceCanvas.width * scale;
    highResCanvas.height = sourceCanvas.height * scale;

    const ctx = highResCanvas.getContext('2d', {
      alpha: true,
      willReadFrequently: true
    });
    
    if (!ctx) return;
    
    ctx.imageSmoothingEnabled = true;
    ctx.imageSmoothingQuality = 'medium'; // high yerine medium kalite
    ctx.scale(scale, scale);
    ctx.drawImage(sourceCanvas, 0, 0);

    try {
      const link = document.createElement('a');
      
      switch (format) {
        case 'pdf':
          const { default: JsPDF } = await import('jspdf');
          const pdf = new JsPDF({
            orientation: 'landscape',
            unit: 'px',
            format: [highResCanvas.width, highResCanvas.height]
          });
          
          const imageData = highResCanvas.toDataURL('image/jpeg', 0.85); // PDF için JPEG kalitesi düşürüldü
          pdf.addImage(imageData, 'JPEG', 0, 0, highResCanvas.width, highResCanvas.height);
          pdf.save(`pattern-${selectedPattern}.pdf`);
          break;
        
        case 'jpg':
          const jpgUrl = highResCanvas.toDataURL('image/jpeg', 0.85); // JPEG kalitesi düşürüldü (0.95 -> 0.85)
          link.href = jpgUrl;
          link.download = `pattern-${selectedPattern}.jpg`;
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
          break;

        case 'svg':
          const svgString = `
            <svg width="${highResCanvas.width}" height="${highResCanvas.height}" xmlns="http://www.w3.org/2000/svg">
              <image width="100%" height="100%" href="${highResCanvas.toDataURL('image/jpeg', 0.85)}" />
            </svg>
          `.trim();
          const blob = new Blob([svgString], { type: 'image/svg+xml' });
          const url = URL.createObjectURL(blob);
          link.href = url;
          link.download = `pattern-${selectedPattern}.svg`;
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
          URL.revokeObjectURL(url);
          break;

        default: // PNG
          const pngUrl = highResCanvas.toDataURL('image/png', 0.85); // PNG kalitesi düşürüldü
          link.href = pngUrl;
          link.download = `pattern-${selectedPattern}.png`;
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
      }
    } catch (error) {
      console.error('Download error:', error);
    } finally {
      setIsDownloading(null);
      // Belleği temizle
      ctx.clearRect(0, 0, highResCanvas.width, highResCanvas.height);
    }
  }, [selectedPattern]);

  // Başlıklar için ortak gradient sınıfı
  const headerGradientClass = "bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500";

  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta name="keywords" content="pattern maker, image patterns, seamless patterns, design tools, pattern generator" />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
        <link rel="canonical" href="/pattern-maker" />
        <meta name="google-adsense-account" content="ca-pub-9867578754430987" />
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9867578754430987" crossorigin="anonymous"></script>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebApplication",
            "name": pageTitle,
            "description": pageDescription,
            "applicationCategory": "DesignApplication",
            "operatingSystem": "Web Browser",
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "USD"
            }
          })}
        </script>
      </Helmet>

      <main role="main" className="min-h-screen w-full px-4 sm:px-6 py-4 sm:py-8">
        <article className="max-w-7xl mx-auto">
          {/* Ana Başlık */}
          <header className="text-center mb-6 sm:mb-8">
            <h1 className={`text-3xl sm:text-4xl md:text-5xl font-extrabold mb-3 sm:mb-4 ${headerGradientClass}`}>
              Pattern Maker
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto px-4">
              Transform your images into stunning patterns
            </p>
          </header>

          {/* Rest of the existing layout wrapped in semantic tags */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
            <section aria-label="Pattern Preview" className="space-y-4 sm:space-y-6">
              <div className="bg-white dark:bg-gray-800 rounded-xl sm:rounded-2xl p-4 sm:p-6 
                shadow-[0_4px_20px_-4px_rgba(0,0,0,0.1)] dark:shadow-[0_4px_20px_-4px_rgba(0,0,0,0.2)]
                border-2 border-gray-200 dark:border-gray-600"
              >
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-3">
                  <h2 className={`text-xl sm:text-2xl font-bold ${headerGradientClass} mb-3 sm:mb-0`}>
                    Pattern Preview
                  </h2>
                  {imageUrl && selection && (
                    <div className="grid grid-cols-4 gap-1.5 sm:flex sm:gap-2">
                      {['PNG', 'JPG', 'SVG', 'PDF'].map((format) => (
                        <button
                          key={format}
                          onClick={() => handleDownload(format.toLowerCase() as 'png' | 'jpg' | 'svg' | 'pdf')}
                          disabled={!!isDownloading}
                          className="px-2 py-1.5 rounded-md bg-gradient-to-r from-purple-600 to-blue-500 
                            hover:from-purple-700 hover:to-blue-600 active:from-purple-800 active:to-blue-700 
                            disabled:from-gray-400 disabled:to-gray-500
                            text-white font-medium flex items-center justify-center gap-1 
                            shadow-sm hover:shadow transition-all duration-200 touch-manipulation 
                            text-xs min-h-[36px] sm:min-h-[32px]"
                        >
                          {isDownloading?.toUpperCase() === format ? (
                            <div className="w-3 h-3 border-[1.5px] border-white border-t-transparent rounded-full animate-spin"></div>
                          ) : (
                            <Download className="w-3 h-3" />
                          )}
                          <span>{format}</span>
                        </button>
                      ))}
                    </div>
                  )}
                </div>
                <div className="aspect-square w-full rounded-lg sm:rounded-xl overflow-hidden">
                  {imageUrl && selection && (
                    <PatternPreview
                      sourceCanvas={sourceCanvas}
                      selection={selection}
                      patternId={selectedPattern}
                    />
                  )}
                </div>
              </div>
            </section>

            <section 
              aria-label="Image Upload Section" 
              className="bg-white dark:bg-gray-800 rounded-xl sm:rounded-2xl p-4 sm:p-6 
                shadow-[0_4px_20px_-4px_rgba(0,0,0,0.1)] dark:shadow-[0_4px_20px_-4px_rgba(0,0,0,0.2)]
                border-2 border-gray-200 dark:border-gray-600"
            >
              <h2 className={`text-xl sm:text-2xl font-bold ${headerGradientClass} mb-3 sm:mb-4`}>
                Source Image
              </h2>
              
              <div className="aspect-square w-full relative rounded-lg sm:rounded-xl overflow-hidden">
                {!imageUrl ? (
                  <ImageUploader onImageUpload={handleImageUpload} />
                ) : (
                  <>
                    <button
                      onClick={handleRemoveImage}
                      className="absolute top-2 right-2 z-10 p-2.5 sm:p-2 bg-red-500 hover:bg-red-600 text-white rounded-full transition-colors duration-200 shadow-lg touch-manipulation"
                      title="Remove image"
                    >
                      <X className="w-5 h-5 sm:w-4 sm:h-4" />
                    </button>
                    <div className="w-full h-full touch-none">
                      <ImageEditor
                        imageUrl={imageUrl}
                        onSelectionChange={setSelection}
                        onCanvasReady={setSourceCanvas}
                      />
                    </div>
                  </>
                )}
              </div>
            </section>

            <section 
              aria-label="Pattern Selection" 
              className="lg:col-span-2 bg-white dark:bg-gray-800 rounded-xl sm:rounded-2xl p-4 sm:p-6 
                shadow-[0_4px_20px_-4px_rgba(0,0,0,0.1)] dark:shadow-[0_4px_20px_-4px_rgba(0,0,0,0.2)]
                border-2 border-gray-200 dark:border-gray-600 overflow-x-auto"
            >
              <h2 className={`text-xl sm:text-2xl font-bold ${headerGradientClass} mb-3 sm:mb-4 sticky left-0`}>
                Pattern Selection
              </h2>
              <div className="min-w-full overflow-x-auto pb-2">
                <PatternSelector
                  selectedPattern={selectedPattern}
                  onPatternSelect={setSelectedPattern}
                />
              </div>
            </section>
          </div>
        </article>
      </main>
    </>
  );
};

export default ComponentsPage;
