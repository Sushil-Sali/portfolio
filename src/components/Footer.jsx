import { FaGithub, FaLinkedin, FaHeart } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo & Slogan */}
          <div className="text-center md:text-left">
            <span className="font-display font-semibold text-xl tracking-wider text-white">
              SUSHIL <span className="text-primary">SALI</span>
            </span>
            <p className="text-sm text-slate-500 mt-1 max-w-xs">
              Backend Developer dedicated to constructing secure, scalable
              applications.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex gap-4">
            <a
              href="https://github.com/Sushil-Sali"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 bg-slate-800 hover:bg-primary hover:text-white rounded-lg transition-all duration-300 text-slate-400"
              aria-label="GitHub"
            >
              <FaGithub size={18} />
            </a>
            <a
              href="https://www.linkedin.com/in/sushil-sali-23a939260/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 bg-slate-800 hover:bg-primary hover:text-white rounded-lg transition-all duration-300 text-slate-400"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={18} />
            </a>
          </div>
        </div>

        <hr className="border-slate-800 my-8" />

        {/* Copyright details */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>&copy; {currentYear} Sushil Sali. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Built with <FaHeart className="text-red-500" /> using React 19,
            Tailwind v4 & Framer Motion.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
