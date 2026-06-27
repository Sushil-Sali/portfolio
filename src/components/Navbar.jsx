import { useState, useEffect } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';
import { BsSunFill, BsMoonStarsFill } from 'react-icons/bs';
import logoImg from '../assets/logo.png';

const Navbar = ({ darkMode, toggleDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? 'glassmorphism py-3 shadow-lg' 
        : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2 group">
            <img 
              src={logoImg} 
              alt="SS Logo" 
              className="w-10 h-10 object-contain rounded-lg border border-primary/20 group-hover:border-primary/60 transition-all duration-300"
            />
            <span className="font-display font-extrabold text-xl tracking-wider text-slate-800 dark:text-white group-hover:text-primary transition-colors">
              SUSHIL<span className="text-primary">.S</span>
            </span>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="font-medium text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary transition-colors duration-200 relative group text-sm lg:text-base"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}

            {/* Dark Mode Toggle */}
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full hover:bg-slate-200 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary transition-colors cursor-pointer"
              aria-label="Toggle Dark Mode"
            >
              {darkMode ? <BsSunFill size={20} /> : <BsMoonStarsFill size={20} />}
            </button>

            {/* Resume Button */}
            <a
              href="./resume.pdf"
              download="Sushil_Sali_Resume.pdf"
              className="bg-primary hover:bg-primary-dark text-white font-medium px-4 py-2 rounded-lg text-sm transition-all duration-300 hover:shadow-lg hover:shadow-primary/30"
            >
              Resume
            </a>
          </div>

          {/* Mobile menu toggle & dark mode */}
          <div className="flex items-center gap-3 md:hidden">
            {/* Dark Mode Toggle for Mobile */}
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full hover:bg-slate-200 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary transition-colors cursor-pointer"
              aria-label="Toggle Dark Mode"
            >
              {darkMode ? <BsSunFill size={20} /> : <BsMoonStarsFill size={20} />}
            </button>

            {/* Hamburger Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary focus:outline-none cursor-pointer"
            >
              {isOpen ? <HiX size={24} /> : <HiMenu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div className={`md:hidden fixed top-[76px] left-0 w-full h-[calc(100vh-76px)] glassmorphism z-40 transition-all duration-300 ${
        isOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
      }`}>
        <div className="px-4 pt-8 pb-6 space-y-4 flex flex-col items-center">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="w-full text-center py-3 text-lg font-semibold text-slate-700 dark:text-slate-200 hover:text-primary dark:hover:text-primary hover:bg-slate-100 dark:hover:bg-slate-800/50 rounded-xl transition-all duration-200"
            >
              {link.name}
            </a>
          ))}
          <a
            href="./resume.pdf"
            download="Sushil_Sali_Resume.pdf"
            onClick={() => setIsOpen(false)}
            className="w-4/5 text-center bg-primary hover:bg-primary-dark text-white font-medium py-3 rounded-xl transition-all duration-300 shadow-md hover:shadow-lg"
          >
            Download Resume
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
