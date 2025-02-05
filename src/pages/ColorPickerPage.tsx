import React, { useState, useEffect, useRef, lazy, Suspense } from 'react';
import { Helmet } from 'react-helmet-async';
import { Crosshair, History, Trash2, Star, Upload, Image, X } from 'lucide-react';
import tinycolor from 'tinycolor2';

// Lazy load EyeDropper component
const EyeDropper = lazy(() => import('../components/EyeDropper'));

// Memoize color harmony calculations
const memoizedGetColorHarmony = (() => {
  const cache = new Map();
  return (color: string) => {
    if (cache.has(color)) {
      return cache.get(color);
    }
    const tc = tinycolor(color);
    const harmony = {
      analogous: tc.analogous(3).map(c => c.toHexString()),
      complementary: tc.complement().toHexString(),
      triadic: tc.triad().map(c => c.toHexString()),
      tetrad: tc.tetrad().map(c => c.toHexString()),
    };
    cache.set(color, harmony);
    return harmony;
  };
})();

const ColorPickerPage: React.FC = () => {
  const [color, setColor] = useState<string | null>(null);
  const [colorHistory, setColorHistory] = useState<string[]>([]);
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [showTip, setShowTip] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const handleColorSelect = React.useCallback((selectedColor: string) => {
    setColor(selectedColor);
    setColorHistory(prev => {
      if (prev.includes(selectedColor)) return prev;
      return [selectedColor, ...prev].slice(0, 20);
    });
  }, []);

  const handleHistoryColorSelect = (selectedColor: string) => {
    setColor(selectedColor);
    setColorHistory(prev => {
      const filtered = prev.filter(c => c !== selectedColor);
      return [selectedColor, ...filtered];
    });
  };

  const clearHistory = () => {
    setColorHistory([]);
    setColor(null);
  };

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    const file = event.target.files?.[0];
    if (!file) return;
  
    setIsLoading(true);
  
    if (file.size > 10 * 1024 * 1024) {
      alert('File size is too large. Please select an image under 10MB.');
      setIsLoading(false);
      return;
    }
  
    const reader = new FileReader();
    reader.onload = (e) => {
      if (e.target?.result) {
        setUploadedImage(e.target.result as string);
        setIsLoading(false);
      }
    };
  
    reader.onerror = () => {
      alert('Error reading file. Please try again.');
      setIsLoading(false);
    };
  
    reader.readAsDataURL(file);
  };

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    event.stopPropagation();
    setIsDragging(true);
  };

  const handleDragLeave = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    event.stopPropagation();
    setIsDragging(false);
  };

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    event.stopPropagation();
    
    const file = event.dataTransfer.files[0];
    if (file && file.type.startsWith('image/')) {
      setIsLoading(true);
      const reader = new FileReader();
      reader.onload = (e) => {
        if (e.target?.result) {
          setUploadedImage(e.target.result as string);
          setIsLoading(false);
        }
      };
      reader.readAsDataURL(file);
    }
    setIsDragging(false);
  };

  const getColorHarmony = (color: string) => {
    return memoizedGetColorHarmony(color);
  };

  const isMobile = () => {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  };

  useEffect(() => {
    if (isMobile()) {
      setShowTip(false);
    }
  }, []);

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key.toLowerCase() === 'p') {
        startColorPicker();
        setShowTip(false);
      }
    };

    if (!isMobile()) {
      window.addEventListener('keydown', handleKeyPress);
      return () => window.removeEventListener('keydown', handleKeyPress);
    }
  }, []);

  const eyeDropperRef = useRef<any>(null);

  const startColorPicker = () => {
    if (eyeDropperRef.current) {
      eyeDropperRef.current.startPicking();
      setShowTip(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>Online Color Picker Tool - Pick Colors from Screen | ColorGenerator</title>
        <meta name="description" content="Free online color picker tool. Easily pick colors from your screen, generate color harmonies, and explore color combinations. Perfect for designers and developers." />
        <meta name="keywords" content="color picker, eyedropper tool, color palette generator, screen color picker, web colors, design tools" />
        <link rel="preload" href="/color-picker-preview.jpg" as="image" />
        <meta property="og:title" content="Online Color Picker Tool - Pick Colors from Screen" />
        <meta property="og:description" content="Free online color picker tool. Easily pick colors from your screen and generate beautiful color harmonies." />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/color-picker-preview.jpg" />
        <link rel="canonical" href="https://yourdomain.com/color-picker" />
        <meta name="robots" content="index, follow" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebApplication",
            "name": "Color Picker Tool",
            "description": "Online color picker and palette generator tool",
            "applicationCategory": "DesignApplication",
            "operatingSystem": "Any",
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "USD"
            }
          })}
        </script>
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9867578754430987" crossorigin="anonymous"></script>
      </Helmet>

      <main className="min-h-screen p-3 sm:p-4 md:p-8 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
        {showTip && !isMobile() && (
          <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 bg-white/90 dark:bg-gray-800/90 backdrop-blur-md px-6 py-3 rounded-full shadow-lg border border-gray-200/50 dark:border-gray-700/50 z-50">
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-600 dark:text-gray-300 animate-pulse">
                Tip: Press 'P' to quickly activate color picker
              </span>
              <button 
                onClick={() => setShowTip(false)}
                className="text-gray-400 hover:text-gray-600 dark:text-gray-500 dark:hover:text-gray-300"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        <div className="max-w-7xl mx-auto">
          <header className="text-center mb-8 sm:mb-12 space-y-3 sm:space-y-4">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#FF1F1F] via-[#FF6B1F] to-[#FFC51F] animate-gradient-x pb-2">
              Capture Colors from Your Screen
            </h1>
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed px-4">
              Pick any color instantly with pixel-perfect accuracy — Your digital color sampling companion
            </p>
          </header>

          <div className="grid grid-cols-1 gap-4 sm:gap-6 lg:grid-cols-12 lg:gap-8">
            <div className="lg:col-span-5 min-h-[300px] sm:min-h-[400px]">
              <div className={`
                absolute inset-0 bg-gradient-to-r from-pink-500/10 via-purple-500/10 to-indigo-500/10 rounded-2xl
                transform transition-all duration-500
                ${isDragging ? 'scale-105 opacity-100' : 'scale-100 opacity-0'}
                group-hover:opacity-100
              `} />
              {!uploadedImage ? (
                <div 
                  className="w-full h-full flex flex-col items-center justify-center gap-4 p-6 border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-xl hover:border-purple-400 dark:hover:border-purple-500 transition-colors"
                  onDragOver={handleDragOver}
                  onDrop={handleDrop}
                  onDragLeave={handleDragLeave}
                >
                  {isLoading ? (
                    <div className="flex flex-col items-center gap-3">
                      <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-purple-600"></div>
                      <p className="text-sm text-gray-600 dark:text-gray-300">Loading image...</p>
                    </div>
                  ) : (
                    <label className="relative cursor-pointer group">
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleImageUpload}
                        className="hidden"
                      />
                      <div className="flex flex-col items-center gap-3">
                        <div className="p-4 rounded-full bg-purple-100 dark:bg-purple-900/30">
                          <Image className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                        </div>
                        <div className="text-center">
                          <p className="text-sm font-medium text-gray-700 dark:text-gray-300">
                            Upload an image to pick colors from
                          </p>
                          <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                            Click or drag and drop
                          </p>
                        </div>
                      </div>
                    </label>
                  )}
                </div>
              ) : (
                <div className="w-full h-full relative rounded-xl overflow-hidden border border-purple-200/50 dark:border-purple-800/50">
                  <img
                    src={uploadedImage}
                    alt="Uploaded"
                    className="absolute inset-0 w-full h-full object-cover bg-gray-50/50 dark:bg-gray-900/30"
                  />
                  <div className="absolute top-2 right-2 flex gap-2">
                    <button
                      onClick={() => setUploadedImage(null)}
                      className="p-2 rounded-lg bg-white/90 dark:bg-gray-800/90 hover:bg-white dark:hover:bg-gray-700 transition-colors shadow-lg"
                    >
                      <X className="w-4 h-4 text-gray-600 dark:text-gray-300" />
                    </button>
                  </div>
                </div>
              )}
            </div>

            <div className="lg:col-span-4 bg-white/95 dark:bg-gray-800/95 backdrop-blur-xl p-8 rounded-2xl
                         shadow-[0_4px_20px_-4px_rgba(0,0,0,0.1)] dark:shadow-[0_4px_20px_-4px_rgba(0,0,0,0.3)]
                         border-[1.5px] border-gray-200 dark:border-gray-700
                         hover:shadow-[0_8px_30px_-4px_rgba(0,0,0,0.1)] dark:hover:shadow-[0_8px_30px_-4px_rgba(0,0,0,0.3)]
                         transition-all duration-300 h-full">
              <Suspense fallback={
                <div className="animate-pulse bg-gray-200 dark:bg-gray-700 rounded-xl h-[400px]" />
              }>
                <EyeDropper 
                  ref={eyeDropperRef}
                  onColorSelect={handleColorSelect}
                  initialColor={color || undefined}
                />
              </Suspense>
            </div>

            <div className="lg:col-span-3">
              {color ? (
                <div className="lg:col-span-3 bg-white/95 dark:bg-gray-800/95 backdrop-blur-xl p-8 rounded-2xl shadow-xl border-2 border-gray-200 dark:border-gray-700">
                  <div className="flex items-center gap-2 mb-6">
                    <Star className="w-5 h-5 text-purple-500" />
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Color Harmony</h3>
                  </div>
                  <div className="space-y-5">
                    {Object.entries(getColorHarmony(color)).map(([type, colors]) => (
                      <div key={type} className="space-y-2.5">
                        <h4 className="text-sm font-medium capitalize text-gray-800 dark:text-gray-100">
                          {type}
                        </h4>
                        <div className="flex gap-3">
                          {Array.isArray(colors) ? colors.map((c, i) => (
                            <div
                              key={i}
                              className="w-12 h-12 rounded-xl cursor-pointer
                                   shadow-[0_4px_12px_-2px_rgba(0,0,0,0.2)] dark:shadow-[0_4px_12px_-2px_rgba(0,0,0,0.4)]
                                   ring-2 ring-white dark:ring-gray-600
                                   border-2 border-gray-200 dark:border-gray-700
                                   hover:scale-110 hover:shadow-[0_8px_20px_-4px_rgba(0,0,0,0.2)] dark:hover:shadow-[0_8px_20px_-4px_rgba(0,0,0,0.5)]
                                   hover:border-gray-300 dark:hover:border-gray-500
                                   transition-all duration-200"
                              style={{ backgroundColor: c }}
                              onClick={() => handleColorSelect(c)}
                            />
                          )) : (
                            <div
                              className="w-12 h-12 rounded-xl cursor-pointer
                                   shadow-[0_4px_12px_-2px_rgba(0,0,0,0.2)] dark:shadow-[0_4px_12px_-2px_rgba(0,0,0,0.4)]
                                   ring-2 ring-white dark:ring-gray-600
                                   border-2 border-gray-200 dark:border-gray-700
                                   hover:scale-110 hover:shadow-[0_8px_20px_-4px_rgba(0,0,0,0.2)] dark:hover:shadow-[0_8px_20px_-4px_rgba(0,0,0,0.5)]
                                   hover:border-gray-300 dark:hover:border-gray-500
                                   transition-all duration-200"
                              style={{ backgroundColor: colors }}
                              onClick={() => handleColorSelect(colors)}
                            />
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="lg:col-span-3 bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl p-6 rounded-2xl shadow-2xl border border-white/50 dark:border-gray-700/50">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6 bg-gradient-to-r from-purple-100 to-blue-100 dark:from-purple-900/50 dark:to-blue-900/50 p-3 rounded-xl inline-block">
                    How to Use
                  </h3>
                  <div className="space-y-4">
                    {[
                      {
                        step: 1,
                        title: "Click the Pick Color button",
                        description: "Activate the color picker tool",
                        gradient: "from-purple-100/80 to-purple-200/80",
                        darkGradient: "dark:from-purple-900/40 dark:to-purple-800/40",
                        borderGradient: "from-purple-200 to-purple-300",
                        darkBorderGradient: "dark:from-purple-700 dark:to-purple-600"
                      },
                      {
                        step: 2,
                        title: "Move cursor to any color",
                        description: "Hover over the color you want to capture",
                        gradient: "from-blue-100/80 to-blue-200/80",
                        darkGradient: "dark:from-blue-900/40 dark:to-blue-800/40",
                        borderGradient: "from-blue-200 to-blue-300",
                        darkBorderGradient: "dark:from-blue-700 dark:to-blue-600"
                      },
                      {
                        step: 3,
                        title: "Click to select",
                        description: "Click to capture the color value",
                        gradient: "from-violet-100/80 to-violet-200/80",
                        darkGradient: "dark:from-violet-900/40 dark:to-violet-800/40",
                        borderGradient: "from-violet-200 to-violet-300",
                        darkBorderGradient: "dark:from-violet-700 dark:to-violet-600"
                      }
                    ].map(({ step, title, description, gradient, darkGradient }) => (
                      <div 
                        key={step}
                        className={`p-4 rounded-xl bg-gradient-to-r ${gradient} ${darkGradient} {/* p-6 -> p-4 */}
                               border border-[#00000015] dark:border-[#ffffff15]
                               transform hover:scale-[1.02] transition-all duration-300
                               shadow-lg hover:shadow-xl`}
                      >
                        <div className="flex items-start gap-3">
                          <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-white dark:bg-gray-800 text-purple-600 dark:text-purple-400 flex items-center justify-center font-bold text-base shadow-md">
                            {step}
                          </div>
                          <div>
                            <h4 className="font-semibold text-gray-900 dark:text-white text-base">{title}</h4>
                            <p className="text-gray-700 dark:text-gray-300 mt-1 text-sm">
                              {description}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          <section aria-label="Color History" className="mt-4 sm:mt-6 lg:mt-8 bg-white/95 dark:bg-gray-800/95 backdrop-blur-xl p-4 sm:p-6 lg:p-8 rounded-2xl shadow-xl border-2 border-gray-200 dark:border-gray-700 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-pink-500/5 via-purple-500/5 to-indigo-500/5" />
            
            <div className="relative">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2">
                  <History className="w-5 h-5 text-purple-500" />
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Color History</h3>
                </div>
                {colorHistory.length > 0 && (
                  <button
                    onClick={clearHistory}
                    className="p-2 hover:bg-red-50 dark:hover:bg-red-900/20 text-gray-500 hover:text-red-500 rounded-lg transition-all duration-200"
                    title="Clear color history"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                )}
              </div>
              
              <div className="grid grid-cols-6 sm:grid-cols-8 md:grid-cols-10 lg:grid-cols-12 gap-2 sm:gap-3">
                {colorHistory.map((historyColor, index) => (
                  <button
                    key={index}
                    onClick={() => handleColorSelect(historyColor)}
                    className={`aspect-square w-full rounded-lg cursor-pointer
                           shadow-[0_4px_12px_-2px_rgba(0,0,0,0.2)] dark:shadow-[0_4px_12px_-2px_rgba(0,0,0,0.4)]
                           ring-2 ring-white dark:ring-gray-600
                           border-2 ${color === historyColor ? 'border-purple-500 dark:border-purple-400' : 'border-gray-200 dark:border-gray-700'}
                           hover:scale-110 hover:shadow-[0_8px_20px_-4px_rgba(0,0,0,0.2)] 
                           dark:hover:shadow-[0_8px_20px_-4px_rgba(0,0,0,0.5)]
                           hover:border-gray-300 dark:hover:border-gray-500
                           hover:z-30
                           transform hover:-translate-y-1
                           transition-all duration-200`}
                    style={{ backgroundColor: historyColor }}
                    title={historyColor}
                  >
                    <span className="sr-only">Select color: {historyColor}</span>
                  </button>
                ))}
              </div>
              
              {colorHistory.length === 0 && (
                <div className="text-center py-8 text-gray-500 dark:text-gray-400">
                  <p>No colors in history yet</p>
                  <p className="text-sm mt-1">Pick some colors to see them here</p>
                </div>
              )}
            </div>
          </section>
        </div>
      </main>
    </>
  );
};

export default React.memo(ColorPickerPage);
