import { motion } from "framer-motion";
import { FaEnvelope, FaPhone, FaGithub, FaLinkedin } from "react-icons/fa";

const Contact = () => {
  const contactInfo = [
    {
      icon: FaEnvelope,
      title: "Email",
      value: "sushilsali65@gmail.com",
      href: "mailto:sushilsali65@gmail.com",
    },
    {
      icon: FaPhone,
      title: "Phone",
      value: "+91-8956793040",
      href: "tel:+918956793040",
    },
    {
      icon: FaGithub,
      title: "GitHub",
      value: "github.com/Sushil-Sali",
      href: "https://github.com/Sushil-Sali",
    },
    {
      icon: FaLinkedin,
      title: "LinkedIn",
      value: "linkedin.com/in/sushil-sali-23a939260",
      href: "https://www.linkedin.com/in/sushil-sali-23a939260/",
    },
  ];

  return (
    <section
      id="contact"
      className="py-20 relative bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-100 grid-bg"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold font-display inline-block relative pb-2">
            Contact
            <span className="absolute bottom-0 left-1/4 right-1/4 h-1 bg-gradient-to-r from-primary to-secondary rounded-full"></span>
          </h2>
          <p className="mt-4 text-slate-500 dark:text-slate-400 max-w-2xl mx-auto">
            I’m available for backend and full-stack opportunities. Reach out
            via email, phone, GitHub, or LinkedIn.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8">
          {contactInfo.map((info, idx) => {
            const Icon = info.icon;
            return (
              <motion.a
                key={idx}
                href={info.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-6 bg-white dark:bg-slate-900 border border-slate-200/50 dark:border-slate-800/80 rounded-3xl shadow-sm hover:shadow-md hover:border-primary/20 dark:hover:border-primary/20 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
              >
                <div className="p-4 bg-primary/10 dark:bg-primary/20 text-primary rounded-2xl">
                  <Icon size={20} />
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-700 dark:text-slate-200">
                    {info.title}
                  </p>
                  <p className="text-sm text-slate-500 dark:text-slate-400">
                    {info.value}
                  </p>
                </div>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Contact;
