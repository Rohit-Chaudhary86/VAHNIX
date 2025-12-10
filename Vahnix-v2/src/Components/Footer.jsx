import React from "react";
import { motion } from "framer-motion";
import { 
  Award, 
  PhoneCall, 
  Shield, 
  Lock, 
  Globe, 
  Mail, 
  MapPin, 
  Clock,
  FileText,
  Users,
  Building2,
  Sparkles,
  ChevronRight,
  CheckCircle2
} from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-gradient-to-b from-gray-50 to-gray-100 border-t border-gray-200 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px'
        }} />
        
        {/* Gradient Orbs */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.15, 0.1]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute -top-20 -left-20 w-64 h-64 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
          className="absolute -bottom-20 -right-20 w-64 h-64 bg-gradient-to-br from-emerald-500/10 to-cyan-500/10 rounded-full blur-3xl"
        />
      </div>

      {/* Main Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Footer Grid */}
        <div className="grid lg:grid-cols-4 gap-8 mb-16">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur-md opacity-70" />
                <Shield className="w-8 h-8 text-white relative z-10" />
              </div>
              <div>
                <h3 className="text-xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                  VAHNIX Security
                </h3>
                <p className="text-xs text-gray-500 font-medium tracking-wider">ENTERPRISE SECURITY</p>
              </div>
            </div>
            
            <p className="text-gray-600 text-sm leading-relaxed">
              OSCP-certified penetration testing guided by true attacker mindset. 
              Enterprise-grade security assessments for modern organizations.
            </p>
            
            <div className="flex items-center gap-4">
              {[1, 2, 3, 4, 5].map((star) => (
                <Sparkles key={star} className="w-4 h-4 text-amber-500 fill-amber-500" />
              ))}
              <span className="text-sm text-gray-700 font-medium">4.9/5 Rating</span>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-6"
          >
            <h4 className="text-lg font-bold text-gray-900">Services</h4>
            <ul className="space-y-3">
              {[
                "Web Application Security",
                "Network Security Assessment",
                "Cloud Security Review",
                "Mobile Security Testing",
                "API Security Assessment",
                "Compliance Auditing"
              ].map((service) => (
                <li key={service}>
                  <a
                    href="#"
                    className="group flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors text-sm"
                  >
                    <ChevronRight className="w-3 h-3 text-blue-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Certifications & Compliance */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <h4 className="text-lg font-bold text-gray-900">Certifications</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3 p-3 bg-white/50 rounded-lg border border-gray-200">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-100 to-blue-50 rounded-lg flex items-center justify-center">
                  <Award className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">OSCP Certified</div>
                  <div className="text-xs text-gray-500">Offensive Security</div>
                </div>
              </div>
              
              <div className="flex items-center gap-3 p-3 bg-white/50 rounded-lg border border-gray-200">
                <div className="w-10 h-10 bg-gradient-to-br from-emerald-100 to-emerald-50 rounded-lg flex items-center justify-center">
                  <Shield className="w-5 h-5 text-emerald-600" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">ISO 27001</div>
                  <div className="text-xs text-gray-500">Compliant Practices</div>
                </div>
              </div>
              
              <div className="flex items-center gap-3 p-3 bg-white/50 rounded-lg border border-gray-200">
                <div className="w-10 h-10 bg-gradient-to-br from-purple-100 to-purple-50 rounded-lg flex items-center justify-center">
                  <Globe className="w-5 h-5 text-purple-600" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">OWASP</div>
                  <div className="text-xs text-gray-500">Methodology Framework</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact & CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-6"
          >
            <h4 className="text-lg font-bold text-gray-900">Contact Us</h4>
            
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-gray-600">
                <div className="w-8 h-8 bg-blue-50 rounded-lg flex items-center justify-center">
                  <PhoneCall className="w-4 h-4 text-blue-600" />
                </div>
                <div>
                  <div className="text-sm font-medium text-gray-900">Consultation Hotline</div>
                  <div className="text-sm">Schedule a free risk assessment</div>
                </div>
              </div>
              
              <div className="flex items-center gap-3 text-gray-600">
                <div className="w-8 h-8 bg-emerald-50 rounded-lg flex items-center justify-center">
                  <Mail className="w-4 h-4 text-emerald-600" />
                </div>
                <div>
                  <div className="text-sm font-medium text-gray-900">Email Support</div>
                  <div className="text-sm">security@vahnix.com</div>
                </div>
              </div>
              
              <div className="flex items-center gap-3 text-gray-600">
                <div className="w-8 h-8 bg-purple-50 rounded-lg flex items-center justify-center">
                  <Clock className="w-4 h-4 text-purple-600" />
                </div>
                <div>
                  <div className="text-sm font-medium text-gray-900">Response Time</div>
                  <div className="text-sm">2 hours for critical issues</div>
                </div>
              </div>
            </div>
            
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="group inline-flex items-center justify-center gap-3 w-full px-6 py-4 rounded-xl bg-gradient-to-r from-blue-600 via-blue-700 to-purple-700 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-500 relative overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-2">
                <Shield className="w-5 h-5" />
                Request Enterprise Audit
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 via-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.a>
          </motion.div>
        </div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12"
        >
          {[
            { icon: Building2, value: "", label: "Enterprise Clients" },
            { icon: CheckCircle2, value: "", label: "Assessments" },
            { icon: Users, value: "", label: "Critical Issues Found" },
            { icon: FileText, value: "", label: "Client Satisfaction" }
          ].map((item, index) => (
            <div key={index} className="bg-white/80 backdrop-blur-sm rounded-xl p-4 border border-gray-200 shadow-sm text-center">
              <div className="inline-flex p-3 bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg mb-3">
                <item.icon className="w-6 h-6 text-blue-600" />
              </div>
              <div className="text-2xl font-bold text-gray-900 mb-1">{item.value}</div>
              <div className="text-sm text-gray-600">{item.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Divider */}
        <div className="relative my-12">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300/50"></div>
          </div>
          <div className="relative flex justify-center">
            <span className="bg-gradient-to-b from-gray-50 to-gray-100 px-6 text-sm text-gray-500">
              SECURITY & COMPLIANCE
            </span>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Copyright */}
          <div className="text-center md:text-left">
            <p className="text-sm text-gray-600">
              © {currentYear} VAHNIX Security — Enterprise Penetration Testing & Security Assessment
            </p>
            <p className="text-xs text-gray-500 mt-1">
              All security assessments conducted under strict NDA and responsible disclosure policies
            </p>
          </div>
          
          {/* Compliance Badges */}
          <div className="flex flex-wrap justify-center gap-4">
            {["ISO 27001", "SOC 2", "PCI DSS", "GDPR", "HIPAA"].map((badge) => (
              <span
                key={badge}
                className="px-3 py-1.5 bg-white/80 backdrop-blur-sm text-gray-700 rounded-lg text-xs font-medium border border-gray-300/50"
              >
                {badge}
              </span>
            ))}
          </div>
          
          {/* Legal Links */}
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
              Cookie Policy
            </a>
            <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
              Responsible Disclosure
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Glow */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />
    </footer>
  );
}