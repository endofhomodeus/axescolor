import React, { useState, useMemo, useCallback } from 'react';
import tinycolor from 'tinycolor2';
import ColorWheel from '../components/ColorWheel';
import ColorTones from '../components/ColorTones';
import { Copy, Check } from 'lucide-react';
import { Helmet } from 'react-helmet';

const ExplorePage: React.FC<{ darkMode: boolean }> = ({ darkMode }) => {
  const [selectedColor, setSelectedColor] = useState(tinycolor('#7C3AED')); // Soft purple
  const [inputValue, setInputValue] = useState('#7C3AED');
  const [backgroundColor, setBackgroundColor] = useState('#ffffff');
  const [copied, setCopied] = useState(false);
  const [titleColor, setTitleColor] = useState('white');

  React.useEffect(() => {
    const color = selectedColor.toHexString();
    const lighterColor = tinycolor(color).lighten(20).toHexString();
    const darkerColor = tinycolor(color).darken(10).toHexString();
    setBackgroundColor(color);

    // Calculate if we should use black or white text
    const brightness = tinycolor(color).getBrightness();
    setTitleColor(brightness > 160 ? '#1a1a1a' : 'white');
  }, [selectedColor]);

  const handleColorChange = useCallback((color: tinycolor.Instance) => {
    setSelectedColor(color);
    setInputValue(color.toHexString());
  }, []);

  const handleInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setInputValue(newValue);
    
    const newColor = tinycolor(newValue);
    if (newColor.isValid()) {
      setSelectedColor(newColor);
    }
  }, []);

  const copyToClipboard = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(selectedColor.toHexString());
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  }, [selectedColor]);

  const backgroundStyle = useMemo(() => ({
    background: `
      linear-gradient(45deg, 
        ${tinycolor(backgroundColor).setAlpha(0.9).toRgbString()}, 
        ${tinycolor(backgroundColor).lighten(10).setAlpha(0.8).toRgbString()}
      ),
      radial-gradient(circle at 50% 50%, 
        ${tinycolor(backgroundColor).lighten(20).setAlpha(0.4).toRgbString()},
        transparent
      )
    `
  }), [backgroundColor]);

  const memoizedColorWheel = useMemo(() => (
    <ColorWheel 
      color={selectedColor} 
      onChange={handleColorChange} 
    />
  ), [selectedColor, handleColorChange]);

  const memoizedColorTones = useMemo(() => (
    <ColorTones 
      color={selectedColor} 
      onChange={handleColorChange}
    />
  ), [selectedColor, handleColorChange]);

  return (
    <>
      <Helmet>
        <title>Color Wheel Explorer - Interactive Color Picker & Color System Guide</title>
        <meta name="description" content="Explore colors with our interactive color wheel. Learn about RGB, HSL, and HSV color systems. Find perfect color combinations for your design projects." />
        <meta name="keywords" content="color wheel, color picker, RGB, HSL, HSV, color theory, color combinations, design tools" />
        <link rel="canonical" href="/explore" />
        <meta property="og:title" content="Color Wheel Explorer - Interactive Color Tools" />
        <meta property="og:description" content="Interactive color wheel and comprehensive color system guide for designers and developers." />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      <main className="relative min-h-[calc(100vh-208px)] w-full">
        <header className="sr-only">
          <h1>Color Wheel Explorer</h1>
          <p>Interactive color selection and color system guide</p>
        </header>
        
        <div className="relative min-h-[calc(100vh-208px)] w-full">
          {/* Dinamik Arkaplan */}
          <div 
            className="absolute inset-0 w-full h-full transition-all duration-500"
            style={backgroundStyle}
          >
            {/* Minimalist Dalgalar */}
            <svg className="absolute bottom-0 left-0 w-full h-64 opacity-30" viewBox="0 0 1440 320" preserveAspectRatio="none">
              <path
                fill={tinycolor(backgroundColor).lighten(30).setAlpha(0.3).toRgbString()}
                fillOpacity="1"
                d="M0,32L48,37.3C96,43,192,53,288,80C384,107,480,149,576,154.7C672,160,768,128,864,112C960,96,1056,96,1152,106.7C1248,117,1344,139,1392,149.3L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
              ></path>
              <path
                fill={tinycolor(backgroundColor).darken(10).setAlpha(0.2).toRgbString()}
                fillOpacity="1"
                d="M0,192L48,181.3C96,171,192,149,288,154.7C384,160,480,192,576,197.3C672,203,768,181,864,181.3C960,181,1056,203,1152,213.3C1248,224,1344,224,1392,224L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
              ></path>
            </svg>
          </div>

          {/* Ana İçerik */}
          <article className="relative z-10 w-full">
            <div className="max-w-7xl mx-auto px-4 py-8">
              <div className="relative mb-12">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div 
                    className="w-[280px] md:w-[500px] h-[100px] md:h-[120px] border-[3px] rounded-2xl transform -rotate-2 transition-colors duration-300"
                    style={{ borderColor: titleColor }}
                  ></div>
                  <div 
                    className="absolute w-[280px] md:w-[500px] h-[100px] md:h-[120px] border-[3px] rounded-2xl rotate-1 transition-colors duration-300"
                    style={{ borderColor: titleColor }}
                  ></div>
                </div>
                <div className="relative text-center py-4 md:py-8">
                  <h1 
                    className="text-3xl md:text-5xl font-bold mb-2 transition-colors duration-300"
                    style={{ color: titleColor }}
                  >
                    Color Wheel
                  </h1>
                  <div 
                    className="w-24 md:w-32 h-1 mx-auto rounded-full transition-colors duration-300"
                    style={{ backgroundColor: titleColor }}
                  ></div>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="flex justify-center items-center">
                  <div className="relative p-12 rounded-[2.5rem] bg-gradient-to-br from-white/5 via-white/10 to-white/5 dark:from-gray-900/5 dark:via-gray-900/10 dark:to-gray-900/5 backdrop-blur-2xl border border-white/20 dark:border-white/10 shadow-lg transition-transform hover:scale-[1.01] duration-200">
                    {/* Shimmer effect - daha hafif versiyonu */}
                    <div className="absolute inset-0 rounded-[2.5rem] overflow-hidden pointer-events-none">
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1500"></div>
                    </div>

                    {/* Light ring effect - kaldırıldı */}

                    {/* Inner shadow - basitleştirildi */}
                    <div className="absolute inset-[2px] rounded-[2.4rem] bg-gradient-to-b from-white/10 to-transparent"></div>
                    
                    {/* Decorative corner accents - opacity azaltıldı */}
                    <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-white/20 rounded-tl-2xl"></div>
                    <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-white/20 rounded-tr-2xl"></div>
                    <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-white/20 rounded-bl-2xl"></div>
                    <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-white/20 rounded-br-2xl"></div>

                    {/* Content container - blur azaltıldı */}
                    <div className="relative">
                      <div className="absolute inset-0 rounded-full blur-lg bg-current opacity-10 scale-90"
                        style={{ backgroundColor: selectedColor.toHexString() }}>
                      </div>
                      {memoizedColorWheel}
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="bg-white/90 dark:bg-gray-900/90 p-6 rounded-lg backdrop-blur-sm shadow-xl">
                    <div className="flex items-center space-x-4 mb-6">
                      <input
                        type="text"
                        value={inputValue}
                        onChange={handleInputChange}
                        className="flex-1 px-4 py-2 border rounded-lg dark:bg-gray-800 dark:border-gray-700 dark:text-white"
                      />
                      <button
                        onClick={copyToClipboard}
                        className="p-3 md:p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 active:scale-95 transition-all touch-manipulation"
                        aria-label={copied ? "Copied!" : "Copy color code"}
                      >
                        {copied ? (
                          <Check className="h-6 w-6 md:h-5 md:w-5 text-green-500" />
                        ) : (
                          <Copy className="h-6 w-6 md:h-5 md:w-5 text-gray-600 dark:text-white" />
                        )}
                      </button>
                    </div>
                    <div className="mt-2 grid grid-cols-3 gap-2 text-sm text-gray-700 dark:text-gray-300">
                      <div>RGB: {selectedColor.toRgbString()}</div>
                      <div>HSL: {selectedColor.toHslString()}</div>
                      <div>HSV: {selectedColor.toHsvString()}</div>
                    </div>
                    <div className="mt-6">
                      {memoizedColorTones}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </article>
        </div>

        <section className="max-w-4xl mx-auto px-6 py-16" aria-labelledby="color-systems-title">
          <h2 id="color-systems-title" className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Understanding Color Systems
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* RGB */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border-2 border-purple-100 dark:border-purple-900/20 hover:border-purple-200 dark:hover:border-purple-800/30 transition-all duration-300">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-red-500"></span>
                <span className="w-3 h-3 rounded-full bg-green-500"></span>
                <span className="w-3 h-3 rounded-full bg-blue-500"></span>
                RGB (Red, Green, Blue)
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                An additive color model where red, green, and blue light are combined in various ways to create other colors. Used in digital displays, with values from 0 to 255 for each component.
              </p>
            </div>

            {/* HSL */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border-2 border-indigo-100 dark:border-indigo-900/20 hover:border-indigo-200 dark:hover:border-indigo-800/30 transition-all duration-300">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-gradient-to-r from-red-500 via-green-500 to-blue-500"></div>
                HSL (Hue, Saturation, Lightness)
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                A more intuitive color model that describes colors using hue (color type), saturation (intensity), and lightness (brightness). Hue is measured in degrees (0-360°).
              </p>
            </div>

            {/* HSV */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border-2 border-violet-100 dark:border-violet-900/20 hover:border-violet-200 dark:hover:border-violet-800/30 transition-all duration-300">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-gradient-to-r from-yellow-500 via-purple-500 to-pink-500"></div>
                HSV (Hue, Saturation, Value)
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Similar to HSL but uses value instead of lightness. HSV is often preferred in design software as it can feel more intuitive when selecting colors.
              </p>
            </div>

            {/* Color Components */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border-2 border-fuchsia-100 dark:border-fuchsia-900/20 hover:border-fuchsia-200 dark:hover:border-fuchsia-800/30 transition-all duration-300">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-gradient-to-r from-fuchsia-500 via-purple-500 to-pink-500"></div>
                Color Components
              </h3>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li><strong>Hue:</strong> The pure color itself (red, blue, etc.), measured in degrees on the color wheel (0-360°)</li>
                <li><strong>Saturation:</strong> The intensity or purity of the color (0% being grayscale, 100% being full color)</li>
                <li><strong>Lightness/Value:</strong> The amount of light in the color (0% being black, 100% being white)</li>
              </ul>
            </div>
          </div>

          {/* Pro Tips */}
          <div className="mt-12 bg-gradient-to-r from-purple-50 to-indigo-50 dark:from-purple-900/10 dark:to-indigo-900/10 p-6 rounded-xl border-2 border-purple-100 dark:border-purple-900/20">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Pro Tips 💡</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
              <li>Use HSL when you need intuitive color adjustments</li>
              <li>RGB is best for precise digital color matching</li>
              <li>Adjust saturation to make colors more vibrant or muted</li>
              <li>Use lightness to create shades and tints of your base color</li>
            </ul>
          </div>
        </section>
      </main>
    </>
  );
};

export default React.memo(ExplorePage);