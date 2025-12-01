// src/pages/ContactLight.jsx
import React from "react";
import NavbarLight from "../Components/Navbar";
import FooterLight from "../Components/Footer";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, ShieldCheck, ArrowRight, CheckCircle2 } from "lucide-react";

export default function Contact() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-purple-50/40 to-emerald-50/20 text-gray-800 overflow-hidden">
      <NavbarLight />

      {/* Floating ambient orbs — same family as every other page */}
      <div aria-hidden="true" className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-purple-300 rounded-full blur-3xl opacity-20 animate-pulse" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-emerald-300 rounded-full blur-3xl opacity-15 animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-purple-200 to-emerald-200 rounded-full blur-3xl opacity-10" />
      </div>

      <section className="relative pt-32 pb-24 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Hero Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="text-center"
          >
            <h1 className="text-6xl md:text-7xl font-extrabold bg-gradient-to-r from-purple-600 via-purple-500 to-emerald-500 bg-clip-text text-transparent leading-tight">
              Let's Secure Your Future
            </h1>
            <p className="mt-8 text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Ready for an OSCP-certified security audit? Have a question? 
              <span className="font-bold text-purple-700"> We're available 24/7</span> — expect a reply within hours.
            </p>
          </motion.div>

          <div className="mt-24 grid lg:grid-cols-2 gap-16 items-start">
            {/* Left: Contact Details (Glass Cards) */}
            <div className="space-y-10">
              {[
                {
                  icon: Mail,
                  title: "Email Us",
                  detail: "Support@vahnix.com",
                  href: "mailto:contact@vanix.security",
                  color: "from-purple-500 to-purple-600",
                },
                {
                  icon: Phone,
                  title: "Call Directly",
                  detail: "+91 86308 27951",
                  href: "tel:+918630827951",
                  color: "from-emerald-500 to-emerald-600",
                },
                {
                  icon: MapPin,
                  title: "Office Location",
                  detail: "Greater Noida, Uttar Pradesh, India",
                  href: "https://maps.google.com/?q=Greater+Noida,+India",
                  color: "from-purple-600 to-indigo-600",
                },
              ].map((item, i) => (
                <motion.a
                  key={i}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  initial={{ opacity: 0, x: -40 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.15 + 0.3 }}
                  className="block group"
                >
                  <div
                    className="
                      relative p-8 rounded-3xl overflow-hidden
                      bg-white/85 backdrop-blur-xl border border-purple-200/60
                      shadow-2xl hover:shadow-3xl transition-all duration-500
                      hover:-translate-y-2
                    "
                    style={{
                      boxShadow: `
                        0 25px 50px rgba(216, 180, 254, 0.22),
                        0 10px 30px rgba(167, 243, 208, 0.15),
                        inset 0 1px 0 rgba(255, 255, 255, 0.9)
                      `,
                    }}
                  >
                    <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                    <div className="relative flex items-center gap-6">
                      <div className={`p-4 rounded-2xl bg-gradient-to-br ${item.color} shadow-lg`}>
                        <item.icon className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-800">{item.title}</h3>
                        <p className="mt-2 text-lg font-medium text-purple-700 group-hover:text-purple-800 transition-colors">
                          {item.detail}
                        </p>
                      </div>
                      <ArrowRight className="ml-auto w-6 h-6 text-purple-600 opacity-0 group-hover:opacity-100 translate-x-0 group-hover:translate-x-2 transition-all duration-300" />
                    </div>
                  </div>
                </motion.a>
              ))}

              {/* Trust Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="mt-12 p-8 rounded-3xl bg-gradient-to-br from-purple-50 to-emerald-50 border border-purple-200/50 text-center"
              >
                <ShieldCheck className="w-16 h-16 mx-auto text-purple-600 mb-4" />
                <p className="text-lg font-semibold text-purple-700">
                  All communications are end-to-end encrypted.
                </p>
                <p className="text-sm text-gray-600 mt-2">
                  Your project details are only seen by our OSCP-certified experts.
                </p>
              </motion.div>
            </div>

            {/* Right: Quick Message Form (Same style as RequestModalLight) */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9, delay: 0.4 }}
              className="relative"
            >
              <div
                className="
                  p-10 rounded-3xl
                  bg-white/90 backdrop-blur-2xl border border-purple-200/70
                  shadow-2xl shadow-purple-100/60 overflow-hidden
                "
                style={{
                  boxShadow: `
                    0 32px 64px rgba(216, 180, 254, 0.25),
                    0 16px 32px rgba(167, 243, 208, 0.18),
                    inset 0 1px 0 rgba(255, 255, 255, 0.9)
                  `,
                }}
              >
                <div className="absolute -top-32 -right-32 w-80 h-80 bg-gradient-to-br from-purple-300 to-emerald-300 rounded-full blur-3xl opacity-20" />

                <h2 className="text-3xl font-bold text-gray-800 mb-3">Send Us a Message</h2>
                <p className="text-gray-600 mb-8">We'll get back to you faster than a zero-day exploit.</p>

                <form className="space-y-6">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-6 py-4 rounded-2xl bg-purple-50/70 border border-purple-200/70 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-4 focus:ring-purple-300/50 transition-all"
                  />
                  <input
                    type="email"
                    placeholder="your@email.com"
                    className="w-full px-6 py-4 rounded-2xl bg-purple-50/70 border border-purple-200/70 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-4 focus:ring-purple-300/50 transition-all"
                  />
                  <textarea
                    rows={5}
                    placeholder="How can we help secure your infrastructure today?"
                    className="w-full px-6 py-4 rounded-2xl bg-purple-50/70 border border-purple-200/70 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-4 focus:ring-purple-300/50 transition-all resize-none"
                  />
                  <button
                    type="submit"
                    className="
                      w-full py-5 rounded-2xl font-bold text-white text-lg
                      bg-gradient-to-r from-purple-600 to-emerald-500
                      shadow-lg hover:shadow-2xl hover:shadow-purple-500/50
                      transform hover:scale-[1.02] transition-all duration-300
                    "
                  >
                    Send Message → We're Online
                  </button>
                </form>

                <div className="mt-8 flex items-center justify-center gap-2 text-sm text-gray-600">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                  <span>Average response time: <strong className="text-purple-700">under 2 hours</strong></span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <FooterLight />
    </div>
  );
}