// src/pages/ServiceDetailLight.jsx
import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import {
  ArrowLeft,
  Shield,
  CheckCircle2,
  Clock,
  FileText,
  Award,
  Users,
  Zap,
  ClipboardCheck,
  Calendar,
  ArrowRight,
  ChevronDown,
  Star,
  Target,
  Lock,
  Globe,
  Server,
  Code,
  Database,
  Eye,
  BarChart3,
  MessageCircle,
  Play,
  Cloud,
  Search,
  Cpu,
  BookOpen,
  Layers,
  GitBranch,
  Terminal,
  Layout,
  Sparkles,
  ShieldCheck,
  AlertTriangle,
  Code2,
  Network,
  ShieldAlert,
  Fingerprint,
  HardDrive,
  KeyRound,
  GlobeLock,
  Building2,
  TrendingUp,
  Download,
  X,
  Menu,
  Phone,
  Mail,
  MapPin,
  ExternalLink,
  Sparkle
} from "lucide-react";

const SERVICES = {
  "web-pentest": {
    key: "web-pentest",
    title: "Web Application Security Assessment",
    subtitle: "Enterprise-Grade Application Protection",
    icon: GlobeLock,
    short: "Comprehensive security evaluation using industry-standard methodologies to identify critical vulnerabilities in modern web applications and APIs.",
    overview: "Our Web Application Security Assessment employs a multi-layered approach combining automated scanning with expert-led manual testing. We focus on identifying business logic flaws, authentication bypasses, and framework-specific vulnerabilities that automated tools often miss.",
    heroImage: "/api/placeholder/800/600",
    highlights: [
      { text: "OWASP Top 10 & ASVS compliance", icon: ShieldCheck },
      { text: "API security (REST, GraphQL, gRPC)", icon: Code2 },
      { text: "Business logic vulnerability analysis", icon: Target },
      { text: "Authentication & authorization testing", icon: KeyRound },
      { text: "Modern framework security (React, Vue, Angular)", icon: Layout }
    ],
    capabilities: [
      { title: "Critical", count: "15+", desc: "Critical vulnerabilities identified" },
      { title: "Coverage", count: "100%", desc: "OWASP coverage" },
      { title: "Accuracy", count: "99%", desc: "Finding accuracy rate" },
      { title: "Response", count: "<4h", desc: "Critical issue response" }
    ],
    methodologies: ["OWASP WSTG", "PTES", "NIST CSF", "MITRE ATT&CK"],
    technologies: ["React", "Vue", "Angular", "Node.js", "Python", "Java", ".NET", "GraphQL", "Docker", "Kubernetes"],
    compliance: ["SOC 2", "ISO 27001", "PCI DSS", "HIPAA", "GDPR"]
  },
  "network-assessment": {
    key: "network-assessment",
    title: "Infrastructure Security Assessment",
    subtitle: "Enterprise Network Hardening & Analysis",
    icon: Network,
    short: "Systematic evaluation of network architecture, configurations, and security controls using established security frameworks.",
    overview: "Our Infrastructure Security Assessment provides a comprehensive review of your network architecture, identifying configuration weaknesses, attack surface exposure, and security control gaps. We combine automated scanning with manual analysis to provide actionable security improvements.",
    heroImage: "/api/placeholder/800/600",
    highlights: [
      { text: "Network architecture security review", icon: Network },
      { text: "Service configuration analysis", icon: Server },
      { text: "Protocol security assessment", icon: ShieldAlert },
      { text: "Segmentation & zoning validation", icon: HardDrive },
      { text: "Infrastructure hardening guidance", icon: ShieldCheck }
    ],
    capabilities: [
      { title: "Assets", count: "500+", desc: "Assets analyzed per assessment" },
      { title: "Findings", count: "98%", desc: "Actionable findings rate" },
      { title: "Coverage", count: "360°", desc: "Full perimeter coverage" },
      { title: "ROI", count: "85%", desc: "Cost reduction post-hardening" }
    ],
    methodologies: ["CIS Benchmarks", "NIST 800-53", "ISO 27001", "MITRE ATT&CK"],
    technologies: ["Cisco", "Palo Alto", "Fortinet", "Windows", "Linux", "VMware", "Azure", "AWS", "Docker"],
    compliance: ["ISO 27001", "NIST CSF", "CIS Controls", "SOC 2"]
  },
  "cloud-security": {
    key: "cloud-security",
    title: "Cloud Security Architecture Review",
    subtitle: "Multi-Cloud Security & Compliance",
    icon: Cloud,
    short: "Comprehensive cloud security assessment following cloud-native security best practices and compliance frameworks.",
    overview: "Our Cloud Security Architecture Review examines infrastructure-as-code, identity management, data protection, and service configurations across major cloud platforms using established cloud security frameworks.",
    heroImage: "/api/placeholder/800/600",
    highlights: [
      { text: "Identity & Access Management review", icon: Fingerprint },
      { text: "Cloud configuration security analysis", icon: Cloud },
      { text: "Data protection & encryption assessment", icon: Lock },
      { text: "Container & serverless security", icon: Code },
      { text: "Compliance framework alignment", icon: ShieldCheck }
    ],
    capabilities: [
      { title: "Services", count: "50+", desc: "Cloud services assessed" },
      { title: "Compliance", count: "100%", desc: "Framework alignment" },
      { title: "Security", count: "95%", desc: "Control effectiveness" },
      { title: "Cost", count: "30%", desc: "Potential cost optimization" }
    ],
    methodologies: ["CIS Benchmarks", "CSA CCM", "NIST 800-207", "Well-Architected Framework"],
    technologies: ["AWS", "Azure", "GCP", "Kubernetes", "Terraform", "Docker", "Serverless", "CI/CD", "Ansible"],
    compliance: ["SOC 2", "ISO 27001", "GDPR", "HIPAA", "PCI DSS"]
  }
};

const PROCESS_STEPS = [
  {
    id: 1,
    title: "Discovery & Scoping",
    desc: "Comprehensive planning phase defining assessment scope, objectives, and methodology tailored to your environment.",
    icon: Search,
    duration: "1-2 days",
    deliverables: ["Scope Document", "Methodology Plan", "Success Criteria", "Communication Protocol"],
    color: "from-blue-500 to-cyan-500"
  },
  {
    id: 2,
    title: "Threat Modeling",
    desc: "Systematic identification and analysis of potential threats using industry-standard frameworks.",
    icon: Target,
    duration: "2-3 days",
    deliverables: ["Threat Model", "Attack Surface Map", "Risk Matrix", "Asset Inventory"],
    color: "from-purple-500 to-pink-500"
  },
  {
    id: 3,
    title: "Vulnerability Assessment",
    desc: "Comprehensive testing combining automated tools with manual analysis to identify vulnerabilities.",
    icon: Shield,
    duration: "5-10 days",
    deliverables: ["Vulnerability Scan Report", "Technical Findings", "Risk Assessment", "Proof of Concepts"],
    color: "from-amber-500 to-orange-500"
  },
  {
    id: 4,
    title: "Penetration Testing",
    desc: "Controlled exploitation of identified vulnerabilities to validate impact and exploitability.",
    icon: Zap,
    duration: "3-5 days",
    deliverables: ["Exploitation Report", "Impact Analysis", "Business Risk Assessment", "Compromise Scenarios"],
    color: "from-red-500 to-rose-500"
  },
  {
    id: 5,
    title: "Analysis & Reporting",
    desc: "Detailed analysis of findings with prioritized remediation guidance and strategic recommendations.",
    icon: BarChart3,
    duration: "2-3 days",
    deliverables: ["Technical Report", "Executive Summary", "Remediation Roadmap", "Compliance Mapping"],
    color: "from-emerald-500 to-green-500"
  },
  {
    id: 6,
    title: "Knowledge Transfer",
    desc: "Comprehensive review sessions and guidance for implementing security improvements.",
    icon: MessageCircle,
    duration: "1-2 days",
    deliverables: ["Technical Workshop", "Remediation Support", "Security Training", "Follow-up Plan"],
    color: "from-indigo-500 to-violet-500"
  }
];

const ASSESSMENT_OPTIONS = [
  {
    id: "basic",
    name: "Essential Assessment",
    focus: "Core Security Evaluation",
    description: "Foundational security assessment for growing organizations",
    timeline: "2 weeks",
    features: [
      "Single application/environment",
      "Automated scanning with validation",
      "Core security controls assessment",
      "Basic compliance alignment",
      "Technical report & findings",
      "Email support"
    ],
    bestFor: "Startups & Small Teams",
    cta: "Start Assessment",
    popular: false
  },
  {
    id: "enterprise",
    name: "Enterprise Assessment",
    focus: "Comprehensive Security Analysis",
    description: "Advanced security evaluation with manual testing and compliance focus",
    timeline: "3-4 weeks",
    features: [
      "Multiple applications/complex environments",
      "Advanced manual testing",
      "Business logic vulnerability assessment",
      "Compliance framework alignment",
      "API security testing",
      "Executive briefing package",
      "Remediation implementation guide",
      "Priority support"
    ],
    bestFor: "Enterprise Organizations",
    cta: "Schedule Consultation",
    popular: true
  },
  {
    id: "strategic",
    name: "Strategic Security Review",
    focus: "Architecture & Strategy",
    description: "Comprehensive architecture review with strategic roadmap",
    timeline: "4-6 weeks",
    features: [
      "Enterprise-wide security assessment",
      "Security architecture review",
      "Threat modeling workshops",
      "Strategic security planning",
      "Three-year security roadmap",
      "Executive leadership package",
      "Dedicated security advisor",
      "Quarterly review sessions"
    ],
    bestFor: "Fortune 500 & Regulated Industries",
    cta: "Request Proposal",
    popular: false
  }
];

const METHODOLOGY_HIGHLIGHTS = [
  {
    id: 1,
    title: "Framework-Driven Approach",
    description: "Adherence to OWASP, NIST, CIS, and MITRE ATT&CK frameworks ensuring industry-standard coverage.",
    icon: BookOpen,
    color: "blue"
  },
  {
    id: 2,
    title: "Expert-Led Manual Testing",
    description: "Critical thinking and manual testing to uncover complex vulnerabilities automated tools miss.",
    icon: Cpu,
    color: "purple"
  },
  {
    id: 3,
    title: "Risk-Based Prioritization",
    description: "Findings prioritized by real-world impact, exploitability, and business context.",
    icon: Target,
    color: "red"
  },
  {
    id: 4,
    title: "Actionable Intelligence",
    description: "Clear, implementable remediation guidance with technical specifics and examples.",
    icon: FileText,
    color: "green"
  }
];

const FAQS = [
  {
    q: "What frameworks and methodologies do you follow?",
    a: "We follow industry-standard frameworks including OWASP Testing Guide, NIST Cybersecurity Framework, CIS Benchmarks, and MITRE ATT&CK. Our methodology combines automated tools with expert-led manual testing to provide comprehensive security coverage."
  },
  {
    q: "How do you ensure business continuity during testing?",
    a: "We follow strict rules of engagement with pre-agreed testing windows and safeguards. All activities are monitored in real-time, and we maintain continuous communication with your team. Our approach is designed to be thorough yet non-disruptive."
  },
  {
    q: "What's included in your deliverables?",
    a: "You'll receive: 1) Detailed technical report with findings, 2) Executive summary for leadership, 3) Risk-prioritized remediation roadmap, 4) Compliance gap analysis, 5) Proof of concept documentation, and 6) Knowledge transfer sessions."
  },
  {
    q: "How do you handle sensitive data discovered during testing?",
    a: "All assessments are conducted under strict NDA. Sensitive data is encrypted, stored securely, and handled according to your data handling requirements. We follow zero-retention policies unless explicitly agreed otherwise."
  },
  {
    q: "Do you provide remediation support?",
    a: "Yes, we provide detailed remediation guidance and offer follow-up consultation sessions. For enterprise clients, we include dedicated remediation support to ensure effective implementation of security improvements."
  },
  {
    q: "What compliance frameworks do you support?",
    a: "We support major compliance frameworks including SOC 2, ISO 27001, PCI DSS, HIPAA, GDPR, and NIST CSF. Our reports include compliance mapping and gap analysis for your specific requirements."
  }
];

const AssessmentOption = ({ option }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    whileHover={{ y: -10, transition: { duration: 0.3 } }}
    className={`relative bg-gradient-to-b from-white to-gray-50/50 rounded-2xl p-8 border ${
      option.popular 
        ? 'border-blue-500 shadow-2xl scale-[1.02]' 
        : 'border-gray-200 shadow-xl hover:shadow-2xl'
    } transition-all duration-500 overflow-hidden`}
  >
    {option.popular && (
      <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg flex items-center gap-2">
          <Sparkles className="w-4 h-4" />
          Most Popular
        </div>
      </div>
    )}
    
    {/* Shine effect */}
    {option.popular && (
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500" />
    )}
    
    <div className="relative">
      {/* Header */}
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-2">{option.name}</h3>
        <div className="inline-flex items-center gap-2 px-4 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-semibold mb-3">
          {option.focus}
        </div>
        <p className="text-gray-600 text-sm">{option.description}</p>
      </div>
      
      {/* Timeline */}
      <div className="text-center mb-8">
        <div className="flex items-center justify-center gap-2 text-gray-700 mb-2">
          <Clock className="w-5 h-5" />
          <span className="text-lg font-semibold">{option.timeline}</span>
        </div>
        <div className="text-sm text-gray-500">Complete assessment timeline</div>
      </div>
      
      {/* Features */}
      <div className="space-y-4 mb-8">
        <h4 className="font-bold text-gray-900 text-lg">What's Included:</h4>
        {option.features.map((feature, i) => (
          <div key={i} className="flex items-start gap-3">
            <CheckCircle2 className={`w-5 h-5 ${option.popular ? 'text-blue-500' : 'text-gray-400'} mt-0.5 flex-shrink-0`} />
            <span className="text-gray-700">{feature}</span>
          </div>
        ))}
      </div>
      
      {/* Best For */}
      <div className="mb-8 p-4 bg-gray-50 rounded-xl">
        <div className="flex items-center gap-2 mb-2">
          <Building2 className="w-4 h-4 text-gray-500" />
          <span className="text-sm font-semibold text-gray-700">Best For:</span>
        </div>
        <p className="text-gray-900 font-medium">{option.bestFor}</p>
      </div>
      
      {/* CTA */}
      <motion.button
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.98 }}
        className={`w-full py-4 rounded-xl font-bold transition-all duration-300 relative overflow-hidden ${
          option.popular
            ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:shadow-lg'
            : 'bg-gray-900 text-white hover:bg-gray-800'
        }`}
      >
        <span className="relative z-10 flex items-center justify-center gap-2">
          {option.cta}
          <ArrowRight className="w-4 h-4" />
        </span>
        {option.popular && (
          <motion.div
            initial={{ x: "-100%" }}
            whileHover={{ x: "100%" }}
            transition={{ duration: 0.8 }}
            className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500"
          />
        )}
      </motion.button>
    </div>
  </motion.div>
);

const ProcessStep = ({ step, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay: index * 0.1 }}
    className="relative"
  >
    {/* Connection Line */}
    {index < PROCESS_STEPS.length - 1 && (
      <div className="hidden lg:block absolute top-12 left-full w-full h-0.5 bg-gradient-to-r from-blue-500/20 to-blue-500/0 z-0" />
    )}
    
    <div className="relative bg-white rounded-2xl p-8 border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-500 group">
      {/* Step Number */}
      <div className="absolute -top-4 -left-4">
        <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${step.color} text-white flex items-center justify-center font-bold text-xl shadow-lg`}>
          {step.id}
        </div>
      </div>
      
      {/* Content */}
      <div className="mt-2">
        <div className="flex items-center gap-4 mb-6">
          <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${step.color} flex items-center justify-center shadow-lg`}>
            <step.icon className="w-7 h-7 text-white" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-gray-900">{step.title}</h3>
            <div className="flex items-center gap-2 mt-1">
              <Clock className="w-4 h-4 text-gray-500" />
              <span className="text-sm text-gray-600 font-medium">{step.duration}</span>
            </div>
          </div>
        </div>
        
        <p className="text-gray-600 mb-6 leading-relaxed">{step.desc}</p>
        
        {/* Deliverables */}
        <div>
          <h4 className="font-semibold text-gray-900 mb-3 text-sm uppercase tracking-wider">Key Deliverables</h4>
          <div className="flex flex-wrap gap-2">
            {step.deliverables.map((deliverable, i) => (
              <span
                key={i}
                className="px-3 py-2 bg-gray-50 text-gray-700 rounded-lg text-sm font-medium border border-gray-200"
              >
                {deliverable}
              </span>
            ))}
          </div>
        </div>
      </div>
      
      {/* Hover Effect */}
      <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-blue-500/20 transition-all duration-500 pointer-events-none" />
    </div>
  </motion.div>
);

export default function ServiceDetailLight() {
  const { slug } = useParams();
  const service = SERVICES[slug] || SERVICES["web-pentest"];
  const [openFaq, setOpenFaq] = useState(null);
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0.8]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  return (
    <div className="min-h-screen bg-white text-gray-900 overflow-x-hidden">
      <Navbar />

      {/* Enhanced Hero Section */}
      <section className="pt-24 pb-20 md:pt-32 md:pb-28 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50/30" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#f0f9ff_1px,transparent_1px),linear-gradient(to_bottom,#f0f9ff_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20" />
        </div>

        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-blue-400/20 rounded-full"
              animate={{
                y: [0, -20, 0],
                x: [0, Math.sin(i) * 10, 0]
              }}
              transition={{
                duration: 3 + i,
                repeat: Infinity,
                delay: i * 0.3
              }}
              style={{
                left: `${20 + i * 10}%`,
                top: `${30 + (i % 3) * 20}%`
              }}
            />
          ))}
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="space-y-8"
            >
              {/* Service Badge */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-3 px-5 py-3 rounded-full bg-white/80 backdrop-blur-sm border border-gray-200 shadow-lg"
              >
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full blur-md opacity-60" />
                  <service.icon className="w-5 h-5 text-white relative z-10" />
                </div>
                <span className="text-sm font-semibold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                  Enterprise Security Assessment
                </span>
                <Sparkle className="w-4 h-4 text-blue-500" />
              </motion.div>

              {/* Title */}
              <div className="space-y-6">
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight">
                  <span className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">
                    {service.title}
                  </span>
                </h1>
                
                <div className="space-y-4">
                  <p className="text-2xl text-blue-600 font-semibold">
                    {service.subtitle}
                  </p>
                  
                  <p className="text-xl text-gray-600 leading-relaxed max-w-2xl">
                    {service.short}
                  </p>
                </div>
              </div>

              {/* Key Metrics */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="grid grid-cols-2 sm:grid-cols-4 gap-6 py-6 border-y border-gray-200"
              >
                {service.capabilities.map((cap, index) => (
                  <div key={index} className="text-center group">
                    <div className="text-3xl font-bold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors">
                      {cap.count}
                    </div>
                    <div className="text-sm font-semibold text-gray-700 mb-1">{cap.title}</div>
                    <div className="text-xs text-gray-500">{cap.desc}</div>
                  </div>
                ))}
              </motion.div>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="flex flex-col sm:flex-row gap-4 pt-4"
              >
                <motion.a
                  href="#assessment-options"
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="group inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 via-blue-700 to-purple-700 text-white font-semibold shadow-xl hover:shadow-2xl transition-all duration-500 relative overflow-hidden"
                >
                  <span className="relative z-10 flex items-center gap-3">
                    <Shield className="w-5 h-5" />
                    Explore Assessment Options
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 via-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </motion.a>
                
                <Link
                  to="/contact"
                  className="group inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-white border border-gray-300 text-gray-900 font-semibold shadow-lg hover:shadow-xl hover:border-blue-500 transition-all duration-500"
                >
                  <MessageCircle className="w-5 h-5" />
                  Schedule Consultation
                </Link>
              </motion.div>
            </motion.div>

            {/* Right Visual */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative"
            >
              {/* Main Card */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-gray-200 bg-gradient-to-br from-white to-gray-50">
                <div className="p-8">
                  {/* Service Icon */}
                  <div className="w-24 h-24 mx-auto mb-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-2xl">
                    <service.icon className="w-12 h-12 text-white" />
                  </div>
                  
                  {/* Content */}
                  <div className="text-center space-y-6">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">Comprehensive Assessment Framework</h3>
                      <p className="text-gray-600">
                        Industry-standard methodologies combined with expert analysis
                      </p>
                    </div>
                    
                    {/* Methodology Badges */}
                    <div className="flex flex-wrap justify-center gap-3">
                      {service.methodologies.slice(0, 3).map((method, i) => (
                        <span
                          key={i}
                          className="px-3 py-1.5 bg-blue-50 text-blue-700 rounded-full text-sm font-medium border border-blue-100"
                        >
                          {method}
                        </span>
                      ))}
                    </div>
                    
                    {/* Tech Stack */}
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Technology Coverage</h4>
                      <div className="flex flex-wrap justify-center gap-2">
                        {service.technologies.slice(0, 6).map((tech, i) => (
                          <span
                            key={i}
                            className="px-2 py-1 bg-gray-100 text-gray-700 rounded-md text-xs font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Compliance Footer */}
                <div className="bg-gray-50 border-t border-gray-200 p-6">
                  <h4 className="font-semibold text-gray-900 mb-3 text-center">Compliance Frameworks</h4>
                  <div className="flex flex-wrap justify-center gap-2">
                    {service.compliance.slice(0, 4).map((comp, i) => (
                      <span
                        key={i}
                        className="px-3 py-1.5 bg-white text-gray-700 rounded-lg text-sm font-medium border border-gray-200 shadow-sm"
                      >
                        {comp}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-6 shadow-2xl border border-gray-200 w-64"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-green-100 to-green-50 rounded-xl flex items-center justify-center">
                    <CheckCircle2 className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <div className="text-lg font-bold text-gray-900">300+</div>
                    <div className="text-sm text-gray-600">Enterprise Clients</div>
                  </div>
                </div>
                <p className="text-xs text-gray-500">
                  Trusted by Fortune 500 companies and regulated industries worldwide
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Service Highlights */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Overview */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="space-y-8"
            >
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-sm font-semibold mb-6">
                  <BookOpen className="w-4 h-4" />
                  Service Overview
                </div>
                <h2 className="text-4xl font-bold text-gray-900 mb-6">Comprehensive Security Analysis</h2>
                <p className="text-gray-600 leading-relaxed text-lg">
                  {service.overview}
                </p>
              </div>
              
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-gray-900">Key Focus Areas</h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  {service.highlights.map((highlight, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="bg-white rounded-xl p-4 border border-gray-200 shadow-sm hover:shadow-md transition-shadow group"
                    >
                      <div className="flex items-start gap-3">
                        <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                          <highlight.icon className="w-5 h-5 text-blue-600" />
                        </div>
                        <span className="text-gray-700 font-medium">{highlight.text}</span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Methodology */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="space-y-8"
            >
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-50 text-purple-700 rounded-full text-sm font-semibold mb-6">
                  <Target className="w-4 h-4" />
                  Methodology Framework
                </div>
                <h2 className="text-4xl font-bold text-gray-900 mb-6">Industry-Standard Approach</h2>
                <div className="grid grid-cols-2 gap-6">
                  {METHODOLOGY_HIGHLIGHTS.map((item) => (
                    <div key={item.id} className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm hover:shadow-md transition-all group">
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br from-${item.color}-50 to-${item.color}-100 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                        <item.icon className={`w-6 h-6 text-${item.color}-600`} />
                      </div>
                      <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                      <p className="text-sm text-gray-600">{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-50/10 to-transparent" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-20"
          >
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-50 to-purple-50 rounded-full border border-blue-100 mb-6">
              <GitBranch className="w-5 h-5 text-blue-600" />
              <span className="text-sm font-semibold text-gray-800">Our Process</span>
            </div>
            <h2 className="text-5xl font-bold text-gray-900 mb-6">
              Structured <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Six-Phase</span> Methodology
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              A systematic approach ensuring comprehensive coverage, actionable insights, and measurable security improvements.
            </p>
          </motion.div>

          {/* Process Steps */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500/20 via-blue-500/10 to-transparent transform -translate-x-1/2" />
            
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-y-12">
              {PROCESS_STEPS.map((step, index) => (
                <div key={step.id} className={index % 2 === 0 ? "lg:pr-12" : "lg:pl-12 lg:mt-24"}>
                  <ProcessStep step={step} index={index} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Assessment Options */}
      <section id="assessment-options" className="py-20 bg-gradient-to-b from-gray-50 via-white to-blue-50/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-20"
          >
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-white/80 backdrop-blur-sm rounded-full border border-gray-200 shadow-lg mb-8">
              <Shield className="w-5 h-5 text-blue-600" />
              <span className="text-sm font-semibold text-gray-800">Assessment Packages</span>
            </div>
            <h2 className="text-5xl font-bold text-gray-900 mb-6">
              Choose Your <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Assessment Path</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Select the assessment approach that aligns with your organization's security maturity and business objectives.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {ASSESSMENT_OPTIONS.map((option) => (
              <AssessmentOption key={option.id} option={option} />
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold text-gray-900 mb-6">Common Questions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get answers to frequently asked questions about our security assessment methodology and process.
            </p>
          </motion.div>

          <div className="space-y-4">
            {FAQS.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <button
                  className="w-full text-left p-8 bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-500 flex justify-between items-center group-hover:border-blue-500/30"
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                >
                  <div className="flex items-start gap-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <div className="text-lg font-bold text-blue-600">{index + 1}</div>
                    </div>
                    <div className="text-left">
                      <h3 className="text-xl font-bold text-gray-900 mb-3">{faq.q}</h3>
                      <AnimatePresence>
                        {openFaq === index && (
                          <motion.p
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            className="text-gray-600 leading-relaxed text-left"
                          >
                            {faq.a}
                          </motion.p>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>
                  <ChevronDown
                    className={`w-6 h-6 text-blue-600 transition-transform duration-500 flex-shrink-0 ${
                      openFaq === index ? "rotate-180" : ""
                    }`}
                  />
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative py-20 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-blue-700 to-purple-800" />
          <div 
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
            }}
          />
        </div>

        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-white/30 rounded-full"
              animate={{
                y: [0, -30, 0],
                opacity: [0.3, 1, 0.3]
              }}
              transition={{
                duration: 4 + i,
                repeat: Infinity,
                delay: i * 0.2
              }}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`
              }}
            />
          ))}
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center text-white"
          >
            {/* Badge */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              className="inline-flex items-center gap-3 px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-10"
            >
              <Sparkles className="w-5 h-5" />
              <span className="text-sm font-semibold">Ready to Secure Your Business?</span>
            </motion.div>

            {/* Heading */}
            <h2 className="text-5xl md:text-6xl font-bold mb-8">
              Begin Your Security Journey
            </h2>

            {/* Description */}
            <p className="text-xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed">
              Schedule a technical consultation to discuss your specific security requirements 
              and discover how our methodology-driven approach can transform your security posture.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="group inline-flex items-center justify-center gap-4 px-10 py-5 rounded-2xl bg-white text-blue-600 font-bold text-lg hover:shadow-2xl transition-all duration-500"
              >
                <Shield className="w-6 h-6" />
                Schedule Consultation
                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
              </motion.a>

              <motion.a
                href="#methodology"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="group inline-flex items-center justify-center gap-4 px-10 py-5 rounded-2xl bg-transparent border-2 border-white text-white font-semibold hover:bg-white/10 transition-all duration-500"
              >
                <Download className="w-5 h-5" />
                Download Methodology Guide
              </motion.a>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-12 border-t border-white/20">
              {[
                { label: "Enterprise Clients", value: "300+" },
                { label: "Security Assessments", value: "2,500+" },
                { label: "Critical Issues Found", value: "15,000+" },
                { label: "Client Satisfaction", value: "98%" }
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold mb-2">{item.value}</div>
                  <div className="text-white/80 text-sm">{item.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}