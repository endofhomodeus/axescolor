import React, { useState, useRef, useEffect, useMemo, useCallback } from 'react';
import { useParams, Link } from 'react-router-dom';
import ColorPalette from '../components/ColorPalette';
import { PREDEFINED_PALETTES } from '../data/palettes';
import namer from 'color-namer';
import { Check, Copy, ArrowLeft, Share2, Twitter, Facebook, Linkedin, Instagram, MoreHorizontal, X, Pin, MessageCircle, Send, Mail, Link2 } from 'lucide-react';

// Share menüsünü ayrı bir component olarak çıkaralım
const ShareMenu = React.memo(({ isOpen, onClose, onShare, shareMenuRef }: {
  isOpen: boolean;
  onClose: () => void;
  onShare: (platform: string) => void;
  shareMenuRef: React.RefObject<HTMLDivElement>;
}) => {
  return (
    <div className="relative mt-4" ref={shareMenuRef}>
      <button 
        onClick={onClose}
        className="group relative inline-flex items-center justify-center px-6 py-3 text-sm font-medium tracking-wide text-white transition-all duration-200 ease-in-out transform bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-lg hover:from-violet-600 hover:to-fuchsia-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-violet-500"
      >
        <Share2 className="w-5 h-5 mr-2 transition-transform group-hover:rotate-12" />
        Share Palette
      </button>
      
      {isOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50"
          onClick={onClose}
        >
          <div 
            className="bg-white dark:bg-gray-800 rounded-xl shadow-2xl w-full max-w-[600px] overflow-hidden relative"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="sticky top-0 px-4 py-3 border-b border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 flex justify-between items-center">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Share Palette</h3>
              <button
                onClick={() => onClose()}
                className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              >
                <X className="w-5 h-5 text-gray-500 dark:text-gray-400" />
              </button>
            </div>

            <div className="p-6 overflow-y-auto max-h-[calc(80vh-60px)] sm:max-h-none">
              <div className="grid grid-cols-4 sm:grid-cols-4 lg:grid-cols-8 gap-6">
                <div className="flex flex-col items-center gap-2">
                  <button
                    onClick={() => onShare('copy')}
                    className="w-14 h-14 flex items-center justify-center rounded-xl transition-all duration-200 bg-violet-500 hover:bg-violet-600 text-white hover:scale-105"
                    title="Copy Link"
                  >
                    <Link2 className="w-6 h-6" />
                  </button>
                  <span className="text-[11px] font-medium text-gray-700 dark:text-gray-300 whitespace-nowrap">Copy Link</span>
                </div>

                <div className="flex flex-col items-center gap-2">
                  <button
                    onClick={() => onShare('pinterest')}
                    className="w-14 h-14 flex items-center justify-center rounded-xl transition-all duration-200 bg-[#E60023] hover:bg-[#ad021b] text-white hover:scale-105"
                    title="Share on Pinterest"
                  >
                    <Pin className="w-6 h-6" />
                  </button>
                  <span className="text-[11px] font-medium text-gray-700 dark:text-gray-300 whitespace-nowrap">Pinterest</span>
                </div>
                
                <div className="flex flex-col items-center gap-2">
                  <button
                    onClick={() => onShare('twitter')}
                    className="w-14 h-14 flex items-center justify-center rounded-xl transition-all duration-200 bg-black hover:bg-gray-800 text-white hover:scale-105"
                    title="Share on X (Twitter)"
                  >
                    <X className="w-6 h-6" />
                  </button>
                  <span className="text-[11px] font-medium text-gray-700 dark:text-gray-300 whitespace-nowrap">X</span>
                </div>

                <div className="flex flex-col items-center gap-2">
                  <button
                    onClick={() => onShare('instagram')}
                    className="w-14 h-14 flex items-center justify-center rounded-xl transition-all duration-200 bg-gradient-to-tr from-[#FF0069] via-[#E4405F] to-[#FD1D1D] hover:from-[#FF1A75] hover:via-[#E45E7A] hover:to-[#FD3434] text-white hover:scale-105"
                    title="Share on Instagram"
                  >
                    <Instagram className="w-6 h-6" />
                  </button>
                  <span className="text-[11px] font-medium text-gray-700 dark:text-gray-300 whitespace-nowrap">Instagram</span>
                </div>

                <div className="flex flex-col items-center gap-2">
                  <button
                    onClick={() => onShare('whatsapp')}
                    className="w-14 h-14 flex items-center justify-center rounded-xl transition-all duration-200 bg-[#25D366] hover:bg-[#128C7E] text-white hover:scale-105"
                    title="Share on WhatsApp"
                  >
                    <MessageCircle className="w-6 h-6" />
                  </button>
                  <span className="text-[11px] font-medium text-gray-700 dark:text-gray-300 whitespace-nowrap">WhatsApp</span>
                </div>

                <div className="flex flex-col items-center gap-2">
                  <button
                    onClick={() => onShare('telegram')}
                    className="w-14 h-14 flex items-center justify-center rounded-xl transition-all duration-200 bg-[#0088cc] hover:bg-[#006699] text-white hover:scale-105"
                    title="Share on Telegram"
                  >
                    <Send className="w-6 h-6" />
                  </button>
                  <span className="text-[11px] font-medium text-gray-700 dark:text-gray-300 whitespace-nowrap">Telegram</span>
                </div>

                <div className="flex flex-col items-center gap-2">
                  <button
                    onClick={() => onShare('gmail')}
                    className="w-14 h-14 flex items-center justify-center rounded-xl transition-all duration-200 bg-[#EA4335] hover:bg-[#D33828] text-white hover:scale-105"
                    title="Share via Gmail"
                  >
                    <Mail className="w-6 h-6" />
                  </button>
                  <span className="text-[11px] font-medium text-gray-700 dark:text-gray-300 whitespace-nowrap">Gmail</span>
                </div>

                {navigator.share && (
                  <div className="flex flex-col items-center gap-2">
                    <button
                      onClick={() => onShare('native')}
                      className="w-14 h-14 flex items-center justify-center rounded-xl transition-all duration-200 bg-gray-600 hover:bg-gray-700 text-white hover:scale-105"
                      title="More Options"
                    >
                      <MoreHorizontal className="w-6 h-6" />
                    </button>
                    <span className="text-[11px] font-medium text-gray-700 dark:text-gray-300 whitespace-nowrap">Other</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
});

const PaletteDetailPage: React.FC = () => {
  const { category, paletteName } = useParams<{ category: string; paletteName: string }>();
  const palette = PREDEFINED_PALETTES[category as keyof typeof PREDEFINED_PALETTES]?.find(
    p => p.name === paletteName
  );

  const [copied, setCopied] = useState(false);
  const [showShareMenu, setShowShareMenu] = useState(false);
  const shareMenuRef = useRef<HTMLDivElement>(null);
  const [copiedColor, setCopiedColor] = useState<string | null>(null);

  const colorNamesCache = useMemo(() => {
    return palette?.colors.map(color => {
      const names = namer(color);
      return {
        hex: color,
        name: names.ntc[0].name
      };
    }) || [];
  }, [palette?.colors]);

  const copyAllColors = useCallback(() => {
    const colorCodes = palette?.colors.join(', ');
    navigator.clipboard.writeText(colorCodes || '').then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  }, [palette?.colors]);

  const copyColor = useCallback((color: string) => {
    navigator.clipboard.writeText(color).then(() => {
      setCopiedColor(color);
      setTimeout(() => setCopiedColor(null), 2000);
    });
  }, []);

  const getShareText = () => {
    const colorNames = palette?.colors.map(color => {
      const names = namer(color);
      return `${names.ntc[0].name} (${color})`;
    });
    return {
      title: `${palette?.name} - Beautiful Color Palette`,
      text: `🎨 Check out this stunning color palette:\n\n${palette?.name}\n\n Colors:\n${colorNames?.join('\n')}\n\n Create your own palette at`,
      url: window.location.href
    };
  };

  const handleShare = useCallback(async (platform: string) => {
    const { title, text, url } = getShareText();
    const hashtags = 'ColorPalette,Design,Colors,WebDesign,UI';
    const fullText = `${text}\n\n${url}`;

    switch (platform) {
      case 'pinterest':
        window.open(
          `https://pinterest.com/pin/create/button/?url=${encodeURIComponent(url)}&description=${encodeURIComponent(text)}`,
          'Pinterest',
          'width=600,height=400'
        );
        break;
      case 'twitter':
        window.open(
          `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}&hashtags=${hashtags}`,
          'X',
          'width=600,height=400'
        );
        break;
      case 'instagram':
        // Instagram API direkt paylaşıma izin vermediği için kopyalama işlemi yapalım
        navigator.clipboard.writeText(`${text}\n\n${url}\n\n#${hashtags.split(',').join(' #')}`);
        alert('Instagram paylaşım metni kopyalandı! Instagram Stories\'e yapıştırabilirsiniz.');
        break;
      case 'facebook':
        window.open(
          `https://www.facebook.com/dialog/share?app_id=YOUR_FB_APP_ID&href=${encodeURIComponent(url)}&quote=${encodeURIComponent(text)}`,
          'Facebook',
          'width=600,height=400'
        );
        break;
      case 'whatsapp':
        window.open(
          `https://wa.me/?text=${encodeURIComponent(fullText)}`,
          'WhatsApp',
          'width=600,height=400'
        );
        break;
      case 'telegram':
        window.open(
          `https://t.me/share/url?url=${encodeURIComponent(url)}&text=${encodeURIComponent(text)}`,
          'Telegram',
          'width=600,height=400'
        );
        break;
      case 'gmail':
        window.open(
          `https://mail.google.com/mail/?view=cm&fs=1&tf=1&su=${encodeURIComponent(title)}&body=${encodeURIComponent(fullText)}`,
          'Gmail',
          'width=600,height=400'
        );
        break;
      case 'copy':
        navigator.clipboard.writeText(fullText);
        setShowShareMenu(false); // Sadece menüyü kapatalım
        break;
      case 'linkedin':
        window.open(
          `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
          'LinkedIn',
          'width=600,height=400'
        );
        break;
      case 'native':
        if (navigator.share) {
          try {
            await navigator.share({ title, text, url });
          } catch (err) {
            console.error('Error sharing:', err);
          }
        }
        break;
    }
    setShowShareMenu(false);
  }, [getShareText]);

  const relatedPalettes = useMemo(() => 
    PREDEFINED_PALETTES[category as keyof typeof PREDEFINED_PALETTES]?.filter(
      p => p.name !== paletteName
    ) || [],
  [category, paletteName]);

  const getPalettesWithSharedTags = (currentPaletteTags: string[], allPalettes: typeof PREDEFINED_PALETTES, excludePalettes: string[]) => {
    const sharedTagPalettes: typeof PREDEFINED_PALETTES = [];
    for (const category in allPalettes) {
      allPalettes[category].forEach(palette => {
        if (!excludePalettes.includes(palette.name) && palette.tags.some(tag => currentPaletteTags.includes(tag))) {
          sharedTagPalettes.push({ ...palette, category });
        }
      });
    }
    return sharedTagPalettes;
  };

  const sharedTagPalettes = useMemo(() => {
    if (!palette?.tags) return [];
    return getPalettesWithSharedTags(
      palette.tags,
      PREDEFINED_PALETTES,
      [...relatedPalettes.map(p => p.name), palette.name]
    );
  }, [palette?.tags, relatedPalettes, palette?.name]);

  const handleClickOutside = useCallback((event: MouseEvent) => {
    if (shareMenuRef.current && !shareMenuRef.current.contains(event.target as Node)) {
      setShowShareMenu(false);
    }
  }, []);

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [handleClickOutside]);

  if (!palette) {
    return (
      <div className="min-h-screen p-4 sm:p-8 bg-white dark:bg-gray-900">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-2xl sm:text-4xl font-bold mb-4 text-gray-900 dark:text-white">Palette not found</h1>
          <Link to="/palette-generator" className="text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300">
            Return to Palette Generator
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen p-4 sm:p-8 bg-white dark:bg-gray-900">
      <div className="max-w-4xl mx-auto">
        <div className="mb-4 sm:mb-8">
          <Link 
            to="/palette-generator"
            className="inline-flex items-center px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 
              bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700
              text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white
              border border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600
              shadow-sm hover:shadow group w-fit"
          >
            <ArrowLeft className="w-4 h-4 mr-2 transition-transform group-hover:-translate-x-1" />
            Back to Generator
          </Link>
        </div>

        <h1 className="text-2xl sm:text-4xl font-bold text-center mb-8 sm:mb-12 text-gray-900 dark:text-white">
          {palette.name}
        </h1>

        <div className="mb-12 sm:mb-16">
          <h2 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 text-gray-800 dark:text-gray-200">
            Suggested Palettes
          </h2>

          <div className="hidden sm:block">
            <ColorPalette
              colors={colorNamesCache}
              gridCols={5}
              smGridCols={5}
              mdGridCols={5}
              showName={true}
              stretch={false}
              className="suggested-palettes"
            />
          </div>

          <div className="block sm:hidden">
            <div className="grid grid-cols-2 gap-3">
              {colorNamesCache.map((color, index) => (
                <div 
                  key={index} 
                  className="flex items-center gap-2 p-2 rounded-lg border border-gray-200 dark:border-gray-700 relative group"
                  onClick={() => copyColor(color.hex)}
                >
                  <div 
                    className="w-16 h-16 rounded-lg border border-gray-300 dark:border-gray-600 shrink-0 cursor-pointer transition-transform active:scale-95 relative"
                    style={{ backgroundColor: color.hex }}
                  >
                    {copiedColor === color.hex && (
                      <div className="absolute inset-0 flex items-center justify-center bg-black/30 rounded-lg">
                        <Check className="w-6 h-6 text-white" />
                      </div>
                    )}
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs font-medium text-gray-900 dark:text-white truncate">
                      {color.name}
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      {color.hex}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-6 sm:mt-8 text-center">
            <button 
              onClick={copyAllColors}
              className="group relative inline-flex items-center justify-center px-6 py-3 text-sm font-medium tracking-wide text-white transition-all duration-200 ease-in-out transform bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg hover:from-blue-600 hover:to-cyan-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              <span className="flex items-center">
                Copy All Color Codes
                {copied ? (
                  <Check className="w-5 h-5 ml-2 transition-transform group-hover:scale-110" />
                ) : (
                  <Copy className="w-5 h-5 ml-2 transition-transform group-hover:scale-110" />
                )}
              </span>
            </button>
            <ShareMenu 
              isOpen={showShareMenu}
              onClose={() => setShowShareMenu(!showShareMenu)} // Burayı toggle olarak değiştiriyoruz
              onShare={handleShare} 
              shareMenuRef={shareMenuRef}
            />
          </div>

          <div className="mt-8 sm:mt-12">
            <h2 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 text-gray-800 dark:text-gray-200">
              Related Palettes
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
              {relatedPalettes?.map((relatedPalette, index) => (
                <Link
                  key={index}
                  to={`/palette/${category}/${relatedPalette.name}`}
                  className="block p-4 bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 border border-gray-300 dark:border-gray-700"
                >
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    {relatedPalette.name}
                  </h3>
                  <div className="grid grid-cols-5 gap-1.5">
                    {relatedPalette.colors.map((color, colorIndex) => (
                      <div
                        key={colorIndex}
                        className="w-full h-12 rounded-lg border border-gray-300 dark:border-gray-700"
                        style={{ backgroundColor: color }}
                      ></div>
                    ))}
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {sharedTagPalettes.length > 0 && (
            <div className="mt-8 sm:mt-12">
              <h2 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 text-gray-800 dark:text-gray-200">
                Other Palettes with Shared Tags
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
                {sharedTagPalettes.map((sharedPalette, index) => (
                  <Link
                    key={index}
                    to={`/palette/${sharedPalette.category}/${sharedPalette.name}`}
                    className="block p-4 bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 border border-gray-300 dark:border-gray-700"
                  >
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                      {sharedPalette.name}
                    </h3>
                    <div className="grid grid-cols-5 gap-1.5">
                      {sharedPalette.colors.map((color, colorIndex) => (
                        <div
                          key={colorIndex}
                          className="w-full h-12 rounded-lg border border-gray-300 dark:border-gray-700"
                          style={{ backgroundColor: color }}
                        ></div>
                      ))}
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

// Component'i memo ile export edelim
export default React.memo(PaletteDetailPage);
