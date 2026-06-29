import Projects from "../components/Projects";
import Footer from "../components/Footer";

const ProjectsPage = () => {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-100 transition-colors duration-300 relative">
      <Projects />
      <Footer />
    </div>
  );
};

export default ProjectsPage;
