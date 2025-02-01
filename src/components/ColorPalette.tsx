import React, { useState } from 'react';
import { Copy, Check } from 'lucide-react';

interface Color {
  hex: string;
  name: string;
}

interface ColorPaletteProps {
  colors: Color[];
  gridCols?: number;
  smGridCols?: number;
  mdGridCols?: number;
  showName?: boolean;
  stretch?: boolean;
  className?: string;
}

const ColorPalette: React.FC<ColorPaletteProps> = ({ colors, gridCols = 4, smGridCols = 2, mdGridCols = 3, showName = true, stretch = false, className }) => {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const copyToClipboard = async (hex: string, index: number) => {
    try {
      await navigator.clipboard.writeText(hex);
      setCopiedIndex(index);
      setTimeout(() => setCopiedIndex(null), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  const gridClass = stretch 
    ? `grid grid-cols-${gridCols} sm:grid-cols-${smGridCols} md:grid-cols-${mdGridCols} gap-2 ${className}`
    : `grid grid-cols-${gridCols} sm:grid-cols-${smGridCols} md:grid-cols-${mdGridCols} gap-2 ${className}`;

  return (
    <div className={gridClass}>
      {colors.map((color, index) => (
        <div
          key={color.hex}
          className={`group relative rounded overflow-hidden shadow-xl border border-gray-200 dark:border-gray-700 transition-transform hover:scale-105 ${stretch ? 'w-full' : ''}`}
        >
          <div
            className="h-24 sm:h-28 md:h-32 cursor-pointer"
            style={{ backgroundColor: color.hex }}
            onClick={() => copyToClipboard(color.hex, index)}
          />
          <div className="p-2.5 bg-white dark:bg-gray-800">
            {showName && <p className="text-sm font-medium dark:text-white">{color.name}</p>}
            <p className="text-xs text-gray-500 dark:text-gray-400">{color.hex}</p>
          </div>
          <button
            onClick={() => copyToClipboard(color.hex, index)}
            className="absolute top-2 right-2 p-2 bg-white/90 dark:bg-gray-800/90 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
          >
            {copiedIndex === index ? (
              <Check className="w-4 h-4 text-green-500" />
            ) : (
              <Copy className="w-4 h-4 text-gray-600 dark:text-gray-300" />
            )}
          </button>
        </div>
      ))}
    </div>
  );
};

export default ColorPalette;