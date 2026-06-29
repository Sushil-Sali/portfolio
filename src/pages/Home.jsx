import Hero from "../components/Hero";
import Footer from "../components/Footer";

const Home = ({ darkMode, toggleDarkMode }) => {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-100 transition-colors duration-300 relative">
      <Hero />
      <Footer />
    </div>
  );
};

export default Home;
