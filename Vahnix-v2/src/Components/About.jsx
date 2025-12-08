import React from "react";
import { motion } from "framer-motion";
import { Shield, Users, Target, Zap, CheckCircle2, ArrowRight, Sparkles, BarChart, Lock, Globe } from "lucide-react";

export default function About() {
  const stats = [
    { 
      icon: Users, 
      number: "Expert", 
      label: "Certified Team", 
      color: "blue",
      description: "OSCP, CEH, CISSP certified",
      gradient: "from-blue-500 to-cyan-500"
    },
    { 
      icon: Target, 
      number: "Zero-Day", 
      label: "Focus", 
      color: "green",
      description: "Emerging threat research",
      gradient: "from-emerald-500 to-green-500"
    },
    { 
      icon: Zap, 
      number: "Modern", 
      label: "Tech Stack", 
      color: "purple",
      description: "Latest security tools",
      gradient: "from-purple-500 to-violet-500"
    },
    { 
      icon: Shield, 
      number: "Framework", 
      label: "Driven", 
      color: "orange",
      description: "NIST, MITRE ATT&CK aligned",
      gradient: "from-amber-500 to-orange-500"
    }
  ];

  const features = [
    "Methodology-based penetration testing",
    "Compliance-first security architecture",
    "Proactive threat intelligence integration",
    "Rapid-response security advisory",
    "Continuous security monitoring",
    "Customized defense strategies"
  ];

  return (
    <section id="about" className="relative py-20 md:py-28 scroll-mt-20 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ 
            x: [0, 100, 0],
            y: [0, -50, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            repeat: Infinity, 
            duration: 25, 
            ease: "easeInOut" 
          }}
          className="absolute -top-20 -left-20 w-80 h-80 bg-gradient-to-r from-blue-100/30 to-purple-100/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ 
            x: [0, -80, 0],
            y: [0, 60, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{ 
            repeat: Infinity, 
            duration: 30, 
            ease: "easeInOut",
            delay: 2
          }}
          className="absolute -bottom-20 -right-20 w-96 h-96 bg-gradient-to-r from-emerald-100/20 to-cyan-100/30 rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-gray-200 shadow-sm mb-6"
          >
            <div className="relative">
              <Sparkles className="w-4 h-4 text-blue-600" />
              <motion.div
                animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="absolute inset-0 w-4 h-4 bg-blue-400 rounded-full blur-sm"
              />
            </div>
            <span className="text-sm font-semibold text-gray-800">Our Innovative Approach</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            <span className="bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 bg-clip-text text-transparent">
              Next-Generation
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent">
              Cybersecurity
            </span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed"
          >
            We bring fresh perspectives and cutting-edge methodologies to protect 
            your business from evolving cyber threats with{" "}
            <span className="text-blue-600 font-semibold">proactive defense strategies</span>.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true, margin: "-50px" }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                  Built on Proven Frameworks
                </h3>
                <p className="text-gray-600 leading-relaxed text-base">
                  At VANIX, we combine industry-standard frameworks with innovative techniques 
                  to deliver security solutions that anticipate tomorrow's threats.
                </p>
              </motion.div>

              {/* Enhanced Feature List */}
              <div className="space-y-3">
                {features.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ 
                      duration: 0.5, 
                      delay: 0.3 + index * 0.1,
                      ease: "easeOut"
                    }}
                    viewport={{ once: true }}
                    whileHover={{ x: 5 }}
                    className="group flex items-center gap-4 p-4 bg-white/80 backdrop-blur-sm rounded-xl border border-gray-200/50 hover:border-blue-200 hover:shadow-lg transition-all duration-300"
                  >
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className="relative"
                    >
                      <div className="p-2 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg">
                        <CheckCircle2 className="w-5 h-5 text-blue-600" />
                      </div>
                      <motion.div
                        animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0, 0.3] }}
                        transition={{ repeat: Infinity, duration: 2, delay: index * 0.2 }}
                        className="absolute inset-0 bg-blue-400 rounded-lg blur-sm"
                      />
                    </motion.div>
                    <span className="text-gray-800 font-medium flex-1">{item}</span>
                    <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all" />
                  </motion.div>
                ))}
              </div>
            </div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
              className="pt-4"
            >
              <motion.a
                href="/our-approach"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="group relative inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-2">
                  <Sparkles className="w-4 h-4" />
                  Explore Our Methodology
                </span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                <motion.div
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                  className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600"
                />
                {/* Shine Effect */}
                <div className="absolute inset-0 -left-48 -top-8 w-24 h-32 bg-white/20 transform -skew-x-12 group-hover:left-[110%] transition-all duration-700" />
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right Content - Enhanced Stats */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-2 gap-4 lg:gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9, y: 30 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ 
                  duration: 0.6, 
                  delay: 0.2 + index * 0.15,
                  ease: "backOut"
                }}
                viewport={{ once: true }}
                whileHover={{ 
                  y: -8,
                  scale: 1.03,
                  transition: { duration: 0.3 }
                }}
                className="group relative"
              >
                {/* Animated Background Glow */}
                <motion.div
                  animate={{ 
                    scale: [1, 1.1, 1],
                    opacity: [0.1, 0.3, 0.1]
                  }}
                  transition={{ 
                    repeat: Infinity, 
                    duration: 3,
                    delay: index * 0.5,
                    ease: "easeInOut"
                  }}
                  className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} rounded-2xl blur-lg group-hover:blur-xl transition-all duration-500`}
                />
                
                <div className="relative p-6 bg-white/95 backdrop-blur-sm rounded-2xl border border-gray-200/50 group-hover:border-white shadow-lg group-hover:shadow-2xl transition-all duration-500 overflow-hidden">
                  {/* Icon Container */}
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className={`w-12 h-12 bg-gradient-to-br ${stat.gradient} rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg`}
                  >
                    <stat.icon className="w-6 h-6 text-white" />
                  </motion.div>

                  {/* Content */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.3 + index * 0.15 }}
                    viewport={{ once: true }}
                  >
                    <div className="text-2xl font-bold text-gray-900 text-center mb-1">
                      {stat.number}
                    </div>
                    <div className="text-sm font-semibold text-gray-800 text-center mb-2">
                      {stat.label}
                    </div>
                    <div className="text-xs text-gray-600 text-center">
                      {stat.description}
                    </div>
                  </motion.div>

                  {/* Hover Effect Line */}
                  <motion.div
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.3 }}
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-blue-500 to-transparent"
                  />
                </div>
              </motion.div>
            ))}

            {/* Additional Floating Element - FIXED ANIMATION */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              animate={{ 
                y: [0, -10, 0],
                transition: {
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.8
                }
              }}
              viewport={{ once: true }}
              className="col-span-2 mt-6"
            >
              <div className="p-6 bg-gradient-to-r from-blue-50/50 to-purple-50/50 rounded-2xl border border-blue-200/30 backdrop-blur-sm">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-white rounded-xl shadow-sm">
                    <Globe className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">
                      Global Threat Intelligence Network
                    </h4>
                    <p className="text-sm text-gray-600">
                      Real-time monitoring and analysis of emerging threats worldwide
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}