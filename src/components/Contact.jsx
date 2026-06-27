import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane, FaCheckCircle } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [status, setStatus] = useState({
    submitting: false,
    success: false,
    error: null
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus({ submitting: true, success: false, error: null });

    // Mock form submission
    setTimeout(() => {
      setStatus({ submitting: false, success: true, error: null });
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      // Clear success state after 5 seconds
      setTimeout(() => {
        setStatus((prev) => ({ ...prev, success: false }));
      }, 5000);
    }, 1500);
  };

  const contactInfo = [
    {
      icon: FaEnvelope,
      title: "Email Me",
      value: "sushilsali24@gmail.com", // Professional placeholder email
      href: "mailto:sushilsali24@gmail.com"
    },
    {
      icon: FaPhone,
      title: "Call Me",
      value: "+91 98765 43210", // Placeholder phone
      href: "tel:+919876543210"
    },
    {
      icon: FaMapMarkerAlt,
      title: "Location",
      value: "Nagpur, Maharashtra, India",
      href: "https://maps.google.com/?q=Nagpur"
    }
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
            Get In Touch
            <span className="absolute bottom-0 left-1/4 right-1/4 h-1 bg-gradient-to-r from-primary to-secondary rounded-full"></span>
          </h2>
          <p className="mt-4 text-slate-500 dark:text-slate-400 max-w-2xl mx-auto">
            Have a question, an internship opportunity, or want to build something together? Drop a message!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Contact Cards */}
          <div className="lg:col-span-5 space-y-6">
            {contactInfo.map((info, idx) => {
              const Icon = info.icon;
              return (
                <motion.a
                  key={idx}
                  href={info.href}
                  target={info.icon === FaMapMarkerAlt ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="flex items-center gap-5 p-6 bg-white dark:bg-slate-900 border border-slate-200/50 dark:border-slate-800/80 rounded-2xl shadow-sm hover:shadow-md hover:border-primary/20 dark:hover:border-primary/20 transition-all duration-300 group cursor-pointer"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                >
                  <div className="p-4 bg-primary/10 dark:bg-primary/20 text-primary rounded-xl shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <Icon size={24} />
                  </div>
                  <div className="overflow-hidden">
                    <h4 className="text-sm font-bold font-display text-slate-400 dark:text-slate-500 uppercase tracking-wider">
                      {info.title}
                    </h4>
                    <p className="text-base sm:text-lg font-bold text-slate-800 dark:text-white mt-1 group-hover:text-primary transition-colors truncate">
                      {info.value}
                    </p>
                  </div>
                </motion.a>
              );
            })}
          </div>

          {/* Right Column: Contact Form */}
          <motion.div 
            className="lg:col-span-7 bg-white dark:bg-slate-900 border border-slate-200/50 dark:border-slate-800/80 rounded-3xl p-6 sm:p-10 shadow-sm relative overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            {status.success ? (
              <motion.div 
                className="flex flex-col items-center justify-center text-center py-12"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
              >
                <FaCheckCircle className="text-green-500 mb-4 animate-bounce" size={64} />
                <h3 className="text-2xl font-bold font-display text-slate-950 dark:text-white mb-2">
                  Message Sent Successfully!
                </h3>
                <p className="text-slate-500 dark:text-slate-400 max-w-sm">
                  Thank you for reaching out, Sushil. I will review your message and reply as soon as possible.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Name */}
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-semibold text-slate-600 dark:text-slate-400">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 focus:border-primary focus:ring-1 focus:ring-primary rounded-xl px-4 py-3 text-slate-800 dark:text-white outline-none transition-all text-sm sm:text-base"
                    />
                  </div>

                  {/* Email */}
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-semibold text-slate-600 dark:text-slate-400">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 focus:border-primary focus:ring-1 focus:ring-primary rounded-xl px-4 py-3 text-slate-800 dark:text-white outline-none transition-all text-sm sm:text-base"
                    />
                  </div>
                </div>

                {/* Subject */}
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-semibold text-slate-600 dark:text-slate-400">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Project Inquiry / Job Opening"
                    className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 focus:border-primary focus:ring-1 focus:ring-primary rounded-xl px-4 py-3 text-slate-800 dark:text-white outline-none transition-all text-sm sm:text-base"
                  />
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-semibold text-slate-600 dark:text-slate-400">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Describe your project, timeline, or inquiries..."
                    className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 focus:border-primary focus:ring-1 focus:ring-primary rounded-xl px-4 py-3 text-slate-800 dark:text-white outline-none transition-all resize-none text-sm sm:text-base"
                  ></textarea>
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={status.submitting}
                  className="w-full flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark text-white font-semibold py-3.5 rounded-xl transition-all shadow-md hover:shadow-lg hover:shadow-primary/30 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed text-sm sm:text-base group"
                >
                  {status.submitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <FaPaperPlane className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" size={16} />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
