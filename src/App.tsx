import React, { useState, useEffect } from 'react';
import { Moon, Sun } from 'lucide-react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { Routes, Route, useLocation, Navigate } from 'react-router-dom'; // Navigate'i ekleyelim
import HomePage from './pages/HomePage';
import ExplorePage from './pages/ExplorePage';
import PaletteGeneratorPage from './pages/PaletteGeneratorPage';
import PaletteDetailPage from './pages/PaletteDetailPage';
import ColorPickerPage from './pages/ColorPickerPage';
import PatternMakerPage from './pages/PatternMakerPage';
import LandingPage from './pages/LandingPage';
import { HelmetProvider } from 'react-helmet-async';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import CookiePolicy from './pages/CookiePolicy';

const App: React.FC = () => {
  const [darkMode, setDarkMode] = useState(() => {
    // localStorage'dan dark mode tercihini al
    const savedDarkMode = localStorage.getItem('darkMode');
    // Eğer tercih kaydedilmişse onu kullan, kaydedilmemişse true (dark mode) olarak başla
    return savedDarkMode ? JSON.parse(savedDarkMode) : true;
  });

  useEffect(() => {
    // Dark mode değiştiğinde localStorage'a kaydet
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
    // HTML elementine dark class'ını ekle/çıkar
    document.documentElement.classList.toggle('dark', darkMode);
  }, [darkMode]);

  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  return (
    <HelmetProvider>
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-200">
        <Navbar 
          darkMode={darkMode}
          toggleDarkMode={toggleDarkMode}
        />
        
        <main className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Routes>
            {/* Ana sayfayı landing sayfasına yönlendirelim */}
            <Route path="/" element={<Navigate to="/landing" replace />} />
            <Route path="/landing" element={<LandingPage />} />
            <Route path="/image-picker" element={<HomePage darkMode={darkMode} />} />
            <Route path="/palette-generator" element={<PaletteGeneratorPage />} />
            <Route path="/explore" element={<ExplorePage darkMode={darkMode} />} />
            <Route path="/palette/:category/:paletteName" element={<PaletteDetailPage />} />
            <Route path="/color-picker" element={<ColorPickerPage />} />
            <Route path="/pattern-maker" element={<PatternMakerPage />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/terms" element={<TermsOfService />} />
            <Route path="/cookies" element={<CookiePolicy />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </HelmetProvider>
  );
};

export default App;