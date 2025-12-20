import express from "express";
import nodemailer from "nodemailer";
import cors from "cors";
import helmet from "helmet";
import rateLimit from "express-rate-limit";

// Load dotenv ONLY in local development
if (process.env.NODE_ENV !== "production") {
  await import("dotenv/config");
}

const app = express();
const PORT = process.env.PORT || 3001;

/* =========================
   SECURITY & MIDDLEWARE
========================= */

// Security headers
app.use(helmet());

// JSON parsing
app.use(express.json());

// CORS (locked to frontend)
app.use(
  cors({
    origin: [
      "https://vahnix.com",
      "https://www.vahnix.com",
      "http://localhost:5173"
    ],
    credentials: true
  })
);

// Rate limiting (email protection)
const emailLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 20,
  standardHeaders: true,
  legacyHeaders: false
});

/* =========================
   HEALTH & TEST ROUTES
========================= */

app.get("/api/health", (req, res) => {
  res.json({
    status: "OK",
    service: "Vahnix Backend API",
    environment: process.env.NODE_ENV || "development",
    timestamp: new Date().toISOString()
  });
});

app.get("/api/test", (req, res) => {
  res.json({
    message: "Backend is working!",
    origin: req.headers.origin
  });
});

/* =========================
   EMAIL SERVICE
========================= */

class EmailService {
  constructor() {
    this.transporter = null;
    this.isSMTPConnected = false;
    this.initialize();
  }

  initialize() {
    try {
      this.transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: Number(process.env.SMTP_PORT),
        secure: process.env.SMTP_SECURE === "true",
        auth: {
          user: process.env.SMTP_EMAIL,
          pass: process.env.SMTP_PASSWORD
        }
      });

      this.transporter.verify((err) => {
        if (err) {
          console.error(" SMTP verify failed:", err.message);
          this.isSMTPConnected = false;
        } else {
          console.log(" SMTP ready:", process.env.SMTP_EMAIL);
          this.isSMTPConnected = true;
        }
      });
    } catch (err) {
      console.error(" SMTP init error:", err.message);
      this.isSMTPConnected = false;
    }
  }

  async send(mailOptions) {
    try {
      if (!this.isSMTPConnected) {
        return this.fallback(mailOptions);
      }

      const info = await this.transporter.sendMail(mailOptions);
      console.log(" Email sent:", info.messageId);
      return { success: true };
    } catch (err) {
      console.error(" Email send failed:", err.message);
      return this.fallback(mailOptions);
    }
  }

  fallback(mailOptions) {
    console.log(" FALLBACK EMAIL LOGGED:", {
      to: mailOptions.to,
      subject: mailOptions.subject,
      timestamp: new Date().toISOString()
    });

    return { success: true, fallback: true };
  }
}

const emailService = new EmailService();

/* =========================
   CONTACT FORM
========================= */

app.post("/api/contact", emailLimiter, async (req, res) => {
  try {
    const { from_name, from_email, company, message } = req.body;

    if (!from_name || !from_email || !message) {
      return res.status(400).json({
        success: false,
        message: "Name, email and message are required."
      });
    }

    const mailOptions = {
      from: `"Vahnix Security" <${process.env.SMTP_EMAIL}>`,
      to: process.env.CONTACT_TO_EMAIL || process.env.SMTP_EMAIL,
      replyTo: from_email,
      subject: `New Contact — ${from_name}`,
      html: `
        <h2>New Contact Message</h2>
        <p><b>Name:</b> ${from_name}</p>
        <p><b>Email:</b> ${from_email}</p>
        <p><b>Company:</b> ${company || "Not provided"}</p>
        <p><b>Message:</b></p>
        <p>${message.replace(/\n/g, "<br>")}</p>
      `
    };

    const result = await emailService.send(mailOptions);

    res.json({
      success: true,
      message: "Message sent successfully.",
      fallback: result.fallback || false
    });
  } catch (err) {
    console.error(" Contact API error:", err);
    res.status(500).json({
      success: false,
      message: "Server error. Please try later."
    });
  }
});

/* =========================
   MEETING FORM
========================= */

app.post("/api/schedule-meeting", emailLimiter, async (req, res) => {
  try {
    const {
      from_name,
      from_email,
      company,
      message,
      meeting_date,
      meeting_time
    } = req.body;

    if (!from_name || !from_email || !message || !meeting_date || !meeting_time) {
      return res.status(400).json({
        success: false,
        message: "All fields are required."
      });
    }

    const mailOptions = {
      from: `"Vahnix Security" <${process.env.SMTP_EMAIL}>`,
      to: process.env.MEETING_TO_EMAIL || process.env.SMTP_EMAIL,
      replyTo: from_email,
      subject: `Meeting Scheduled — ${from_name}`,
      html: `
        <h2>Meeting Scheduled</h2>
        <p><b>Name:</b> ${from_name}</p>
        <p><b>Email:</b> ${from_email}</p>
        <p><b>Date:</b> ${meeting_date}</p>
        <p><b>Time:</b> ${meeting_time}</p>
        <p><b>Company:</b> ${company || "Not provided"}</p>
        <p><b>Message:</b></p>
        <p>${message.replace(/\n/g, "<br>")}</p>
      `
    };

    const result = await emailService.send(mailOptions);

    res.json({
      success: true,
      message: "Meeting scheduled successfully.",
      fallback: result.fallback || false
    });
  } catch (err) {
    console.error(" Meeting API error:", err);
    res.status(500).json({
      success: false,
      message: "Server error. Please try later."
    });
  }
});

/* =========================
   GLOBAL ERROR HANDLER
========================= */

app.use((err, req, res, next) => {
  console.error(" Unhandled error:", err);
  res.status(500).json({
    success: false,
    message: "Internal server error"
  });
});

/* =========================
   START SERVER
========================= */

app.listen(PORT, () => {
  console.log(` Backend running on port ${PORT}`);
  console.log(` Allowed origins: vahnix.com`);
});
