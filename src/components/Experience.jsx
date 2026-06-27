import { motion } from 'framer-motion';
import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt, FaCheckCircle } from 'react-icons/fa';
import { experienceData } from '../data/experience';

const Experience = () => {
  return (
    <section 
      id="experience" 
      className="py-20 relative bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-100"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold font-display inline-block relative pb-2">
            Work Experience
            <span className="absolute bottom-0 left-1/4 right-1/4 h-1 bg-gradient-to-r from-primary to-secondary rounded-full"></span>
          </h2>
          <p className="mt-4 text-slate-500 dark:text-slate-400 max-w-2xl mx-auto">
            My professional journey and internship assignments in backend development.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative border-l-2 border-slate-200 dark:border-slate-800 ml-4 md:ml-6 pl-6 md:pl-8 space-y-12">
          {experienceData.map((job, idx) => (
            <motion.div
              key={job.id}
              className="relative"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
            >
              {/* Timeline dot icon */}
              <span className="absolute -left-[39px] md:-left-[47px] top-1.5 flex items-center justify-center w-8 h-8 rounded-full bg-primary text-white border-4 border-white dark:border-slate-900 shadow-md">
                <FaBriefcase size={12} />
              </span>

              {/* Job Card */}
              <div className="p-6 md:p-8 bg-slate-50 dark:bg-slate-950 border border-slate-100 dark:border-slate-800/80 rounded-2xl shadow-sm hover:shadow-md hover:border-primary/20 dark:hover:border-primary/20 transition-all duration-300">
                {/* Meta details */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-4">
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold font-display text-slate-900 dark:text-white">
                      {job.role}
                    </h3>
                    <h4 className="text-lg font-semibold text-primary font-display mt-0.5">
                      {job.company}
                    </h4>
                  </div>
                  <div className="flex flex-wrap gap-3 text-sm text-slate-500 dark:text-slate-400 mt-1 md:mt-0">
                    <span className="flex items-center gap-1.5 bg-slate-200/50 dark:bg-slate-900 px-3 py-1 rounded-full font-medium">
                      <FaCalendarAlt size={12} className="text-primary" />
                      {job.duration}
                    </span>
                    <span className="flex items-center gap-1.5 bg-slate-200/50 dark:bg-slate-900 px-3 py-1 rounded-full font-medium">
                      <FaMapMarkerAlt size={12} className="text-secondary" />
                      {job.location}
                    </span>
                  </div>
                </div>

                <p className="text-slate-600 dark:text-slate-400 mb-6 italic leading-relaxed">
                  "{job.description}"
                </p>

                {/* Achievement list */}
                <h5 className="font-bold text-slate-800 dark:text-slate-200 mb-3 text-sm tracking-wider uppercase font-display">
                  Key Accomplishments
                </h5>
                <ul className="space-y-3">
                  {job.points.map((point, ptIdx) => (
                    <motion.li 
                      key={ptIdx} 
                      className="flex items-start gap-3 text-slate-600 dark:text-slate-400 text-sm sm:text-base leading-relaxed"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 + ptIdx * 0.05 }}
                    >
                      <FaCheckCircle className="text-primary mt-1 shrink-0" size={14} />
                      <span>{point}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Experience;
