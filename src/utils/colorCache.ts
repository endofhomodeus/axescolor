import React, { useState, useEffect } from 'react';
import namer from 'color-namer';

const COLOR_CACHE_KEY = 'color-names-cache';

export const getCachedColorName = (color: string) => {
  try {
    const cache = JSON.parse(localStorage.getItem(COLOR_CACHE_KEY) || '{}');
    if (cache[color]) return cache[color];
    
    const names = namer(color);
    const colorName = names.ntc[0].name;
    
    cache[color] = colorName;
    localStorage.setItem(COLOR_CACHE_KEY, JSON.stringify(cache));
    
    return colorName;
  } catch {
    return namer(color).ntc[0].name;
  }
};

const ColorPalette = React.memo(({ colors }) => {
  const [colorNames, setColorNames] = useState<string[]>([]);

  useEffect(() => {
    const names = colors.map(color => getCachedColorName(color));
    setColorNames(names);
  }, [colors]);

  return (
    <div>
      {colorNames.map((name, index) => (
        <div key={index}>{name}</div>
      ))}
    </div>
  );
});

export default ColorPalette;
