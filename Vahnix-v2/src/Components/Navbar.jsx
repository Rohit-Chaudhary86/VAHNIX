// src/components/layout/Header/Navigation.jsx
import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Shield, Menu, X, ArrowRight, ChevronDown, Calendar, Globe, Server, Cloud, List, Lock, Zap, Cpu, ShieldCheck } from "lucide-react";
import vahnixLogo from "../assets/vahnixlogo.jpg";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isLogoHovered, setIsLogoHovered] = useState(false);
  const [glitchEffect, setGlitchEffect] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Glitch effect trigger
  useEffect(() => {
    if (isLogoHovered) {
      const timer = setTimeout(() => {
        setGlitchEffect(true);
        setTimeout(() => setGlitchEffect(false), 150);
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [isLogoHovered]);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/", section: "about" },
    { 
      name: "Services", 
      path: "/services",
      dropdown: [
        { name: "Web App Testing", path: "/services/web-pentest", icon: Globe },
        { name: "Network Security", path: "/services/network-assessment", icon: Server },
        { name: "Cloud Security", path: "/services/cloud-security", icon: Cloud },
        { name: "All Services", path: "/services", icon: List }
      ]
    },
    { name: "Our Approach", path: "/our-approach" },
    { name: "Contact", path: "/contact" },
  ];

  const handleNavigation = (path, section = null) => {
    if (section && location.pathname === "/") {
      const element = document.getElementById(section);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else if (section) {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(section);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      navigate(path);
    }
    setIsMobileOpen(false);
    setActiveDropdown(null);
  };

  const isActive = (path, section = null) => {
    if (section && location.pathname === "/" && location.hash === `#${section}`) {
      return true;
    }
    if (path === "/") return location.pathname === "/";
    return location.pathname.startsWith(path);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          isScrolled 
            ? "bg-white/95 backdrop-blur-xl border-b border-gray-200/50 shadow-lg" 
            : "bg-white/80 backdrop-blur-lg"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            {/* CREATIVE LOGO PRESENTATION - FIXED */}
            <motion.div 
              onClick={() => handleNavigation("/")}
              onMouseEnter={() => setIsLogoHovered(true)}
              onMouseLeave={() => setIsLogoHovered(false)}
              className="flex items-center gap-3 group cursor-pointer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {/* Security Shield Container */}
              <div className="relative">
                {/* Outer hexagon shape */}
                <div className="absolute -inset-4 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Glitch effect layers */}
                {glitchEffect && (
                  <>
                    <div className="absolute -inset-1 bg-gradient-to-r from-red-500/20 to-transparent rounded-xl blur-sm animate-pulse" />
                    <div className="absolute -inset-1 bg-gradient-to-l from-blue-500/20 to-transparent rounded-xl blur-sm animate-pulse" style={{ animationDelay: '75ms' }} />
                  </>
                )}
                
                {/* Hexagon shield shape */}
                <div className="relative w-16 h-16">
                  {/* Hexagon outline */}
                  <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100">
                    <path
                      d="M50,10 L85,30 L85,70 L50,90 L15,70 L15,30 Z"
                      fill="none"
                      stroke="url(#shieldGradient)"
                      strokeWidth="2"
                      className="transition-all duration-300"
                    />
                    <defs>
                      <linearGradient id="shieldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#3b82f6" />
                        <stop offset="100%" stopColor="#8b5cf6" />
                      </linearGradient>
                    </defs>
                  </svg>
                  
                  {/* Logo container with hexagon mask */}
                  <div className="absolute inset-2 flex items-center justify-center overflow-hidden">
                    {/* Animated grid background */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-500">
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 via-transparent to-purple-400/20" />
                      <div className="absolute inset-0 bg-[linear-gradient(90deg,#0000_1px,transparent_1px),linear-gradient(#0000_1px,transparent_1px)] bg-[size:20px_20px] opacity-10" />
                    </div>
                    
                    {/* Rotating rings */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <motion.div
                        className="w-full h-full rounded-full border border-blue-300/30"
                        animate={{
                          rotate: isLogoHovered ? 360 : 0,
                          scale: isLogoHovered ? 1.2 : 1
                        }}
                        transition={{
                          rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                          scale: { duration: 0.3 }
                        }}
                      />
                      <motion.div
                        className="w-3/4 h-3/4 rounded-full border border-purple-300/30"
                        animate={{
                          rotate: isLogoHovered ? -360 : 0,
                          scale: isLogoHovered ? 1.1 : 0.9
                        }}
                        transition={{
                          rotate: { duration: 15, repeat: Infinity, ease: "linear", delay: 0.1 },
                          scale: { duration: 0.3 }
                        }}
                      />
                    </div>
                    
                    {/* Main logo with digital effect */}
                    <motion.div
                      className="relative w-full h-full rounded-full overflow-hidden"
                      animate={{
                        scale: isLogoHovered ? 1.15 : 1,
                        y: isLogoHovered ? -2 : 0
                      }}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 15
                      }}
                    >
                      {/* Scan line effect */}
                      <motion.div
                        className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-400/50 to-transparent z-10"
                        animate={{
                          y: isLogoHovered ? ["0%", "100%", "0%"] : "0%"
                        }}
                        transition={{
                          y: {
                            duration: 2,
                            repeat: Infinity,
                            ease: "linear",
                            times: [0, 0.5, 1]
                          }
                        }}
                      />
                      
                      {/* Digital noise overlay */}
                      <div className={`absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiPjxkZWZzPjxwYXR0ZXJuIGlkPSJub2lzZSIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgd2lkdGg9IjEwMCIgaGVpZ2h0PSIxMDAiIHBhdHRlcm5UcmFuc2Zvcm09InJvdGF0ZSg0NSkiPjxyZWN0IHdpZHRoPSIxIiBoZWlnaHQ9IjEiIGZpbGw9IiMwMDAiIGZpbGwtb3BhY2l0eT0iMC4xIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI25vaXNlKSIvPjwvc3ZnPg==')] opacity-0 group-hover:opacity-20 transition-opacity duration-300`} />
                      
                      {/* Logo image */}
                      <img 
                        src={vahnixLogo} 
                        alt="VAHNIX Security" 
                        className="relative w-full h-full object-cover p-1.5 z-0"
                      />
                      
                      {/* Shimmer effect */}
                      <div className="absolute inset-0 bg-gradient-to-t from-white/0 via-white/10 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </motion.div>
                    
                    {/* Floating security icons */}
                    <AnimatePresence>
                      {isLogoHovered && (
                        <>
                          <motion.div
                            initial={{ scale: 0, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0, opacity: 0 }}
                            transition={{ delay: 0.1, type: "spring" }}
                            className="absolute -top-2 -right-2 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center shadow-lg"
                          >
                            <ShieldCheck className="w-3 h-3 text-white" />
                          </motion.div>
                          <motion.div
                            initial={{ scale: 0, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0, opacity: 0 }}
                            transition={{ delay: 0.2, type: "spring" }}
                            className="absolute -bottom-2 -left-2 w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center shadow-lg"
                          >
                            <Lock className="w-3 h-3 text-white" />
                          </motion.div>
                        </>
                      )}
                    </AnimatePresence>
                  </div>
                  
                  {/* Active pulse */}
                  <motion.div
                    className="absolute inset-0 rounded-full border-2 border-blue-400/30"
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
                </div>
                
                {/* Connection lines */}
                <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-8 h-3">
                  <div className="w-full h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent group-hover:via-blue-600 transition-all duration-300" />
                  <div className="absolute top-1/2 left-0 w-1 h-1 bg-blue-400 rounded-full -translate-y-1/2 animate-pulse" />
                  <div className="absolute top-1/2 right-0 w-1 h-1 bg-blue-400 rounded-full -translate-y-1/2 animate-pulse" style={{ animationDelay: '0.5s' }} />
                </div>
              </div>
              
              {/* FIXED TEXT SECTION - No blur issue */}
              <div className="flex flex-col relative z-10">
                {/* Text glow effect - moved behind text */}
                <div className="absolute -inset-2 bg-gradient-to-r from-blue-600/20 to-purple-600/20 blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-300 -z-10" />
                
                {/* VAHNIX text - clean and clear */}
                <div className="relative">
                  <motion.h1 
                    className="text-2xl font-black tracking-tighter bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent"
                    animate={{
                      x: isLogoHovered ? 3 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    VAHNIX
                  </motion.h1>
                  
                  {/* Binary code - separate element below */}
                  <motion.div
                    className="text-[9px] font-mono text-blue-400 tracking-[0.2em] mt-0.5"
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ 
                      opacity: isLogoHovered ? 0.8 : 0,
                      y: isLogoHovered ? 0 : -5
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    01010101
                  </motion.div>
                </div>
                
                {/* SECURITY text */}
                <motion.p 
                  className="text-xs font-bold tracking-widest uppercase mt-1 relative"
                  animate={{
                    x: isLogoHovered ? 3 : 0,
                  }}
                  transition={{ duration: 0.3, delay: 0.05 }}
                >
                  <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    SECURITY
                  </span>
                  
                  {/* Status dot - fixed animation */}
                  <motion.span 
                    className="absolute -right-4 top-1/2 w-2 h-2 bg-green-500 rounded-full -translate-y-1/2"
                    animate={{ 
                      scale: isLogoHovered ? [1, 1.2, 1] : 0,
                      opacity: isLogoHovered ? [0.7, 1, 0.7] : 0
                    }}
                    transition={{
                      scale: {
                        duration: 1.5,
                        repeat: Infinity,
                        ease: "easeInOut"
                      },
                      opacity: {
                        duration: 1.5,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }
                    }}
                  />
                </motion.p>
              </div>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-6">
              {navItems.map((item) => (
                <div
                  key={item.name}
                  className="relative"
                  onMouseEnter={() => setActiveDropdown(item.name)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  {item.dropdown ? (
                    <>
                      <button
                        onClick={() => handleNavigation(item.path)}
                        className={`flex items-center gap-1 px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                          isActive(item.path)
                            ? "text-blue-600 bg-blue-50"
                            : "text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                        }`}
                      >
                        {item.name}
                        <ChevronDown className="w-4 h-4" />
                      </button>

                      <AnimatePresence>
                        {activeDropdown === item.name && (
                          <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 10 }}
                            className="absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-xl border border-gray-200/50 backdrop-blur-lg z-50"
                          >
                            <div className="p-2">
                              {item.dropdown.map((dropdownItem) => (
                                <div
                                  key={dropdownItem.name}
                                  onClick={() => handleNavigation(dropdownItem.path)}
                                  className="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-all duration-200 font-medium group cursor-pointer"
                                >
                                  <dropdownItem.icon className="w-4 h-4 text-blue-500 group-hover:text-blue-600" />
                                  <span>{dropdownItem.name}</span>
                                </div>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  ) : (
                    <button
                      onClick={() => handleNavigation(item.path, item.section)}
                      className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                        isActive(item.path, item.section)
                          ? "text-blue-600 bg-blue-50"
                          : "text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                      }`}
                    >
                      {item.name}
                    </button>
                  )}
                </div>
              ))}
              
              {/* Schedule Meet Button */}
              <button
                onClick={() => handleNavigation("/meet")}
                className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-emerald-500 to-green-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl hover:from-emerald-600 hover:to-green-700 transform hover:-translate-y-0.5 transition-all duration-300"
              >
                <Calendar className="w-4 h-4" />
                Schedule Meet
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              className="lg:hidden p-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors"
            >
              {isMobileOpen ? (
                <X className="w-6 h-6 text-gray-700" />
              ) : (
                <Menu className="w-6 h-6 text-gray-700" />
              )}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 lg:hidden"
              onClick={() => setIsMobileOpen(false)}
            />
            
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3 }}
              className="fixed top-0 right-0 bottom-0 w-80 bg-white shadow-2xl z-50 lg:hidden"
            >
              <div className="p-6 h-full flex flex-col">
                {/* Mobile Logo */}
                <div className="flex items-center justify-between mb-8">
                  <div 
                    onClick={() => handleNavigation("/")}
                    className="flex items-center gap-3"
                  >
                    <div className="relative w-12 h-12 rounded-xl flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 to-purple-50 shadow-md border-2 border-white">
                      <img 
                        src={vahnixLogo} 
                        alt="VAHNIX" 
                        className="w-full h-full object-cover p-0.5"
                      />
                      <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-white/30 to-transparent" />
                    </div>
                    <div>
                      <h2 className="font-bold text-gray-900">VAHNIX</h2>
                      <p className="text-xs text-gray-500">SECURITY</p>
                    </div>
                  </div>
                  <button
                    onClick={() => setIsMobileOpen(false)}
                    className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors"
                  >
                    <X className="w-5 h-5 text-gray-700" />
                  </button>
                </div>

                {/* Navigation Items */}
                <nav className="flex-1 space-y-2">
                  {navItems.map((item) => (
                    <div key={item.name}>
                      {item.dropdown ? (
                        <div className="space-y-1">
                          <button
                            onClick={() => setActiveDropdown(activeDropdown === item.name ? null : item.name)}
                            className="w-full flex items-center justify-between p-4 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors font-medium"
                          >
                            {item.name}
                            <ChevronDown 
                              className={`w-4 h-4 transition-transform ${
                                activeDropdown === item.name ? "rotate-180" : ""
                              }`} 
                            />
                          </button>
                          
                          <AnimatePresence>
                            {activeDropdown === item.name && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                className="ml-4 space-y-1 overflow-hidden"
                              >
                                {item.dropdown.map((dropdownItem) => (
                                  <div
                                    key={dropdownItem.name}
                                    onClick={() => handleNavigation(dropdownItem.path)}
                                    className="flex items-center gap-3 p-3 rounded-lg text-gray-600 hover:bg-blue-50 hover:text-blue-600 transition-colors font-medium cursor-pointer"
                                  >
                                    <dropdownItem.icon className="w-4 h-4 text-blue-500" />
                                    <span>{dropdownItem.name}</span>
                                  </div>
                                ))}
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      ) : (
                        <button
                          onClick={() => handleNavigation(item.path, item.section)}
                          className="block w-full text-left p-4 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors font-medium"
                        >
                          {item.name}
                        </button>
                      )}
                    </div>
                  ))}
                  
                  <button
                    onClick={() => handleNavigation("/meet")}
                    className="w-full flex items-center gap-2 p-4 mt-4 bg-gradient-to-r from-emerald-500 to-green-600 text-white font-semibold rounded-lg shadow-lg text-center justify-center"
                  >
                    <Calendar className="w-4 h-4" />
                    Schedule Meet
                  </button>
                </nav>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Spacer */}
      <div className="h-20" />
    </>
  );
}