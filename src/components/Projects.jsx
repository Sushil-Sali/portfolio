import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { projectsData } from '../data/projects';

const Projects = () => {
  return (
    <section 
      id="projects" 
      className="py-20 relative bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-100 grid-bg"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold font-display inline-block relative pb-2">
            Projects Portfolio
            <span className="absolute bottom-0 left-1/4 right-1/4 h-1 bg-gradient-to-r from-primary to-secondary rounded-full"></span>
          </h2>
          <p className="mt-4 text-slate-500 dark:text-slate-400 max-w-2xl mx-auto">
            Explore some of the dynamic web applications I have built, ranging from ERP/CRM systems to E-commerce solutions.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, idx) => (
            <motion.div
              key={project.id}
              className="flex flex-col h-full bg-white dark:bg-slate-900 border border-slate-200/50 dark:border-slate-800/80 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 group"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
            >
              {/* Project Image Container */}
              <div className="relative aspect-video overflow-hidden bg-slate-100 dark:bg-slate-950 border-b border-slate-100 dark:border-slate-800/50">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                
                {/* Glowing Overlay on Hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-0 group-hover:opacity-40 transition-opacity duration-300"></div>

                {project.featured && (
                  <span className="absolute top-4 right-4 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full shadow-md z-10 tracking-wider uppercase">
                    Featured
                  </span>
                )}
              </div>

              {/* Project Info */}
              <div className="flex-1 p-6 flex flex-col justify-between">
                <div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-1 font-display">
                    {project.subtitle}
                  </div>
                  <h3 className="text-xl font-bold font-display text-slate-950 dark:text-white mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                    {project.description}
                  </p>
                </div>

                <div>
                  {/* Tech stack badges */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.tags.map((tag) => (
                      <span 
                        key={tag} 
                        className="text-xs font-medium px-2.5 py-1 bg-slate-100 dark:bg-slate-800/80 text-slate-600 dark:text-slate-300 rounded-md border border-slate-200/20 dark:border-slate-700/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Actions Buttons */}
                  <div className="flex gap-4 border-t border-slate-100 dark:border-slate-800 pt-4">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 font-semibold py-2.5 px-4 rounded-xl text-sm transition-all cursor-pointer"
                    >
                      <FaGithub size={16} />
                      GitHub
                    </a>
                    
                    {project.liveUrl ? (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark text-white font-semibold py-2.5 px-4 rounded-xl text-sm transition-all shadow-sm hover:shadow-lg hover:shadow-primary/20 cursor-pointer"
                      >
                        <FaExternalLinkAlt size={14} />
                        Live Demo
                      </a>
                    ) : (
                      <button
                        disabled
                        className="flex-1 flex items-center justify-center gap-2 bg-slate-50 dark:bg-slate-900 border border-slate-200/50 dark:border-slate-800/50 text-slate-400 dark:text-slate-600 font-semibold py-2.5 px-4 rounded-xl text-sm cursor-not-allowed"
                        title="Live demo link not available for this project"
                      >
                        Internal App
                      </button>
                    )}
                  </div>
                </div>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;
