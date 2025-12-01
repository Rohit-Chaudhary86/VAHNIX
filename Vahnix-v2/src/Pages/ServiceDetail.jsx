// src/pages/ServiceDetailLight.jsx
import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowLeft,
  Shield,
  CheckCircle2,
  Clock,
  FileText,
  Award,
  MapPin,
  Users,
  Zap,
  ClipboardCheck,
  Calendar,
  ArrowRight,
  ChevronDown,
  Star,
  TrendingUp,
  Target,
  Lock,
  Globe,
  Server,
  Code,
  Database,
  Key,
  Eye,
  BarChart3,
  MessageCircle,
  Phone,
  Mail,
  Play,
  Pause,
  Cloud,
  Search,
  Cpu,
  BookOpen,
  Layers,
  GitBranch,
  Terminal,
  Layout
} from "lucide-react";

const SERVICES = {
  "web-pentest": {
    key: "web-pentest",
    title: "Web Application Security Assessment",
    subtitle: "Modern Application Protection Framework",
    icon: Shield,
    short: "Comprehensive security evaluation using industry-standard methodologies to identify critical vulnerabilities in web applications and APIs.",
    overview: "Our security assessment combines automated scanning with manual testing techniques, focusing on business logic flaws, authentication mechanisms, and modern framework vulnerabilities. We follow OWASP methodologies enhanced with our research-driven approach.",
    heroImage: "/api/placeholder/800/600",
    highlights: [
      "OWASP Top 10 methodology implementation",
      "API security assessment (REST, GraphQL)",
      "Business logic vulnerability analysis",
      "Authentication and authorization testing",
      "Modern framework security validation"
    ],
    strengths: [
      { value: "Methodology", label: "Framework-Driven Approach", icon: BookOpen },
      { value: "Modern", label: "Current Technology Focus", icon: Cpu },
      { value: "Comprehensive", label: "Multi-Layer Assessment", icon: Layers },
      { value: "Actionable", label: "Prioritized Findings", icon: Target }
    ],
    technologies: ["JavaScript", "Node.js", "Python", "Java", ".NET", "React", "Vue", "GraphQL", "Docker"]
  },
  "network-assessment": {
    key: "network-assessment",
    title: "Infrastructure Security Review",
    subtitle: "Attack Surface Analysis & Hardening",
    icon: Server,
    short: "Systematic network security evaluation using established frameworks to identify configuration weaknesses and potential attack vectors.",
    overview: "We conduct methodical infrastructure assessments based on industry standards, analyzing network architecture, service configurations, and security controls to identify vulnerabilities before they can be exploited.",
    heroImage: "/api/placeholder/800/600",
    highlights: [
      "Network architecture security review",
      "Service configuration analysis",
      "Protocol security assessment",
      "Segmentation and zoning validation",
      "Infrastructure hardening guidance"
    ],
    strengths: [
      { value: "Systematic", label: "Structured Methodology", icon: Layout },
      { value: "Comprehensive", label: "Full Stack Analysis", icon: Terminal },
      { value: "Framework", label: "Industry Standards", icon: GitBranch },
      { value: "Practical", label: "Real-World Focus", icon: Target }
    ],
    technologies: ["Cisco", "Palo Alto", "Windows Server", "Linux", "VMware", "Azure", "AWS", "Docker", "Kubernetes"]
  },
  "cloud-security": {
    key: "cloud-security",
    title: "Cloud Security Architecture Review",
    subtitle: "Multi-Cloud Security Framework",
    icon: Cloud,
    short: "Comprehensive cloud security assessment following cloud-native security best practices and compliance frameworks.",
    overview: "Our cloud security evaluation examines infrastructure-as-code, identity management, data protection, and service configurations across major cloud platforms using established cloud security frameworks.",
    heroImage: "/api/placeholder/800/600",
    highlights: [
      "Identity and Access Management review",
      "Cloud configuration security analysis",
      "Data protection and encryption assessment",
      "Container and serverless security",
      "Compliance framework alignment"
    ],
    strengths: [
      { value: "Cloud-Native", label: "Platform Expertise", icon: Cloud },
      { value: "Framework", label: "CIS Benchmarks", icon: BookOpen },
      { value: "Comprehensive", label: "Multi-Service Analysis", icon: Layers },
      { value: "Strategic", label: "Architecture Focus", icon: Layout }
    ],
    technologies: ["AWS", "Azure", "GCP", "Kubernetes", "Terraform", "Docker", "Serverless", "CI/CD", "Ansible"]
  }
};

const PROCESS_STEPS = [
  {
    id: 1,
    title: "Planning & Scoping",
    desc: "Comprehensive planning phase where we define assessment scope, objectives, and methodology based on your specific environment and requirements.",
    icon: Target,
    duration: "1-2 days",
    deliverables: ["Assessment Scope Document", "Methodology Overview", "Success Criteria"]
  },
  {
    id: 2,
    title: "Information Gathering",
    desc: "Systematic collection and analysis of information about your environment using established reconnaissance methodologies.",
    icon: Search,
    duration: "2-3 days",
    deliverables: ["Environment Analysis", "Asset Inventory", "Threat Model"]
  },
  {
    id: 3,
    title: "Vulnerability Assessment",
    desc: "Comprehensive security testing combining automated tools with manual analysis to identify potential vulnerabilities and weaknesses.",
    icon: Shield,
    duration: "5-10 days",
    deliverables: ["Vulnerability Analysis", "Technical Findings", "Risk Assessment"]
  },
  {
    id: 4,
    title: "Analysis & Validation",
    desc: "Detailed analysis of findings, validation of identified issues, and assessment of potential business impact and exploitability.",
    icon: BarChart3,
    duration: "3-5 days",
    deliverables: ["Validated Findings", "Impact Analysis", "Risk Prioritization"]
  },
  {
    id: 5,
    title: "Reporting & Recommendations",
    desc: "Comprehensive documentation of findings with actionable remediation guidance and strategic security recommendations.",
    icon: FileText,
    duration: "2-3 days",
    deliverables: ["Technical Report", "Executive Summary", "Remediation Plan"]
  },
  {
    id: 6,
    title: "Knowledge Transfer",
    desc: "Detailed review sessions and guidance to help your team understand findings and implement effective security improvements.",
    icon: MessageCircle,
    duration: "1-2 days",
    deliverables: ["Technical Review Session", "Implementation Guidance", "Follow-up Plan"]
  }
];

const ASSESSMENT_OPTIONS = [
  {
    id: "standard",
    name: "Standard Assessment",
    focus: "Core Security Evaluation",
    description: "Comprehensive security assessment following industry-standard methodologies",
    timeline: "2-3 weeks",
    scope: [
      "Single application or environment",
      "Automated scanning with manual validation",
      "Core security controls assessment",
      "Basic compliance alignment"
    ],
    deliverables: [
      "Technical assessment report",
      "Executive summary",
      "Risk prioritization matrix",
      "Initial remediation guidance"
    ]
  },
  {
    id: "advanced",
    name: "Advanced Assessment",
    focus: "In-Depth Security Analysis",
    description: "Extended security evaluation with enhanced manual testing and specialized focus areas",
    timeline: "3-4 weeks",
    recommended: true,
    scope: [
      "Multiple applications or complex environment",
      "Enhanced manual testing techniques",
      "Business logic vulnerability assessment",
      "Comprehensive compliance framework alignment",
      "API security testing"
    ],
    deliverables: [
      "Detailed technical report",
      "Executive briefing package",
      "Remediation implementation guide",
      "Compliance gap analysis",
      "Security improvement roadmap"
    ]
  },
  {
    id: "strategic",
    name: "Strategic Security Review",
    focus: "Architecture & Strategy",
    description: "Comprehensive security architecture review with strategic recommendations",
    timeline: "4-6 weeks",
    scope: [
      "Enterprise-wide security assessment",
      "Security architecture review",
      "Strategic security planning",
      "Advanced threat modeling",
      "Long-term security roadmap"
    ],
    deliverables: [
      "Strategic security assessment",
      "Architecture review findings",
      "Three-year security roadmap",
      "Executive leadership package",
      "Implementation guidance"
    ]
  }
];

const METHODOLOGY_HIGHLIGHTS = [
  {
    id: 1,
    title: "Framework-Based Approach",
    description: "Our assessments follow established industry frameworks including OWASP, NIST, and CIS benchmarks to ensure comprehensive coverage.",
    icon: BookOpen,
    color: "purple"
  },
  {
    id: 2,
    title: "Manual & Automated Testing",
    description: "We combine automated tools with expert manual testing to identify complex vulnerabilities that automated scanners miss.",
    icon: Cpu,
    color: "blue"
  },
  {
    id: 3,
    title: "Risk-Based Prioritization",
    description: "Findings are prioritized based on real-world exploitability and business impact, helping you focus on what matters most.",
    icon: Target,
    color: "red"
  },
  {
    id: 4,
    title: "Actionable Reporting",
    description: "Our reports provide clear, actionable guidance with specific remediation steps and implementation examples.",
    icon: FileText,
    color: "green"
  }
];

const FAQS = [
  {
    q: "What methodology do you follow for security assessments?",
    a: "We follow industry-standard frameworks including OWASP testing methodologies, NIST guidelines, and CIS benchmarks. Our approach combines these established methods with current threat intelligence and our research-driven insights to provide comprehensive security evaluations."
  },
  {
    q: "How do you ensure minimal disruption during testing?",
    a: "We follow carefully planned testing protocols with clear rules of engagement. All testing is conducted with appropriate safeguards, and we coordinate closely with your team to schedule activities during suitable windows. Our methodologies are designed to be thorough yet non-disruptive."
  },
  {
    q: "What makes your approach different from automated vulnerability scanners?",
    a: "While we utilize advanced automated tools for efficiency, our primary value comes from expert-led manual testing. We focus on business logic vulnerabilities, complex attack chains, and architecture weaknesses that automated tools cannot detect. Our testers apply critical thinking and security expertise to identify real-world risks."
  },
  {
    q: "Can your assessments help with compliance requirements?",
    a: "Yes, our assessments are designed to align with major compliance frameworks including SOC 2, ISO 27001, PCI DSS, and HIPAA. We provide clear mapping of findings to compliance requirements and work with your team to address identified gaps effectively."
  },
  {
    q: "What happens after the assessment is complete?",
    a: "We provide comprehensive reporting with prioritized findings and actionable remediation guidance. Our knowledge transfer sessions ensure your team understands the findings and can implement improvements effectively. We also offer follow-up support and retesting options as needed."
  },
  {
    q: "How do you determine the scope of an assessment?",
    a: "We begin with detailed scoping discussions to understand your environment, business context, and specific security concerns. Based on this understanding, we design a tailored assessment plan that addresses your unique requirements while following industry best practices."
  }
];

const AssessmentOption = ({ option }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    className={`bg-white rounded-2xl p-8 border-2 ${
      option.recommended 
        ? 'border-purple-500 shadow-xl scale-105' 
        : 'border-gray-200 shadow-lg hover:shadow-xl'
    } transition-all duration-300`}
  >
    {option.recommended && (
      <div className="absolute -top-3 left-1/2 -translate-x-1/2">
        <span className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
          Recommended
        </span>
      </div>
    )}
    
    <div className="text-center mb-6">
      <h3 className="text-2xl font-bold text-gray-900 mb-2">{option.name}</h3>
      <p className="text-purple-600 font-semibold mb-1">{option.focus}</p>
      <p className="text-gray-600 text-sm">{option.description}</p>
    </div>
    
    <div className="mb-6">
      <div className="flex items-center justify-center gap-2 mb-4">
        <Clock className="w-4 h-4 text-gray-500" />
        <span className="text-gray-700 font-medium">{option.timeline}</span>
      </div>
      
      <div className="space-y-3 mb-6">
        <h4 className="font-semibold text-gray-900">Assessment Scope:</h4>
        {option.scope.map((item, i) => (
          <div key={i} className="flex items-start gap-2">
            <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
            <span className="text-sm text-gray-700">{item}</span>
          </div>
        ))}
      </div>
      
      <div className="space-y-3">
        <h4 className="font-semibold text-gray-900">Key Deliverables:</h4>
        {option.deliverables.map((item, i) => (
          <div key={i} className="flex items-start gap-2">
            <FileText className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
            <span className="text-sm text-gray-700">{item}</span>
          </div>
        ))}
      </div>
    </div>
    
    <button className={`w-full py-3 rounded-xl font-semibold transition-all duration-300 ${
      option.recommended
        ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:shadow-lg'
        : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
    }`}>
      {option.recommended ? 'Start Assessment' : 'Learn More'}
    </button>
  </motion.div>
);

export default function ServiceDetailLight() {
  const { slug } = useParams();
  const service = SERVICES[slug] || SERVICES["web-pentest"];
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <div className="min-h-screen bg-white text-gray-900 overflow-hidden">
      <Navbar />

      {/* Enhanced Hero Section */}
      <section className="pt-32 pb-20 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-blue-50/30" />
        
        <div className="max-w-7xl mx-auto px-6 relative">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="space-y-6">
                <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-gray-200 shadow-sm">
                  <div className="w-2 h-2 bg-green-500 rounded-full" />
                  <span className="text-sm font-medium text-gray-700">Security Assessment</span>
                </div>
                
                <h1 className="text-5xl md:text-6xl font-bold leading-tight text-gray-900">
                  {service.title}
                </h1>
                
                <p className="text-2xl text-blue-600 font-semibold">
                  {service.subtitle}
                </p>
                
                <p className="text-xl text-gray-600 leading-relaxed">
                  {service.short}
                </p>
              </div>

              {/* Methodology Highlights */}
              <div className="grid grid-cols-2 gap-6 py-6">
                {service.strengths.map((strength, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 + 0.5 }}
                    className="text-center group"
                  >
                    <div className="w-12 h-12 mx-auto mb-3 bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                      <strength.icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <div className="text-lg font-semibold text-gray-900 mb-1">{strength.value}</div>
                    <div className="text-sm text-gray-600">{strength.label}</div>
                  </motion.div>
                ))}
              </div>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <a
                  href="#assessment-options"
                  className="group inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <Shield className="w-5 h-5" />
                  Explore Assessment Options
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
                
                <Link
                  to="/methodology"
                  className="group inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl bg-white border border-gray-300 text-gray-900 font-semibold hover:shadow-lg transition-all duration-300 hover:border-blue-500"
                >
                  <BookOpen className="w-5 h-5" />
                  View Methodology
                </Link>
              </motion.div>
            </motion.div>

            {/* Right Visual */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-gray-200">
                <div className="aspect-video bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center p-8">
                  <div className="text-center">
                    <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl flex items-center justify-center">
                      <service.icon className="w-12 h-12 text-blue-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Security Assessment Framework</h3>
                    <p className="text-gray-600">Comprehensive methodology-driven security evaluation</p>
                  </div>
                </div>
              </div>
              
              {/* Floating Technology Stack */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -bottom-4 -left-4 bg-white rounded-2xl p-4 shadow-xl border border-gray-200 max-w-xs"
              >
                <h4 className="font-semibold text-gray-900 mb-2">Technology Coverage</h4>
                <div className="flex flex-wrap gap-2">
                  {service.technologies.slice(0, 5).map((tech, i) => (
                    <span key={i} className="px-2 py-1 bg-gray-100 text-gray-700 rounded-md text-xs font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Service Overview */}
      <section className="py-20 bg-gray-50/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Overview */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="space-y-6"
            >
              <h2 className="text-3xl font-bold text-gray-900">Service Overview</h2>
              <p className="text-gray-600 leading-relaxed text-lg">
                {service.overview}
              </p>
              
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-900">Assessment Focus Areas:</h3>
                <div className="space-y-3">
                  {service.highlights.map((highlight, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Methodology Highlights */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="space-y-6"
            >
              <h2 className="text-3xl font-bold text-gray-900">Our Methodology</h2>
              <div className="grid grid-cols-2 gap-4">
                {METHODOLOGY_HIGHLIGHTS.map((item) => (
                  <div key={item.id} className="bg-white rounded-xl p-4 border border-gray-200 hover:shadow-md transition-shadow">
                    <div className={`w-10 h-10 rounded-lg bg-${item.color}-50 flex items-center justify-center mb-3`}>
                      <item.icon className={`w-5 h-5 text-${item.color}-600`} />
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-1">{item.title}</h3>
                    <p className="text-sm text-gray-600">{item.description}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Assessment Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A structured six-phase methodology ensuring comprehensive coverage and actionable results.
            </p>
          </motion.div>

          <div className="relative">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {PROCESS_STEPS.map((step) => (
                <motion.div
                  key={step.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center text-white">
                      <span className="font-bold">{step.id}</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900">{step.title}</h3>
                      <div className="flex items-center gap-2 mt-1">
                        <Clock className="w-4 h-4 text-gray-500" />
                        <span className="text-sm text-gray-600">{step.duration}</span>
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-4">{step.desc}</p>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2 text-sm">Key Deliverables:</h4>
                    <div className="flex flex-wrap gap-2">
                      {step.deliverables.slice(0, 2).map((deliverable, i) => (
                        <span
                          key={i}
                          className="px-2 py-1 bg-blue-50 text-blue-700 rounded-md text-xs font-medium"
                        >
                          {deliverable}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Assessment Options */}
      <section id="assessment-options" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Assessment Options</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the assessment approach that best fits your organization's needs and security maturity level.
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
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">Common questions about our security assessment approach and methodology.</p>
          </motion.div>

          <div className="space-y-4">
            {FAQS.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="border border-gray-200 rounded-xl bg-white hover:shadow-md transition-all duration-300 overflow-hidden"
              >
                <button
                  className="w-full px-6 py-5 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                >
                  <span className="text-lg font-semibold text-gray-900 pr-8">{faq.q}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-blue-600 transition-transform duration-300 ${
                      openFaq === index ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <AnimatePresence>
                  {openFaq === index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-6 pb-6">
                        <p className="text-gray-600 leading-relaxed">{faq.a}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-purple-600">
        <div className="max-w-6xl mx-auto px-6 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Begin Your Security Assessment
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
              Schedule a technical consultation to discuss your specific security needs 
              and explore how our methodology-driven approach can enhance your security posture.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link
                to="/contact"
                className="group inline-flex items-center justify-center gap-4 px-10 py-5 rounded-2xl bg-white text-blue-600 font-bold text-lg hover:shadow-2xl transition-all duration-300"
              >
                <Shield className="w-6 h-6" />
                Schedule Consultation
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <a
                href="#methodology"
                className="group inline-flex items-center justify-center gap-3 px-10 py-5 rounded-2xl bg-white/10 border border-white/30 text-white font-semibold hover:bg-white/20 transition-all duration-300 backdrop-blur-sm"
              >
                <BookOpen className="w-5 h-5" />
                Download Methodology Guide
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}