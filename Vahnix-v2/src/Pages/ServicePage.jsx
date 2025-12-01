// src/pages/ServicesPageLight.jsx
import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  Shield, 
  Network, 
  Cloud, 
  Lock, 
  Zap, 
  Bug, 
  ArrowRight, 
  CheckCircle2,
  Users,
  Award,
  Clock,
  Target,
  BarChart3,
  MessageCircle,
  Cpu,
  Key,
  Eye,
  Code
} from "lucide-react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const SERVICES = [
  { 
    id: "web-pentest", 
    title: "Web Application Security Assessment", 
    summary: "Modern web application and API security testing with focus on business logic vulnerabilities and emerging threats.",
    icon: Code, 
    gradient: "from-purple-500 to-purple-600",
    features: ["OWASP Top 10 Coverage", "API Security Validation", "Business Logic Analysis", "Modern Framework Assessment"],
    duration: "Methodology-Driven",
    level: "Comprehensive"
  },
  { 
    id: "network-assessment", 
    title: "Infrastructure Security Review", 
    summary: "Network architecture assessment using industry frameworks to identify misconfigurations and attack vectors.",
    icon: Network, 
    gradient: "from-blue-500 to-cyan-600",
    features: ["Architecture Review", "Configuration Audit", "Protocol Analysis", "Segmentation Validation"],
    duration: "Framework-Based",
    level: "Structured"
  },
  { 
    id: "cloud-security", 
    title: "Cloud Security Architecture", 
    summary: "Cloud-native security assessment for AWS, Azure, and GCP environments using cloud security best practices.",
    icon: Cloud, 
    gradient: "from-indigo-500 to-purple-600",
    features: ["IAM & Access Review", "Cloud Configuration Audit", "Data Protection Analysis", "Compliance Alignment"],
    duration: "Cloud-First Approach",
    level: "Specialized"
  },
  { 
    id: "mobile-pentest", 
    title: "Mobile Application Security", 
    summary: "iOS and Android security testing with focus on data protection, API integration, and platform-specific vulnerabilities.",
    icon: Shield, 
    gradient: "from-emerald-500 to-teal-600",
    features: ["Platform Security Analysis", "Data Storage Review", "API Integration Testing", "Reverse Engineering"],
    duration: "Platform-Specific",
    level: "Advanced"
  },
  { 
    id: "adversary-simulation", 
    title: "Adversary Simulation Exercise", 
    summary: "Targeted security exercise to validate detection capabilities and incident response readiness.",
    icon: Eye, 
    gradient: "from-red-500 to-orange-600",
    features: ["Detection Validation", "Response Readiness", "Security Control Testing", "Threat Intelligence Integration"],
    duration: "Custom Engagement",
    level: "Expert"
  },
  { 
    id: "security-readiness", 
    title: "Security Readiness Assessment", 
    summary: "Comprehensive security posture evaluation with compliance alignment and maturity assessment.",
    icon: Award, 
    gradient: "from-amber-500 to-orange-600",
    features: ["Security Posture Review", "Compliance Gap Analysis", "Maturity Assessment", "Strategic Roadmap"],
    duration: "Continuous Improvement",
    level: "Strategic"
  },
];

const STRENGTHS = [
  { 
    value: "Methodology", 
    label: "Framework-Driven", 
    icon: Cpu,
    description: "NIST, MITRE ATT&CK aligned"
  },
  { 
    value: "Innovation", 
    label: "Zero-Day Focus", 
    icon: Zap,
    description: "Emerging threat research"
  },
  { 
    value: "Expertise", 
    label: "Certified Team", 
    icon: Users,
    description: "Industry recognized certifications"
  },
  { 
    value: "Approach", 
    label: "Research-Based", 
    icon: Key,
    description: "Latest techniques & tools"
  },
];

const PROCESS = [
  { 
    step: "01", 
    title: "Discovery & Planning", 
    description: "Understanding your environment and defining scope using industry-standard methodologies.",
    icon: Target 
  },
  { 
    step: "02", 
    title: "Assessment Execution", 
    description: "Combining automated scanning with manual analysis for comprehensive coverage.",
    icon: Bug 
  },
  { 
    step: "03", 
    title: "Analysis & Reporting", 
    description: "Prioritized findings with actionable remediation guidance and risk context.",
    icon: BarChart3 
  },
  { 
    step: "04", 
    title: "Knowledge Transfer", 
    description: "Detailed walkthroughs and recommendations to empower your security team.",
    icon: MessageCircle 
  },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-blue-50 border border-blue-200 mb-8">
              <Target className="w-4 h-4 text-blue-600" />
              <span className="text-sm font-medium text-blue-700">Modern Security Services</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 tracking-tight mb-6">
              Security Services
              <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Built on Innovation
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-12">
              We deliver next-generation security assessments using cutting-edge methodologies 
              and a research-driven approach to protect your digital assets.
            </p>

            {/* Strengths */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto mb-16">
              {STRENGTHS.map((strength, index) => (
                <motion.div
                  key={strength.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 + 0.5 }}
                  className="text-center group"
                >
                  <div className="flex justify-center mb-3">
                    <div className="p-3 rounded-2xl bg-white border border-gray-200 shadow-lg group-hover:shadow-xl transition-shadow">
                      <strength.icon className="w-6 h-6 text-blue-600" />
                    </div>
                  </div>
                  <div className="text-2xl md:text-3xl font-bold text-gray-900 mb-1">{strength.value}</div>
                  <div className="text-sm text-gray-600 font-medium mb-1">{strength.label}</div>
                  <div className="text-xs text-gray-500">{strength.description}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Security Methodology
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Each service is built on industry-standard frameworks and enhanced with our research-driven insights.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((service, i) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group"
              >
                <Link to={`/services/${service.id}`}>
                  <div className="h-full bg-white border border-gray-200 rounded-3xl shadow-sm hover:shadow-2xl transition-all duration-500 overflow-hidden group-hover:scale-[1.02]">
                    {/* Header with Gradient */}
                    <div className={`bg-gradient-to-r ${service.gradient} p-8 text-white`}>
                      <div className="flex items-start justify-between mb-4">
                        <div className="p-3 bg-white/20 rounded-2xl backdrop-blur-sm">
                          <service.icon className="w-6 h-6" />
                        </div>
                        <div className="px-3 py-1 bg-white/20 rounded-full backdrop-blur-sm">
                          <span className="text-sm font-medium">{service.level}</span>
                        </div>
                      </div>
                      <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                      <p className="text-white/90 text-sm leading-relaxed">{service.summary}</p>
                    </div>

                    {/* Content */}
                    <div className="p-8">
                      {/* Features */}
                      <div className="space-y-3 mb-6">
                        {service.features.map((feature, index) => (
                          <div key={index} className="flex items-center gap-3">
                            <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0" />
                            <span className="text-sm text-gray-700">{feature}</span>
                          </div>
                        ))}
                      </div>

                      {/* Footer */}
                      <div className="flex items-center justify-between pt-6 border-t border-gray-200">
                        <div className="text-sm text-gray-500 font-medium">
                          {service.duration}
                        </div>
                        <div className="flex items-center gap-2 text-blue-600 font-semibold group-hover:gap-3 transition-all">
                          Explore methodology
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Structured Approach
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A disciplined methodology ensuring thorough assessment and actionable security insights.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {PROCESS.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-center group"
              >
                <div className="relative mb-6">
                  <div className="relative w-20 h-20 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center text-white font-bold text-2xl mx-auto shadow-lg group-hover:scale-110 transition-transform duration-300">
                    {step.step}
                    <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-white/90 rounded-lg flex items-center justify-center shadow-md">
                      <step.icon className="w-4 h-4 text-blue-600" />
                    </div>
                  </div>
                  {index < PROCESS.length - 1 && (
                    <div className="hidden lg:block absolute top-10 left-full w-full h-0.5 bg-gradient-to-r from-blue-600/30 to-purple-600/30 -translate-y-1/2 -z-10" />
                  )}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-center text-white shadow-2xl"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Enhance Your Security?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Schedule a technical discussion with our security architects to explore our methodology and approach.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/contact"
                className="group inline-flex items-center gap-3 px-8 py-4 bg-white text-blue-600 font-bold rounded-2xl hover:shadow-2xl transition-all duration-300"
              >
                <MessageCircle className="w-5 h-5" />
                Technical Consultation
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <Link
                to="/methodology"
                className="inline-flex items-center gap-3 px-8 py-4 bg-white/10 border border-white/30 text-white font-semibold rounded-2xl hover:bg-white/20 transition-all duration-300"
              >
                <BarChart3 className="w-5 h-5" />
                View Full Methodology
              </Link>
            </div>
            
            <p className="text-blue-200 text-sm mt-6">
              ⚡ Get initial security insights within 24 hours
            </p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}