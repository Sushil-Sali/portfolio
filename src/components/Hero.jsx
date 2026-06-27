import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { FaDownload, FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import profileImg from "../assets/profile.jpg";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-24 pb-12 relative overflow-hidden grid-bg bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-100"
    >
      {/* Decorative Orbs */}
      <div className="absolute top-1/4 left-1/10 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl dark:bg-blue-600/10 pointer-events-none animate-pulse-glow"></div>
      <div
        className="absolute bottom-1/4 right-1/10 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl dark:bg-purple-600/10 pointer-events-none animate-pulse-glow"
        style={{ animationDelay: "2s" }}
      ></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          {/* Left Side: Content */}
          <motion.div
            className="md:col-span-7 flex flex-col justify-center text-center md:text-left order-2 md:order-1"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h3 className="text-primary font-semibold text-lg md:text-xl tracking-wider mb-2 font-display">
              Hi, I'm
            </h3>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-4 font-display">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-900 to-slate-700 dark:from-white dark:to-slate-300">
                Sushil Sali
              </span>
            </h1>

            <div className="text-2xl sm:text-3xl font-bold mb-6 text-secondary h-12 flex items-center justify-center md:justify-start">
              <TypeAnimation
                sequence={[
                  "Backend Developer",
                  2000,
                  "Node.js Developer",
                  2000,
                  "React Developer",
                  2000,
                  "MERN Stack Developer",
                  2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </div>

            <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg mb-8 max-w-xl leading-relaxed">
              Building secure, scalable, and modern web applications using
              Node.js, Express.js, MongoDB, React, and JavaScript. Specializing
              in RESTful API engineering, schema design, and server-side
              security.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mb-8">
              <a
                href="./resume.pdf"
                download="Sushil_Sali.pdf"
                className="flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark text-white font-semibold px-6 py-3.5 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-primary/30 transform hover:-translate-y-0.5 group"
              >
                <FaDownload className="group-hover:translate-y-0.5 transition-transform" />
                Download Resume
              </a>
              <a
                href="#contact"
                className="flex items-center justify-center gap-2 bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-800 dark:text-white border border-slate-200 dark:border-slate-800 font-semibold px-6 py-3.5 rounded-xl transition-all duration-300 hover:shadow-md transform hover:-translate-y-0.5"
              >
                <FaEnvelope />
                Contact Me
              </a>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 justify-center md:justify-start">
              <a
                href="https://github.com/Sushil-Sali"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-primary rounded-xl transition-all hover:scale-110 shadow-sm"
                aria-label="GitHub"
              >
                <FaGithub size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/sushil-sali-23a939260/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-primary rounded-xl transition-all hover:scale-110 shadow-sm"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={20} />
              </a>
            </div>
          </motion.div>

          {/* Right Side: Circular Photo */}
          <motion.div
            className="md:col-span-5 flex justify-center items-center order-1 md:order-2"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 flex items-center justify-center animate-float">
              {/* Spinning Glow Ring */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary via-secondary to-accent opacity-30 blur-xl animate-spin-slow"></div>

              {/* Glow Border */}
              <div className="absolute inset-1 rounded-full bg-gradient-to-tr from-primary via-secondary to-accent p-1.5 shadow-2xl shadow-primary/20 dark:shadow-primary/45">
                {/* Photo Frame Container */}
                <div className="w-full h-full rounded-full bg-slate-100 dark:bg-slate-900 overflow-hidden flex items-center justify-center">
                  <img
                    src={profileImg}
                    alt="Sushil Sali profile photo"
                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
