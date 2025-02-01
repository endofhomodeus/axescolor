import React, { memo, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { lazy, Suspense } from 'react';

// Lazy load icons
const Github = lazy(() => import('lucide-react').then(module => ({ default: module.Github })));
const Mail = lazy(() => import('lucide-react').then(module => ({ default: module.Mail })));
const FaPatreon = lazy(() => import('react-icons/fa').then(module => ({ default: module.FaPatreon })));
const FaPinterest = lazy(() => import('react-icons/fa').then(module => ({ default: module.FaPinterest })));

// Static data moved outside component
const FEATURES_LINKS = [
  { to: '/image-picker', label: 'Image Color Extractor' },
  { to: '/palette-generator', label: 'Color Combination Concepts' },
  { to: '/explore', label: 'Color Harmony Wheel' },
  { to: '/color-picker', label: 'Screen Color Picker' },
  { to: '/pattern-maker', label: 'Image to Pattern Creator' },
] as const;

const LEGAL_LINKS = [
  { label: 'Privacy Policy', href: '/privacy' },
  { label: 'Terms of Service', href: '/terms' },
  { label: 'Cookie Policy', href: '/cookies' },
] as const;

const IconWrapper = memo(({ children }: { children: React.ReactNode }) => (
  <Suspense fallback={<div className="w-5 h-5 bg-gray-200 animate-pulse rounded" />}>
    {children}
  </Suspense>
));

const Footer: React.FC = memo(() => {
  const socialLinks = useMemo(() => [
    { Icon: Github, label: 'GitHub', href: 'https://github.com/endofhomodeus', username: 'Github' },
    { Icon: FaPinterest, label: 'Pinterest', href: 'https://www.pinterest.com/axonswift/', username: 'Pinterest' },
    { Icon: Mail, label: 'Email', href: 'mailto:axonswift@gmail.com', username: 'Contact Me' },
  ], []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative z-20 bg-white dark:bg-gray-950 border-t border-gray-200 dark:border-gray-800 mt-16" role="contentinfo" aria-label="Site footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 py-12">
          {/* Brand Section */}
          <div className="col-span-1 sm:col-span-2 lg:col-span-2">
            <Link 
              to="/" 
              className="inline-flex items-center text-xl sm:text-2xl font-bold bg-gradient-to-r from-rose-500 to-blue-800 hover:from-rose-400 hover:to-blue-700 dark:from-rose-300 dark:to-blue-400 bg-clip-text text-transparent transition-all duration-300"
              aria-label="Color Palette Generator Home"
            >
              AXESCOLOR
            </Link>
            <p className="mt-4 text-gray-600 dark:text-gray-400 text-base leading-relaxed max-w-md">
              Create stunning color palettes using AI technology. Perfect for designers, 
              developers, and creative professionals.
            </p>
            <button
              onClick={scrollToTop}
              className="mt-6 group inline-flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 transition-colors duration-200"
              aria-label="Scroll to top"
            >
              <span className="relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-px after:bg-gradient-to-r after:from-rose-500 after:to-blue-800 dark:after:from-rose-300 dark:after:to-blue-400 after:origin-right after:scale-x-0 after:transition-transform after:duration-200 group-hover:after:origin-left group-hover:after:scale-x-100">
                Back to top
              </span>
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
          </div>

          {/* Quick Links - Using semantic HTML */}
          <nav className="space-y-6" aria-label="Footer navigation">
            <h2 className="font-semibold text-lg text-gray-900 dark:text-white">Features</h2>
            <ul className="space-y-3">
              {FEATURES_LINKS.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="group inline-flex text-gray-600 dark:text-gray-400 transition-all duration-200"
                  >
                    <span className="relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-px after:bg-gradient-to-r after:from-rose-500 after:to-blue-800 dark:after:from-rose-300 dark:after:to-blue-400 after:origin-right after:scale-x-0 after:transition-transform after:duration-200 group-hover:after:origin-left group-hover:after:scale-x-100">
                      {link.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Social Links */}
          <div className="space-y-6">
            <h2 className="font-semibold text-lg text-gray-900 dark:text-white">Connect</h2>
            <ul className="space-y-3">
              {socialLinks.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-3 text-gray-600 dark:text-gray-400 transition-all duration-200"
                    aria-label={`Follow us on ${item.label}`}
                  >
                    <IconWrapper>
                      <item.Icon className="w-5 h-5 transition-all duration-200 group-hover:scale-110 group-hover:text-rose-500 dark:group-hover:text-rose-300" aria-hidden="true" />
                    </IconWrapper>
                    <span className="relative inline-block after:absolute after:bottom-0 after:left-0 after:w-full after:h-px after:bg-gradient-to-r after:from-rose-500 after:to-blue-800 dark:after:from-rose-300 dark:after:to-blue-400 after:origin-right after:scale-x-0 after:transition-transform after:duration-200 group-hover:after:origin-left group-hover:after:scale-x-100">
                      <span className="hidden sm:inline">{item.username}</span>
                      <span className="sm:hidden">{item.label}</span>
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200 dark:border-gray-800 py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
            <p className="order-2 sm:order-1">
              © {new Date().getFullYear()} AXESCOLOR. All rights reserved.
            </p>
            <nav className="order-1 sm:order-2 flex flex-wrap justify-center gap-x-6 gap-y-2" aria-label="Legal navigation">
              {LEGAL_LINKS.map((link) => (
                <Link
                  key={link.label}
                  to={link.href}
                  className="group relative text-gray-600 dark:text-gray-400 transition-all duration-200"
                >
                  <span className="relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-px after:bg-gradient-to-r after:from-rose-500 after:to-blue-800 dark:after:from-rose-300 dark:after:to-blue-400 after:origin-right after:scale-x-0 after:transition-transform after:duration-200 group-hover:after:origin-left group-hover:after:scale-x-100">
                    {link.label}
                  </span>
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
});

Footer.displayName = 'Footer';

export default Footer;