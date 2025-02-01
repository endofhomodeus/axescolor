import React, { useMemo, useCallback } from 'react';
import tinycolor from 'tinycolor2';
import * as Slider from '@radix-ui/react-slider';

interface ColorTonesProps {
  color: tinycolor.Instance;
  onChange: (color: tinycolor.Instance) => void;
}

const ColorTones: React.FC<ColorTonesProps> = React.memo(({ color, onChange }) => {
  const hsl = useMemo(() => color.toHsl(), [color]);

  const handleHueChange = useCallback((value: number[]) => {

    const hue = Math.min(359, value[0]);
    onChange(tinycolor({ h: hue, s: hsl.s * 100, l: hsl.l * 100 }));
  }, [onChange, hsl.s, hsl.l]);

  const handleSaturationChange = useCallback((value: number[]) => {
    onChange(tinycolor({ h: hsl.h, s: value[0], l: hsl.l * 100 }));
  }, [onChange, hsl.h, hsl.l]);

  const handleLightnessChange = useCallback((value: number[]) => {
    onChange(tinycolor({ h: hsl.h, s: hsl.s * 100, l: value[0] }));
  }, [onChange, hsl.h, hsl.s]);

  const gradientStyles = useMemo(() => ({
    saturation: {
      background: `linear-gradient(to right, ${tinycolor({ h: hsl.h, s: 0, l: hsl.l }).toHexString()}, ${tinycolor({ h: hsl.h, s: 100, l: hsl.l }).toHexString()})`
    },
    lightness: {
      background: `linear-gradient(to right, #000000, ${tinycolor({ h: hsl.h, s: hsl.s, l: 0.5 }).toHexString()}, #ffffff)`
    }
  }), [hsl]);

  return (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          Hue
        </label>
        <Slider.Root
          className="relative flex items-center select-none touch-none w-full h-5"
          value={[Math.min(359, hsl.h)]} 
          max={359} 
          step={1}
          onValueChange={handleHueChange}
        >
          <Slider.Track className="bg-gradient-to-r from-red-500 via-yellow-500 via-green-500 via-blue-500 to-red-500 relative grow rounded-full h-2">
            <Slider.Range className="absolute bg-transparent h-full" />
          </Slider.Track>
          <Slider.Thumb className="block w-5 h-5 bg-white shadow-lg rounded-full hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-purple-500" />
        </Slider.Root>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          Saturation
        </label>
        <Slider.Root
          className="relative flex items-center select-none touch-none w-full h-5"
          value={[hsl.s * 100]}
          max={100}
          step={1}
          onValueChange={handleSaturationChange}
        >
          <Slider.Track 
            className="relative grow rounded-full h-2"
            style={gradientStyles.saturation}
          >
            <Slider.Range className="absolute bg-transparent h-full" />
          </Slider.Track>
          <Slider.Thumb className="block w-5 h-5 bg-white shadow-lg rounded-full hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-purple-500" />
        </Slider.Root>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          Lightness
        </label>
        <Slider.Root
          className="relative flex items-center select-none touch-none w-full h-5"
          value={[hsl.l * 100]}
          max={100}
          step={1}
          onValueChange={handleLightnessChange}
        >
          <Slider.Track 
            className="relative grow rounded-full h-2"
            style={gradientStyles.lightness}
          >
            <Slider.Range className="absolute bg-transparent h-full" />
          </Slider.Track>
          <Slider.Thumb className="block w-5 h-5 bg-white shadow-lg rounded-full hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-purple-500" />
        </Slider.Root>
      </div>

      <div className="grid grid-cols-5 gap-2 mt-4">
        {[0.1, 0.3, 0.5, 0.7, 0.9].map((l) => (
          <button
            key={l}
            className="w-full aspect-square rounded-lg shadow-inner transition-transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-500"
            style={{ backgroundColor: tinycolor({ h: hsl.h, s: hsl.s, l }).toHexString() }}
            onClick={() => onChange(tinycolor({ h: hsl.h, s: hsl.s * 100, l: l * 100 }))}
          />
        ))}
      </div>
    </div>
  );
});

export default ColorTones;