import React, { useState, useCallback, useEffect, forwardRef, useImperativeHandle, useMemo } from 'react';
import { Crosshair, Copy, Check } from 'lucide-react';
import namer from 'color-namer';
import tinycolor from 'tinycolor2';

interface EyeDropperProps {
  onColorSelect: (color: string) => void;
  initialColor?: string; // Opsiyonel başlangıç rengi ekleyelim
}

interface ColorInfo {
  hex: string;
  rgb: string;
  hsl: string;
  name: string;
  brightness: number;
}

// Cache color calculations
const colorCache = new Map();

const getColorInfo = (hex: string) => {
  if (colorCache.has(hex)) {
    return colorCache.get(hex);
  }

  const color = tinycolor(hex);
  const names = namer(hex);
  const colorInfo = {
    hex: color.toHexString(),
    rgb: color.toRgbString(),
    hsl: color.toHslString(),
    name: names.ntc[0].name,
    brightness: color.getBrightness()
  };

  colorCache.set(hex, colorInfo);
  return colorInfo;
};

const EyeDropper = forwardRef<{ startPicking: () => Promise<void> }, EyeDropperProps>(
  ({ onColorSelect, initialColor }, ref) => {
    const [isPickerActive, setIsPickerActive] = useState(false);
    const [selectedColor, setSelectedColor] = useState<ColorInfo | null>(null);
    const [copiedFormat, setCopiedFormat] = useState<string | null>(null);
    const [error, setError] = useState<string | null>(null);

    const getContrastColor = (hex: string) => {
      return tinycolor(hex).getBrightness() > 128 ? '#000000' : '#ffffff';
    };

    const analyzeColor = useCallback((hex: string) => {
      return getColorInfo(hex);
    }, []);

    const handleColorSelect = useCallback((hex: string) => {
      const colorInfo = analyzeColor(hex);
      setSelectedColor(colorInfo);
      onColorSelect(hex);
    }, [analyzeColor, onColorSelect]);

    useEffect(() => {
      if (initialColor) {
        const colorInfo = analyzeColor(initialColor);
        setSelectedColor(colorInfo);
      }
    }, [initialColor, analyzeColor]);

    const startPicking = useCallback(async () => {
      setError(null);
      setIsPickerActive(true);

      try {
        if (!('EyeDropper' in window)) {
          throw new Error('Your browser does not support the EyeDropper API');
        }

        // @ts-ignore - TypeScript doesn't know about EyeDropper yet
        const eyeDropper = new window.EyeDropper();
        const result = await eyeDropper.open();
        const colorInfo = analyzeColor(result.sRGBHex);
        
        setSelectedColor(colorInfo);
        onColorSelect(colorInfo.hex);
      } catch (e) {
        if (e instanceof Error) {
          setError(e.message);
        }
      } finally {
        setIsPickerActive(false);
      }
    }, [analyzeColor, onColorSelect]);

    // ref için startPicking metodunu expose et
    useImperativeHandle(ref, () => ({
      startPicking: () => startPicking()
    }));

    const copyToClipboard = async (text: string, format: string) => {
      try {
        await navigator.clipboard.writeText(text);
        setCopiedFormat(format);
        setTimeout(() => setCopiedFormat(null), 2000);
      } catch (err) {
        console.error('Failed to copy:', err);
      }
    };

    useEffect(() => {
      const handleKeyPress = (e: KeyboardEvent) => {
        if (e.key === 'Escape' && isPickerActive) {
          setIsPickerActive(false);
        }
      };

      document.addEventListener('keydown', handleKeyPress);
      return () => document.removeEventListener('keydown', handleKeyPress);
    }, [isPickerActive]);

    // Memoize color values
    const colorValues = useMemo(() => {
      if (!selectedColor) return [];
      return [
        { label: 'HEX', value: selectedColor.hex },
        { label: 'RGB', value: selectedColor.rgb },
        { label: 'HSL', value: selectedColor.hsl }
      ];
    }, [selectedColor]);

    return (
      <section aria-label="Color Picker Tool" className="h-full flex flex-col">
        {/* Picker Button */}
        <button
          onClick={startPicking}
          disabled={isPickerActive}
          aria-label="Activate color picker"
          title="Click to start picking colors from screen"
          className={`
            relative overflow-hidden group w-full px-4 sm:px-8 py-4 rounded-xl mb-4 sm:mb-6
            ${isPickerActive 
              ? 'bg-gray-400 cursor-not-allowed' 
              : 'bg-gradient-to-r from-purple-600 via-blue-600 to-violet-600'}
            text-white font-medium text-base sm:text-lg shadow-lg
            active:scale-95 transform transition-all duration-300
          `}
        >
          <span className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity" />
          <span className="relative flex items-center justify-center gap-2">
            <Crosshair className="w-6 h-6" />
            {isPickerActive ? 'Click anywhere...' : 'Pick Color'}
          </span>
        </button>

        {error && (
          <div role="alert" className="text-red-500 text-sm bg-red-100 dark:bg-red-900/30 px-4 py-2 rounded-lg">
            {error}
          </div>
        )}

        {/* Selected Color Display */}
        {selectedColor && (
          <div role="region" aria-label="Selected Color Information" className="flex-1 flex flex-col justify-start sm:justify-center space-y-4 sm:space-y-6">
            {/* Color Preview and Name */}
            <div className="flex flex-col items-center gap-3 sm:gap-4"> {/* flex-col ve items-center eklendi */}
              <div 
                className="w-20 h-20 sm:w-24 sm:h-24 rounded-xl shadow-xl transition-all duration-300
                         ring-4 ring-white dark:ring-gray-700
                         border border-gray-200 dark:border-gray-600"
                style={{ backgroundColor: selectedColor.hex }}
              />
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white">
                {selectedColor.name}
              </h3>
            </div>

            {/* Color Values */}
            <div className="grid gap-2 sm:gap-3" role="list" aria-label="Color values">
              {colorValues.map(({ label, value }) => (
                <div
                  key={label}
                  role="listitem"
                  aria-label={`${label} value: ${value}`}
                  onClick={() => copyToClipboard(value, label)}
                  className="flex items-center gap-2 sm:gap-3 p-3 sm:p-4 rounded-xl bg-white/50 dark:bg-gray-900/50 
                           active:scale-98 transition-all duration-200
                           cursor-pointer"
                >
                  <span className="text-sm font-medium text-gray-500 dark:text-gray-400 w-10">
                    {label}
                  </span>
                  <div className="flex-1 font-mono text-sm text-gray-800 dark:text-gray-200">
                    {value}
                  </div>
                  <div className="p-1.5 rounded-lg bg-white/80 dark:bg-gray-800/80">
                    {copiedFormat === label ? (
                      <Check className="w-4 h-4 text-green-500" />
                    ) : (
                      <Copy className="w-4 h-4 text-gray-400 group-hover:text-gray-600 dark:group-hover:text-gray-300" />
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </section>
    );
  }
);

// Memoize the component
export default React.memo(EyeDropper);
