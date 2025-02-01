import React, { useRef, useEffect, useState, useCallback, useMemo } from 'react';
import tinycolor from 'tinycolor2';

interface ColorWheelProps {
  color: tinycolor.Instance;
  onChange: (color: tinycolor.Instance) => void;
}

const ColorWheel: React.FC<ColorWheelProps> = React.memo(({ color, onChange }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [wheelRadius, setWheelRadius] = useState(0);
  const [center, setCenter] = useState({ x: 0, y: 0 });
  const [currentPoint, setCurrentPoint] = useState({ x: 0, y: 0 });

  // Memoize the marker position calculation
  const calculateMarkerPosition = useCallback((hsl: tinycolor.ColorFormats.HSL, radius: number, centerPoint: { x: number, y: number }) => {
    const angle = hsl.h * (Math.PI / 180);
    const distance = hsl.s * radius;
    return {
      x: centerPoint.x + Math.cos(angle) * distance,
      y: centerPoint.y + Math.sin(angle) * distance
    };
  }, []);

  // Wheel çizimi için performans optimizasyonu
  const drawWheel = useCallback((ctx: CanvasRenderingContext2D, size: number, radius: number) => {
    const imageData = ctx.createImageData(size, size);
    const data = imageData.data;
    
    // Web Workers kullanarak hesaplamaları arka planda yap
    const worker = new Worker(
      URL.createObjectURL(
        new Blob([
          `
            onmessage = function(e) {
              const { size, radius } = e.data;
              const data = new Uint8ClampedArray(size * size * 4);
              
              for (let x = 0; x < size; x++) {
                for (let y = 0; y < size; y++) {
                  const dx = x - radius;
                  const dy = y - radius;
                  const distance = Math.sqrt(dx * dx + dy * dy);
                  const index = (y * size + x) * 4;

                  if (distance <= radius) {
                    const hue = ((Math.atan2(dy, dx) * 180) / Math.PI + 360) % 360;
                    const saturation = Math.min(100, (distance / radius) * 100);
                    
                    // HSV to RGB dönüşümü
                    const h = hue / 360;
                    const s = saturation / 100;
                    const v = 1;
                    
                    let r, g, b;
                    
                    const i = Math.floor(h * 6);
                    const f = h * 6 - i;
                    const p = v * (1 - s);
                    const q = v * (1 - f * s);
                    const t = v * (1 - (1 - f) * s);
                    
                    switch (i % 6) {
                      case 0: r = v, g = t, b = p; break;
                      case 1: r = q, g = v, b = p; break;
                      case 2: r = p, g = v, b = t; break;
                      case 3: r = p, g = q, b = v; break;
                      case 4: r = t, g = p, b = v; break;
                      case 5: r = v, g = p, b = q; break;
                    }
                    
                    data[index] = r * 255;
                    data[index + 1] = g * 255;
                    data[index + 2] = b * 255;
                    data[index + 3] = 255;
                  }
                }
              }
              
              postMessage({ data });
            }
          `
        ]),
        { type: 'application/javascript' }
      )
    );

    worker.onmessage = function(e) {
      const imageData = new ImageData(new Uint8ClampedArray(e.data.data), size, size);
      ctx.putImageData(imageData, 0, 0);
    };

    worker.postMessage({ size, radius });

    return () => worker.terminate();
  }, []);

  // Canvas yeniden çizimi için performans optimizasyonu
  const redrawCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { 
      willReadFrequently: true,
      alpha: false // Transparanlık gerekmiyorsa performans için kapatılabilir
    });
    if (!ctx) return;

    // RequestAnimationFrame ile çizimi optimize et
    requestAnimationFrame(() => {
      drawWheel(ctx, canvas.width, wheelRadius);
    });
  }, [drawWheel, wheelRadius]);

  // Initialize the color wheel
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { willReadFrequently: true });
    if (!ctx) return;

    const size = 180;
    canvas.width = size;
    canvas.height = size;
    const radius = size / 2;
    const centerPoint = { x: radius, y: radius };
    
    setWheelRadius(radius - 2);
    setCenter(centerPoint);

    // Create off-screen canvas for better performance
    const offscreen = new OffscreenCanvas(size, size);
    const offCtx = offscreen.getContext('2d');
    if (!offCtx) return;

    // Draw color wheel
    const imageData = offCtx.createImageData(size, size);
    const data = imageData.data;

    for (let x = 0; x < size; x++) {
      for (let y = 0; y < size; y++) {
        const dx = x - radius;
        const dy = y - radius;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const index = (y * size + x) * 4;

        if (distance <= radius) {
          const hue = ((Math.atan2(dy, dx) * 180) / Math.PI + 360) % 360;
          const saturation = Math.min(100, (distance / radius) * 100);
          const rgb = tinycolor({ h: hue, s: saturation, v: 100 }).toRgb();
          
          data[index] = rgb.r;
          data[index + 1] = rgb.g;
          data[index + 2] = rgb.b;
          data[index + 3] = 255;
        }
      }
    }

    offCtx.putImageData(imageData, 0, 0);
    ctx.drawImage(offscreen, 0, 0);

    // Set initial marker position
    const initialPosition = calculateMarkerPosition(color.toHsl(), radius - 2, centerPoint);
    setCurrentPoint(initialPosition);
  }, []); // Run only once on mount

  // Update marker position when color changes externally
  useEffect(() => {
    const hsv = color.toHsv();
    const hsl = { h: hsv.h, s: hsv.s, l: 50 }; // Fix lightness at 50% for marker position
    const newPosition = calculateMarkerPosition(hsl, wheelRadius, center);
    setCurrentPoint(newPosition);
  }, [color, wheelRadius, center, calculateMarkerPosition]);

  const handleInteraction = useCallback((event: React.MouseEvent | React.TouchEvent) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const rect = canvas.getBoundingClientRect();
    const clientX = 'touches' in event ? event.touches[0].clientX : event.clientX;
    const clientY = 'touches' in event ? event.touches[0].clientY : event.clientY;
    
    const x = (clientX - rect.left) * (canvas.width / rect.width);
    const y = (clientY - rect.top) * (canvas.height / rect.height);

    const dx = x - center.x;
    const dy = y - center.y;
    const distance = Math.sqrt(dx * dx + dy * dy);

    if (distance <= wheelRadius) {
      const hue = ((Math.atan2(dy, dx) * 180) / Math.PI + 360) % 360;
      const saturation = Math.min(100, (distance / wheelRadius) * 100);
      const currentValue = color.toHsv().v;
      const newColor = tinycolor({ h: hue, s: saturation, v: currentValue });
      setCurrentPoint({ x, y });
      onChange(newColor);
    }
  }, [center, wheelRadius, onChange, color]);

  // Add window event listeners for mouse and touch events
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (isDragging) {
        e.preventDefault();
        const canvas = canvasRef.current;
        if (!canvas) return;

        const rect = canvas.getBoundingClientRect();
        const x = (e.clientX - rect.left) * (canvas.width / rect.width);
        const y = (e.clientY - rect.top) * (canvas.height / rect.height);

        const dx = x - center.x;
        const dy = y - center.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const angle = ((Math.atan2(dy, dx) * 180) / Math.PI + 360) % 360;
        const saturation = Math.min(100, (Math.min(distance, wheelRadius) / wheelRadius) * 100);
        const currentValue = color.toHsv().v;
        const newColor = tinycolor({ h: angle, s: saturation, v: currentValue });

        setCurrentPoint({ 
          x: center.x + (dx / distance) * Math.min(distance, wheelRadius),
          y: center.y + (dy / distance) * Math.min(distance, wheelRadius)
        });
        onChange(newColor);
      }
    };

    const handleMouseUp = () => {
      setIsDragging(false);
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (isDragging) {
        e.preventDefault();
        const canvas = canvasRef.current;
        if (!canvas) return;

        const rect = canvas.getBoundingClientRect();
        const x = (e.touches[0].clientX - rect.left) * (canvas.width / rect.width);
        const y = (e.touches[0].clientY - rect.top) * (canvas.height / rect.height);

        const dx = x - center.x;
        const dy = y - center.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const angle = ((Math.atan2(dy, dx) * 180) / Math.PI + 360) % 360;
        const saturation = Math.min(100, (Math.min(distance, wheelRadius) / wheelRadius) * 100);
        const currentValue = color.toHsv().v;
        const newColor = tinycolor({ h: angle, s: saturation, v: currentValue });

        setCurrentPoint({ 
          x: center.x + (dx / distance) * Math.min(distance, wheelRadius),
          y: center.y + (dy / distance) * Math.min(distance, wheelRadius)
        });
        onChange(newColor);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('touchmove', handleTouchMove, { passive: false });
    window.addEventListener('touchend', handleMouseUp);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleMouseUp);
    };
  }, [isDragging, center, wheelRadius, onChange, color]);

  return (
    <div 
      className="relative inline-block"
      role="application"
      aria-label="Color Wheel Picker"
    >
      <canvas
        ref={canvasRef}
        className="w-44 h-44 cursor-pointer touch-none rounded-full shadow-lg transition-transform hover:scale-105"
        aria-label="Interactive color wheel - Click or touch to select color"
        role="slider"
        aria-valuetext={`Selected color: ${color.toHexString()}`}
        onMouseDown={(e) => {
          setIsDragging(true);
          handleInteraction(e);
        }}
        onTouchStart={(e) => {
          setIsDragging(true);
          handleInteraction(e);
        }}
      />
      <div
        className="absolute w-4 h-4 border-2 border-white rounded-full shadow-lg transform -translate-x-1/2 -translate-y-1/2 pointer-events-none transition-all duration-75"
        role="presentation"
        aria-hidden="true"
        style={{
          left: `${(currentPoint.x / canvasRef.current?.width!) * 100}%`,
          top: `${(currentPoint.y / canvasRef.current?.height!) * 100}%`,
          backgroundColor: color.toHexString(),
          boxShadow: '0 2px 4px rgba(0,0,0,0.2)'
        }}
      />
    </div>
  );
});

export default ColorWheel;