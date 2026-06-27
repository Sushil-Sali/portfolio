import { motion } from 'framer-motion';
import { FaGraduationCap, FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';
import { educationData } from '../data/experience';

const Education = () => {
  return (
    <section 
      id="education" 
      className="py-20 relative bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-100"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold font-display inline-block relative pb-2">
            Education
            <span className="absolute bottom-0 left-1/4 right-1/4 h-1 bg-gradient-to-r from-primary to-secondary rounded-full"></span>
          </h2>
          <p className="mt-4 text-slate-500 dark:text-slate-400 max-w-2xl mx-auto">
            My academic qualifications and educational achievements.
          </p>
        </div>

        {/* Education List */}
        <div className="space-y-8">
          {educationData.map((edu, idx) => (
            <motion.div
              key={edu.id}
              className="p-6 md:p-8 bg-slate-50 dark:bg-slate-950 border border-slate-100 dark:border-slate-800 rounded-2xl shadow-sm hover:shadow-md hover:border-primary/20 dark:hover:border-primary/20 transition-all duration-300 flex flex-col md:flex-row gap-6 relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
            >
              {/* Icon Container */}
              <div className="p-4 bg-primary/10 dark:bg-primary/20 text-primary rounded-xl h-fit w-fit shrink-0">
                <FaGraduationCap size={32} />
              </div>

              {/* Card Details */}
              <div className="flex-1 space-y-3">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold font-display text-slate-950 dark:text-white">
                      {edu.degree}
                    </h3>
                    <h4 className="text-lg font-semibold text-secondary font-display mt-0.5">
                      {edu.institution}
                    </h4>
                  </div>
                  <div className="flex flex-wrap gap-2 text-xs md:text-sm text-slate-500 dark:text-slate-400 mt-1 md:mt-0 font-medium">
                    <span className="flex items-center gap-1 bg-slate-200/50 dark:bg-slate-900 px-3 py-1 rounded-full">
                      <FaCalendarAlt size={12} className="text-primary" />
                      {edu.duration}
                    </span>
                    <span className="flex items-center gap-1 bg-slate-200/50 dark:bg-slate-900 px-3 py-1 rounded-full">
                      <FaMapMarkerAlt size={12} className="text-secondary" />
                      {edu.location}
                    </span>
                  </div>
                </div>

                <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base leading-relaxed">
                  {edu.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Education;
