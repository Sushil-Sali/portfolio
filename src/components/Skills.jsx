import { motion } from "framer-motion";
import { skillsData } from "../data/skills";

const Skills = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 },
    },
  };

  return (
    <section
      id="skills"
      className="py-20 relative bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-100"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold font-display inline-block relative pb-2">
            Skills & Toolkit
            <span className="absolute bottom-0 left-1/4 right-1/4 h-1 bg-gradient-to-r from-primary to-secondary rounded-full"></span>
          </h2>
          <p className="mt-4 text-slate-500 dark:text-slate-400 max-w-2xl mx-auto">
            A comprehensive list of programming languages, frontend tools,
            backend services, databases, authentication protocols, and AI
            assistants I use.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillsData.map((categoryObj, catIdx) => (
            <motion.div
              key={categoryObj.category}
              className="p-6 bg-white dark:bg-slate-900 border border-slate-200/50 dark:border-slate-800/50 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: catIdx * 0.08 }}
            >
              <h3 className="text-xl font-bold font-display mb-6 text-slate-950 dark:text-white border-b border-slate-100 dark:border-slate-800 pb-3 flex items-center justify-between">
                <span>{categoryObj.category}</span>
                <span className="text-xs font-semibold px-2.5 py-1 bg-primary/10 text-primary rounded-full">
                  {categoryObj.skills.length}
                </span>
              </h3>

              <motion.div
                className="grid grid-cols-2 gap-4"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {categoryObj.skills.map((skill) => {
                  const Icon = skill.icon;
                  return (
                    <motion.div
                      key={skill.name}
                      className="flex items-center gap-3 p-3 bg-slate-50 dark:bg-slate-950 hover:bg-white dark:hover:bg-slate-900 border border-slate-100 dark:border-slate-900 hover:border-primary/20 dark:hover:border-primary/20 rounded-xl transition-all duration-300 group cursor-default"
                      variants={itemVariants}
                      whileHover={{ scale: 1.05 }}
                    >
                      <div
                        className={`text-2xl ${skill.color} group-hover:scale-110 transition-transform duration-300`}
                      >
                        <Icon />
                      </div>
                      <span className="text-sm font-semibold text-slate-700 dark:text-slate-300 group-hover:text-primary dark:group-hover:text-primary transition-colors">
                        {skill.name}
                      </span>
                    </motion.div>
                  );
                })}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
