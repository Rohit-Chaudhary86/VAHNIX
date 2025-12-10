import React, { useRef, useState, useEffect, useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion, useMotionValue, useTransform, AnimatePresence } from "framer-motion";
import { 
  Shield, Network, Cloud, Lock, Zap, Bug, Cpu, Database, 
  ChevronLeft, ChevronRight, ArrowRight, ArrowUpRight,
  Sparkles, Target, CheckCircle, ExternalLink, Play, Clock,
  Users, Globe, Server, Key, Eye, AlertTriangle, BarChart,
  Award, TrendingUp, ShieldCheck, Code, Terminal
} from "lucide-react";

const SERVICES = [
  {
    slug: "web-pentest",
    title: "Web App Penetration Testing",
    shortTitle: "Web App Pentest",
    desc: "Target OWASP Top 10, business logic flaws, and API vulnerabilities.",
    icon: Shield,
    bgGradient: "from-blue-500 to-cyan-600",
    hoverGradient: "from-blue-600 to-cyan-700",
    textColor: "text-white",
    iconBg: "bg-white/20",
    buttonStyle: "bg-white text-blue-600 hover:bg-blue-50",
    borderGlow: "shadow-blue-500/40",
    features: [
      "OWASP Top 10 Coverage",
      "API Security Testing",
      "Business Logic Testing",
      "Compliance Reporting"
    ],
    tools: ["Burp Suite", "OWASP ZAP"],
    timeline: "2-4 Weeks",
    deliverable: "Technical Reports",
    level: "Advanced"
  },
  {
    slug: "network-assessment",
    title: "Network Security",
    shortTitle: "Network Security",
    desc: "Network penetration testing with reconnaissance and lateral movement.",
    icon: Network,
    bgGradient: "from-emerald-500 to-green-600",
    hoverGradient: "from-emerald-600 to-green-700",
    textColor: "text-white",
    iconBg: "bg-white/20",
    buttonStyle: "bg-white text-emerald-600 hover:bg-emerald-50",
    borderGlow: "shadow-emerald-500/40",
    features: [
      "Network Mapping",
      "Privilege Escalation",
      "Firewall Testing",
      "Zero-Trust Assessment"
    ],
    tools: ["Metasploit", "Nmap"],
    timeline: "3-5 Weeks",
    deliverable: "Network Report",
    level: "Enterprise"
  },
  {
    slug: "cloud-security",
    title: "Cloud Security",
    shortTitle: "Cloud Security",
    desc: "AWS, Azure, GCP security including IAM and container security.",
    icon: Cloud,
    bgGradient: "from-purple-500 to-indigo-600",
    hoverGradient: "from-purple-600 to-indigo-700",
    textColor: "text-white",
    iconBg: "bg-white/20",
    buttonStyle: "bg-white text-purple-600 hover:bg-purple-50",
    borderGlow: "shadow-purple-500/40",
    features: [
      "IAM Review",
      "Storage Security",
      "Container Security",
      "Serverless Security"
    ],
    tools: ["CloudSploit", "Pacu"],
    timeline: "2-3 Weeks",
    deliverable: "Cloud Report",
    level: "Advanced"
  },
  {
    slug: "mobile-pentest",
    title: "Mobile Security",
    shortTitle: "Mobile Security",
    desc: "iOS & Android security including reverse engineering and API security.",
    icon: Lock,
    bgGradient: "from-orange-500 to-red-600",
    hoverGradient: "from-orange-600 to-red-700",
    textColor: "text-white",
    iconBg: "bg-white/20",
    buttonStyle: "bg-white text-orange-600 hover:bg-orange-50",
    borderGlow: "shadow-orange-500/40",
    features: [
      "Binary Analysis",
      "Reverse Engineering",
      "Runtime Security",
      "API Security"
    ],
    tools: ["Frida", "MobSF"],
    timeline: "3-4 Weeks",
    deliverable: "Mobile Report",
    level: "Expert"
  },
  {
    slug: "red-team",
    title: "Red Team Engagement",
    shortTitle: "Red Teaming",
    desc: "Adversarial simulation including phishing and physical security.",
    icon: Zap,
    bgGradient: "from-rose-500 to-pink-600",
    hoverGradient: "from-rose-600 to-pink-700",
    textColor: "text-white",
    iconBg: "bg-white/20",
    buttonStyle: "bg-white text-rose-600 hover:bg-rose-50",
    borderGlow: "shadow-rose-500/40",
    features: [
      "Phishing Testing",
      "Physical Security",
      "Wireless Exploitation",
      "Persistence Testing"
    ],
    tools: ["Cobalt Strike", "SET"],
    timeline: "4-6 Weeks",
    deliverable: "Red Team Report",
    level: "Elite"
  },
  {
    slug: "vulnerability-assessment",
    title: "Vulnerability Management",
    shortTitle: "Vulnerability Mgmt",
    desc: "Vulnerability assessment with compliance mapping.",
    icon: Bug,
    bgGradient: "from-amber-500 to-yellow-600",
    hoverGradient: "from-amber-600 to-yellow-700",
    textColor: "text-white",
    iconBg: "bg-white/20",
    buttonStyle: "bg-white text-amber-600 hover:bg-amber-50",
    borderGlow: "shadow-amber-500/40",
    features: [
      "Vulnerability Scanning",
      "Risk Prioritization",
      "Compliance Mapping",
      "Continuous Monitoring"
    ],
    tools: ["Nessus", "Qualys"],
    timeline: "Ongoing",
    deliverable: "Compliance Reports",
    level: "Enterprise"
  }
];

export default function Services() {
  const scrollRef = useRef(null);
  const navigate = useNavigate();
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);
  const [hoveredService, setHoveredService] = useState(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const checkScrollButtons = useCallback(() => {
    if (!scrollRef.current) return;
    
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
    setCanScrollLeft(scrollLeft > 0);
    setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 10);
  }, []);

  const scroll = useCallback((direction) => {
    if (!scrollRef.current) return;
    
    const container = scrollRef.current;
    const cardWidth = 320; // Reduced card width
    const scrollAmount = direction === "left" ? -cardWidth * 1.5 : cardWidth * 1.5;
    
    container.scrollBy({
      left: scrollAmount,
      behavior: "smooth",
    });
  }, []);

  useEffect(() => {
    checkScrollButtons();
    const container = scrollRef.current;
    if (container) {
      container.addEventListener("scroll", checkScrollButtons);
      window.addEventListener("resize", checkScrollButtons);
      return () => {
        container.removeEventListener("scroll", checkScrollButtons);
        window.removeEventListener("resize", checkScrollButtons);
      };
    }
  }, [checkScrollButtons]);

  const handleMouseDown = (e) => {
    if (!scrollRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  };

  const handleMouseMove = (e) => {
    if (!isDragging || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const scrollToIndex = (index) => {
    if (!scrollRef.current) return;
    const cardWidth = 320;
    scrollRef.current.scrollTo({
      left: index * cardWidth,
      behavior: "smooth",
    });
    setActiveIndex(index);
  };

  const handleServiceClick = (slug) => {
    navigate(`/services/${slug}`);
  };

  return (
    <section
      id="services"
      className="relative min-h-[100vh] flex items-center justify-center py-12 bg-gradient-to-b from-gray-50 via-white to-blue-50/10 overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Simplified Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px]" />
        
        {/* Gradient Orbs */}
        <motion.div
          animate={{ 
            x: [0, 50, 0],
            y: [0, -30, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            repeat: Infinity, 
            duration: 20, 
            ease: "easeInOut" 
          }}
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-full blur-2xl"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10 w-full">
        {/* Compact Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-50px" }}
          className="text-center mb-12"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-gray-200 shadow-sm mb-4"
          >
            <div className="relative">
              <Sparkles className="w-4 h-4 text-blue-600" />
              <motion.div
                animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0, 0.3] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
                className="absolute inset-0 w-4 h-4 bg-blue-400 rounded-full blur-sm"
              />
            </div>
            <span className="text-sm font-semibold text-gray-800">Security Services</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            <span className="bg-gradient-to-r from-gray-900 to-blue-900 bg-clip-text text-transparent">
              Comprehensive
            </span>
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {" "}Security Solutions
            </span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-gray-600 max-w-2xl mx-auto mb-6"
          >
            Enterprise-grade security assessments by elite penetration testers
          </motion.p>

          {/* Quick Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-6 text-sm"
          >
            <div className="text-center">
              <div className="text-xl font-bold text-gray-900">500+</div>
              <div className="text-gray-600">Vulnerabilities Found</div>
            </div>
            <div className="text-center">
              <div className="text-xl font-bold text-gray-900">24h</div>
              <div className="text-gray-600">Response Time</div>
            </div>
            <div className="text-center">
              <div className="text-xl font-bold text-gray-900">99.8%</div>
              <div className="text-gray-600">Satisfaction</div>
            </div>
          </motion.div>
        </motion.div>

        {/* Compact Navigation */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mb-8"
        >
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <motion.button
                onClick={() => scroll("left")}
                disabled={!canScrollLeft}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`p-2 bg-white border border-gray-200 rounded-lg shadow-sm transition-all ${
                  canScrollLeft 
                    ? "hover:shadow-md hover:border-blue-300 cursor-pointer" 
                    : "opacity-30 cursor-not-allowed"
                }`}
              >
                <ChevronLeft className="w-4 h-4 text-gray-700" />
              </motion.button>

              <div className="flex gap-1">
                {SERVICES.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => scrollToIndex(index)}
                    className={`w-1.5 h-1.5 rounded-full transition-all ${
                      index === activeIndex 
                        ? "bg-blue-600 w-6" 
                        : "bg-gray-300 hover:bg-gray-400"
                    }`}
                  />
                ))}
              </div>

              <motion.button
                onClick={() => scroll("right")}
                disabled={!canScrollRight}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`p-2 bg-white border border-gray-200 rounded-lg shadow-sm transition-all ${
                  canScrollRight 
                    ? "hover:shadow-md hover:border-blue-300 cursor-pointer" 
                    : "opacity-30 cursor-not-allowed"
                }`}
              >
                <ChevronRight className="w-4 h-4 text-gray-700" />
              </motion.button>
            </div>
            
            <div className="text-sm text-gray-500">
              {activeIndex + 1} of {SERVICES.length}
            </div>
          </div>
        </motion.div>

        {/* Compact Services Cards */}
        <div className="relative">
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto scroll-smooth pb-8 px-2 cursor-grab active:cursor-grabbing"
            style={{ scrollbarWidth: "none" }}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            onScroll={(e) => {
              const container = e.target;
              const index = Math.round(container.scrollLeft / 320);
              setActiveIndex(Math.min(index, SERVICES.length - 1));
            }}
          >
            {SERVICES.map((service, index) => (
              <motion.div
                key={service.slug}
                initial={{ opacity: 0, scale: 0.95, y: 10 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ 
                  duration: 0.4, 
                  delay: index * 0.05,
                }}
                whileHover={{ 
                  y: -8,
                  transition: { duration: 0.2 }
                }}
                onMouseEnter={() => setHoveredService(index)}
                onMouseLeave={() => setHoveredService(null)}
                className="flex-shrink-0 w-[300px]"
              >
                <div className="relative h-full group">
                  {/* Glow Effect */}
                  <motion.div
                    animate={{ 
                      opacity: hoveredService === index ? 0.3 : 0.1,
                    }}
                    className={`absolute inset-0 bg-gradient-to-br ${service.bgGradient} rounded-2xl blur-lg`}
                  />
                  
                  {/* Main Card */}
                  <div className={`relative h-full p-6 rounded-2xl bg-gradient-to-br ${service.bgGradient} ${service.textColor} shadow-lg group-hover:shadow-xl border border-white/20 transition-all duration-300 overflow-hidden`}>
                    
                    {/* Shine Effect */}
                    <div className="absolute inset-0 -left-32 top-0 w-20 h-full bg-white/10 transform -skew-x-12 group-hover:left-[110%] transition-all duration-500" />
                    
                    {/* Content */}
                    <div className="relative z-10">
                      {/* Header */}
                      <div className="flex items-center justify-between mb-4">
                        <div className={`px-2 py-1 bg-white/20 backdrop-blur-sm rounded-lg text-xs font-medium border border-white/30`}>
                          {service.level}
                        </div>
                        <div className="flex items-center gap-1 text-xs">
                          <Clock className="w-3 h-3" />
                          {service.timeline}
                        </div>
                      </div>

                      {/* Icon */}
                      <div className={`p-3 ${service.iconBg} rounded-xl w-fit mb-4 border border-white/20 inline-flex`}>
                        <service.icon className="w-6 h-6" />
                      </div>

                      {/* Title */}
                      <h3 className="text-lg font-bold mb-3 leading-tight">
                        {service.shortTitle}
                      </h3>

                      {/* Description */}
                      <p className="text-white/90 text-sm leading-relaxed mb-4">
                        {service.desc}
                      </p>

                      {/* Features */}
                      <div className="space-y-2 mb-6">
                        {service.features.map((feature, i) => (
                          <div key={i} className="flex items-start gap-2">
                            <CheckCircle className="w-3.5 h-3.5 text-white/80 mt-0.5 flex-shrink-0" />
                            <span className="text-xs text-white/90">{feature}</span>
                          </div>
                        ))}
                      </div>

                      {/* Tools */}
                      <div className="mb-6">
                        <div className="text-xs font-medium mb-2">Tools</div>
                        <div className="flex flex-wrap gap-1.5">
                          {service.tools.map((tool, i) => (
                            <span key={i} className="px-2 py-1 bg-white/10 rounded-lg text-xs border border-white/20">
                              {tool}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex justify-between items-center">
                        <button
                          onClick={() => handleServiceClick(service.slug)}
                          className="text-sm font-medium flex items-center gap-1 hover:gap-1.5 transition-all text-white/90 hover:text-white group"
                        >
                          Details
                          <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                        </button>

                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={() => handleServiceClick(service.slug)}
                          className={`px-4 py-2 rounded-lg font-medium text-xs shadow-md hover:shadow-lg transition-all duration-300 ${service.buttonStyle} flex items-center gap-1.5`}
                        >
                          Request
                          <ArrowRight className="w-3.5 h-3.5" />
                        </motion.button>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Scroll Hint */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="absolute -bottom-4 left-0 right-0 flex justify-center"
          >
            <div className="inline-flex items-center gap-2 text-gray-400 text-xs bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full border border-gray-200">
              <span className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-pulse"></span>
              Scroll or drag to explore
              <span className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-pulse"></span>
            </div>
          </motion.div>
        </div>

        {/* Compact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          viewport={{ once: true }}
          className="mt-12"
        >
          <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 border border-blue-200/50">
            <div className="text-center">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Need Custom Security Solutions?
              </h3>
              
              <p className="text-gray-600 text-sm mb-6 max-w-md mx-auto">
                Get a free security consultation with our elite team.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-lg shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <Play className="w-4 h-4" />
                  Free Consultation
                </motion.button>
                
                {/* <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-6 py-3 bg-white text-gray-700 font-medium rounded-lg border border-gray-300 hover:border-blue-300 hover:shadow-md transition-all duration-300"
                >
                  
                </motion.button> */}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}