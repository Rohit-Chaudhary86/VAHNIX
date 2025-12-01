import React from "react";
import { motion } from "framer-motion";
import { Shield, Users, Target, Zap, CheckCircle2, ArrowRight } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-12 scroll-mt-20">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-gray-100 rounded-full text-blue-700 text-xs font-medium mb-3">
            <Shield className="w-3 h-3" />
            Our Approach
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
            Next-Generation Cybersecurity
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto text-sm">
            We bring fresh perspectives and cutting-edge methodologies to protect 
            your business from evolving cyber threats.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-6 items-start">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            <h3 className="text-xl font-bold text-gray-900">
              Built on Proven Frameworks
            </h3>
            <p className="text-gray-600 leading-relaxed text-sm">
              At VANIX, we combine industry-standard frameworks with innovative techniques 
              to deliver security solutions that anticipate tomorrow's threats.
            </p>
            
            <div className="space-y-2">
              {[
                "Methodology-based penetration testing",
                "Compliance-first security architecture",
                "Proactive threat intelligence integration",
                "Rapid-response security advisory"
              ].map((item, index) => (
                <motion.div 
                  key={index} 
                  className="flex items-center gap-2"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <CheckCircle2 className="w-4 h-4 text-green-500" />
                  <span className="text-gray-700 text-sm">{item}</span>
                </motion.div>
              ))}
            </div>

            <motion.button 
              className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white font-medium rounded-lg text-sm hover:bg-blue-700 transition-all"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Explore Our Methodology
              <ArrowRight className="w-3 h-3" />
            </motion.button>
          </motion.div>

          {/* Right Content - Stats */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-2 gap-3"
          >
            {[
              { 
                icon: Users, 
                number: "Expert", 
                label: "Certified Team", 
                color: "blue",
                description: "OSCP, CEH, CISSP certified"
              },
              { 
                icon: Target, 
                number: "Zero-Day", 
                label: "Focus", 
                color: "green",
                description: "Emerging threat research"
              },
              { 
                icon: Zap, 
                number: "Modern", 
                label: "Tech Stack", 
                color: "purple",
                description: "Latest security tools"
              },
              { 
                icon: Shield, 
                number: "Framework", 
                label: "Driven", 
                color: "orange",
                description: "NIST, MITRE ATT&CK aligned"
              }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="p-4 bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-shadow"
              >
                <div className={`w-8 h-8 bg-${stat.color}-100 rounded-lg flex items-center justify-center mx-auto mb-2`}>
                  <stat.icon className={`w-4 h-4 text-${stat.color}-600`} />
                </div>
                <div className="text-lg font-bold text-gray-900 mb-1">{stat.number}</div>
                <div className="text-xs text-gray-600 mb-1">{stat.label}</div>
                <div className="text-[10px] text-gray-500">{stat.description}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}