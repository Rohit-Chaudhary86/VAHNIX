import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Zap, Shield, Target, Cpu, Brain, Sparkles, 
  CheckCircle, Users, Award, Clock, Lock, Globe, 
  ArrowRight, Star, BarChart, Activity
} from "lucide-react";

const TeamVision = () => {
  const [activeStat, setActiveStat] = useState(0);

  const principles = [
    {
      icon: Brain,
      title: "Adversarial Mindset",
      description: "We think like attackers to anticipate real-world threats",
      gradient: "from-blue-500 to-cyan-500",
      stats: "1000+ attack simulations"
    },
    {
      icon: Target,
      title: "Zero-Day Focus",
      description: "Proactive discovery of unknown vulnerabilities",
      gradient: "from-purple-500 to-pink-500",
      stats: "Zero-day research"
    },
    {
      icon: Cpu,
      title: "Technical Depth",
      description: "Deep expertise in modern tech stacks and architectures",
      gradient: "from-orange-500 to-red-500",
      stats: "15+ frameworks"
    },
    {
      icon: Shield,
      title: "Defensive Excellence",
      description: "Actionable remediation based on actual attack vectors",
      gradient: "from-emerald-500 to-green-500",
      stats: "98% remediation rate"
    }
  ];

  const stats = [
    { number: "10,000+", label: "Hours of Testing", icon: Clock, color: "text-blue-600", bg: "bg-blue-100" },
    { number: "100%", label: "OSCP Certified", icon: Award, color: "text-green-600", bg: "bg-green-100" },
    { number: "Zero", label: "Security Incidents", icon: Lock, color: "text-purple-600", bg: "bg-purple-100" },
    { number: "24/7", label: "Threat Monitoring", icon: Globe, color: "text-orange-600", bg: "bg-orange-100" }
  ];

  const founders = [
    {
      name: "Security Experts",
      role: "Offensive Security Specialists",
      background: "Former penetration testers with Fortune 500 experience",
      expertise: ["Network Security", "Application Security", "Cloud Security", "Red Teaming"]
    }
  ];

  return (
    <section id="team-vision" className="relative py-24 bg-gradient-to-b from-white to-blue-50/20 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
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
          className="absolute top-1/4 left-1/4 w-[800px] h-[800px] bg-gradient-to-r from-blue-100/30 to-purple-100/20 rounded-full blur-3xl"
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
          className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-gradient-to-r from-emerald-100/20 to-cyan-100/30 rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-3 px-5 py-3 bg-white/80 backdrop-blur-sm rounded-full border border-gray-200 shadow-sm mb-8"
          >
            <div className="relative">
              <Sparkles className="w-5 h-5 text-blue-600" />
              <motion.div
                animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="absolute inset-0 w-5 h-5 bg-blue-400 rounded-full blur-sm"
              />
            </div>
            <span className="text-lg font-semibold text-gray-800">Our Security Philosophy</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-5xl md:text-6xl font-bold mb-8"
          >
            <span className="bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 bg-clip-text text-transparent">
              Why We Started
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent">
              VAHNIX Security
            </span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            We saw too many security companies focused on compliance checkboxes rather than 
            <span className="text-blue-600 font-semibold"> real adversary simulation</span>. 
            VAHNIX was born from offensive security expertise.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Column - Core Principles */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true, margin: "-50px" }}
            className="space-y-12"
          >
            {/* Founder's Quote Card */}
            <motion.div
              whileHover={{ y: -8 }}
              className="bg-gradient-to-br from-white to-blue-50/50 backdrop-blur-sm rounded-[32px] p-8 border border-gray-200 shadow-lg"
            >
              <div className="flex items-start gap-6">
                <motion.div
                  whileHover={{ rotate: 10, scale: 1.1 }}
                  className="relative"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-[20px] flex items-center justify-center">
                    <Zap className="w-8 h-8 text-white" />
                  </div>
                  <motion.div
                    animate={{ 
                      scale: [1, 1.2, 1],
                      opacity: [0.5, 0, 0.5]
                    }}
                    transition={{ repeat: Infinity, duration: 3 }}
                    className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-400 rounded-[20px] blur-lg"
                  />
                </motion.div>
                <div className="flex-1">
                  <blockquote className="text-2xl font-bold text-gray-900 mb-4 leading-tight">
                    "We test security the way real attackers think — because that's exactly what we've been."
                  </blockquote>
                  <div className="flex items-center gap-4 mt-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center font-bold text-lg text-white">
                      V
                    </div>
                    <div>
                      <p className="font-semibold text-lg text-gray-900">VAHNIX Founders</p>
                      <p className="text-gray-600 text-sm">Former Fortune 500 Penetration Testers</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Core Principles Grid */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-3">
                <Target className="w-6 h-6 text-blue-600" />
                Our Core Principles
              </h3>
              
              <div className="grid sm:grid-cols-2 gap-6">
                {principles.map((principle, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ 
                      y: -5,
                      transition: { duration: 0.3 }
                    }}
                    className="group relative"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-white to-blue-50 rounded-[32px] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    <div className="relative bg-white/80 backdrop-blur-sm rounded-[32px] p-6 border border-gray-200 group-hover:border-blue-300 group-hover:shadow-xl transition-all duration-300">
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        className={`w-14 h-14 bg-gradient-to-br ${principle.gradient} rounded-[20px] flex items-center justify-center mb-4 shadow-lg`}
                      >
                        <principle.icon className="w-7 h-7 text-white" />
                      </motion.div>
                      
                      <h4 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                        {principle.title}
                      </h4>
                      <p className="text-gray-600 text-sm mb-3">
                        {principle.description}
                      </p>
                      <div className="flex items-center justify-between mt-4">
                        <span className="text-xs text-gray-500 font-medium">
                          {principle.stats}
                        </span>
                        <CheckCircle className="w-4 h-4 text-green-500" />
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  viewport={{ once: true }}
                  onMouseEnter={() => setActiveStat(index)}
                  className={`text-center p-4 rounded-[24px] transition-all duration-300 cursor-pointer ${
                    activeStat === index 
                      ? 'bg-gradient-to-br from-white to-blue-50 border-blue-300 shadow-lg' 
                      : 'bg-white/80 border-gray-200'
                  } border backdrop-blur-sm`}
                >
                  <div className={`w-12 h-12 ${stat.bg} rounded-[16px] flex items-center justify-center mx-auto mb-3`}>
                    <stat.icon className={`w-6 h-6 ${stat.color}`} />
                  </div>
                  <div className="text-2xl font-bold text-gray-900">{stat.number}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column - Team & Methodology */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true, margin: "-50px" }}
            className="space-y-12"
          >
            {/* Expertise Card */}
            <motion.div
              whileHover={{ y: -8 }}
              className="bg-white/80 backdrop-blur-sm rounded-[32px] p-8 border border-gray-200 shadow-lg"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-[16px]">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">Elite Security Team</h3>
                  <p className="text-gray-600">Certified offensive security experts</p>
                </div>
              </div>

              <div className="space-y-6">
                {founders.map((founder, index) => (
                  <div key={index} className="space-y-4">
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-1">{founder.name}</h4>
                      <p className="text-gray-600 text-sm">{founder.role}</p>
                      <p className="text-gray-500 text-sm mt-2">{founder.background}</p>
                    </div>
                    
                    <div className="space-y-3">
                      <p className="text-sm font-medium text-gray-700">Expertise Areas:</p>
                      <div className="flex flex-wrap gap-2">
                        {founder.expertise.map((skill, skillIndex) => (
                          <motion.span
                            key={skillIndex}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.5 + skillIndex * 0.1 }}
                            className="px-3 py-1.5 bg-blue-50 border border-blue-100 rounded-full text-sm text-blue-700 hover:border-blue-300 hover:bg-blue-100 transition-all"
                          >
                            {skill}
                          </motion.span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Methodology Card */}
            <motion.div
              whileHover={{ y: -8 }}
              className="bg-white/80 backdrop-blur-sm rounded-[32px] p-8 border border-gray-200 shadow-lg"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 bg-gradient-to-br from-purple-600 to-pink-600 rounded-[16px]">
                  <Cpu className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">Our Methodology</h3>
                  <p className="text-gray-600">Proven offensive security framework</p>
                </div>
              </div>

              <div className="space-y-4">
                {[
                  "Real-world attack simulation",
                  "Manual penetration testing",
                  "Automated vulnerability scanning",
                  "Business logic testing",
                  "Social engineering assessments",
                  "Physical security testing"
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 + index * 0.1 }}
                    className="flex items-center gap-3 group"
                  >
                    <div className="w-2 h-2 bg-blue-500 rounded-full group-hover:scale-150 transition-transform" />
                    <span className="text-gray-700 group-hover:text-blue-600 transition-colors">
                      {item}
                    </span>
                  </motion.div>
                ))}
              </div>

              {/* Certifications Badges */}
              <div className="mt-8 pt-6 border-t border-gray-200">
                <p className="text-sm font-medium text-gray-700 mb-4">Industry Certifications:</p>
                <div className="flex flex-wrap gap-3">
                  {["CISSP", "GPEN", "OSWE"].map((cert, index) => (
                    <motion.div
                      key={cert}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.7 + index * 0.1 }}
                      whileHover={{ scale: 1.05 }}
                      className="px-4 py-2 bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-100 rounded-[12px] hover:border-blue-300 hover:shadow-md transition-all"
                    >
                      <span className="text-sm font-medium text-gray-800">{cert}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* CTA Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-blue-50 to-purple-50 backdrop-blur-sm rounded-[32px] p-8 border border-blue-200 shadow-lg"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-4">Ready to Work With Experts?</h3>
              <p className="text-gray-600 mb-6">
                Partner with security professionals who think like attackers to build unbreakable defenses.
              </p>
              <a
                href="#contact"
                className="group relative inline-flex items-center justify-center gap-2 w-full px-6 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-[20px] hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-2">
                  <Shield className="w-4 h-4" />
                  Start Security Assessment
                </span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                {/* Shine Effect */}
                <div className="absolute inset-0 -left-48 -top-8 w-24 h-32 bg-white/20 transform -skew-x-12 group-hover:left-[110%] transition-all duration-700" />
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TeamVision;