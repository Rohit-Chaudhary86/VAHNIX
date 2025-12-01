// src/components/RequestModalLight.jsx
import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { X } from "lucide-react";

export default function RequestModal({ open, onClose, service, onSubmit }) {
  useEffect(() => {
    if (!open) return;

    const handleEsc = (e) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", handleEsc);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = "unset";
    };
  }, [open, onClose]);

  if (!open) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    onSubmit?.(formData);
    onClose?.();
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[9999] flex items-center justify-center px-4"
    >
      {/* Backdrop — only this closes the modal */}
      <div
        className="absolute inset-0 bg-white/70 backdrop-blur-xl transition-colors hover:bg-white/80"
        onClick={onClose}
      />

      {/* Modal Card */}
      <motion.div
        initial={{ scale: 0.95, y: 40, opacity: 0 }}
        animate={{ scale: 1, y: 0, opacity: 1 }}
        exit={{ scale: 0.95, y: 40, opacity: 0 }}
        transition={{ type: "spring", damping: 28, stiffness: 300 }}
        className="relative w-full max-w-lg"
        onClick={(e) => e.stopPropagation()}
      >
        <div
          className="
            rounded-3xl p-8 md:p-10
            bg-white/90 backdrop-blur-2xl
            border border-purple-200/70
            shadow-2xl shadow-purple-100/60
            overflow-hidden
          "
          style={{
            boxShadow: `
              0 32px 64px rgba(216, 180, 254, 0.25),
              0 16px 32px rgba(167, 243, 208, 0.18),
              inset 0 1px 0 rgba(255, 255, 255, 0.9)
            `,
          }}
        >
          {/* Floating accent orb */}
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-gradient-to-br from-purple-300 to-emerald-300 rounded-full blur-3xl opacity-25" />

          {/* Header */}
          <div className="relative flex items-start justify-between gap-6">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-purple-600 to-emerald-500 bg-clip-text text-transparent">
                {service?.title || "Request Service"}
              </h3>
              {service?.desc && (
                <p className="mt-2 text-gray-600 text-sm md:text-base">
                  {service.desc}
                </p>
              )}
            </div>
            <button
              onClick={onClose}
              className="
                p-2 rounded-full bg-white/70 backdrop-blur-md
                border border-purple-200/60 shadow-md
                hover:shadow-lg hover:border-purple-300
                transition-all duration-200 group
              "
            >
              <X className="w-5 h-5 text-gray-600 group-hover:text-purple-700" />
            </button>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="relative mt-8 space-y-5">
            <input name="service" value={service?.title || ""} hidden readOnly />

            <input
              type="text"
              name="name"
              required
              placeholder="Your Name"
              className="w-full px-6 py-4 rounded-2xl text-lg bg-purple-50/70 border border-purple-200/70 placeholder:text-gray-500 text-gray-800 focus:outline-none focus:ring-4 focus:ring-purple-300/50 transition-all duration-300"
            />

            <input
              type="email"
              name="email"
              required
              placeholder="your@email.com"
              className="w-full px-6 py-4 rounded-2xl text-lg bg-purple-50/70 border border-purple-200/70 placeholder:text-gray-500 text-gray-800 focus:outline-none focus:ring-4 focus:ring-purple-300/50 transition-all duration-300"
            />

            <textarea
              name="message"
              required
              rows={4}
              placeholder="Tell us about your project, scope, timeline, or any specific concerns..."
              className="w-full px-6 py-4 rounded-2xl text-lg resize-none bg-purple-50/70 border border-purple-200/70 placeholder:text-gray-500 text-gray-800 focus:outline-none focus:ring-4 focus:ring-purple-300/50 transition-all duration-300"
            />

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button
                type="submit"
                className="w-full py-4 rounded-2xl font-bold text-white text-lg bg-gradient-to-r from-purple-600 to-emerald-500 shadow-lg hover:shadow-2xl shadow-purple-500/40 hover:scale-[1.02] transition-all duration-300"
              >
                Send Request
              </button>
              <button
                type="button"
                onClick={onClose}
                className="w-full py-4 rounded-2xl font-medium text-gray-700 text-lg bg-white/80 border border-purple-200/60 hover:bg-purple-50/80 hover:border-purple-300 transition-all duration-300"
              >
                Cancel
              </button>
            </div>
          </form>

          <p className="mt-6 text-center text-xs text-gray-500">
            Your data is encrypted and only accessed by our OSCP-certified team.
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
}