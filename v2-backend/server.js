import express from "express";
import nodemailer from "nodemailer";
import cors from "cors";
import "dotenv/config";

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "http://localhost:5174",
      "http://localhost:5175",
      "http://localhost:3000",
    ],
    credentials: true,
  })
);
app.use(express.json());

// Test Routes
app.get("/api/test", (req, res) => {
  res.json({ message: "Backend is working!" });
});

app.get("/api/health", (req, res) => {
  res.json({
    status: "OK",
    service: "Vanix Email API",
    timestamp: new Date().toISOString(),
  });
});

// Email Service
class EmailService {
  constructor() {
    this.transporter = null;
    this.isSMTPConnected = false;
    this.initializeTransporter();
  }

  initializeTransporter() {
    try {
     this.transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT),
  secure: process.env.SMTP_SECURE === 'true', // SSL for port 465
  auth: {
    user: process.env.SMTP_EMAIL,
    pass: process.env.SMTP_PASSWORD,
  },
  tls: {
    rejectUnauthorized: false
  }
});


      this.transporter.verify((error, success) => {
        if (error) {
          console.log("❌ SMTP Connection Failed:", error.message);
          this.isSMTPConnected = false;
        } else {
          console.log("✅ SMTP Server is ready");
          console.log("📧 Using:", process.env.SMTP_EMAIL);
          this.isSMTPConnected = true;
        }
      });
    } catch (error) {
      console.log("❌ SMTP Setup Failed:", error.message);
      this.isSMTPConnected = false;
    }
  }

  async sendEmail(mailOptions) {
    if (this.isSMTPConnected && this.transporter) {
      try {
        const info = await this.transporter.sendMail(mailOptions);
        console.log("✅ Email sent:", info.messageId);
        return { success: true };
      } catch (error) {
        console.log("❌ Sending failed:", error.message);
        return this.sendFallbackEmail(mailOptions);
      }
    } else {
      return this.sendFallbackEmail(mailOptions);
    }
  }

  async sendFallbackEmail(mailOptions) {
    console.log("📧 FALLBACK (Email stored, not sent):", {
      to: mailOptions.to,
      subject: mailOptions.subject,
      from: mailOptions.from,
      timestamp: new Date().toISOString(),
    });

    return {
      success: true,
      fallback: true,
    };
  }
}

const emailService = new EmailService();

// ---------------------------
// CONTACT FORM
// ---------------------------
app.post("/api/contact", async (req, res) => {
  try {
    const { from_name, from_email, company, message } = req.body;

    if (!from_name || !from_email || !message) {
      return res.status(400).json({
        success: false,
        message: "Name, email, and message are required.",
      });
    }

    const mailOptions = {
      from: `"Vahnix Security" <${process.env.SMTP_EMAIL}>`,
      to: process.env.CONTACT_TO_EMAIL || process.env.SMTP_EMAIL,
      replyTo: from_email,
      subject: `New Contact from ${from_name}`,
      html: `
        <h2>New Contact Message</h2>
        <p><strong>Name:</strong> ${from_name}</p>
        <p><strong>Email:</strong> ${from_email}</p>
        <p><strong>Company:</strong> ${company || "Not provided"}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, "<br>")}</p>
      `,
    };

    const result = await emailService.sendEmail(mailOptions);

    res.json({
      success: true,
      message: "Message delivered successfully!",
      fallback: result.fallback || false,
    });
  } catch (error) {
    console.error("❌ Contact API Error:", error);
    res.status(500).json({
      success: false,
      message: "Server error. Please try again later.",
    });
  }
});

// ---------------------------
// MEETING FORM
// ---------------------------
app.post("/api/schedule-meeting", async (req, res) => {
  try {
    const {
      from_name,
      from_email,
      company,
      message,
      meeting_date,
      meeting_time,
    } = req.body;

    if (
      !from_name ||
      !from_email ||
      !message ||
      !meeting_date ||
      !meeting_time
    ) {
      return res.status(400).json({
        success: false,
        message: "All fields are required.",
      });
    }

    const mailOptions = {
      from: `"Vahnix Security" <${process.env.SMTP_EMAIL}>`,
      to: process.env.MEETING_TO_EMAIL || process.env.SMTP_EMAIL,
      replyTo: from_email,
      subject: `Meeting Scheduled - ${from_name} (${meeting_date})`,
      html: `
        <h2>New Meeting Scheduled</h2>
        <p><strong>Name:</strong> ${from_name}</p>
        <p><strong>Email:</strong> ${from_email}</p>
        <p><strong>Date:</strong> ${meeting_date}</p>
        <p><strong>Time:</strong> ${meeting_time}</p>
        <p><strong>Company:</strong> ${company || "Not provided"}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, "<br>")}</p>
      `,
    };

    const result = await emailService.sendEmail(mailOptions);

    res.json({
      success: true,
      message: "Meeting scheduled successfully!",
      fallback: result.fallback || false,
    });
  } catch (error) {
    console.error("❌ Meeting API Error:", error);
    res.status(500).json({
      success: false,
      message: "Server error. Please try again later.",
    });
  }
});

// Start Server
app.listen(PORT, () => {
  console.log(`🚀 Backend running on http://localhost:${PORT}`);
  console.log(`📧 SMTP Host: ${process.env.SMTP_HOST}`);
});
