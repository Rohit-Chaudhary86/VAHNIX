import React from "react";
import { motion } from "framer-motion";
import { Award, PhoneCall } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="
        relative mt-16
        rounded-t-3xl
        bg-white/50 backdrop-blur-xl
        border-t border-white/40
        shadow-[0_-8px_25px_rgba(0,0,0,0.04)]
        overflow-hidden
      "
    >
      {/* Top Glow */}
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-purple-400/70 via-emerald-400/70 to-purple-400/70" />

      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="grid md:grid-cols-3 gap-6">
          
          {/* CARD 1 — Unchanged */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="
              p-5 rounded-2xl bg-white/60 backdrop-blur-xl
              border border-purple-100/40 shadow-md shadow-purple-100/30
            "
          >
            <h3 className="text-xl font-extrabold bg-gradient-to-r from-purple-600 to-emerald-500 bg-clip-text text-transparent">
              VAHNIX Security
            </h3>
            <p className="text-gray-600 text-sm mt-3">
              OSCP-certified penetration testing guided by true attacker mindset.
            </p>
          </motion.div>

          {/* CARD 2 — Unchanged */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="
              p-5 rounded-2xl bg-white/60 backdrop-blur-xl
              border border-purple-100/40 shadow-md shadow-purple-100/30
            "
          >
            <h4 className="text-md font-semibold text-gray-900 flex items-center gap-2">
              <Award className="w-4 h-4 text-purple-600" /> Certifications
            </h4>

            <ul className="text-gray-600 text-sm space-y-1 mt-3">
              <li>• OSCP Certified</li>
              <li>• ISO 27001 Practices</li>
              <li>• OWASP Methodology</li>
            </ul>
          </motion.div>

          {/* CARD 3 — Unchanged */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="
              p-5 rounded-2xl bg-white/60 backdrop-blur-xl
              border border-purple-100/40 shadow-md shadow-purple-100/30
            "
          >
            <h4 className="text-md font-semibold text-gray-900 flex items-center gap-2">
              <PhoneCall className="w-4 h-4 text-emerald-600" /> Consultation
            </h4>

            <p className="text-gray-600 text-sm mt-3">
              Get a free risk snapshot from our senior testers.
            </p>

            <a
              href="#contact"
              className="
                inline-block mt-4 px-6 py-3 rounded-xl
                bg-gradient-to-r from-purple-600 to-emerald-500
                text-white text-sm font-bold
                shadow-lg shadow-purple-400/40
                hover:shadow-xl hover:scale-105 transition-all
              "
            >
              Request Audit
            </a>
          </motion.div>

        </div>

        {/* Bottom Signature */}
        <p className="text-center mt-8 text-[10px] text-gray-500 tracking-wide">
          © {currentYear} VAHNIX Security — Elite Penetration Testing
        </p>
      </div>

      {/* soft glowing blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-20 left-16 w-64 h-64 bg-purple-300 rounded-full blur-3xl opacity-10" />
        <div className="absolute -bottom-10 right-14 w-64 h-64 bg-emerald-300 rounded-full blur-3xl opacity-10" />
      </div>
    </footer>
  );
}
