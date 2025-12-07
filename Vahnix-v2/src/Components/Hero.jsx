import React from "react";
import { motion } from "framer-motion";
import { Shield, Zap, ArrowRight, CheckCircle2, Play, Star, Sparkles, AlertTriangle } from "lucide-react";
import logo5 from "../assets/logo5.jpg";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[85vh] flex items-center justify-center overflow-hidden px-6 bg-gradient-to-br from-gray-50 via-white to-blue-50/30"
      style={{ marginTop: '80px' }}
    >
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated Gradient Orbs */}
        <motion.div
          animate={{ 
            x: [0, 100, 0],
            y: [0, -50, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            repeat: Infinity, 
            duration: 20, 
            ease: "easeInOut" 
          }}
          className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-r from-blue-200/40 to-purple-200/30 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ 
            x: [0, -80, 0],
            y: [0, 60, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{ 
            repeat: Infinity, 
            duration: 25, 
            ease: "easeInOut",
            delay: 2
          }}
          className="absolute bottom-32 right-20 w-80 h-80 bg-gradient-to-r from-emerald-200/30 to-cyan-200/40 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ 
            x: [-30, 30, -30],
            y: [-20, 20, -20],
          }}
          transition={{ 
            repeat: Infinity, 
            duration: 18, 
            ease: "easeInOut",
            delay: 1
          }}
          className="absolute top-1/2 left-1/3 w-64 h-64 bg-purple-100/20 rounded-full blur-3xl"
        />
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.9)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.9)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]" />

      <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-12 items-center relative z-10">
        
        {/* LEFT SIDE – Enhanced Text Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-6"
        >
          {/* Trust Badge with Rounded Corners */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-3 px-4 py-2 bg-white/90 backdrop-blur-lg rounded-3xl border border-white/60 shadow-lg"
          >
            <div className="flex items-center gap-2">
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="w-2 h-2 bg-green-500 rounded-full"
              />
              <span className="text-sm font-semibold text-gray-700">Innovation-First Security</span>
            </div>
            <div className="w-px h-4 bg-gray-300/50" />
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-blue-600" />
              <span className="text-sm font-semibold text-gray-700">Zero-Day Focus</span>
            </div>
          </motion.div>

          {/* Main Heading */}
          <div className="space-y-4">
            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight"
            >
              <span className="bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 bg-clip-text text-transparent">
                Modern
              </span>
              <br />
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent">
                Cybersecurity
              </span>
              <br />
              <span className="bg-gradient-to-r from-gray-700 to-gray-900 bg-clip-text text-transparent">
                Reimagined
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-lg md:text-xl text-gray-600 max-w-xl leading-relaxed"
            >
              Proactive defense through{" "}
              <span className="text-blue-600 font-semibold">cutting-edge security research</span> 
              {" "}and strategic threat intelligence for forward-thinking businesses.
            </motion.p>
          </div>

          {/* Feature Points with Rounded Design */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-3"
          >
            {[
              "Advanced Vulnerability Discovery Framework",
              "Rapid 48-Hour Assessment Cycle",
              "Compliance-Ready Architecture (NIST, ISO)",
              "Research-Driven Security Recommendations"
            ].map((feature, index) => (
              <motion.div
                key={feature}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7 + index * 0.1 }}
                className="flex items-center gap-3 p-3 bg-white/80 backdrop-blur-sm rounded-2xl border border-white/50 shadow-sm hover:shadow-md transition-all"
              >
                <div className="p-1.5 bg-green-100 rounded-xl">
                  <CheckCircle2 className="w-4 h-4 text-green-600" />
                </div>
                <span className="text-gray-700 font-medium text-sm">{feature}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Buttons with Enhanced Rounded Design */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-3 pt-2"
          >
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="group relative px-6 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden flex items-center justify-center gap-2"
            >
              <span className="relative z-10 flex items-center gap-2">
                <Sparkles className="w-4 h-4" />
                Start Security Assessment
              </span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Shine Effect */}
              <div className="absolute inset-0 -left-48 -top-8 w-24 h-32 bg-white/20 transform -skew-x-12 group-hover:left-[110%] transition-all duration-700" />
            </motion.a>

            <motion.a
              href="#methodology"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="group px-6 py-4 bg-white/90 backdrop-blur-sm border border-gray-200 text-gray-900 font-bold rounded-2xl hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 hover:border-blue-200"
            >
              <Play className="w-4 h-4" />
              <span>Our Methodology</span>
            </motion.a>
          </motion.div>

          {/* Trust Metrics with Rounded Cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="grid grid-cols-3 gap-4 pt-6"
          >
            {[
              { 
                value: "Research", 
                label: "Driven Approach", 
                icon: Shield,
                description: "Threat intelligence focus"
              },
              { 
                value: "Modern", 
                label: "Methodology", 
                icon: Star,
                description: "Latest frameworks"
              },
              { 
                value: "Expert", 
                label: "Advisory", 
                icon: Zap,
                description: "Certified guidance"
              }
            ].map((metric, index) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.1 + index * 0.1 }}
                className="text-center p-4 bg-white/80 backdrop-blur-sm rounded-2xl border border-white/50 shadow-sm hover:shadow-md transition-all"
              >
                <metric.icon className="w-5 h-5 text-blue-600 mx-auto mb-2" />
                <div className="text-xl font-bold text-gray-900">{metric.value}</div>
                <div className="text-xs text-gray-600 mt-1">{metric.label}</div>
                <div className="text-[10px] text-gray-500 mt-1">{metric.description}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* RIGHT SIDE – Enhanced Visual Card with Rounded Design */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, x: 40 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
          className="relative"
        >
          {/* Floating Elements */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 3 }}
            className="absolute -top-4 -left-4 p-3 bg-white/90 backdrop-blur-lg rounded-2xl border border-white/60 shadow-lg z-20"
          >
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span className="text-xs font-semibold text-gray-700">Innovation</span>
            </div>
          </motion.div>

          {/* Warning Banner for Next Update Feature */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="absolute -top-6 left-1/2 -translate-x-1/2 z-30"
          >
            <div className="flex items-center gap-2 px-4 py-2 bg-yellow-500/10 backdrop-blur-lg rounded-full border border-yellow-500/30 shadow-lg">
              <AlertTriangle className="w-4 h-4 text-yellow-600 animate-pulse" />
              <span className="text-sm font-semibold text-yellow-800">Feature Available in Next Update</span>
            </div>
          </motion.div>

          {/* Main Card */}
          <div className="relative bg-white/95 backdrop-blur-xl rounded-3xl border border-white/60 shadow-2xl overflow-hidden">
            {/* Card Header */}
            <div className="p-8 border-b border-gray-200/30">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl shadow-lg">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">Security Insight Preview</h3>
                  <p className="text-gray-600">Experience our assessment approach</p>
                </div>
              </div>
            </div>

            {/* Card Content */}
            <div className="p-8">
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Try Our Security Scanner
                  </label>
                  
                  {/* Input with disabled state */}
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="yourdomain.com"
                      disabled
                      className="w-full px-4 py-4 rounded-2xl border border-gray-300/50 focus:ring-2 focus:ring-blue-500/30 focus:border-transparent transition-all text-sm bg-gray-50/50 backdrop-blur-sm text-gray-500 cursor-not-allowed"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-xs font-medium text-gray-500 bg-white/80 px-3 py-1 rounded-lg">
                        Coming Soon in Next Update
                      </span>
                    </div>
                  </div>
                </div>
                
                {/* Disabled Button */}
                <div className="relative">
                  <button
                    disabled
                    className="w-full py-4 bg-gradient-to-r from-gray-400 to-gray-500 text-white font-bold rounded-2xl shadow-lg transition-all text-sm cursor-not-allowed opacity-70"
                  >
                    Get Security Snapshot
                  </button>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <AlertTriangle className="w-4 h-4 text-yellow-500 absolute right-4" />
                  </div>
                </div>
              </form>

              {/* Features List */}
              <div className="mt-6 space-y-3">
                {[
                  "No-cost security baseline • Instant setup",
                  "Enterprise-grade scanning technology",
                  "Actionable security insights"
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3 text-sm text-gray-600">
                    <div className="w-2 h-2 bg-blue-500 rounded-full" />
                    {item}
                  </div>
                ))}
              </div>

              {/* Coming Soon Notice */}
              <motion.div
                animate={{ opacity: [0.7, 1, 0.7] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="mt-6 p-3 bg-gradient-to-r from-blue-50/50 to-purple-50/50 rounded-xl border border-blue-200/30"
              >
                <div className="flex items-center gap-2">
                  <Zap className="w-4 h-4 text-blue-600" />
                  <span className="text-sm font-medium text-blue-700">
                    This feature will be live in the next update
                  </span>
                </div>
                <p className="text-xs text-gray-600 mt-1 ml-6">
                  Currently in final testing phase - Stay tuned!
                </p>
              </motion.div>
            </div>

            {/* Floating Security Badge */}
            <div className="absolute -top-3 -right-3 w-8 h-8 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center shadow-lg border border-white">
              <Shield className="w-4 h-4 text-white" />
            </div>
          </div>

          {/* Background Decoration */}
          <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-r from-blue-200/20 to-purple-200/20 rounded-full blur-3xl" />
        </motion.div>
      </div>
    </section>
  );
}