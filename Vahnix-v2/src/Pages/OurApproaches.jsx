
// src/pages/OurApproachPage.jsx
import React from "react";
import { motion } from "framer-motion";
// Add these imports at the top of src/pages/OurApproaches.jsx
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { 
  BookOpen, 
  Shield, 
  Target, 
  Users, 
  CheckCircle2, 
  BarChart3,
  FileText,
  Cpu,
  Network,
  Zap,
  ArrowRight,
  GitBranch,
  Layers,
  Terminal,
  Code,
  Cloud,
  Lock,
  MessageCircle
} from "lucide-react";


export default function OurApproaches() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-blue-50 border border-blue-200 mb-8">
              <BookOpen className="w-4 h-4 text-blue-600" />
              <span className="text-sm font-medium text-blue-700">Our Methodology</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 tracking-tight mb-6">
              Our Security Assessment
              <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Methodology
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We apply industry-standard frameworks with rigorous methodology to deliver 
              comprehensive security assessments that identify real risks and provide actionable solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Methodology Pillars */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Framework-Driven Security
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our approach is built on established industry standards and enhanced with current security research.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: GitBranch,
                title: "OWASP Methodology",
                description: "Following OWASP testing guides and Top 10 framework for web application security",
                frameworks: ["OWASP Testing Guide", "OWASP Top 10", "OWASP ASVS"],
                color: "purple"
              },
              {
                icon: BookOpen,
                title: "NIST Alignment",
                description: "Aligned with NIST Cybersecurity Framework for comprehensive security coverage",
                frameworks: ["NIST CSF", "NIST SP 800-115", "NIST RMF"],
                color: "blue"
              },
              {
                icon: Layers,
                title: "MITRE ATT&CK",
                description: "Mapping findings to real-world attack techniques for contextual risk assessment",
                frameworks: ["Enterprise Matrix", "Technique Mapping", "Tactical Analysis"],
                color: "red"
              },
              {
                icon: Shield,
                title: "CIS Benchmarks",
                description: "Using CIS Controls and benchmarks for infrastructure security assessment",
                frameworks: ["CIS Controls", "Benchmark Scoring", "Configuration Validation"],
                color: "green"
              }
            ].map((pillar, index) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className={`w-12 h-12 bg-${pillar.color}-50 rounded-xl flex items-center justify-center mb-4`}>
                  <pillar.icon className={`w-6 h-6 text-${pillar.color}-600`} />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{pillar.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{pillar.description}</p>
                <div className="space-y-1">
                  {pillar.frameworks.map((framework, i) => (
                    <div key={i} className="text-xs text-gray-500 flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                      {framework}
                    </div>
                  ))}
                </div>
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
              Our Assessment Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A structured six-phase methodology ensuring comprehensive coverage and actionable results.
            </p>
          </motion.div>

          <div className="relative">
  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
    {[
      {
        phase: "01",
        title: "Planning & Scoping",
        description: "Detailed scoping to understand your environment and define assessment objectives",
        icon: Target,
        bgColor: "from-blue-600 to-blue-400"
      },
      {
        phase: "02",
        title: "Information Gathering",
        description: "Systematic collection of information about your assets and attack surface",
        icon: Network,
        bgColor: "from-purple-600 to-purple-400"
      },
      {
        phase: "03",
        title: "Vulnerability Assessment",
        description: "Comprehensive testing using both automated tools and manual analysis",
        icon: Shield,
        bgColor: "from-green-600 to-green-400"
      },
      {
        phase: "04",
        title: "Analysis & Validation",
        description: "Deep analysis of findings with validation of identified vulnerabilities",
        icon: BarChart3,
        bgColor: "from-orange-600 to-orange-400"
      },
      {
        phase: "05",
        title: "Reporting & Recommendations",
        description: "Detailed reporting with prioritized findings and remediation guidance",
        icon: FileText,
        bgColor: "from-red-600 to-red-400"
      },
      {
        phase: "06",
        title: "Knowledge Transfer",
        description: "Comprehensive review and guidance for implementing security improvements",
        icon: Users,
        bgColor: "from-indigo-600 to-indigo-400"
      }
    ].map((step, index) => (
      <motion.div
        key={step.phase}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.1 }}
        className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm hover:shadow-md transition-shadow group"
      >
        <div className="flex items-center gap-4 mb-4">
          <div className={`w-12 h-12 bg-gradient-to-br ${step.bgColor} rounded-xl flex items-center justify-center text-white font-bold group-hover:scale-110 transition-transform`}>
            {step.phase}
          </div>
          <div>
            <h3 className="text-lg font-bold text-gray-900">{step.title}</h3>
          </div>
        </div>
        <p className="text-gray-600">{step.description}</p>
      </motion.div>
    ))}
  </div>
</div>
        </div>
      </section>

      {/* Technical Focus Areas */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Technical Focus Areas
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Specialized security assessment capabilities across modern technology stacks.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Code,
                title: "Web Applications",
                description: "Modern framework security, API testing, business logic assessment",
                technologies: ["React", "Vue", "Node.js", "GraphQL"]
              },
              {
                icon: Cloud,
                title: "Cloud Infrastructure",
                description: "Multi-cloud security, container security, serverless assessment",
                technologies: ["AWS", "Azure", "GCP", "Kubernetes"]
              },
              {
                icon: Cpu,
                title: "Mobile Applications",
                description: "iOS & Android security, API integration, data protection",
                technologies: ["iOS", "Android", "React Native", "Flutter"]
              },
              {
                icon: Network,
                title: "Network Security",
                description: "Infrastructure assessment, segmentation testing, protocol analysis",
                technologies: ["Firewalls", "VPN", "Wireless", "IoT"]
              }
            ].map((area, index) => (
              <motion.div
                key={area.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-md transition-shadow"
              >
                <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center mb-4">
                  <area.icon className="w-5 h-5 text-blue-600" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{area.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{area.description}</p>
                <div className="flex flex-wrap gap-2">
                  {area.technologies.map((tech, i) => (
                    <span key={i} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
       <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Explore Our Methodologies
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Dive deeper into our specialized security assessment methodologies.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-3xl p-8 border border-blue-200"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center">
                  <Code className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Web Application Security</h3>
                  <p className="text-gray-600">Comprehensive web app testing methodology</p>
                </div>
              </div>
              <p className="text-gray-700 mb-6">
                Detailed methodology for identifying and addressing vulnerabilities in modern web applications using OWASP standards and advanced testing techniques.
              </p>
              <a
                href="/methodology/web-application"
                className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
              >
                Explore Methodology
                <ArrowRight className="w-4 h-4" />
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-3xl p-8 border border-purple-200"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-purple-600 rounded-xl flex items-center justify-center">
                  <Cloud className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Cloud Security Assessment</h3>
                  <p className="text-gray-600">Multi-cloud security methodology</p>
                </div>
              </div>
              <p className="text-gray-700 mb-6">
                Comprehensive cloud security evaluation following cloud-native security best practices and compliance frameworks across major cloud platforms.
              </p>
              <a
                href="/methodology/cloud-security"
                className="inline-flex items-center gap-2 px-6 py-3 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition-colors"
              >
                Explore Methodology
                <ArrowRight className="w-4 h-4" />
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What We Deliver */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              What You Can Expect
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our assessments deliver clear, actionable security insights following industry best practices.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="space-y-6"
            >
              <h3 className="text-2xl font-bold text-gray-900">Comprehensive Reporting</h3>
              <div className="space-y-4">
                {[
                  "Detailed technical findings with clear evidence",
                  "Risk-based prioritization using CVSS scoring",
                  "Specific remediation steps with implementation examples",
                  "Executive summary for leadership teams",
                  "Compliance mapping for regulatory requirements"
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm"
            >
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Zap className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Expert-Led Assessment</h4>
                    <p className="text-sm text-gray-600">Certified security professionals conduct all testing</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                    <Terminal className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Manual & Automated Testing</h4>
                    <p className="text-sm text-gray-600">Combining tools with expert analysis for comprehensive coverage</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                    <Lock className="w-5 h-5 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Compliance Focus</h4>
                    <p className="text-sm text-gray-600">Assessments aligned with SOC 2, ISO 27001, HIPAA requirements</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-white shadow-2xl"
          >
            <h2 className="text-3xl font-bold mb-4">
              Ready to Apply Our Methodology?
            </h2>
            <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
              Let's discuss how our framework-driven approach can strengthen your security posture.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center gap-3 px-8 py-4 bg-white text-blue-600 font-semibold rounded-2xl hover:shadow-lg transition-all duration-300"
              >
                <MessageCircle className="w-5 h-5" />
                Schedule Technical Discussion
                <ArrowRight className="w-5 h-5" />
              </a>
              
              <a
                href="/services"
                className="inline-flex items-center gap-3 px-8 py-4 bg-white/10 border border-white/30 text-white font-semibold rounded-2xl hover:bg-white/20 transition-all duration-300"
              >
                <BookOpen className="w-5 h-5" />
                View Our Services
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}