import React, { useCallback, useRef, useEffect, useMemo } from 'react';
import { Upload, Image as ImageIcon, FileImage, Plus } from 'lucide-react';
import { patterns } from '../utils/patterns';
import { clearCanvas } from '../utils/canvas';

// ImageUploader Component
interface ImageUploaderProps {
  onImageUpload: (file: File) => void;
}

export function ImageUploader({ onImageUpload }: ImageUploaderProps) {
  const handleDrop = useCallback(
    (e: React.DragEvent<HTMLDivElement>) => {
      e.preventDefault();
      const file = e.dataTransfer.files[0];
      if (file && file.type.startsWith('image/')) {
        // Dosya yükleme öncesi güvenlik kontrolü
        const img = new Image();
        img.onload = () => {
          onImageUpload(file);
        };
        img.onerror = () => {
          console.error('Invalid image file');
          // Hata durumunda kullanıcıya bilgi verilebilir
        };
        img.src = URL.createObjectURL(file);
      }
    },
    [onImageUpload]
  );

  const handleFileInput = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0];
      if (file) {
        // Dosya yükleme öncesi güvenlik kontrolü
        const img = new Image();
        img.onload = () => {
          onImageUpload(file);
        };
        img.onerror = () => {
          console.error('Invalid image file');
          // Hata durumunda kullanıcıya bilgi verilebilir
        };
        img.src = URL.createObjectURL(file);
      }
    },
    [onImageUpload]
  );

  return (
    <div
      role="region"
      aria-label="Image upload area"
      onDrop={handleDrop}
      onDragOver={(e) => e.preventDefault()}
      className="w-full h-full relative group cursor-pointer transition-all duration-300"
    >
      <input
        type="file"
        accept="image/*"
        onChange={handleFileInput}
        className="hidden"
        id="imageUpload"
        aria-label="Upload image"
      />
      <label 
        htmlFor="imageUpload" 
        className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-purple-50/80 to-blue-50/80 dark:from-purple-950/20 dark:to-blue-950/20 backdrop-blur-sm rounded-2xl border-2 border-dashed border-purple-200 dark:border-purple-700 transition-all duration-500 group-hover:border-purple-500 dark:group-hover:border-purple-400"
      >
        <div className="transform transition-all duration-300 group-hover:scale-105 space-y-4">
          {/* Modern Icon Stack */}
          <div className="relative w-24 h-24 mx-auto">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-100 to-blue-100 dark:from-purple-900/50 dark:to-blue-900/50 rounded-2xl rotate-3 transform transition-transform duration-300 group-hover:rotate-6" />
            <div className="absolute inset-0 bg-white dark:bg-gray-800 rounded-2xl -rotate-3 transform transition-transform duration-300 group-hover:-rotate-6 flex items-center justify-center">
              <FileImage className="w-12 h-12 text-purple-500 dark:text-purple-400" />
            </div>
            <div className="absolute -right-2 -bottom-2">
              <div className="relative">
                <div className="absolute inset-0 bg-purple-200 dark:bg-purple-700 rounded-full blur-sm group-hover:blur-md transition-all duration-300" />
                <div className="relative bg-white dark:bg-gray-800 rounded-full p-2 shadow-lg">
                  <Plus className="w-6 h-6 text-purple-500 dark:text-purple-400" />
                </div>
              </div>
            </div>
          </div>

          {/* Modern Text Content */}
          <div className="space-y-2 text-center">
            <h3 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-600 dark:from-purple-400 dark:to-blue-400">
              Upload Image
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-300 max-w-[200px] mx-auto">
              Drop your image here or click to browse
            </p>
          </div>

          {/* File Type Hint - Centered */}
          <div className="flex items-center justify-center gap-1 text-xs text-gray-500 dark:text-gray-400 bg-white/50 dark:bg-gray-800/50 px-3 py-1.5 rounded-full mx-auto">
            <Upload className="w-3 h-3" />
            <span>PNG, JPG, WebP</span>
          </div>
        </div>

        {/* Hover Effect Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/0 to-blue-500/0 group-hover:from-purple-500/5 group-hover:to-blue-500/5 dark:group-hover:from-purple-400/5 dark:group-hover:to-blue-400/5 rounded-2xl transition-all duration-300" />
      </label>
    </div>
  );
}

// PatternSelector Component
interface PatternSelectorProps {
  selectedPattern: string;
  onPatternSelect: (patternId: string) => void;
}

export function PatternSelector({ selectedPattern, onPatternSelect }: PatternSelectorProps) {
  return (
    <div role="listbox" aria-label="Pattern selection" className="grid grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-4">
      {patterns.map((pattern) => (
        <button
          key={pattern.id}
          onClick={() => onPatternSelect(pattern.id)}
          role="option"
          aria-selected={selectedPattern === pattern.id}
          aria-label={`Select ${pattern.name} pattern`}
          className={`
            p-2 sm:p-4 rounded-xl border-2 transition-colors shadow-md
            hover:shadow-lg relative overflow-hidden group
            ${selectedPattern === pattern.id 
              ? 'bg-gradient-to-br from-blue-500 to-blue-600 dark:from-blue-600 dark:to-blue-700 text-white border-blue-400 dark:border-blue-500' 
              : 'bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-900 dark:text-white border-gray-200 dark:border-gray-600'
            }
          `}
        >
          <div className="relative z-10 flex flex-col items-center gap-1 sm:gap-2">
            <h3 className="font-bold text-sm sm:text-base lg:text-lg">{pattern.name}</h3>
            <p className={`text-xs sm:text-sm text-center line-clamp-2 ${
              selectedPattern === pattern.id 
                ? 'text-blue-100 dark:text-blue-200' 
                : 'text-gray-600 dark:text-gray-300'
            }`}>
              {pattern.description}
            </p>
          </div>
          {/* Highlight effect */}
          <div className={`
            absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300
            ${selectedPattern === pattern.id
              ? 'bg-white/10'
              : 'bg-gradient-to-br from-gray-50 dark:from-gray-700 to-transparent'
            }
          `} />
        </button>
      ))}
    </div>
  );
}

// ImageEditor Component
interface ImageEditorProps {
  imageUrl: string;
  onSelectionChange: (selection: { x: number; y: number; width: number; height: number }) => void;
  onCanvasReady: (canvas: HTMLCanvasElement) => void;
}

export const ImageEditor = React.memo(function ImageEditor({ imageUrl, onSelectionChange, onCanvasReady }: ImageEditorProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [canvasDimensions, setCanvasDimensions] = React.useState({ width: 0, height: 0 });
  const [selection, setSelection] = React.useState({ x: 0, y: 0, width: 0, height: 0 });

  // Use ResizeObserver for responsive handling
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Memoize canvas setup
  const setupCanvas = useCallback((canvas: HTMLCanvasElement, image: HTMLImageElement) => {
    const ctx = canvas.getContext('2d', { alpha: false }); // Disable alpha for better performance
    if (!ctx) return;

    const container = canvas.parentElement?.parentElement;
    if (!container) return;

    // Container boyutlarını al
    const containerWidth = container.clientWidth;
    const containerHeight = container.clientHeight;

    // Resmi container'a tam sığdır
    let width = containerWidth;
    let height = (containerWidth / image.width) * image.height;

    // Eğer yükseklik container'dan büyükse, yüksekliğe göre ayarla
    if (height > containerHeight) {
      height = containerHeight;
      width = (containerHeight / image.height) * image.width;
    }

    // Canvas boyutlarını ayarla
    canvas.width = width;
    canvas.height = height;
    setCanvasDimensions({ width, height });

    // Resmi çiz
    ctx.drawImage(image, 0, 0, width, height);
    onCanvasReady(canvas);

    // Başlangıç seçim alanını ayarla
    const initialSize = Math.min(width, height) * 0.5;
    const initialSelection = {
      x: (width - initialSize) / 2,
      y: (height - initialSize) / 2,
      width: initialSize,
      height: initialSize,
    };
    setSelection(initialSelection);
    onSelectionChange(initialSelection);
  }, [onCanvasReady, onSelectionChange]);

  // Use Intersection Observer for lazy loading
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const image = new Image();
            image.src = imageUrl;
            image.onload = () => setupCanvas(canvasRef.current!, image);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (canvasRef.current) {
      observer.observe(canvasRef.current);
    }

    return () => observer.disconnect();
  }, [imageUrl, setupCanvas]);

  const handleSelectionChange = (newSelection: typeof selection) => {
    // Seçim alanının canvas sınırları içinde kalmasını sağla
    const boundedSelection = {
      x: Math.max(0, Math.min(newSelection.x, canvasDimensions.width - newSelection.width)),
      y: Math.max(0, Math.min(newSelection.y, canvasDimensions.height - newSelection.height)),
      width: Math.min(newSelection.width, canvasDimensions.width),
      height: Math.min(newSelection.height, canvasDimensions.height)
    };
    setSelection(boundedSelection);
    onSelectionChange(boundedSelection);
  };

  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <div className="relative">
        <canvas
          ref={canvasRef}
          className="rounded-lg"
        />
        {canvasDimensions.width > 0 && (
          <SelectionOverlay
            selection={selection}
            canvasWidth={canvasDimensions.width}
            canvasHeight={canvasDimensions.height}
            onSelectionChange={handleSelectionChange}
          />
        )}
      </div>
    </div>
  );
});

// SelectionOverlay Component
interface SelectionOverlayProps {
  selection: { x: number; y: number; width: number; height: number };
  canvasWidth: number;
  canvasHeight: number;
  onSelectionChange: (selection: { x: number; y: number; width: number; height: number }) => void;
}

function SelectionOverlay({ selection, canvasWidth, canvasHeight, onSelectionChange }: SelectionOverlayProps) {
  const handleDrag = (e: React.MouseEvent | React.TouchEvent, corner: string) => {
    e.preventDefault();
    
    // Mouse veya touch event başlangıç koordinatları
    const startX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const startY = 'touches' in e ? e.touches[0].clientY : e.clientY;
    const startSelection = { ...selection };

    const handleMove = (moveEvent: MouseEvent | TouchEvent) => {
      moveEvent.preventDefault();
      const deltaX = 'touches' in moveEvent ? moveEvent.touches[0].clientX - startX : moveEvent.clientX - startX;
      const deltaY = 'touches' in moveEvent ? moveEvent.touches[0].clientY - startY : moveEvent.clientY - startY;
      let newSelection = { ...startSelection };

      switch (corner) {
        case 'top-left':
          newSelection = {
            x: Math.max(0, Math.min(startSelection.x + deltaX, startSelection.x + startSelection.width - 50)),
            y: Math.max(0, Math.min(startSelection.y + deltaY, startSelection.y + startSelection.height - 50)),
            width: Math.max(50, startSelection.width - deltaX),
            height: Math.max(50, startSelection.height - deltaY)
          };
          break;
        case 'top-right':
          newSelection = {
            x: startSelection.x,
            y: Math.max(0, Math.min(startSelection.y + deltaY, startSelection.y + startSelection.height - 50)),
            width: Math.max(50, Math.min(startSelection.width + deltaX, canvasWidth - startSelection.x)),
            height: Math.max(50, startSelection.height - deltaY)
          };
          break;
        case 'bottom-left':
          newSelection = {
            x: Math.max(0, Math.min(startSelection.x + deltaX, startSelection.x + startSelection.width - 50)),
            y: startSelection.y,
            width: Math.max(50, startSelection.width - deltaX),
            height: Math.max(50, Math.min(startSelection.height + deltaY, canvasHeight - startSelection.y))
          };
          break;
        case 'bottom-right':
          newSelection = {
            x: startSelection.x,
            y: startSelection.y,
            width: Math.max(50, Math.min(startSelection.width + deltaX, canvasWidth - startSelection.x)),
            height: Math.max(50, Math.min(startSelection.height + deltaY, canvasHeight - startSelection.y))
          };
          break;
        case 'move':
          newSelection = {
            x: Math.max(0, Math.min(startSelection.x + deltaX, canvasWidth - startSelection.width)),
            y: Math.max(0, Math.min(startSelection.y + deltaY, canvasHeight - startSelection.height)),
            width: startSelection.width,
            height: startSelection.height
          };
          break;
      }

      onSelectionChange(newSelection);
    };

    const handleEnd = () => {
      document.removeEventListener('mousemove', handleMove);
      document.removeEventListener('mouseup', handleEnd);
      document.removeEventListener('touchmove', handleMove);
      document.removeEventListener('touchend', handleEnd);
    };

    // Mouse ve touch event listener'ları
    document.addEventListener('mousemove', handleMove, { passive: false });
    document.addEventListener('mouseup', handleEnd);
    document.addEventListener('touchmove', handleMove, { passive: false });
    document.addEventListener('touchend', handleEnd);
  };

  return (
    <div className="absolute inset-0 touch-none">
      <div className="absolute inset-0 bg-black/20" />
      <div
        className="absolute bg-transparent border-2 border-white shadow-lg cursor-move"
        style={{
          left: selection.x,
          top: selection.y,
          width: selection.width,
          height: selection.height,
        }}
        onMouseDown={(e) => handleDrag(e, 'move')}
        onTouchStart={(e) => handleDrag(e, 'move')}
      >
        {['top-left', 'top-right', 'bottom-left', 'bottom-right'].map((corner) => (
          <div
            key={corner}
            className="absolute w-6 h-6 bg-white border-2 border-blue-500 rounded-full hover:scale-125 transition-transform"
            style={{
              cursor: `${corner}-resize`,
              top: corner.includes('top') ? -12 : 'auto',
              bottom: corner.includes('bottom') ? -12 : 'auto',
              left: corner.includes('left') ? -12 : 'auto',
              right: corner.includes('right') ? -12 : 'auto',
            }}
            onMouseDown={(e) => handleDrag(e, corner)}
            onTouchStart={(e) => handleDrag(e, corner)}
          />
        ))}
      </div>
    </div>
  );
}

// PatternPreview Component
interface PatternPreviewProps {
  sourceCanvas: HTMLCanvasElement | null;
  selection: { x: number; y: number; width: number; height: number } | null;
  patternId: string;
}

export const PatternPreview = React.memo(function PatternPreview({ sourceCanvas, selection, patternId }: PatternPreviewProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Use requestAnimationFrame for smooth rendering
  const renderRef = useRef<number>();
  
  useEffect(() => {
    if (!sourceCanvas || !selection || !canvasRef.current || !containerRef.current) return;

    const render = () => {
      const pattern = patterns.find(p => p.id === patternId);
      if (!pattern) return;

      const previewCanvas = canvasRef.current;
      const ctx = previewCanvas.getContext('2d', { 
        alpha: true,
        willReadFrequently: true
      });
      if (!ctx) return;

      // Görüntü kalitesi ayarları
      ctx.imageSmoothingEnabled = true;
      ctx.imageSmoothingQuality = 'high';

      const patternCanvas = pattern.generate(sourceCanvas, selection);

      // Container boyutlarını al ve 2x büyüt (daha yüksek çözünürlük için)
      const container = containerRef.current;
      const containerWidth = container.clientWidth * 2;
      const containerHeight = container.clientHeight * 2;

      // Canvas boyutlarını yüksek çözünürlükte ayarla
      previewCanvas.width = containerWidth;
      previewCanvas.height = containerHeight;
      
      clearCanvas(ctx, previewCanvas.width, previewCanvas.height);

      const scale = Math.min(
        containerWidth / patternCanvas.width,
        containerHeight / patternCanvas.height
      );

      const x = (containerWidth - patternCanvas.width * scale) / 2;
      const y = (containerHeight - patternCanvas.height * scale) / 2;

      // Yüksek kaliteli render
      ctx.save();
      ctx.translate(x, y);
      ctx.scale(scale, scale);

      // Anti-aliasing için ara katman kullan
      const tempCanvas = document.createElement('canvas');
      tempCanvas.width = patternCanvas.width;
      tempCanvas.height = patternCanvas.height;
      const tempCtx = tempCanvas.getContext('2d', {
        alpha: true,
        willReadFrequently: true
      });
      
      if (tempCtx) {
        tempCtx.imageSmoothingEnabled = true;
        tempCtx.imageSmoothingQuality = 'high';
        tempCtx.drawImage(patternCanvas, 0, 0);
        ctx.drawImage(tempCanvas, 0, 0);
      }

      ctx.restore();
    };

    renderRef.current = requestAnimationFrame(render);
    return () => {
      if (renderRef.current) {
        cancelAnimationFrame(renderRef.current);
      }
    };
  }, [sourceCanvas, selection, patternId]);

  return (
    <div 
      ref={containerRef}
      className="relative w-full h-full flex items-center justify-center"
    >
      <canvas
        ref={canvasRef}
        id="patternCanvas"
        className="w-full h-full object-contain rounded-lg"
        style={{ 
          imageRendering: 'crisp-edges',
          WebkitFontSmoothing: 'antialiased',
          transform: 'translateZ(0)', // GPU hızlandırma
          backfaceVisibility: 'hidden'
        }}
      />
      <div className="absolute inset-0 bg-black/0 hover:bg-black/5 transition-colors duration-200 rounded-lg" />
    </div>
  );
});