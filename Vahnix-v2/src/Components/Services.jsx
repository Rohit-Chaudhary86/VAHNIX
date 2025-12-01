// src/components/ServicesLight.jsx
import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Shield, Network, Cloud, Lock, Zap, Bug, ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";

const SERVICES = [
  {
    slug: "web-pentest",
    title: "Web Application Penetration Testing",
    desc: "Manual & automated testing targeting OWASP Top 10, business logic flaws, and zero-days.",
    icon: Shield,
    bgGradient: "from-blue-500 to-cyan-600",
    textColor: "text-white",
    iconBg: "bg-white/20",
    buttonStyle: "bg-white text-blue-600 hover:bg-blue-50",
    borderGlow: "shadow-blue-500/30"
  },
  {
    slug: "network-assessment",
    title: "Network & Infrastructure Assessment",
    desc: "External/internal reconnaissance, privilege escalation paths, and firewall bypass simulation.",
    icon: Network,
    bgGradient: "from-emerald-500 to-green-600",
    textColor: "text-white",
    iconBg: "bg-white/20",
    buttonStyle: "bg-white text-emerald-600 hover:bg-emerald-50",
    borderGlow: "shadow-emerald-500/30"
  },
  {
    slug: "cloud-security",
    title: "Cloud Security Review",
    desc: "Deep audit of AWS, Azure, GCP — IAM, S3/Blob exposures, serverless risks, and CI/CD pipelines.",
    icon: Cloud,
    bgGradient: "from-purple-500 to-indigo-600",
    textColor: "text-white",
    iconBg: "bg-white/20",
    buttonStyle: "bg-white text-purple-600 hover:bg-purple-50",
    borderGlow: "shadow-purple-500/30"
  },
  {
    slug: "mobile-pentest",
    title: "Mobile Application Security",
    desc: "iOS & Android — reverse engineering, insecure storage, runtime manipulation, and API attacks.",
    icon: Lock,
    bgGradient: "from-orange-500 to-red-600",
    textColor: "text-white",
    iconBg: "bg-white/20",
    buttonStyle: "bg-white text-orange-600 hover:bg-orange-50",
    borderGlow: "shadow-orange-500/30"
  },
  {
    slug: "red-team",
    title: "Red Team Simulation",
    desc: "Full-scope adversarial engagement — phishing, physical, wireless, and persistent access testing.",
    icon: Zap,
    bgGradient: "from-rose-500 to-pink-600",
    textColor: "text-white",
    iconBg: "bg-white/20",
    buttonStyle: "bg-white text-rose-600 hover:bg-rose-50",
    borderGlow: "shadow-rose-500/30"
  },
  {
    slug: "vulnerability-assessment",
    title: "Vulnerability Assessment & Compliance",
    desc: "Automated + manual scanning with risk scoring, PCI-DSS, ISO 27001, and SOC 2 readiness reports.",
    icon: Bug,
    bgGradient: "from-amber-500 to-yellow-600",
    textColor: "text-white",
    iconBg: "bg-white/20",
    buttonStyle: "bg-white text-amber-600 hover:bg-amber-50",
    borderGlow: "shadow-amber-500/30"
  },
];

export default function Services() {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollBy({
      left: direction === "left" ? -350 : 350,
      behavior: "smooth",
    });
  };

  return (
    <section
      id="services"
      className="py-20 bg-white/40 backdrop-blur-xl border-y border-white/30"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-full text-blue-700 text-sm font-medium mb-4"
          >
            <Shield className="w-4 h-4" />
            Our Services
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Security Services
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive cybersecurity solutions tailored to protect your digital assets.
          </p>
        </div>

        {/* Navigation Arrows */}
        <div className="relative">
          <button
            onClick={() => scroll("left")}
            className="absolute -left-4 top-1/2 -translate-y-1/2 z-10 p-3 bg-white border border-gray-200 rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all"
          >
            <ChevronLeft className="w-5 h-5 text-gray-700" />
          </button>

          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto scroll-smooth pb-8 snap-x snap-mandatory scrollbar-hide"
            style={{ scrollbarWidth: "none" }}
          >
            {SERVICES.map((service, i) => (
              <motion.div
                key={service.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="snap-center flex-shrink-0 w-[340px]"
              >
                <div className={`h-full p-8 rounded-3xl bg-gradient-to-br ${service.bgGradient} ${service.textColor} shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 ${service.borderGlow}`}>
                  
                  {/* Icon */}
                  <div className={`p-4 ${service.iconBg} rounded-2xl backdrop-blur-sm w-fit mb-6 border border-white/20`}>
                    <service.icon className="w-8 h-8" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold mb-4 leading-tight">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-white/90 text-sm leading-relaxed mb-6">
                    {service.desc}
                  </p>

                  {/* Buttons */}
                  <div className="flex justify-between items-center">
                    <Link
                      to={`/services/${service.slug}`}
                      className="font-medium flex items-center gap-2 hover:gap-3 transition-all text-white/90 hover:text-white"
                    >
                      Learn more <ArrowRight className="w-4 h-4" />
                    </Link>

                    <a
                      href="#contact"
                      className={`px-4 py-2 rounded-xl font-semibold text-sm hover:scale-105 transition-all ${service.buttonStyle}`}
                    >
                      Get Quote →
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <button
            onClick={() => scroll("right")}
            className="absolute -right-4 top-1/2 -translate-y-1/2 z-10 p-3 bg-white border border-gray-200 rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all"
          >
            <ChevronRight className="w-5 h-5 text-gray-700" />
          </button>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-center mt-8"
        >
          <p className="text-gray-400 text-sm flex items-center justify-center gap-2">
            <span className="w-2 h-2 bg-gray-300 rounded-full"></span>
            Scroll to explore more services
            <span className="w-2 h-2 bg-gray-300 rounded-full"></span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}