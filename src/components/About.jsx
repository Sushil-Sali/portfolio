import { motion } from 'framer-motion';
import { FaServer, FaDatabase, FaLock, FaRocket } from 'react-icons/fa';

const About = () => {
  const stats = [
    { label: "Internship", value: "Node.js Developer" },
    { label: "Main Stack", value: "MERN / Node.js" },
    { label: "Core Projects", value: "3+ Heavy Apps" },
    { label: "Databases", value: "MongoDB & MySQL" }
  ];

  const highlights = [
    {
      icon: FaServer,
      title: "Backend Specialist",
      desc: "Skilled in Node.js and Express.js to construct high-performance, maintainable web services."
    },
    {
      icon: FaDatabase,
      title: "Schema Architect",
      desc: "Experienced in designing optimized and normalized SQL/NoSQL structures for fast operations."
    },
    {
      icon: FaLock,
      title: "Security & Auth",
      desc: "Implementing state-of-the-art token security (JWT), OAuth strategies, and password hashes."
    },
    {
      icon: FaRocket,
      title: "Clean Coder",
      desc: "Adhering to SOLID principles, payload validations (Joi), and MVC architecture standards."
    }
  ];

  return (
    <section 
      id="about" 
      className="py-20 relative bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-100"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold font-display inline-block relative pb-2">
            About Me
            <span className="absolute bottom-0 left-1/4 right-1/4 h-1 bg-gradient-to-r from-primary to-secondary rounded-full"></span>
          </h2>
          <p className="mt-4 text-slate-500 dark:text-slate-400 max-w-2xl mx-auto">
            Get to know my backend journey, technical strengths, and core professional experience.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Story & Stats */}
          <motion.div 
            className="lg:col-span-6 space-y-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold font-display text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              Designing Scalable Digital Infrastructures
            </h3>
            
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              I am a passionate backend developer intern with hands-on experience building web application engines, database systems, and integration components. My expertise lies in architecting RESTful APIs, securing operations, and structuring relational/non-relational schemas.
            </p>

            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              Through my internship at **Talentrise Technokrate Pvt. Ltd.**, I gained experience working on live enterprise resource planning (ERP) platforms. I enjoy resolving architectural bottlenecks, validating data schemas, and deploying secure endpoints.
            </p>

            {/* Stats Dashboard */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              {stats.map((stat, idx) => (
                <div 
                  key={idx} 
                  className="p-4 bg-slate-50 dark:bg-slate-950 border border-slate-100 dark:border-slate-800 rounded-xl"
                >
                  <div className="text-sm text-slate-400 dark:text-slate-500 mb-1">{stat.label}</div>
                  <div className="text-base sm:text-lg font-bold text-slate-800 dark:text-white font-display">
                    {stat.value}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Column: Highlights Cards */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {highlights.map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={idx}
                  className="p-6 bg-slate-50 dark:bg-slate-950 border border-slate-100 dark:border-slate-800 hover:border-primary/30 dark:hover:border-primary/30 rounded-2xl hover:shadow-lg transition-all duration-300 group"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                >
                  <div className="p-3 bg-primary/10 dark:bg-primary/20 text-primary rounded-xl w-fit mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Icon size={24} />
                  </div>
                  <h4 className="text-lg font-bold font-display mb-2 text-slate-800 dark:text-white group-hover:text-primary transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                    {item.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
