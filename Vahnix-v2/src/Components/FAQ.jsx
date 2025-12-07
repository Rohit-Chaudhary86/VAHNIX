import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ChevronDown, HelpCircle, MessageCircle, Mail, 
  Sparkles, Shield, Clock, Award, CheckCircle,
  ArrowRight, Zap, Target, Users
} from "lucide-react";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);
  const [activeCategory, setActiveCategory] = useState("All Questions");

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const handleCategoryClick = (category, index) => {
    setActiveCategory(category);
    if (category === "All Questions") {
      setOpenIndex(0);
    } else {
      const firstInCategory = faqs.findIndex(faq => faq.category === category);
      setOpenIndex(firstInCategory);
    }
  };

  const faqs = [
    {
      question: "What makes VAHNIX different from other security companies?",
      answer: "We're founded and operated by OSCP-certified penetration testers with extensive red team experience. Unlike traditional security firms focused on compliance checkboxes, we simulate real-world attacks using the same techniques and tools actual hackers use. Our approach combines automated scanning with manual exploitation to uncover vulnerabilities others might miss.",
      category: "About Us",
      icon: Shield
    },
    {
      question: "How long does a typical security assessment take?",
      answer: "Our rapid assessment cycle delivers critical findings within 48 hours. Comprehensive engagements typically range from 2-4 weeks depending on scope, complexity, and assets. We provide weekly progress updates and a detailed report with actionable remediation steps. For urgent needs, we offer expedited assessments.",
      category: "Process",
      icon: Clock
    },
    {
      question: "Do you provide ongoing security monitoring?",
      answer: "Yes, we offer continuous security monitoring packages after the initial assessment. Our monitoring includes 24/7 threat detection, regular vulnerability scans, security awareness training, and periodic penetration tests. We recommend starting with a thorough assessment to establish your security baseline.",
      category: "Services",
      icon: Zap
    },
    {
      question: "What industries do you specialize in?",
      answer: "While our methodology applies universally, we have deep expertise in tech startups, SaaS platforms, financial technology, healthcare, e-commerce, and government organizations. Each industry requires specific compliance knowledge (like HIPAA, PCI-DSS, SOC 2) which we're well-versed in.",
      category: "Expertise",
      icon: Target
    },
    {
      question: "Are your testers certified? What experience do they have?",
      answer: "All senior testers hold OSCP, CEH, or CISSP certifications with 5+ years of hands-on penetration testing experience. Our team members have worked with Fortune 500 companies, contributed to open-source security tools, and participated in bug bounty programs finding critical vulnerabilities.",
      category: "Team",
      icon: Users
    },
    {
      question: "What's included in your reporting and deliverables?",
      answer: "We provide: 1) Executive summary for leadership, 2) Technical findings with CVSS scoring, 3) Proof-of-concept exploits, 4) Step-by-step remediation guides, 5) Retesting verification, 6) Compliance mapping (if needed). Our reports are actionable, not just compliance paperwork.",
      category: "Reporting",
      icon: Award
    },
    {
      question: "How do you handle sensitive data during testing?",
      answer: "We follow strict confidentiality protocols: 1) All testers sign NDAs, 2) Data encrypted in transit and at rest, 3) Testing in isolated environments when needed, 4) No production data stored, 5) Secure communication channels, 6) Option for on-premise testing.",
      category: "Security",
      icon: Shield
    },
    {
      question: "What happens after you find vulnerabilities?",
      answer: "We don't just find problems—we help fix them. Our process includes: 1) Prioritized remediation roadmap, 2) Technical guidance calls with your team, 3) Code review for fixes, 4) Retesting to verify remediation, 5) Post-remediation security guidance to prevent recurrence.",
      category: "Remediation",
      icon: CheckCircle
    }
  ];

  const categories = ["All Questions", ...new Set(faqs.map(faq => faq.category))];
  const filteredFaqs = activeCategory === "All Questions" 
    ? faqs 
    : faqs.filter(faq => faq.category === activeCategory);

  const stats = [
    { icon: Clock, label: "24-hour response time", color: "text-blue-600", bg: "bg-blue-100" },
    { icon: Award, label: "OSCP certified testers", color: "text-green-600", bg: "bg-green-100" },
    { icon: Shield, label: "Zero data breaches", color: "text-purple-600", bg: "bg-purple-100" },
    { icon: CheckCircle, label: "Free consultation", color: "text-orange-600", bg: "bg-orange-100" }
  ];

  return (
    <section id="faq" className="relative py-24 bg-gradient-to-b from-white to-blue-50/20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ 
            x: [0, 100, 0],
            y: [0, -50, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            repeat: Infinity, 
            duration: 25, 
            ease: "easeInOut" 
          }}
          className="absolute top-1/4 left-1/4 w-[800px] h-[800px] bg-gradient-to-r from-blue-100/30 to-purple-100/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ 
            x: [0, -80, 0],
            y: [0, 60, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{ 
            repeat: Infinity, 
            duration: 30, 
            ease: "easeInOut",
            delay: 2
          }}
          className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-gradient-to-r from-emerald-100/20 to-cyan-100/30 rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
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
            className="inline-flex items-center gap-3 px-5 py-3 bg-white/80 backdrop-blur-sm rounded-full border border-gray-200 shadow-sm mb-8"
          >
            <div className="relative">
              <Sparkles className="w-5 h-5 text-blue-600" />
              <motion.div
                animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="absolute inset-0 w-5 h-5 bg-blue-400 rounded-full blur-sm"
              />
            </div>
            <span className="text-lg font-semibold text-gray-800">Frequently Asked Questions</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-5xl md:text-6xl font-bold mb-8"
          >
            <span className="bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 bg-clip-text text-transparent">
              Got Questions?
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent">
              We've Got Answers
            </span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            Everything you need to know about our security services, process, and how we can protect your business
          </motion.p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center gap-4 p-4 bg-white/80 backdrop-blur-sm rounded-[24px] border border-gray-200 shadow-sm"
              >
                <div className={`w-12 h-12 ${stat.bg} rounded-[16px] flex items-center justify-center`}>
                  <stat.icon className={`w-6 h-6 ${stat.color}`} />
                </div>
                <span className="text-sm font-medium text-gray-700">{stat.label}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* FAQ Categories Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category, index) => (
              <motion.button
                key={category}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.5 + index * 0.05 }}
                viewport={{ once: true }}
                onClick={() => handleCategoryClick(category, index)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                    : 'bg-white border border-gray-200 text-gray-700 hover:border-blue-300 hover:bg-blue-50'
                }`}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* FAQ Items */}
        <div className="max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="space-y-4"
            >
              {filteredFaqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true, margin: "-50px" }}
                  className="group"
                >
                  <motion.div
                    layout
                    className={`bg-white/80 backdrop-blur-sm rounded-[32px] overflow-hidden transition-all duration-300 ${
                      openIndex === index 
                        ? 'ring-2 ring-blue-500 ring-opacity-20 border-blue-300 shadow-xl' 
                        : 'border border-gray-200 shadow-lg hover:shadow-xl hover:border-blue-200'
                    }`}
                  >
                    <motion.button
                      onClick={() => toggleFAQ(index)}
                      className="w-full p-8 text-left flex justify-between items-center hover:bg-gray-50/50 transition-colors"
                      whileHover={{ x: 4 }}
                    >
                      <div className="flex items-start gap-6 flex-1">
                        <motion.div
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          className={`p-3 rounded-[16px] ${
                            openIndex === index 
                              ? 'bg-gradient-to-br from-blue-100 to-blue-200 text-blue-600' 
                              : 'bg-gray-100 text-gray-600 group-hover:bg-blue-50 group-hover:text-blue-600'
                          }`}
                        >
                          <faq.icon className="w-6 h-6" />
                        </motion.div>
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-3">
                            <span className={`text-xs font-medium px-3 py-1.5 rounded-full ${
                              openIndex === index 
                                ? 'bg-blue-100 text-blue-700' 
                                : 'bg-gray-100 text-gray-600'
                            }`}>
                              {faq.category}
                            </span>
                          </div>
                          <h3 className="text-xl font-semibold text-gray-900 pr-12 leading-tight">
                            {faq.question}
                          </h3>
                        </div>
                      </div>
                      <motion.div
                        animate={{ rotate: openIndex === index ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                        className={`p-2 rounded-full ${
                          openIndex === index 
                            ? 'bg-blue-100 text-blue-600' 
                            : 'bg-gray-100 text-gray-600 group-hover:bg-blue-50 group-hover:text-blue-600'
                        }`}
                      >
                        <ChevronDown className="w-5 h-5" />
                      </motion.div>
                    </motion.button>

                    <AnimatePresence>
                      {openIndex === index && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                          className="overflow-hidden"
                        >
                          <div className="px-8 pb-8">
                            <div className="pl-20 border-l-2 border-blue-200 ml-3">
                              <p className="text-gray-600 leading-relaxed text-lg mb-6">
                                {faq.answer}
                              </p>
                              {index === 0 && (
                                <motion.div
                                  initial={{ opacity: 0, y: 10 }}
                                  animate={{ opacity: 1, y: 0 }}
                                  transition={{ delay: 0.2 }}
                                  className="p-5 bg-gradient-to-r from-blue-50 to-purple-50 rounded-[20px] border border-blue-100"
                                >
                                  <div className="flex items-start gap-3">
                                    <Sparkles className="w-5 h-5 text-blue-600 mt-0.5" />
                                    <div>
                                      <p className="text-sm font-medium text-blue-800 mb-1">
                                        Pro Tip: Start with a free security consultation
                                      </p>
                                      <p className="text-sm text-blue-700">
                                        Our experts will analyze your needs and provide tailored recommendations.{" "}
                                        <a href="#contact" className="font-semibold underline hover:text-blue-900 transition-colors">
                                          Schedule yours today →
                                        </a>
                                      </p>
                                    </div>
                                  </div>
                                </motion.div>
                              )}
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-[32px] p-12 text-white shadow-2xl">
            <div className="max-w-2xl mx-auto text-center">
              <MessageCircle className="w-16 h-16 mx-auto mb-6" />
              <h3 className="text-3xl font-bold mb-6">Still Have Questions?</h3>
              <p className="text-blue-100 text-lg mb-8 leading-relaxed">
                Our security experts are ready to provide personalized answers and help you 
                build a robust security strategy for your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <motion.a
                  href="#contact"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="group relative inline-flex items-center justify-center gap-3 px-10 py-4 bg-white text-blue-600 font-semibold rounded-[20px] hover:shadow-2xl transition-all duration-300 overflow-hidden"
                >
                  <Mail className="w-5 h-5" />
                  <span>Contact Our Team</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  <div className="absolute inset-0 -left-48 -top-8 w-24 h-32 bg-blue-50/20 transform -skew-x-12 group-hover:left-[110%] transition-all duration-700" />
                </motion.a>
                <motion.a
                  href="/meet"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="group inline-flex items-center justify-center gap-3 px-10 py-4 bg-blue-700/40 text-white font-semibold rounded-[20px] border border-blue-400/30 hover:bg-blue-700/60 hover:shadow-2xl transition-all duration-300"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>Schedule Free Call</span>
                </motion.a>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-gray-500 text-sm">
            All communications are encrypted and confidential. We respect your privacy and never share your information.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;