// src/pages/MethodologyDetailPage.jsx
import React from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  ArrowLeft, 
  BookOpen, 
  Clock, 
  CheckCircle2,
  FileText,
  Shield,
  Target,
  Users,
  BarChart3,
  Code,
  Cloud,
  Network,
  Zap,
  Layers,
  GitBranch
} from "lucide-react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const METHODOLOGY_DETAILS = {
  "web-application": {
    title: "Web Application Security Assessment Methodology",
    category: "Technical Assessment",
    overview: "Comprehensive methodology for identifying and addressing vulnerabilities in modern web applications using OWASP standards and advanced testing techniques.",
    icon: Code,
    color: "blue",
    
    phases: [
      {
        title: "Reconnaissance & Enumeration",
        description: "Systematic discovery of application assets, endpoints, and attack surface using both automated and manual techniques.",
        activities: [
          "Application mapping and technology fingerprinting",
          "Endpoint discovery and API enumeration",
          "Authentication mechanism analysis",
          "Business logic flow mapping"
        ]
      },
      {
        title: "Vulnerability Assessment",
        description: "Comprehensive testing for common vulnerabilities including OWASP Top 10 with focus on modern application frameworks.",
        activities: [
          "Input validation and injection testing",
          "Authentication and session management review",
          "Access control and privilege escalation testing",
          "Business logic flaw identification"
        ]
      },
      {
        title: "API Security Testing",
        description: "Specialized assessment of REST, GraphQL, and other API implementations for security vulnerabilities.",
        activities: [
          "API endpoint security validation",
          "Authentication and authorization testing",
          "Rate limiting and throttling assessment",
          "Data exposure and information leakage analysis"
        ]
      },
      {
        title: "Reporting & Remediation",
        description: "Detailed documentation of findings with actionable remediation guidance and risk-based prioritization.",
        activities: [
          "CVSS scoring and risk categorization",
          "Proof-of-concept development for critical findings",
          "Remediation implementation guidance",
          "Retesting and validation procedures"
        ]
      }
    ],
    
    frameworks: [
      { name: "OWASP Testing Guide", description: "Comprehensive web application testing methodology" },
      { name: "OWASP Top 10", description: "Focus on most critical web application security risks" },
      { name: "OWASP ASVS", description: "Application security verification standard" },
      { name: "NIST SP 800-115", description: "Technical guide to information security testing" }
    ],
    
    deliverables: [
      "Detailed technical assessment report",
      "Executive summary with risk overview",
      "Remediation action plan",
      "Compliance gap analysis",
      "Technical review session"
    ]
  },
  
  "cloud-security": {
    title: "Cloud Security Assessment Methodology",
    category: "Cloud Security",
    overview: "Comprehensive cloud security evaluation following cloud-native security best practices and compliance frameworks across major cloud platforms.",
    icon: Cloud,
    color: "purple",
    
    phases: [
      {
        title: "Cloud Architecture Review",
        description: "Analysis of cloud deployment architecture, networking, and service configurations.",
        activities: [
          "Cloud architecture security assessment",
          "Network segmentation and security group analysis",
          "Identity and Access Management review",
          "Data flow and encryption assessment"
        ]
      },
      {
        title: "Configuration Security",
        description: "Evaluation of cloud service configurations against security best practices and compliance requirements.",
        activities: [
          "CIS benchmark compliance checking",
          "Cloud service configuration review",
          "Infrastructure-as-code security analysis",
          "Container and orchestration security"
        ]
      },
      {
        title: "Identity & Access Management",
        description: "Comprehensive assessment of authentication, authorization, and privilege management.",
        activities: [
          "IAM policy analysis and privilege escalation testing",
          "Role-based access control validation",
          "Multi-factor authentication assessment",
          "Service account security review"
        ]
      },
      {
        title: "Data Protection",
        description: "Evaluation of data security controls including encryption, backup, and recovery procedures.",
        activities: [
          "Data encryption implementation review",
          "Backup and disaster recovery assessment",
          "Data classification and handling analysis",
          "Compliance requirement validation"
        ]
      }
    ],
    
    frameworks: [
      { name: "CIS Benchmarks", description: "Cloud-specific security configuration benchmarks" },
      { name: "CSA CCM", description: "Cloud Security Alliance Cloud Controls Matrix" },
      { name: "NIST CSF", description: "Cybersecurity Framework for cloud environments" },
      { name: "Cloud Provider Best Practices", description: "AWS, Azure, and GCP security recommendations" }
    ],
    
    deliverables: [
      "Cloud security posture assessment",
      "Configuration hardening guide",
      "IAM security recommendations",
      "Compliance gap analysis report",
      "Cloud security roadmap"
    ]
  }
};

export default function MethodologyDetailPage() {
  const { id } = useParams();
  const methodology = METHODOLOGY_DETAILS[id] || METHODOLOGY_DETAILS["web-application"];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <Link to="/our-approach" className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-8">
            <ArrowLeft className="w-4 h-4" />
            Back to Our Approach
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-8"
          >
            {/* Header */}
            <div className="space-y-6">
              <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-blue-50 border border-blue-200">
                <BookOpen className="w-4 h-4 text-blue-600" />
                <span className="text-sm font-medium text-blue-700">{methodology.category}</span>
              </div>
              
              <div className="flex items-start gap-6">
                <div className={`w-16 h-16 bg-${methodology.color}-50 rounded-2xl flex items-center justify-center flex-shrink-0`}>
                  <methodology.icon className={`w-8 h-8 text-${methodology.color}-600`} />
                </div>
                <div>
                  <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                    {methodology.title}
                  </h1>
                  <p className="text-xl text-gray-600 max-w-3xl">
                    {methodology.overview}
                  </p>
                </div>
              </div>
            </div>

            {/* Methodology Phases */}
            <div className="py-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Assessment Methodology</h2>
              
              <div className="space-y-8">
                {methodology.phases.map((phase, index) => (
                  <motion.div
                    key={phase.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div className="flex items-start gap-6">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center text-white font-bold text-lg">
                          {index + 1}
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-4 mb-4">
                          <h3 className="text-xl font-bold text-gray-900">{phase.title}</h3>
                        </div>
                        
                        <p className="text-gray-600 mb-6">{phase.description}</p>
                        
                        <div className="space-y-3">
                          <h4 className="font-semibold text-gray-900">Key Activities:</h4>
                          <div className="grid md:grid-cols-2 gap-3">
                            {phase.activities.map((activity, i) => (
                              <div key={i} className="flex items-start gap-3">
                                <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                                <span className="text-gray-700 text-sm">{activity}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Frameworks & Standards */}
            <div className="py-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Based on Industry Standards</h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                {methodology.frameworks.map((framework, index) => (
                  <motion.div
                    key={framework.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-gray-50 rounded-xl p-6 border border-gray-200"
                  >
                    <div className="flex items-center gap-4 mb-3">
                      <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                        <GitBranch className="w-5 h-5 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900">{framework.name}</h3>
                        <p className="text-sm text-gray-600">{framework.description}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Deliverables */}
            <div className="py-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Assessment Deliverables</h2>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {methodology.deliverables.map((deliverable, index) => (
                  <motion.div
                    key={deliverable}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center">
                        <FileText className="w-5 h-5 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900">{deliverable}</h3>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}