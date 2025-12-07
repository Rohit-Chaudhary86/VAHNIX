// src/components/layout/Header/Navigation.jsx
import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight, ChevronDown, Calendar, Globe, Server, Cloud, List } from "lucide-react";
import logo5 from "../assets/logo5.jpg";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isLogoHovered, setIsLogoHovered] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
            {/* LOGO WITH logo4 */}
            <motion.div 
              onClick={() => handleNavigation("/")}
              onMouseEnter={() => setIsLogoHovered(true)}
              onMouseLeave={() => setIsLogoHovered(false)}
              className="flex items-center gap-3 group cursor-pointer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {/* Logo Container */}
              <div className="relative">
                {/* Background glow */}
                <div className="absolute -inset-2 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Logo frame */}
                <div className="relative w-14 h-14 rounded-[18px] overflow-hidden border-2 border-white/30 shadow-lg group-hover:shadow-xl transition-all duration-300">
                  {/* Background gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50" />
                  
                  {/* Logo image */}
                  <motion.img 
                    src={logo5} 
                    alt="VAHNIX Security"
                    className="relative w-full h-full object-cover p-1 z-10"
                    animate={{
                      scale: isLogoHovered ? 1.05 : 1,
                    }}
                    transition={{ duration: 0.3 }}
                  />
                  
                  {/* Overlay effects */}
                  <div className="absolute inset-0 bg-gradient-to-t from-white/0 via-white/20 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute inset-0 border-2 border-white/20 rounded-[16px]" />
                  
                  {/* Corner accents */}
                  <div className="absolute top-0 left-0 w-3 h-3 border-l border-t border-blue-400/30 rounded-tl-[4px]" />
                  <div className="absolute top-0 right-0 w-3 h-3 border-r border-t border-purple-400/30 rounded-tr-[4px]" />
                  <div className="absolute bottom-0 left-0 w-3 h-3 border-l border-b border-blue-400/30 rounded-bl-[4px]" />
                  <div className="absolute bottom-0 right-0 w-3 h-3 border-r border-b border-purple-400/30 rounded-br-[4px]" />
                </div>
                
                {/* Active indicator */}
                <motion.div
                  className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-white shadow-lg"
                  animate={{
                    scale: isLogoHovered ? [1, 1.3, 1] : 1,
                  }}
                  transition={{
                    scale: {
                      duration: 1.5,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }
                  }}
                />
              </div>
              
              {/* Text Section */}
              <div className="flex flex-col">
                {/* VAHNIX text */}
                <motion.h1 
                  className="text-2xl font-black tracking-tighter bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent leading-none"
                  animate={{
                    x: isLogoHovered ? 2 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  VAHNIX
                </motion.h1>
                
                {/* SECURITY text */}
                <div className="flex items-center gap-2 mt-1">
                  <motion.p 
                    className="text-xs font-bold tracking-widest uppercase bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
                    animate={{
                      x: isLogoHovered ? 2 : 0,
                    }}
                    transition={{ duration: 0.3, delay: 0.05 }}
                  >
                    SECURITY
                  </motion.p>
                  
                  {/* Status indicator */}
                  <div className="relative">
                    <div className="w-1 h-1 bg-green-500 rounded-full" />
                    <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-75" />
                  </div>
                </div>
                
                {/* Optional tagline */}
                <motion.div
                  className="overflow-hidden"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ 
                    opacity: isLogoHovered ? 1 : 0,
                    height: isLogoHovered ? "auto" : 0
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <p className="text-[9px] font-mono text-gray-500 mt-1">
                    Elite Penetration Testing
                  </p>
                </motion.div>
              </div>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-4">
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
                        className={`flex items-center gap-1.5 px-4 py-2.5 rounded-[12px] font-medium transition-all duration-200 ${
                          isActive(item.path)
                            ? "text-blue-600 bg-blue-50 shadow-sm"
                            : "text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                        }`}
                      >
                        {item.name}
                        <ChevronDown className="w-3.5 h-3.5" />
                      </button>

                      <AnimatePresence>
                        {activeDropdown === item.name && (
                          <motion.div
                            initial={{ opacity: 0, y: 10, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 10, scale: 0.95 }}
                            className="absolute top-full left-0 mt-1.5 w-56 bg-white rounded-[16px] shadow-xl border border-gray-200/50 backdrop-blur-lg z-50 overflow-hidden"
                          >
                            <div className="p-1.5">
                              {item.dropdown.map((dropdownItem) => (
                                <div
                                  key={dropdownItem.name}
                                  onClick={() => handleNavigation(dropdownItem.path)}
                                  className="flex items-center gap-3 px-4 py-2.5 rounded-[12px] text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-all duration-200 font-medium group cursor-pointer"
                                >
                                  <dropdownItem.icon className="w-4 h-4 text-blue-500 group-hover:text-blue-600" />
                                  <span className="text-sm">{dropdownItem.name}</span>
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
                      className={`px-4 py-2.5 rounded-[12px] font-medium transition-all duration-200 ${
                        isActive(item.path, item.section)
                          ? "text-blue-600 bg-blue-50 shadow-sm"
                          : "text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                      }`}
                    >
                      {item.name}
                    </button>
                  )}
                </div>
              ))}
              
              {/* IMPROVED Schedule Meet Button with Date Display */}
              <div className="relative">
                <motion.button
                  onClick={() => handleNavigation("/meet")}
                  whileHover={{ scale: 1.02, y: -1 }}
                  whileTap={{ scale: 0.98 }}
                  className="relative flex items-center gap-3 px-5 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-[14px] shadow-lg hover:shadow-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 overflow-hidden group"
                >
                  {/* Date Badge */}
                  <div className="relative flex items-center justify-center">
                    <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-[10px] flex flex-col items-center justify-center border border-white/30">
                      <div className="text-sm font-bold">{new Date().getDate()}</div>
                      <div className="text-[8px] font-medium opacity-90 tracking-tighter">
                        {new Date().toLocaleString('default', { month: 'short' }).toUpperCase()}
                      </div>
                    </div>
                    {/* Pulsing ring */}
                    <motion.div
                      className="absolute inset-0 border-2 border-white/30 rounded-[10px]"
                      animate={{
                        scale: [1, 1.1, 1],
                        opacity: [0.5, 0, 0.5]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    />
                  </div>
                  
                  {/* Button Text */}
                  <div className="text-left">
                    <div className="text-sm font-bold">Schedule Meet</div>
                    <div className="text-xs text-white/80 flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      <span>Book a consultation</span>
                    </div>
                  </div>
                  
                  {/* Arrow Icon */}
                  <ArrowRight className="w-4 h-4 ml-auto transition-transform group-hover:translate-x-1" />
                  
                  {/* Shine Effect */}
                  <div className="absolute inset-0 -left-48 -top-8 w-24 h-32 bg-white/20 transform -skew-x-12 group-hover:left-[110%] transition-all duration-700" />
                </motion.button>
                
                {/* Availability Indicator */}
                <div className="absolute -top-1 -right-1 z-20">
                  <div className="relative">
                    <div className="w-2 h-2 bg-green-400 rounded-full border border-white shadow-sm" />
                    <div className="absolute inset-0 bg-green-400 rounded-full animate-ping opacity-25" />
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              className="lg:hidden p-2.5 rounded-[12px] bg-gray-100 hover:bg-gray-200 transition-colors"
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
                    <div className="relative w-12 h-12 rounded-xl overflow-hidden bg-gradient-to-br from-blue-50 to-purple-50 shadow-md border-2 border-white">
                      <img 
                        src={logo4} 
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
                  
                  {/* Mobile Calendar Button */}
                  <button
                    onClick={() => handleNavigation("/meet")}
                    className="w-full flex items-center gap-3 p-4 mt-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg shadow-lg"
                  >
                    <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-lg flex flex-col items-center justify-center border border-white/30">
                      <div className="text-sm font-bold">{new Date().getDate()}</div>
                      <div className="text-[8px] font-medium opacity-90 tracking-tighter">
                        {new Date().toLocaleString('default', { month: 'short' }).toUpperCase()}
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">Schedule Meet</div>
                      <div className="text-xs text-white/80 flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        <span>Book a consultation</span>
                      </div>
                    </div>
                    <ArrowRight className="w-4 h-4 ml-auto" />
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