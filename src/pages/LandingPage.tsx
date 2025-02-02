import React from 'react'; // useState ve useEffect kaldırıldı
import { useNavigate } from 'react-router-dom';
import { 
  Palette, 
  Image as ImageIcon, 
  Droplet, 
  Grid, 
  Compass,
  ArrowRight,
  Sparkles,
  Heart
} from 'lucide-react';
import { Helmet } from 'react-helmet'; 

const LandingPage: React.FC = () => {
  const navigate = useNavigate();
  
  
  const tools = [
    {
      id: 'image-color',
      title: 'Image Color Extractor',
      description: 'Extract beautiful color palettes from your images effortlessly for design inspiration and creativity',
      icon: <ImageIcon className="w-6 h-6" />,
      path: '/image-picker',
      color: 'from-pink-500 to-rose-500'
    },
    {
      id: 'ai-palette',
      title: 'Color Combination Concepts',
      description: 'Explore 550+ finely curated color palettes for your creative projects and design inspiration',
      icon: <Palette className="w-6 h-6" />,
      path: '/palette-generator',
      color: 'from-purple-500 to-indigo-500'
    },
    {
      id: 'color-wheel',
      title: 'Color Harmony Wheel',
      description: 'Interactive color wheel for finding perfect complementary, analogous, and triadic color schemes',
      icon: <Compass className="w-6 h-6" />,
      path: '/explore',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: 'screen-picker',
      title: 'Screen Color Picker',
      description: 'Pick colors from anywhere on your screen or from uploaded photos',
      icon: <Droplet className="w-6 h-6" />,
      path: '/color-picker',
      color: 'from-emerald-500 to-teal-500'
    },
    {
      id: 'pattern-maker',
      title: 'Image to Pattern Creator',
      description: 'Transform your photos and designs into patterns with 15+ different styles',
      icon: <Grid className="w-6 h-6" />,
      path: '/pattern-maker',
      color: 'from-amber-500 to-orange-500'
    }
  ];

  const features = [
    {
      icon: <Sparkles className="w-6 h-6" />,
      title: "Color Extraction",
      description: "Extract beautiful color palettes from any image instantly"
    },
    {
      icon: <Grid className="w-6 h-6" />,
      title: "Pattern Generation",
      description: "Create patterns from your colors and images"
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Color Accessibility",
      description: "WCAG compliance checking for all color combinations"
    }
  ];

  const statistics = [
    { number: "10K+", label: "Daily Active Users" },
    { number: "50K+", label: "Generated Palettes" },
    { number: "100%", label: "Free Forever" },
    { number: "24/7", label: "Available" }
  ];

  const testimonials = [
    {
      quote: "This tool saved me so much time on my latest project. The color extraction feature is spot-on!",
      author: "Akiko Yamamoto",
      role: "Product Designer"
    },
    {
      quote: "Finally found a color tool that actually works for my needs. Using it daily for all my design work now.",
      author: "Lucas Silva",
      role: "Freelance UI Designer"
    },
    {
      quote: "Been looking for something like this for ages. Super intuitive and the patterns feature is good!",
      author: "Priya Patel",
      role: "Art Director"
    }
  ];

  const useCases = [
    {
      title: "Web Design",
      description: "Create stunning color schemes for websites and applications",
      icon: "🎨"
    },
    {
      title: "Brand Identity",
      description: "Develop consistent brand color palettes",
      icon: "✨"
    },
    {
      title: "Digital Art",
      description: "Find perfect color combinations for your artwork",
      icon: "🖼️"
    }
  ];

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* SEO Optimizasyonu */}
      <Helmet>
        <title>Color Tools Suite - Free Color Management Tools for Designers</title>
        <meta name="description" content="Comprehensive suite of free color tools for designers. Generate palettes, extract colors from images, create patterns, and more. 100% free forever." />
        <meta name="keywords" content="color tools, color palette generator, color picker, pattern maker, design tools, free design tools" />
        <meta property="og:title" content="Color Tools Suite - Free Color Management Tools" />
        <meta property="og:description" content="Complete suite of color tools for designers - 100% free forever" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://yourwebsite.com/landing" />
      </Helmet>

      {/* Simplified Background - Reduced animations */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 
          bg-gradient-to-r from-rose-200/30 to-blue-200/30 
          dark:from-rose-500/5 dark:to-blue-500/10 
          rounded-full blur-2xl"
        ></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 
          bg-gradient-to-r from-blue-200/30 to-rose-200/30 
          dark:from-blue-500/5 dark:to-rose-500/10 
          rounded-full blur-2xl"
        ></div>
      </div>

      {/* Simplified page background */}
      <div className="fixed inset-0 bg-gradient-to-b from-white to-rose-50/30 dark:from-gray-900 dark:to-gray-800/30 -z-10"></div>

      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 pt-12 pb-24">
          {/* Hero Content - Updated gradients */}
          <div className="text-center mb-12 md:mb-20 space-y-4 md:space-y-6 px-4">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-rose-500 to-blue-800 dark:from-rose-300 dark:to-blue-400">
                Bring Your Colors to Life
              </span>
            </h1>
            
            <p className="text-lg sm:text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed px-4">
              Every great design begins with the perfect palette. Discover the colors that speak 
              to your creativity, shape your vision, and make your work unforgettable.
            </p>

            {/* Updated Free Forever Banner */}
            <div className="bg-gradient-to-r from-rose-100 to-blue-100 dark:from-rose-900/20 dark:to-blue-900/20 p-4 rounded-xl inline-block">
              <p className="text-lg text-rose-700 dark:text-rose-300 font-medium">
                🎉 100% Free Forever - No Sign-up Required
              </p>
            </div>

            <div className="flex flex-col sm:flex-row justify-center gap-4 px-4 mt-8">
              <button
                onClick={() => navigate('/image-picker')}
                className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 
                           bg-gradient-to-r from-rose-500 to-blue-800 
                           text-white rounded-xl font-medium 
                           transition-all duration-200 
                           min-w-[160px]
                           hover:shadow-lg hover:shadow-rose-500/20
                           hover:translate-y-[-1px]
                           active:translate-y-[1px]"
              >
                Get Started
              </button>
              <button
                onClick={() => navigate('/palette-generator')}
                className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 
                           bg-gradient-to-r from-rose-50 to-blue-50 
                           dark:from-gray-800 dark:to-gray-800 
                           rounded-xl font-medium 
                           transition-all duration-200
                           border border-gray-200
                           min-w-[160px]
                           hover:shadow-lg hover:shadow-blue-500/20
                           hover:translate-y-[-1px]
                           hover:border-gray-300 dark:hover:border-gray-600
                           active:translate-y-[1px)"
              >
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-rose-500 to-blue-800 
                               dark:from-rose-300 dark:to-blue-400">
                  Explore Palettes
                </span>
              </button>
            </div>
          </div>

          {/* Updated Tools Grid with centered bottom cards */}
          <div className="max-w-6xl mx-auto">
            {/* Top row with 3 cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 mb-8">
              {tools.slice(0, 3).map((tool) => (
                <button
                  key={tool.id}
                  onClick={() => navigate(tool.path)}
                  className="group relative p-8 rounded-2xl bg-white/90 dark:bg-gray-800/90 
                           border-[3px] border-gray-300 dark:border-gray-700
                           shadow-lg hover:shadow-xl
                           transition-shadow
                           backdrop-blur-sm
                           min-h-[320px] flex flex-col justify-between items-center"
                >
                  <div className="relative z-10 flex flex-col items-center h-full w-full">
                    {/* Icon container */}
                    <div className="relative w-16 h-16 mb-8">
                      <div className={`absolute inset-0 bg-gradient-to-r ${tool.color} 
                        rounded-xl transition-transform duration-200
                        group-hover:scale-105`}
                      >
                      </div>
                      <div className="absolute inset-0 flex items-center justify-center text-white">
                        {tool.icon}
                      </div>
                    </div>
                    
                    {/* Content container - Fixed height for consistent title positioning */}
                    <div className="flex flex-col items-center flex-grow my-4">
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 group-hover:text-rose-600 dark:group-hover:text-rose-400 transition-colors duration-200">
                        {tool.title}
                      </h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400 text-center mb-4">
                        {tool.description}
                      </p>
                    </div>
                    
                    {/* Try now container */}
                    <div className="flex items-center justify-center text-sm font-medium text-gray-900 dark:text-white gap-1 group-hover:text-rose-600 dark:group-hover:text-rose-400 transition-colors duration-200 mt-auto">
                      Try now
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </button>
              ))}
            </div>

            {/* Bottom row with 2 centered cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 md:w-2/3 mx-auto">
              {tools.slice(3).map((tool) => (
                <button
                  key={tool.id}
                  onClick={() => navigate(tool.path)}
                  className="group relative p-8 rounded-2xl bg-white/90 dark:bg-gray-800/90 
                           border-[3px] border-gray-300 dark:border-gray-700
                           shadow-lg hover:shadow-xl
                           transition-shadow
                           backdrop-blur-sm
                           min-h-[320px] flex flex-col justify-between items-center"
                >
                  <div className="relative z-10 flex flex-col items-center h-full w-full">
                    {/* Icon container */}
                    <div className="relative w-16 h-16 mb-8">
                      <div className={`absolute inset-0 bg-gradient-to-r ${tool.color} 
                        rounded-xl transition-transform duration-200
                        group-hover:scale-105`}
                      >
                      </div>
                      <div className="absolute inset-0 flex items-center justify-center text-white">
                        {tool.icon}
                      </div>
                    </div>
                    
                    {/* Content container - Fixed height for consistent title positioning */}
                    <div className="flex flex-col items-center flex-grow my-4">
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 group-hover:text-rose-600 dark:group-hover:text-rose-400 transition-colors duration-200">
                        {tool.title}
                      </h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400 text-center mb-4">
                        {tool.description}
                      </p>
                    </div>
                    
                    {/* Try now container */}
                    <div className="flex items-center justify-center text-sm font-medium text-gray-900 dark:text-white gap-1 group-hover:text-rose-600 dark:group-hover:text-rose-400 transition-colors duration-200 mt-auto">
                      Try now
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Features Section - Updated headings and cards */}
          <div className="mt-32 text-center relative">
            <div className="absolute inset-0 bg-gradient-to-r from-rose-50/50 to-blue-50/50 dark:from-rose-900/10 dark:to-blue-900/10 rounded-3xl -z-10 blur-xl"></div>
            <h2 className="text-4xl font-bold mb-16 bg-gradient-to-r from-rose-500 to-blue-800 dark:from-rose-300 dark:to-blue-400 bg-clip-text text-transparent">
              Powerful Features
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className="p-6 rounded-2xl bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm
                           border-2 border-gray-200 dark:border-gray-700"
                >
                  <div className="flex justify-center mb-4">
                    <div className="p-3 rounded-xl bg-rose-100 dark:bg-rose-900/30 text-rose-600 dark:text-rose-400">
                      {feature.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Statistics Section - Updated background and numbers */}
          <div className="py-16 bg-gradient-to-b from-transparent via-rose-50/50 to-blue-50/50 dark:from-transparent dark:to-rose-950/20">
            <div className="max-w-7xl mx-auto px-4">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 px-4 md:px-0">
                {statistics.map((stat, index) => (
                  <div key={index} className="text-center space-y-2">
                    <div className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-rose-500 to-blue-800 dark:from-rose-300 dark:to-blue-400">
                      {stat.number}
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-300">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Use Cases Section */}
          <div className="py-16 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-50/50 to-rose-50/50 dark:from-blue-900/10 dark:to-rose-900/10 rounded-3xl -z-10 blur-xl"></div>
            <div className="max-w-7xl mx-auto px-4">
              <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-rose-500 to-blue-800 dark:from-rose-300 dark:to-blue-400 bg-clip-text text-transparent">
                Perfect For Every Creative Need
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {useCases.map((useCase, index) => (
                  <div key={index} className="p-6 bg-white/80 dark:bg-gray-800/80 rounded-2xl backdrop-blur-sm border-2 border-gray-200 dark:border-gray-700">
                    <div className="text-4xl mb-4">{useCase.icon}</div>
                    <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                      {useCase.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      {useCase.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Updated Testimonials Section with gradient heading */}
          <div className="py-16 bg-gradient-to-b from-transparent via-rose-50/50 to-blue-50/50 dark:from-transparent dark:to-rose-950/20">
            <div className="max-w-7xl mx-auto px-4">
              <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-rose-500 to-blue-800 dark:from-rose-300 dark:to-blue-400 bg-clip-text text-transparent">
                What Users Say
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 px-4 md:px-0">
                {testimonials.map((testimonial, index) => (
                  <div 
                    key={index} 
                    className="p-8 bg-white/80 dark:bg-gray-800/80 rounded-2xl backdrop-blur-sm 
                               border-2 border-gray-300 dark:border-gray-600
                               relative flex flex-col min-h-[280px]"
                  >
                    <span className="absolute top-4 left-4 text-4xl text-gray-200 dark:text-gray-700 font-serif select-none">
                      &ldquo;
                    </span>
                    <div className="relative flex flex-col flex-grow">
                      <p className="text-gray-600 dark:text-gray-300 mb-6 text-lg italic">
                        {testimonial.quote}
                      </p>
                      <div className="mt-auto pt-4 border-t border-gray-100 dark:border-gray-700">
                        <div className="flex items-center gap-3">
                          <div className="h-10 w-10 flex-shrink-0 rounded-full bg-gradient-to-r from-rose-400 to-blue-400 flex items-center justify-center text-white font-medium">
                            {testimonial.author[0]}
                          </div>
                          <div className="min-w-0 flex-1">
                            <div className="font-medium text-gray-900 dark:text-white truncate">
                              {testimonial.author}
                            </div>
                            <div className="text-sm text-gray-500 dark:text-gray-400 truncate">
                              {testimonial.role}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Updated Quick Start Guide with gradient heading */}
          <div className="py-16">
            <div className="max-w-7xl mx-auto px-4">
              <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-rose-500 to-blue-800 dark:from-rose-300 dark:to-blue-400 bg-clip-text text-transparent">
                Get Started in Seconds
              </h2>
              <div className="flex flex-col md:flex-row gap-8 items-center justify-center">
                <div className="flex-1 space-y-8 max-w-md">
                  {[
                    { step: 1, text: "Choose your tool from our suite" },
                    { step: 2, text: "Upload an image or select colors" },
                    { step: 3, text: "Generate your perfect palette" }
                  ].map(({ step, text }) => (
                    <div key={step} className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-rose-100 dark:bg-rose-900/30 flex items-center justify-center text-rose-600 dark:text-rose-400 font-bold">
                        {step}
                      </div>
                      <p className="text-gray-700 dark:text-gray-300">{text}</p>
                    </div>
                  ))}
                </div>
                {/* Ekran görüntüsü veya animasyon eklenebilir */}
              </div>
            </div>
          </div>

          {/* Accessibility and Support Info */}
          <div className="mt-32 text-center max-w-3xl mx-auto">
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Our tools are freely accessible to everyone, forever. We believe in supporting the creative community with high-quality design resources that are completely free to use.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
