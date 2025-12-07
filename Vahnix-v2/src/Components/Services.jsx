import React, { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { 
  Shield, Network, Cloud, Lock, Zap, Bug, 
  ChevronLeft, ChevronRight, ArrowRight, 
  Sparkles, Target, CheckCircle 
} from "lucide-react";

const SERVICES = [
  {
    slug: "web-pentest",
    title: "Web Application Penetration Testing",
    desc: "Manual & automated testing targeting OWASP Top 10, business logic flaws, and zero-days.",
    icon: Shield,
    bgGradient: "from-blue-500 to-cyan-600",
    hoverGradient: "from-blue-600 to-cyan-700",
    textColor: "text-white",
    iconBg: "bg-white/20",
    buttonStyle: "bg-white text-blue-600 hover:bg-blue-50",
    borderGlow: "shadow-blue-500/40",
    features: ["OWASP Top 10 Coverage", "Business Logic Testing", "Zero-Day Detection", "Comprehensive Reporting"]
  },
  {
    slug: "network-assessment",
    title: "Network & Infrastructure Assessment",
    desc: "External/internal reconnaissance, privilege escalation paths, and firewall bypass simulation.",
    icon: Network,
    bgGradient: "from-emerald-500 to-green-600",
    hoverGradient: "from-emerald-600 to-green-700",
    textColor: "text-white",
    iconBg: "bg-white/20",
    buttonStyle: "bg-white text-emerald-600 hover:bg-emerald-50",
    borderGlow: "shadow-emerald-500/40",
    features: ["External Recon", "Privilege Escalation", "Firewall Bypass", "Infrastructure Audit"]
  },
  {
    slug: "cloud-security",
    title: "Cloud Security Review",
    desc: "Deep audit of AWS, Azure, GCP — IAM, S3/Blob exposures, serverless risks, and CI/CD pipelines.",
    icon: Cloud,
    bgGradient: "from-purple-500 to-indigo-600",
    hoverGradient: "from-purple-600 to-indigo-700",
    textColor: "text-white",
    iconBg: "bg-white/20",
    buttonStyle: "bg-white text-purple-600 hover:bg-purple-50",
    borderGlow: "shadow-purple-500/40",
    features: ["Multi-Cloud Audit", "IAM Security", "Data Exposure", "CI/CD Security"]
  },
  {
    slug: "mobile-pentest",
    title: "Mobile Application Security",
    desc: "iOS & Android — reverse engineering, insecure storage, runtime manipulation, and API attacks.",
    icon: Lock,
    bgGradient: "from-orange-500 to-red-600",
    hoverGradient: "from-orange-600 to-red-700",
    textColor: "text-white",
    iconBg: "bg-white/20",
    buttonStyle: "bg-white text-orange-600 hover:bg-orange-50",
    borderGlow: "shadow-orange-500/40",
    features: ["iOS & Android", "Reverse Engineering", "Runtime Security", "API Security"]
  },
  {
    slug: "red-team",
    title: "Red Team Simulation",
    desc: "Full-scope adversarial engagement — phishing, physical, wireless, and persistent access testing.",
    icon: Zap,
    bgGradient: "from-rose-500 to-pink-600",
    hoverGradient: "from-rose-600 to-pink-700",
    textColor: "text-white",
    iconBg: "bg-white/20",
    buttonStyle: "bg-white text-rose-600 hover:bg-rose-50",
    borderGlow: "shadow-rose-500/40",
    features: ["Adversary Simulation", "Phishing Campaigns", "Physical Security", "Persistence Testing"]
  },
  {
    slug: "vulnerability-assessment",
    title: "Vulnerability Assessment & Compliance",
    desc: "Automated + manual scanning with risk scoring, PCI-DSS, ISO 27001, and SOC 2 readiness reports.",
    icon: Bug,
    bgGradient: "from-amber-500 to-yellow-600",
    hoverGradient: "from-amber-600 to-yellow-700",
    textColor: "text-white",
    iconBg: "bg-white/20",
    buttonStyle: "bg-white text-amber-600 hover:bg-amber-50",
    borderGlow: "shadow-amber-500/40",
    features: ["Automated Scanning", "Risk Scoring", "Compliance Reports", "Continuous Monitoring"]
  },
];

export default function Services() {
  const scrollRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);

  const checkScrollButtons = () => {
    if (!scrollRef.current) return;
    
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
    setCanScrollLeft(scrollLeft > 0);
    setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 10);
  };

  const scroll = (direction) => {
    if (!scrollRef.current) return;
    
    const container = scrollRef.current;
    const cardWidth = 376; // 340px + 36px gap
    const scrollAmount = direction === "left" ? -cardWidth : cardWidth;
    
    container.scrollBy({
      left: scrollAmount,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    checkScrollButtons();
    const container = scrollRef.current;
    if (container) {
      container.addEventListener("scroll", checkScrollButtons);
      return () => container.removeEventListener("scroll", checkScrollButtons);
    }
  }, []);

  // Handle wheel scrolling for smoother experience
  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const handleWheel = (e) => {
      if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
        e.preventDefault();
        container.scrollBy({
          left: e.deltaY * 2,
          behavior: "smooth",
        });
      }
    };

    container.addEventListener("wheel", handleWheel, { passive: false });
    return () => container.removeEventListener("wheel", handleWheel);
  }, []);

  return (
    <section
      id="services"
      className="relative py-24 bg-gradient-to-b from-white via-blue-50/20 to-white/80 overflow-hidden"
    >
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
            duration: 20, 
            ease: "easeInOut" 
          }}
          className="absolute top-20 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-200/20 to-cyan-200/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ 
            x: [0, -80, 0],
            y: [0, 60, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{ 
            repeat: Infinity, 
            duration: 25, 
            ease: "easeInOut",
            delay: 2
          }}
          className="absolute bottom-20 right-1/4 w-80 h-80 bg-gradient-to-r from-emerald-200/10 to-green-200/10 rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Enhanced Heading */}
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
            <span className="text-sm font-semibold text-gray-800">Comprehensive Security Solutions</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
          >
            <span className="bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 bg-clip-text text-transparent">
              Advanced Security
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent">
              Services
            </span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            Tailored cybersecurity solutions designed to protect your digital assets with cutting-edge technology and expert methodologies.
          </motion.p>
        </motion.div>

        {/* Navigation Controls */}
        <div className="relative mb-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="flex items-center justify-center gap-4"
          >
            <motion.button
              onClick={() => scroll("left")}
              disabled={!canScrollLeft}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className={`p-3 bg-white border border-gray-200 rounded-full shadow-lg transition-all duration-300 ${
                canScrollLeft 
                  ? "hover:shadow-xl hover:border-blue-300 cursor-pointer" 
                  : "opacity-30 cursor-not-allowed"
              }`}
            >
              <ChevronLeft className="w-5 h-5 text-gray-700" />
            </motion.button>

            <div className="flex gap-2">
              {SERVICES.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => {
                    if (scrollRef.current) {
                      scrollRef.current.scrollTo({
                        left: index * 376,
                        behavior: "smooth",
                      });
                    }
                  }}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === activeIndex 
                      ? "bg-blue-600 w-8" 
                      : "bg-gray-300 hover:bg-gray-400"
                  }`}
                />
              ))}
            </div>

            <motion.button
              onClick={() => scroll("right")}
              disabled={!canScrollRight}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className={`p-3 bg-white border border-gray-200 rounded-full shadow-lg transition-all duration-300 ${
                canScrollRight 
                  ? "hover:shadow-xl hover:border-blue-300 cursor-pointer" 
                  : "opacity-30 cursor-not-allowed"
              }`}
            >
              <ChevronRight className="w-5 h-5 text-gray-700" />
            </motion.button>
          </motion.div>
        </div>

        {/* Services Cards Container */}
        <div className="relative">
          <div
            ref={scrollRef}
            className="flex gap-9 overflow-x-auto scroll-smooth pb-12 snap-x snap-mandatory scrollbar-hide px-4"
            style={{ 
              scrollbarWidth: "none",
              scrollPadding: "0 16px",
              WebkitOverflowScrolling: "touch"
            }}
            onScroll={(e) => {
              const container = e.target;
              const index = Math.round(container.scrollLeft / 376);
              setActiveIndex(Math.min(index, SERVICES.length - 1));
            }}
          >
            {SERVICES.map((service, index) => (
              <motion.div
                key={service.slug}
                initial={{ opacity: 0, scale: 0.9, y: 30 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 100,
                  damping: 15
                }}
                whileHover={{ 
                  y: -10,
                  transition: { duration: 0.3 }
                }}
                className="snap-center flex-shrink-0 w-[340px]"
              >
                <div className="relative h-full group">
                  {/* Background Glow Effect */}
                  <motion.div
                    animate={{ 
                      scale: [1, 1.05, 1],
                      opacity: [0.1, 0.3, 0.1]
                    }}
                    transition={{ 
                      repeat: Infinity, 
                      duration: 3,
                      delay: index * 0.5
                    }}
                    className={`absolute inset-0 bg-gradient-to-br ${service.bgGradient} rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500`}
                  />
                  
                  {/* Main Card */}
                  <div className={`relative h-full p-8 rounded-3xl bg-gradient-to-br ${service.bgGradient} ${service.textColor} shadow-2xl group-hover:shadow-3xl transition-all duration-500 overflow-hidden`}>
                    {/* Shine Effect */}
                    <div className="absolute inset-0 -left-48 top-0 w-24 h-full bg-white/10 transform -skew-x-12 group-hover:left-[110%] transition-all duration-700" />
                    
                    {/* Icon */}
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className={`p-4 ${service.iconBg} rounded-2xl backdrop-blur-sm w-fit mb-6 border border-white/20 relative`}
                    >
                      <service.icon className="w-8 h-8" />
                      <motion.div
                        animate={{ scale: [1, 1.3, 1], opacity: [0.5, 0, 0.5] }}
                        transition={{ repeat: Infinity, duration: 2, delay: index * 0.2 }}
                        className="absolute inset-0 bg-white/20 rounded-2xl blur-sm"
                      />
                    </motion.div>

                    {/* Title */}
                    <h3 className="text-xl font-bold mb-4 leading-tight group-hover:translate-x-1 transition-transform duration-300">
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p className="text-white/90 text-sm leading-relaxed mb-6 opacity-90 group-hover:opacity-100 transition-opacity duration-300">
                      {service.desc}
                    </p>

                    {/* Features List */}
                    <div className="space-y-2 mb-8">
                      {service.features.map((feature, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.4 + i * 0.1 }}
                          className="flex items-center gap-2"
                        >
                          <CheckCircle className="w-4 h-4 text-white/80" />
                          <span className="text-sm text-white/90">{feature}</span>
                        </motion.div>
                      ))}
                    </div>

                    {/* Buttons */}
                    <div className="flex justify-between items-center">
                     <motion.div whileHover={{ x: 5 }}>
  <Link
    to={`/services/${service.slug}`}
    className="font-medium flex items-center gap-2 hover:gap-3 transition-all text-white/90 hover:text-white group"
  >
    Learn more 
    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
  </Link>
</motion.div>

<motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
  <Link
    to={`/services/${service.slug}`}
    className={`px-5 py-3 rounded-xl font-semibold text-sm shadow-lg hover:shadow-xl transition-all duration-300 ${service.buttonStyle}`}
  >
    View Details →
  </Link>
</motion.div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-center mt-12"
        >
          <motion.div
            animate={{ y: [0, -5, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="inline-flex items-center gap-3 text-gray-500 text-sm"
          >
            <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></span>
            Drag or use arrow keys to explore services
            <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></span>
          </motion.div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <div className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl shadow-xl">
            <Target className="w-5 h-5 text-white" />
            <span className="text-white font-semibold">
              Need a custom security solution?{" "}
              <a href="#contact" className="underline hover:opacity-90 transition-opacity">
                Contact our experts
              </a>
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}