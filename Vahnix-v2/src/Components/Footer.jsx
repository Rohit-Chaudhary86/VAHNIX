import React from "react";
import { motion } from "framer-motion";
import { 
  Award, 
  Shield, 
  Mail, 
  Clock,
  Sparkles,
  ChevronRight,
  Zap,
  Target,
  Users
} from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-gradient-to-b from-gray-50 to-gray-100 border-t border-gray-200 overflow-hidden mt-24"> {/* Added top margin */}
      {/* Simplified Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-10 -left-10 w-32 h-32 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-full blur-2xl" />
        <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-gradient-to-br from-emerald-500/5 to-cyan-500/5 rounded-full blur-2xl" />
      </div>

      {/* Main Content */}
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-12">
        {/* Footer Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-10">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur-md opacity-70" />
                <Shield className="w-7 h-7 text-white relative z-10" />
              </div>
              <div>
                <h3 className="text-lg font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                  VAHNIX Security
                </h3>
                <p className="text-xs text-gray-500 font-medium">Certified Ethical Hackers</p>
              </div>
            </div>
            
            <p className="text-gray-600 text-sm leading-relaxed">
              Elite penetration testing by OSCP, CEH & CRTE certified security researchers with proven track record in enterprise security and bug bounty programs.
            </p>
            
            <div className="flex items-center gap-3">
              {[1, 2, 3, 4].map((star) => (
                <Sparkles key={star} className="w-3 h-3 text-amber-500 fill-amber-500" />
              ))}
              <span className="text-sm text-gray-700 font-medium"></span>
            </div>
          </motion.div>

          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-4"
          >
            <h4 className="text-lg font-bold text-gray-900">Certifications</h4>
            <div className="space-y-3">
              {/* CRTE */}
              <div className="flex items-center gap-3 p-3 bg-gradient-to-r from-orange-50 to-red-50 rounded-lg border border-orange-200 shadow-sm">
                <div className="w-9 h-9 bg-gradient-to-br from-orange-500 to-red-600 rounded-lg flex items-center justify-center">
                  <Target className="w-5 h-5 text-white" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-gray-900">CRTE</span>
                    <span className="text-xs bg-orange-100 text-orange-700 px-2 py-0.5 rounded-full font-medium">
                      Expert
                    </span>
                  </div>
                  <div className="text-xs text-gray-600 mt-0.5">
                    Certified Red Team Expert - Active Directory & Lateral Movement
                  </div>
                </div>
              </div>
              
              {/* CEH */}
              <div className="flex items-center gap-3 p-3 bg-gradient-to-r from-emerald-50 to-green-50 rounded-lg border border-emerald-200">
                <div className="w-9 h-9 bg-gradient-to-br from-emerald-500 to-green-600 rounded-lg flex items-center justify-center">
                  <Zap className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="font-bold text-gray-900">CEH</div>
                  <div className="text-xs text-gray-600">Certified Ethical Hacker</div>
                </div>
              </div>
              
              {/* OSCP */}
              <div className="flex items-center gap-3 p-3 bg-white/50 rounded-lg border border-gray-200">
                <div className="w-9 h-9 bg-gradient-to-br from-blue-100 to-blue-50 rounded-lg flex items-center justify-center">
                  <Award className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <div className="font-bold text-gray-900">OSCP</div>
                  <div className="text-xs text-gray-600">Offensive Security Certified Professional</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-4"
          >
            <h4 className="text-lg font-bold text-gray-900">Quick Contact</h4>
            
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-gray-600">
                <div className="w-8 h-8 bg-blue-50 rounded-lg flex items-center justify-center">
                  <Mail className="w-4 h-4 text-blue-600" />
                </div>
                <div>
                  <div className="text-sm font-medium text-gray-900">Support</div>
                  <div className="text-sm">support@vahnix.com</div>
                </div>
              </div>
              
              <div className="flex items-center gap-3 text-gray-600">
                <div className="w-8 h-8 bg-emerald-50 rounded-lg flex items-center justify-center">
                  <Clock className="w-4 h-4 text-emerald-600" />
                </div>
                <div>
                  <div className="text-sm font-medium text-gray-900">Response Time</div>
                  <div className="text-sm">2 hours for critical issues</div>
                </div>
              </div>
              
              <div className="flex items-center gap-3 text-gray-600">
                <div className="w-8 h-8 bg-purple-50 rounded-lg flex items-center justify-center">
                  <Users className="w-4 h-4 text-purple-600" />
                </div>
                <div>
                  <div className="text-sm font-medium text-gray-900">Team</div>
                  <div className="text-sm">Certified Ethical Hackers</div>
                </div>
              </div>
            </div>
            
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.02, y: -1 }}
              whileTap={{ scale: 0.98 }}
              className="group inline-flex items-center justify-center gap-2 w-full px-5 py-3 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold shadow-md hover:shadow-lg transition-all duration-300"
            >
              <Shield className="w-4 h-4" />
               Security Consultation
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </motion.a>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="relative my-8">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300/40"></div>
          </div>
          <div className="relative flex justify-center">
            <span className="bg-gradient-to-b from-gray-50 to-gray-100 px-4 text-xs text-gray-500 font-medium">
              TRUSTED BY SECURITY TEAMS
            </span>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Copyright */}
          <div className="text-center md:text-left">
            <p className="text-sm text-gray-600">
              © {currentYear} VAHNIX Security — Certified Ethical Hackers
            </p>
            <p className="text-xs text-gray-500 mt-1">
              All security assessments under strict NDA and responsible disclosure
            </p>
          </div>
          
          {/* Simple Compliance */}
          <div className="flex flex-wrap justify-center gap-2">
            {["Responsible Disclosure", "Client NDA", "Ethical Hacking"].map((badge) => (
              <span
                key={badge}
                className="px-2.5 py-1 bg-white text-gray-700 rounded-md text-xs font-medium border border-gray-300/50"
              >
                {badge}
              </span>
            ))}
          </div>
          
          {/* Simple Links */}
          <div className="flex gap-4 text-xs">
            <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
              Privacy
            </a>
            <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
              Terms
            </a>
            <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
              Disclosure
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Accent */}
      <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-blue-400/30 to-transparent" />
    </footer>
  );
}