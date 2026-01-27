import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Method from './components/Method';
import Features from './components/Features';
import Manifesto from './components/Manifesto';
import Footer from './components/Footer';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Toggle Dark Mode
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className={`selection:bg-sage-100 selection:text-ink min-h-screen transition-colors duration-300 ${isDarkMode ? 'dark bg-slate-900 text-white' : 'bg-paper text-ink'}`}>
      <div className="bg-dot-grid"></div>

      {/* Navigation */}
      <Navbar
        isDarkMode={isDarkMode}
        setIsDarkMode={setIsDarkMode}
        scrollToSection={scrollToSection}
      />

      {/* Hero Section */}
      <Hero
        isDarkMode={isDarkMode}
        scrollToSection={scrollToSection}
      />

      {/* The Method Section */}
      <Method isDarkMode={isDarkMode} />

      {/* Subsurface Intelligence Feature Set */}
      <Features isDarkMode={isDarkMode} />

      {/* Manifesto Section */}
      <Manifesto isDarkMode={isDarkMode} />

      {/* Footer / Contact */}
      <Footer isDarkMode={isDarkMode} />
    </div>
  );
}

export default App;
