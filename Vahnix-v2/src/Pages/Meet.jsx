
// src/pages/Meet.jsx
import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { 
  Calendar, 
  Clock, 
  Video, 
  Mail, 
  Shield, 
  CheckCircle, 
  Users, 
  Zap, 
  ChevronLeft, 
  ChevronRight, 
  CheckCircle2, 
  Loader2,
  MapPin,
  Phone,
  Sparkles
} from "lucide-react";
import Navbar from "../Components/Navbar.jsx";

export default function Meet() {
  const formRef = useRef();
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [status, setStatus] = useState(null);
  const [currentMonth, setCurrentMonth] = useState(new Date());

  const timeSlots = [
    "09:00 AM", "10:00 AM", "11:00 AM", 
    "02:00 PM", "03:00 PM", "04:00 PM"
  ];

  // Generate calendar dates
  const generateCalendar = () => {
    const year = currentMonth.getFullYear();
    const month = currentMonth.getMonth();
    
    const firstDay = new Date(year, month, 1);
    const startDate = new Date(firstDay);
    startDate.setDate(startDate.getDate() - firstDay.getDay());
    
    const dates = [];
    for (let i = 0; i < 42; i++) {
      const date = new Date(startDate);
      date.setDate(startDate.getDate() + i);
      dates.push(date);
    }
    return dates;
  };

  // FIXED DATE PICKER LOGIC
  const handleDateSelect = (date) => {
    const dateLocal = new Date(date.getTime() - date.getTimezoneOffset() * 60000)
      .toISOString()
      .split("T")[0];

    setSelectedDate(dateLocal);
  };

  const handleMonthChange = (direction) => {
    setCurrentMonth(prev => {
      const newMonth = new Date(prev);
      newMonth.setMonth(prev.getMonth() + direction);
      return newMonth;
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validate required fields
    if (!selectedDate || !selectedTime) {
      setStatus("error");
      return;
    }

    setStatus("sending");

    const formData = new FormData(formRef.current);
    const data = {
      from_name: formData.get('from_name'),
      from_email: formData.get('from_email'),
      company: formData.get('company'),
      message: formData.get('message'),
      meeting_date: selectedDate,
      meeting_time: selectedTime
    };

    try {
      const response = await fetch('http://localhost:3001/api/schedule-meeting', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      // Check if response is ok
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();

      if (result.success) {
        setStatus("sent");
        
        setTimeout(() => {
          formRef.current.reset();
          setSelectedDate("");
          setSelectedTime("");
          setStatus(null);
        }, 3000);
      } else {
        throw new Error(result.message);
      }
    } catch (error) {
      console.error("Email Error:", error);
      setStatus("error");
      
      // Auto reset error after 5 seconds
      setTimeout(() => {
        setStatus(null);
      }, 5000);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, duration: 0.6 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  const calendarDates = generateCalendar();
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  return (
    <>
      <Navbar />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/20 pt-20">
        {/* Background Elements */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-200/20 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-200/20 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 py-12 relative">
          <motion.div variants={containerVariants} initial="hidden" animate="visible">
            
            {/* Header */}
            <motion.div variants={itemVariants} className="text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-blue-100/50 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Sparkles className="w-4 h-4" />
                Schedule Your Security Consultation
              </div>

              <motion.h1 
                variants={itemVariants}
                className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-slate-800 via-blue-600 to-purple-600 bg-clip-text text-transparent mb-4"
              >
                Book a Meet
              </motion.h1>

              <motion.p 
                variants={itemVariants}
                className="text-lg text-slate-600 max-w-2xl mx-auto"
              >
                Let's secure your digital assets together. Choose your preferred time and share your requirements.
              </motion.p>
            </motion.div>

            {/* Content Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              
              {/* Main Form */}
              <motion.div variants={itemVariants} className="lg:col-span-2 space-y-8">
                <div className="bg-white/90 backdrop-blur-lg rounded-3xl shadow-2xl border border-slate-200/60 p-8">

                  <form ref={formRef} onSubmit={handleSubmit} className="space-y-8">
                    {/* REMOVED hidden inputs - we're using state instead */}

                    {/* Date & Time Selection */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

                      {/* Calendar */}
                      <div className="space-y-4">
                        <label className="flex items-center gap-2 text-lg font-semibold text-slate-800">
                          <Calendar className="w-5 h-5 text-blue-600" />
                          Select Date
                        </label>
                        
                        <div className="bg-slate-50/50 rounded-2xl p-4 border">
                          
                          {/* Month Nav */}
                          <div className="flex items-center justify-between mb-4">
                            <button
                              type="button"
                              onClick={() => handleMonthChange(-1)}
                              className="p-2 hover:bg-white rounded-xl transition-all text-slate-600 hover:text-slate-800 hover:shadow-sm"
                            >
                              <ChevronLeft className="w-4 h-4" />
                            </button>

                            <h3 className="font-bold text-slate-800">
                              {monthNames[currentMonth.getMonth()]} {currentMonth.getFullYear()}
                            </h3>

                            <button
                              type="button"
                              onClick={() => handleMonthChange(1)}
                              className="p-2 hover:bg-white rounded-xl transition-all text-slate-600 hover:text-slate-800 hover:shadow-sm"
                            >
                              <ChevronRight className="w-4 h-4" />
                            </button>
                          </div>

                          {/* Week Row - FIXED with unique keys */}
                          <div className="grid grid-cols-7 gap-1 mb-2">
                            {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day, index) => (
                              <div key={`weekday-${index}`} className="text-center text-xs font-semibold text-slate-500 py-2">
                                {day.substring(0, 1)}
                              </div>
                            ))}
                          </div>

                          {/* Calendar Dates */}
                          <div className="grid grid-cols-7 gap-1">
                            {calendarDates.map((date, index) => {
                              const isCurrentMonth = date.getMonth() === currentMonth.getMonth();
                              const isPast = date < today;

                              const dateLocal = new Date(date.getTime() - date.getTimezoneOffset() * 60000)
                                .toISOString()
                                .split("T")[0];

                              const isSelected = selectedDate === dateLocal;
                              const isToday = dateLocal === new Date().toISOString().split("T")[0];

                              return (
                                <button
                                  key={`date-${index}`}
                                  type="button"
                                  onClick={() => handleDateSelect(date)}
                                  disabled={!isCurrentMonth || isPast || status === "sending"}
                                  className={`
                                    h-8 text-sm font-medium transition-all rounded-lg 
                                    ${!isCurrentMonth || isPast ? "text-slate-300 cursor-not-allowed" : ""}
                                    ${isSelected ? "bg-gradient-to-br from-blue-600 to-purple-600 text-white shadow-md scale-105" : ""}
                                    ${isToday && !isSelected ? "bg-blue-50 text-blue-600 border border-blue-200" : ""}
                                    ${!isSelected && !isPast && isCurrentMonth ? "text-slate-700 hover:bg-white hover:shadow-sm hover:scale-105" : ""}
                                  `}
                                >
                                  {date.getDate()}
                                </button>
                              );
                            })}
                          </div>
                        </div>

                        {/* Selected Date */}
                        {selectedDate && (
                          <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-sm text-emerald-600 font-medium flex items-center gap-2"
                          >
                            <Calendar className="w-4 h-4" />
                            Selected: {new Date(selectedDate).toLocaleDateString("en-US", {
                              month: "short",
                              day: "numeric",
                              year: "numeric"
                            })}
                          </motion.div>
                        )}
                      </div>

                      {/* Time Selection */}
                      <div className="space-y-4">
                        <label className="flex items-center gap-2 text-lg font-semibold text-slate-800">
                          <Clock className="w-5 h-5 text-purple-600" />
                          Select Time
                        </label>

                        <div className="grid grid-cols-2 gap-3">
                          {timeSlots.map(time => (
                            <button
                              key={time}
                              type="button"
                              onClick={() => setSelectedTime(time)}
                              disabled={status === "sending"}
                              className={`
                                py-3 px-4 rounded-xl border-2 font-semibold transition-all 
                                ${selectedTime === time 
                                  ? "border-purple-500 bg-purple-50 text-purple-700 shadow-lg scale-105"
                                  : "border-slate-200 text-slate-700 hover:border-purple-300 hover:bg-purple-25 hover:scale-105"
                                }
                              `}
                            >
                              {time}
                            </button>
                          ))}
                        </div>

                        {selectedTime && (
                          <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-sm text-emerald-600 font-medium flex items-center gap-2"
                          >
                            <Clock className="w-4 h-4" />
                            Selected: {selectedTime}
                          </motion.div>
                        )}
                      </div>
                    </div>

                    {/* Contact Information */}
                    <div className="space-y-6">

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-semibold text-slate-700 mb-2">
                            Your Name *
                          </label>
                          <input
                            type="text"
                            name="from_name"
                            placeholder="John Doe"
                            disabled={status === "sending"}
                            className="w-full px-4 py-3 rounded-xl bg-slate-50/50 border placeholder-slate-500 focus:ring-2 focus:ring-blue-500/50"
                            required
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-semibold text-slate-700 mb-2">
                            Email Address *
                          </label>
                          <input
                            type="email"
                            name="from_email"
                            placeholder="john@company.com"
                            disabled={status === "sending"}
                            className="w-full px-4 py-3 rounded-xl bg-slate-50/50 border placeholder-slate-500 focus:ring-2 focus:ring-blue-500/50"
                            required
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-2">
                          Company (Optional)
                        </label>
                        <input
                          type="text"
                          name="company"
                          placeholder="Your company name"
                          disabled={status === "sending"}
                          className="w-full px-4 py-3 rounded-xl bg-slate-50/50 border placeholder-slate-500 focus:ring-2 focus:ring-blue-500/50"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-2">
                          What would you like to discuss? *
                        </label>
                        <textarea
                          name="message"
                          rows={4}
                          placeholder="Tell us about your security concerns, project scope, or specific requirements..."
                          disabled={status === "sending"}
                          className="w-full px-4 py-3 rounded-xl bg-slate-50/50 border placeholder-slate-500 focus:ring-2 focus:ring-blue-500/50 resize-none"
                          required
                        />
                      </div>
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={status === "sending" || status === "sent" || !selectedDate || !selectedTime}
                      className="w-full py-4 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold text-lg shadow-2xl hover:shadow-3xl transform hover:-translate-y-1 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {status === "sending" ? (
                        <div className="flex items-center justify-center gap-2">
                          <Loader2 className="w-5 h-5 animate-spin" />
                          Scheduling Meeting...
                        </div>
                      ) : status === "sent" ? (
                        <div className="flex items-center justify-center gap-2">
                          <CheckCircle2 className="w-5 h-5" />
                          Meeting Scheduled!
                        </div>
                      ) : (
                        "Schedule Security Consultation"
                      )}
                    </button>

                    {/* Status Messages */}
                    {status === "error" && (
                      <motion.p 
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center font-medium text-red-600 text-sm"
                      >
                        Failed to schedule meeting. Please check if backend server is running and try again.
                      </motion.p>
                    )}

                    {status === "sent" && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="text-center p-4 bg-emerald-50 rounded-xl border border-emerald-200"
                      >
                        <p className="text-emerald-700 font-medium">
                          ✅ Meeting scheduled! Confirmation sent to your email.
                        </p>
                      </motion.div>
                    )}
                  </form>

                </div>
              </motion.div>

              {/* Side Panel */}
              <motion.div variants={itemVariants} className="space-y-6">
                
                {/* Meeting Summary */}
                {(selectedDate || selectedTime) && (
                  <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-3xl p-6 text-white shadow-2xl">
                    <h3 className="text-xl font-bold mb-4">Meeting Summary</h3>
                    <div className="space-y-3">
                      {selectedDate && (
                        <div className="flex items-center gap-3">
                          <Calendar className="w-5 h-5" />
                          <div>
                            <p className="font-semibold">
                              {new Date(selectedDate).toLocaleDateString("en-US", {
                                weekday: "long",
                                month: "long",
                                day: "numeric"
                              })}
                            </p>
                          </div>
                        </div>
                      )}

                      {selectedTime && (
                        <div className="flex items-center gap-3">
                          <Clock className="w-5 h-5" />
                          <p className="font-semibold">{selectedTime}</p>
                        </div>
                      )}
                    </div>
                  </div>
                )}

                {/* Meeting Details */}
                <div className="bg-white/90 backdrop-blur-lg rounded-3xl shadow-lg border p-6">
                  <h3 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2">
                    <Video className="w-5 h-5 text-blue-600" />
                    Session Details
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Clock className="w-4 h-4 text-purple-600" />
                      <div>
                        <p className="font-semibold">30-45 Minutes</p>
                        <p className="text-sm text-slate-600">Comprehensive consultation</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <Users className="w-4 h-4 text-blue-600" />
                      <div>
                        <p className="font-semibold">1:1 Expert Session</p>
                        <p className="text-sm text-slate-600">With security specialist</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <Zap className="w-4 h-4 text-amber-600" />
                      <div>
                        <p className="font-semibold">Video Conference</p>
                        <p className="text-sm text-slate-600">Google Meet / Teams</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Security Assurance */}
                <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl p-6 text-white">
                  <div className="flex items-center gap-3 mb-3">
                    <Shield className="w-6 h-6 text-emerald-400" />
                    <h3 className="font-bold text-lg">Security First</h3>
                  </div>
                  
                  <div className="space-y-2 text-sm text-slate-300">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-emerald-400" />
                      <span>End-to-end encryption</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-emerald-400" />
                      <span>Strict confidentiality</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-emerald-400" />
                      <span>Secure data handling</span>
                    </div>
                  </div>
                </div>

                {/* Contact Info */}
                <div className="bg-white/90 backdrop-blur-lg rounded-3xl shadow-lg border p-6">
                  <h3 className="text-xl font-bold text-slate-800 mb-4">Need Help?</h3>
                  
                  <div className="space-y-3">
                    <a href="mailto:contact@vanix.security" className="flex items-center gap-3 text-slate-700 hover:text-blue-600 transition-colors">
                      <Mail className="w-4 h-4" />
                      <span className="text-sm">contact@vanix.security</span>
                    </a>

                    <a href="tel:+918630827951" className="flex items-center gap-3 text-slate-700 hover:text-blue-600 transition-colors">
                      <Phone className="w-4 h-4" />
                      <span className="text-sm">+91 86308 27951</span>
                    </a>

                    <div className="flex items-center gap-3 text-slate-600">
                      <MapPin className="w-4 h-4" />
                      <span className="text-sm">Greater Noida, India</span>
                    </div>
                  </div>
                </div>

              </motion.div>
            </div>

          </motion.div>
        </div>
      </div>
    </>
  );
}
