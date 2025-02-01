import React, { useCallback, useState, useMemo } from 'react';
import { Upload } from 'lucide-react';
import ColorThief from 'colorthief';
import namer from 'color-namer';

interface ImageUploaderProps {
  onUpload: (imageUrl: string) => void;
  onExtractColors: (colors: Array<{ hex: string; name: string }>) => void;
}

// Component'i memoize edelim
const ImageUploader: React.FC<ImageUploaderProps> = React.memo(({ onUpload, onExtractColors }) => {
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  // rgbToHex fonksiyonunu useMemo ile optimize edelim
  const rgbToHex = useMemo(() => (r: number, g: number, b: number): string => {
    return '#' + [r, g, b].map(x => {
      const hex = x.toString(16);
      return hex.length === 1 ? '0' + hex : hex;
    }).join('');
  }, []);

  // extractColors fonksiyonunu useCallback ile optimize edelim
  const extractColors = useCallback(async (image: HTMLImageElement) => {
    try {
      const colorThief = new ColorThief();
      const palette = colorThief.getPalette(image, 5);
      
      const colors = palette.map(([r, g, b]) => {
        const hex = rgbToHex(r, g, b);
        const names = namer(hex);
        return {
          hex,
          name: names.ntc[0].name
        };
      });
      
      onExtractColors(colors);
    } catch (error) {
      console.error('Error extracting colors:', error);
    }
  }, [onExtractColors, rgbToHex]);

  // Resim optimizasyonu için yeni fonksiyon
  const optimizeImage = useCallback((file: File): Promise<string> => {
    return new Promise((resolve) => {
      const img = new Image();
      img.onload = () => {
        const canvas = document.createElement('canvas');
        const MAX_WIDTH = 1200; // Maximum genişlik
        const MAX_HEIGHT = 1200; // Maximum yükseklik
        let width = img.width;
        let height = img.height;

        if (width > height) {
          if (width > MAX_WIDTH) {
            height *= MAX_WIDTH / width;
            width = MAX_WIDTH;
          }
        } else {
          if (height > MAX_HEIGHT) {
            width *= MAX_HEIGHT / height;
            height = MAX_HEIGHT;
          }
        }

        canvas.width = width;
        canvas.height = height;

        const ctx = canvas.getContext('2d');
        ctx?.drawImage(img, 0, 0, width, height);

        resolve(canvas.toDataURL('image/jpeg', 0.85)); // JPEG formatında ve %85 kalitede
      };
      img.src = URL.createObjectURL(file);
    });
  }, []);

  // handleFile fonksiyonunu güncelle
  const handleFile = useCallback(async (file: File) => {
    if (!file.type.startsWith('image/')) {
      setError('Please upload an image file');
      return;
    }
    
    if (file.size > 10 * 1024 * 1024) {
      setError('File size should be less than 10MB');
      return;
    }

    setError(null);
    setLoading(true);

    try {
      const optimizedImageUrl = await optimizeImage(file);
      onUpload(optimizedImageUrl);
      
      const img = new Image();
      img.crossOrigin = 'Anonymous';
      img.onload = () => {
        extractColors(img);
        setLoading(false);
      };
      img.onerror = () => {
        setError('Error loading image');
        setLoading(false);
      };
      img.src = optimizedImageUrl;
    } catch (error) {
      setError('Error processing image');
      setLoading(false);
    }
  }, [onUpload, extractColors, optimizeImage]);

  // Event handler'ları useCallback ile optimize edelim
  const handleDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault();
      const file = e.dataTransfer.files[0];
      if (file && file.type.startsWith('image/')) {
        handleFile(file);
      }
    },
    [handleFile]
  );

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      handleFile(file);
    }
  }, [handleFile]);

  return (
    <div 
      onDragOver={(e) => e.preventDefault()}
      onDrop={handleDrop}
      className="relative h-full"
    >
      <input
        type="file"
        onChange={handleChange}
        accept="image/*"
        className="hidden"
        id="image-upload"
      />

      {/* Desktop görünümü */}
      <label
        htmlFor="image-upload"
        className="hidden sm:flex flex-col items-center justify-center w-full h-64 border-2 border-dashed rounded-xl cursor-pointer border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 hover:border-purple-400 dark:hover:border-purple-500 transition-all duration-200 group"
      >
        <div className="flex flex-col items-center justify-center pt-5 pb-6">
          <Upload className="w-10 h-10 mb-3 text-gray-400 dark:text-gray-500 group-hover:text-purple-500 dark:group-hover:text-purple-400 transition-colors" />
          <p className="text-base font-medium text-gray-700 dark:text-gray-300 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
            Click to upload or drag and drop
          </p>
          <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
            PNG, JPG, WEBP up to 10MB
          </p>
        </div>
      </label>

      {/* Mobil görünümü */}
      <label
        htmlFor="image-upload"
        className="block sm:hidden w-full"
      >
        <div className="flex flex-col gap-2">
          <div className="w-full px-4 py-3.5 bg-gradient-to-r from-purple-500 to-indigo-600 text-white font-medium rounded-xl active:scale-95 transition-all duration-200 flex items-center justify-center gap-2 shadow-lg shadow-purple-500/25">
            <Upload className="w-5 h-5" />
            Select Image
          </div>
          <p className="text-xs text-center text-gray-500 dark:text-gray-400">
            PNG, JPG, WEBP up to 10MB
          </p>
        </div>
      </label>

      {error && (
        <p className="mt-2 text-xs sm:text-sm text-red-500 text-center">{error}</p>
      )}
      {loading && (
        <div className="absolute inset-0 bg-white/80 dark:bg-gray-800/80 rounded-xl flex items-center justify-center">
          <div className="animate-spin w-6 h-6 border-2 border-purple-500 border-t-transparent rounded-full" />
        </div>
      )}
    </div>
  );
});

export default ImageUploader;