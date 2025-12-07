import React from "react";
import { motion } from "framer-motion";
import { Zap, Cpu, Shield, GitBranch, Terminal, Code } from "lucide-react";

// Import your images
import burpSuiteImg from "../assets/burp-suite.jpg";
import metasploitImg from "../assets/metasploit.jpg";
import nmapImg from "../assets/nmap.jpg";
import zapImg from "../assets/zap.jpg";
import wiresharkImg from "../assets/wireshark.jpg";
import cobaltStrikeImg from "../assets/cobalt-strike.jpg";

const TechStack = () => {
  const tools = [
    {
      name: "Burp Suite",
      category: "Web Testing",
      color: "bg-orange-100 text-orange-700",
      logoColor: "from-orange-500 to-orange-600",
      description: "Industry standard for web application security testing",
      image: burpSuiteImg
    },
    {
      name: "Metasploit",
      category: "Exploitation",
      color: "bg-red-100 text-red-700",
      logoColor: "from-red-500 to-red-600",
      description: "Penetration testing framework for exploit development",
      image: metasploitImg
    },
    {
      name: "Nmap",
      category: "Network Scanning",
      color: "bg-green-100 text-green-700",
      logoColor: "from-green-500 to-green-600",
      description: "Network discovery and security auditing",
      image: nmapImg
    },
    {
      name: "OWASP ZAP",
      category: "Vulnerability Scanner",
      color: "bg-blue-100 text-blue-700",
      logoColor: "from-blue-500 to-blue-600",
      description: "Open source web application security scanner",
      image: zapImg
    },
    {
      name: "Wireshark",
      category: "Traffic Analysis",
      color: "bg-indigo-100 text-indigo-700",
      logoColor: "from-indigo-500 to-indigo-600",
      description: "Network protocol analyzer for deep inspection",
      image: wiresharkImg
    },
    {
      name: "Cobalt Strike",
      category: "Red Teaming",
      color: "bg-purple-100 text-purple-700",
      logoColor: "from-purple-500 to-purple-600",
      description: "Adversary simulation and red team operations",
      image: cobaltStrikeImg
    },
  ];

  return (
    <section id="techstack" className="relative py-24 bg-gradient-to-b from-white to-blue-50/20 overflow-hidden">
      {/* Background Elements */}
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
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
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
              <Zap className="w-5 h-5 text-blue-600" />
              <motion.div
                animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="absolute inset-0 w-5 h-5 bg-blue-400 rounded-full blur-sm"
              />
            </div>
            <span className="text-lg font-semibold text-gray-800">Our Security Toolstack</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-5xl md:text-6xl font-bold mb-8"
          >
            <span className="bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 bg-clip-text text-transparent">
              Industry-Standard
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent">
              Security Tools
            </span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            We use the same tools attackers employ, combined with custom scripts and expert manual testing 
            for comprehensive security assessments.
          </motion.p>
        </motion.div>

        {/* Tools Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {tools.map((tool, index) => (
            <motion.div
              key={tool.name}
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.1,
                type: "spring",
                stiffness: 100,
                damping: 12
              }}
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{ 
                y: -8,
                scale: 1.05,
                transition: { duration: 0.3 }
              }}
              className="group relative"
            >
              {/* Background Glow */}
              <motion.div
                animate={{ 
                  scale: [1, 1.1, 1],
                  opacity: [0.1, 0.3, 0.1]
                }}
                transition={{ 
                  repeat: Infinity, 
                  duration: 3,
                  delay: index * 0.5
                }}
                className={`absolute inset-0 bg-gradient-to-br ${tool.logoColor} rounded-[24px] blur-lg group-hover:blur-xl transition-all duration-500`}
              />
              
              {/* Main Card */}
              <div className="relative bg-white/95 backdrop-blur-sm rounded-[24px] p-6 border border-gray-200/50 group-hover:border-white shadow-lg group-hover:shadow-2xl transition-all duration-500 overflow-hidden text-center">
                
                {/* Tool Logo Container */}
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg relative overflow-hidden"
                >
                  {/* Tool Logo Image */}
                  <img 
                    src={tool.image}
                    alt={`${tool.name} logo`}
                    className="w-full h-full object-contain p-2"
                    style={{
                      filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.1))'
                    }}
                  />
                  
                  {/* Pulsing Animation */}
                  <motion.div
                    className="absolute inset-0 border-2 border-white/30 rounded-2xl"
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.5, 0, 0.5]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                </motion.div>

                {/* Tool Name */}
                <motion.h3
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.3 + index * 0.15 }}
                  viewport={{ once: true }}
                  className="text-lg font-bold text-gray-900 mb-1"
                >
                  {tool.name}
                </motion.h3>

                {/* Category */}
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.4 + index * 0.15 }}
                  viewport={{ once: true }}
                  className={`text-sm font-semibold mb-2 ${tool.color.split(' ')[1]}`}
                >
                  {tool.category}
                </motion.p>

                {/* Description Tooltip (Visible on Hover) */}
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  whileHover={{ opacity: 1, height: "auto" }}
                  className="overflow-hidden"
                >
                  <p className="text-xs text-gray-600 mt-2">
                    {tool.description}
                  </p>
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
        </div>

        {/* Additional Tools & Expertise */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <div className="bg-gradient-to-r from-blue-50/50 to-purple-50/50 backdrop-blur-sm rounded-3xl p-8 border border-blue-200/30">
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Code className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2">Custom Tooling</h4>
                  <p className="text-sm text-gray-600">
                    Proprietary scripts and tools developed in-house for specialized testing scenarios
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Terminal className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2">Manual Expertise</h4>
                  <p className="text-sm text-gray-600">
                    Tools are augmented with manual testing expertise to identify complex vulnerabilities
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2">Continuous Updates</h4>
                  <p className="text-sm text-gray-600">
                    Regular tool updates and training to stay current with evolving attack techniques
                  </p>
                </div>
              </div>
              
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
                viewport={{ once: true }}
                className="text-center mt-8 pt-6 border-t border-blue-200/30"
              >
                <p className="text-sm text-gray-600">
                  Plus: <span className="font-semibold text-gray-800">Nessus, SQLMap, Hydra, John the Ripper, Aircrack-ng,</span> and other specialized security tools
                </p>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-gray-600 mb-6">
            Want to learn more about our technical capabilities and approach?
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:shadow-lg transition-all"
          >
            Discuss Your Security Needs
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default TechStack;