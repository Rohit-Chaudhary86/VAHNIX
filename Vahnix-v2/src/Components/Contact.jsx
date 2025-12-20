import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Shield, Mail, MapPin, Lock } from "lucide-react";

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
    <section id="contact" className="relative mt-48 px-6 mb-32"> {/* Increased top margin and added bottom margin */}
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16" 
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-500 bg-clip-text text-transparent">
            Get in Touch
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Ready for a security audit? Have questions? Our OSCP, CEH & CRTE-certified team is here to help.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-12" 
        >
          {/* Form */}
          <motion.div variants={itemVariants}>
            <div 
              className="relative p-8 rounded-2xl bg-white/95 backdrop-blur-lg border border-gray-200/50 shadow-xl shadow-blue-100/20"
              style={{
                boxShadow: `
                  0 20px 40px rgba(59, 130, 246, 0.08),
                  0 8px 24px rgba(167, 243, 208, 0.05),
                  inset 0 1px 0 rgba(255, 255, 255, 0.9)
                `,
              }}
            >
              <div className="absolute -top-12 -right-12 w-56 h-56 bg-gradient-to-br from-blue-300 to-purple-300 rounded-full blur-2xl opacity-10" />

              <form ref={formRef} onSubmit={sendEmail} className="relative space-y-5">
                <motion.input 
                  variants={itemVariants}
                  type="text" 
                  name="from_name" 
                  required 
                  placeholder="Your Name" 
                  className="w-full px-4 py-3 rounded-lg bg-blue-50/30 border border-blue-200/50 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-300/40 transition-all duration-200" 
                />
                
                <motion.input 
                  variants={itemVariants}
                  type="email" 
                  name="from_email" 
                  required 
                  placeholder="Email Address" 
                  className="w-full px-4 py-3 rounded-lg bg-blue-50/30 border border-blue-200/50 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-300/40 transition-all duration-200" 
                />
                
                <motion.input 
                  variants={itemVariants}
                  type="text" 
                  name="company" 
                  placeholder="Company (Optional)" 
                  className="w-full px-4 py-3 rounded-lg bg-blue-50/30 border border-blue-200/50 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-300/40 transition-all duration-200" 
                />
                
                <motion.textarea 
                  variants={itemVariants}
                  name="message" 
                  required 
                  rows={5} 
                  placeholder="Tell us about your security needs, scope, or vulnerabilities..." 
                  className="w-full px-4 py-3 rounded-lg resize-none bg-blue-50/30 border border-blue-200/50 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-300/40 transition-all duration-200" 
                />

                <motion.button 
                  variants={itemVariants}
                  type="submit" 
                  disabled={status === "sending"}
                  className="w-full py-3.5 rounded-lg font-semibold text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg shadow-blue-500/20 hover:shadow-blue-500/30 transform hover:-translate-y-0.5 transition-all duration-200 disabled:opacity-70 disabled:transform-none disabled:shadow-none"
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
              className="p-8 rounded-2xl h-full bg-gradient-to-br from-blue-50/40 via-white to-purple-50/40 backdrop-blur-lg border border-blue-100/50 shadow-xl shadow-blue-100/20"
              style={{
                boxShadow: `
                  0 20px 40px rgba(59, 130, 246, 0.06),
                  0 8px 24px rgba(167, 139, 250, 0.04),
                  inset 0 1px 0 rgba(255, 255, 255, 0.8)
                `,
              }}
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-t-2xl" />
              
              <h3 className="text-xl font-bold text-gray-800 mb-8">Contact Information</h3>
              
              <div className="space-y-6">
                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-blue-100/50 rounded-lg">
                    <Mail className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-gray-500">Email</div>
                    <a href="mailto:support@vahnix.com" className="text-blue-600 hover:text-blue-800 font-medium transition-colors duration-200">
                      support@vahnix.com
                    </a>
                  </div>
                </div>
                
                {/* Location */}
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-purple-100/50 rounded-lg">
                    <MapPin className="w-5 h-5 text-purple-600" />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-gray-500">Location</div>
                    <p className="text-gray-700 font-medium">Delhi NCR, India</p>
                  </div>
                </div>
                
                {/* Website Logo/Name */}
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg">
                    <Shield className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-gray-500">Website</div>
                    <div className="flex items-center gap-2">
                      <div className="font-bold text-xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                        VAHNIX
                      </div>
                      <span className="text-sm text-gray-500">Security</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 pt-6 border-t border-gray-200/50">
                <div className="flex items-center gap-3 mb-3">
                  <Lock className="w-4 h-4 text-emerald-500" />
                  <span className="text-sm font-medium text-gray-700">Security Guarantee</span>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">
                  All communications are encrypted. Your data is protected by enterprise-grade security protocols and never shared with third parties.
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}