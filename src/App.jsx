import { useState, useEffect } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { FaArrowUp } from 'react-icons/fa';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [loading, setLoading] = useState(true);
  const [darkMode, setDarkMode] = useState(true); // Default to Dark mode
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Scroll progress setup
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Handle Initial Loading Screen
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1600);
    return () => clearTimeout(timer);
  }, []);

  // Handle Dark Mode Sync
  useEffect(() => {
    // Check local storage or default to true (dark theme)
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
      setDarkMode(false);
      document.documentElement.classList.remove('dark');
    } else {
      setDarkMode(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleDarkMode = () => {
    if (darkMode) {
      setDarkMode(false);
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    } else {
      setDarkMode(true);
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    }
  };

  // Back to Top scroll listener
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  // Initial Loading Screen render
  if (loading) {
    return (
      <div className="fixed inset-0 z-[100] bg-slate-950 flex flex-col items-center justify-center text-white">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center gap-6"
        >
          {/* Logo Spinner */}
          <div className="relative w-24 h-24 flex items-center justify-center">
            <div className="absolute inset-0 rounded-full border-4 border-primary/20 border-t-primary animate-spin"></div>
            <div className="absolute inset-2 rounded-full border-4 border-secondary/20 border-t-secondary animate-spin" style={{ animationDirection: 'reverse', animationDuration: '1.5s' }}></div>
            <span className="text-xl font-extrabold font-display tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              SS
            </span>
          </div>

          <div className="text-center space-y-2">
            <h2 className="text-xl font-extrabold tracking-wider font-display text-white">
              SUSHIL SALI
            </h2>
            <div className="text-sm font-semibold tracking-widest text-primary/80 uppercase">
              Backend Developer
            </div>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-100 transition-colors duration-300 relative">
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-primary via-secondary to-accent z-[60] origin-left"
        style={{ scaleX }}
      />

      {/* Navbar */}
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />

      {/* Main Sections */}
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Back to Top Floating Button */}
      <motion.button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 z-[45] p-4 bg-primary text-white rounded-full shadow-lg shadow-primary/20 hover:shadow-primary/40 hover:bg-primary-dark transition-all duration-300 cursor-pointer ${
          showScrollTop ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-16 opacity-0 scale-50 pointer-events-none'
        }`}
        aria-label="Back to Top"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <FaArrowUp size={16} />
      </motion.button>
    </div>
  );
}

export default App;
