// src/components/Contact.jsx
import React, { useRef, useState } from "react";
import { motion } from "framer-motion";

export default function Contact() {
  const formRef = useRef();
  const [status, setStatus] = useState(null);

  const sendEmail = async (e) => {
    e.preventDefault();
    setStatus("sending");

    const formData = new FormData(formRef.current);
    const data = {
      from_name: formData.get('from_name'),
      from_email: formData.get('from_email'),
      company: formData.get('company'),
      message: formData.get('message')
    };

    try {
      const response = await fetch('http://localhost:3001/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      // Check if response is ok
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      
      if (result.success) {
        setStatus("sent");
        formRef.current.reset();
      } else {
        throw new Error(result.message);
      }
    } catch (error) {
      console.error("Email Error:", error);
      setStatus("error");
    } finally {
      setTimeout(() => setStatus(null), 6000);
    }
  };

  // ... rest of your component remains exactly the same
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        duration: 0.4
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="contact" className="relative mt-32 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header - Simplified animation */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 via-purple-500 to-emerald-500 bg-clip-text text-transparent">
            Get in Touch
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Ready for a security audit? Have questions? Our OSCP-certified team is here to help.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          {/* Form */}
          <motion.div variants={itemVariants}>
            <div 
              className="relative p-6 md:p-8 rounded-2xl bg-white/90 backdrop-blur-lg border border-white/70 shadow-xl shadow-purple-100/40"
              style={{
                boxShadow: `
                  0 20px 40px rgba(216, 180, 254, 0.12),
                  0 8px 24px rgba(167, 243, 208, 0.08),
                  inset 0 1px 0 rgba(255, 255, 255, 0.9)
                `,
              }}
            >
              {/* Reduced blur effect */}
              <div className="absolute -top-16 -right-16 w-48 h-48 bg-gradient-to-br from-purple-300 to-emerald-300 rounded-full blur-2xl opacity-15" />

              <form ref={formRef} onSubmit={sendEmail} className="relative space-y-4">
                <motion.input 
                  variants={itemVariants}
                  type="text" 
                  name="from_name" 
                  required 
                  placeholder="Your Name" 
                  className="w-full px-4 py-3 rounded-lg bg-purple-50/50 border border-purple-200/50 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-300/40 transition-all duration-200" 
                />
                
                <motion.input 
                  variants={itemVariants}
                  type="email" 
                  name="from_email" 
                  required 
                  placeholder="Email Address" 
                  className="w-full px-4 py-3 rounded-lg bg-purple-50/50 border border-purple-200/50 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-300/40 transition-all duration-200" 
                />
                
                <motion.input 
                  variants={itemVariants}
                  type="text" 
                  name="company" 
                  placeholder="Company (Optional)" 
                  className="w-full px-4 py-3 rounded-lg bg-purple-50/50 border border-purple-200/50 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-300/40 transition-all duration-200" 
                />
                
                <motion.textarea 
                  variants={itemVariants}
                  name="message" 
                  required 
                  rows={4} 
                  placeholder="Tell us about your project, scope, or website..." 
                  className="w-full px-4 py-3 rounded-lg resize-none bg-purple-50/50 border border-purple-200/50 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-300/40 transition-all duration-200" 
                />

                <motion.button 
                  variants={itemVariants}
                  type="submit" 
                  disabled={status === "sending"}
                  className="w-full py-3 rounded-lg font-semibold text-white bg-gradient-to-r from-purple-600 to-emerald-500 hover:from-purple-700 hover:to-emerald-600 shadow-lg shadow-purple-500/20 hover:shadow-purple-500/30 transform hover:-translate-y-0.5 transition-all duration-200 disabled:opacity-70 disabled:transform-none disabled:shadow-none"
                >
                  {status === "sending" ? "Sending..." : "Send Message"}
                </motion.button>

                {status && (
                  <motion.p 
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    className={`text-center font-medium ${status === "sent" ? "text-emerald-600" : "text-red-600"}`}
                  >
                    {status === "sent" ? "Message sent! We'll reply within 24 hours." : "Something went wrong. Please try again."}
                  </motion.p>
                )}
              </form>
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={itemVariants}>
            <div 
              className="p-6 md:p-8 rounded-2xl h-full bg-gradient-to-br from-purple-50/60 via-white to-emerald-50/60 backdrop-blur-lg border border-purple-100/70 shadow-xl shadow-purple-100/30"
              style={{
                boxShadow: `
                  0 20px 40px rgba(216, 180, 254, 0.10),
                  0 8px 24px rgba(167, 243, 208, 0.06),
                  inset 0 1px 0 rgba(255, 255, 255, 0.8)
                `,
              }}
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-400 to-emerald-400 rounded-t-2xl opacity-50" />
              
              <h3 className="text-xl font-bold text-gray-800">Reach Us Directly</h3>
              
              <div className="mt-6 space-y-5">
                <motion.div variants={itemVariants}>
                  <div className="text-sm font-medium text-purple-700 uppercase tracking-wider">Location</div>
                  <p className="mt-1 text-gray-700">Greater Noida, India</p>
                </motion.div>
                
                <motion.div variants={itemVariants}>
                  <div className="text-sm font-medium text-purple-700 uppercase tracking-wider">Email</div>
                  <a href="mailto:contact@vanix.security" className="mt-1 text-purple-600 hover:text-purple-800 font-medium transition-colors duration-200">
                    contact@vanix.security
                  </a>
                </motion.div>
                
                <motion.div variants={itemVariants}>
                  <div className="text-sm font-medium text-purple-700 uppercase tracking-wider">Phone</div>
                  <a href="tel:+918630827951" className="mt-1 text-purple-600 hover:text-purple-800 font-medium transition-colors duration-200">
                    +91 86308 27951
                  </a>
                </motion.div>
              </div>
              
              <motion.div variants={itemVariants} className="mt-8 pt-6 border-t border-purple-200/50">
                <p className="text-sm text-gray-600 leading-relaxed">
                  <strong className="text-purple-700">Your data is safe.</strong> All messages and attachments are encrypted in transit and at rest. Only our certified penetration testers access them — never shared with third parties.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}