import React, { useState } from "react";
import { motion } from "framer-motion";
import { Award, Shield, Target, Users, Trophy, Zap, CheckCircle, Lock, Clock, TrendingUp, ChevronRight, Sparkles, GitBranch, Bug, Star } from "lucide-react";

// Import remaining logos
import samsungLogo from "../assets/samsung-logo.png";
import shopifyLogo from "../assets/shopify-logo.png";
import redbulllogo from "../assets/redbull-logo.png";

// Fallback icons
const fallbackIcons = {
  Samsung: Trophy,
  Shopify: Lock,
  GitLab: Target
};

const Partnerships = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  // Reduced partnerships list
  const partnerships = [
    {
      name: "Samsung",
      category: " Security",
      color: "bg-indigo-100 text-indigo-700",
      gradient: "linear-gradient(135deg, #1428A0 0%, #757EE6 100%)",
      description: "Mobile security research for Samsung's Knox platform",
      image: samsungLogo,
      achievements: [
        "Knox security enhancements",
        "Mobile hardware research",
        "IoT security improvements"
      ],
      program: "Samsung  Security"
    },
    {
      name: "Shopify",
      category: "E-commerce",
      color: "bg-emerald-100 text-emerald-700",
      gradient: "linear-gradient(135deg, #5EB319 0%, #96BF48 100%)",
      description: "E-commerce platform security research",
      image: shopifyLogo,
      achievements: [
        "Payment gateway security",
        "Merchant data protection",
        "API vulnerability research"
      ],
      program: "Shopify Bug Bounty"
    },
    {
      name: "Redbull",
      category: "Bug Bounty",
      color: "bg-orange-100 text-orange-700",
      gradient: "linear-gradient(135deg, #FC6D26 0%, #E24329 100%)",
      description: "Security research with elite bug bounty payouts",
      image: redbulllogo,
      achievements: [
        "Multiple critical vulnerabilities",
        "High-severity XSS & SQLi",
        "Authentication bypass findings"
      ],
      program: "Redull bug bounty"
    },
  ];

  // Compact stats
  const eliteStats = [
    { 
      number: "200+", 
      label: "Critical Vulns", 
      icon: Bug,
      color: "from-blue-500 to-cyan-500"
    },
    { 
      number: "Top 0.1%", 
      label: "Global Rank", 
      icon: Award,
      color: "from-purple-500 to-pink-500"
    },
    { 
      number: "<24h", 
      label: "Response Time", 
      icon: Clock,
      color: "from-emerald-500 to-green-500"
    },
  ];

  // Compact methodology
  const methodology = [
    {
      icon: Target,
      title: "Threat Intel",
      description: "Continuous threat monitoring",
    },
    {
      icon: Shield,
      title: "Attack Simulation",
      description: "Real-world attack testing",
    },
    {
      icon: TrendingUp,
      title: "Continuous Updates",
      description: "Latest security research",
    }
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05
      }
    }
  };

  const itemVariants = {
    hidden: { y: 15, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 15
      }
    }
  };

  return (
    <section id="partnerships" className="relative py-20 bg-gradient-to-b from-gray-50 via-white to-blue-50/20">
      {/* Simplified background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-blue-400/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] bg-emerald-400/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Compact Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-gray-200 shadow-sm mb-6">
            <GitBranch className="w-4 h-4 text-blue-600" />
            <span className="text-sm font-semibold text-gray-800">
              Elite Security Team
            </span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="text-gray-900">Working with </span>
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Top Bug Bounty Researchers
            </span>
          </h2>
          
          <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base">
            Our team includes top-ranking bug bounty hunters who have secured global enterprises 
            through responsible disclosure.
          </p>
        </motion.div>

        {/* Compact Stats */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-3 gap-4 mb-16"
        >
          {eliteStats.map((stat, index) => (
            <motion.div
              key={stat.label}
              variants={itemVariants}
              whileHover={{ y: -4 }}
              className="group"
            >
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/60 shadow-sm hover:shadow-md transition-all duration-300">
                <div className="flex items-center justify-center mb-4">
                  <div className={`p-3 bg-gradient-to-br ${stat.color} rounded-xl`}>
                    <stat.icon className="w-5 h-5 text-white" />
                  </div>
                </div>
                
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900 mb-1">
                    {stat.number}
                  </div>
                  <div className="text-xs font-medium text-gray-600">{stat.label}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Compact Partnerships Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-6 mb-16"
        >
          {partnerships.map((partner, index) => {
            const FallbackIcon = fallbackIcons[partner.name];
            return (
              <motion.div
                key={partner.name}
                variants={itemVariants}
                whileHover={{ y: -6 }}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
                className="group"
              >
                <div className="relative bg-white/90 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/60 shadow-sm hover:shadow-lg transition-all duration-300">
                  
                  {/* Logo and Title */}
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm border border-gray-100">
                      {partner.image ? (
                        <img 
                          src={partner.image}
                          alt={`${partner.name} logo`}
                          className="w-8 h-8 object-contain"
                        />
                      ) : (
                        <FallbackIcon className="w-6 h-6 text-gray-700" />
                      )}
                    </div>
                    
                    <div>
                      <h3 className="font-bold text-gray-900">{partner.name}</h3>
                      <div className={`inline-flex items-center gap-1 px-2 py-1 rounded-full ${partner.color} text-xs font-medium mt-1`}>
                        <Shield className="w-2 h-2" />
                        {partner.category}
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-gray-600 mb-4">
                    {partner.description}
                  </p>

                  {/* Compact Achievements */}
                  <div className="space-y-2 mb-4">
                    {partner.achievements.slice(0, 2).map((achievement, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <CheckCircle className="w-3 h-3 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-xs text-gray-700">{achievement}</span>
                      </div>
                    ))}
                  </div>

                  {/* Program Badge */}
                  <div className="pt-4 border-t border-gray-200/50">
                    <div className="text-xs text-gray-500">Program</div>
                    <div className="font-semibold text-blue-600 text-sm">{partner.program}</div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Compact Methodology */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-200/60 shadow-sm">
            <div className="text-center mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Research Methodology
              </h3>
              <p className="text-sm text-gray-600">
                Systematic approach with elite expertise
              </p>
            </div>
            
            <div className="grid grid-cols-3 gap-4">
              {methodology.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="inline-flex p-3 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl mb-3">
                    <item.icon className="w-4 h-4 text-white" />
                  </div>
                  <h4 className="text-sm font-semibold text-gray-900 mb-1">{item.title}</h4>
                  <p className="text-xs text-gray-600">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Compact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-gradient-to-br from-blue-50 to-purple-50/50 rounded-2xl p-8 border border-blue-100 shadow-sm mb-6">
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              Want Elite Security Protection?
            </h3>
            <p className="text-sm text-gray-600 mb-6 max-w-md mx-auto">
              Work with security researchers who have successfully protected global enterprises.
            </p>
            
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.03, y: -1 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm font-semibold rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
            >
              <GitBranch className="w-4 h-4" />
              Work with Experts
              <ChevronRight className="w-4 h-4" />
            </motion.a>
            
            <div className="mt-4 text-xs text-gray-500">
              <p>All assessments under <span className="font-medium text-gray-700">strict NDA</span></p>
            </div>
          </div>
          
          {/* Compact Trust Badges */}
          <div className="flex flex-wrap justify-center items-center gap-4 text-xs text-gray-500">
            <div className="flex items-center gap-1">
              <Lock className="w-3 h-3 text-green-500" />
              <span>Confidential</span>
            </div>
            <div className="flex items-center gap-1">
              <Shield className="w-3 h-3 text-blue-500" />
              <span>Certified</span>
            </div>
            <div className="flex items-center gap-1">
              <Users className="w-3 h-3 text-purple-500" />
              <span>Experts</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Partnerships;