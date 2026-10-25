"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  HiPhone,
  HiEnvelope,
  HiSparkles,
  HiChatBubbleLeftRight,
  HiCheckCircle,
} from "react-icons/hi2";
import { FaWhatsapp, FaInstagram } from "react-icons/fa";
import { notifications } from "@mantine/notifications";
import { PORTFOLIO_DATA, INSTAGRAM_PROFILE_URL, WHATSAPP_PHONE } from "@/data/portfolio";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    service: "Social Media Management",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name) {
      notifications.show({
        title: "Please enter your name",
        message: "Your name is required to start a consultation.",
        color: "red",
      });
      return;
    }

    // Direct user to WhatsApp with their typed message prefilled
    const customMsg = `Hi Payal, my name is ${formData.name}. I'm interested in ${formData.service}.${
      formData.message ? ` Details: ${formData.message}` : ""
    }`;
    const targetUrl = `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(customMsg)}`;

    notifications.show({
      title: "Opening WhatsApp",
      message: "Connecting you directly with Payal Arora...",
      color: "green",
    });

    setSubmitted(true);
    setTimeout(() => {
      window.open(targetUrl, "_blank", "noopener,noreferrer");
    }, 400);
  };

  return (
    <section
      id="contact"
      className="section-wrapper"
      style={{
        backgroundColor: "rgba(234, 226, 245, 0.35)",
        position: "relative",
        borderTop: "1px solid rgba(184, 164, 216, 0.28)",
      }}
    >
      {/* 3D Ambient Orbs */}
      <div
        className="ambient-glow-orb orb-lavender"
        style={{
          width: "min(550px, 85vw)",
          height: "min(550px, 85vw)",
          top: "10%",
          left: "-10%",
          opacity: 0.5,
        }}
      />
      <div
        className="ambient-glow-orb orb-blush"
        style={{
          width: "min(500px, 80vw)",
          height: "min(500px, 80vw)",
          bottom: "5%",
          right: "-10%",
          opacity: 0.45,
        }}
      />

      <div className="site-container" style={{ position: "relative", zIndex: 10 }}>
        {/* Section Header */}
        <div style={{ textAlign: "center", marginBottom: "clamp(2.5rem, 5vw, 4rem)" }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              padding: "0.4rem 1.15rem",
              borderRadius: "9999px",
              backgroundColor: "rgba(255, 255, 255, 0.9)",
              border: "1px solid rgba(184, 164, 216, 0.45)",
              marginBottom: "0.85rem",
              boxShadow: "0 4px 14px rgba(184, 164, 216, 0.18)",
            }}
          >
            <HiSparkles style={{ color: "#70559E", fontSize: "0.95rem" }} />
            <span
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: "0.82rem",
                fontWeight: 750,
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                color: "#1C1921",
              }}
            >
              Start A Conversation
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="section-title"
          >
            Ready to Spark Your <span className="text-gradient-luxury">Digital Growth?</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="section-subtitle"
            style={{ margin: "0.85rem auto 0 auto" }}
          >
            {PORTFOLIO_DATA.contact.subheading}
          </motion.p>
        </div>

        {/* 2-Column Contact Cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 360px), 1fr))",
            gap: "clamp(1.5rem, 3.5vw, 3rem)",
            alignItems: "stretch",
          }}
        >
          {/* Left Card: Direct Contact Channels & Quick CTAs */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-panel-luxury"
            style={{
              padding: "clamp(1.5rem, 3.5vw, 2.75rem)",
              borderRadius: "26px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              gap: "2rem",
            }}
          >
            <div>
              <span
                style={{
                  fontFamily: "var(--font-heading)",
                  fontSize: "0.8rem",
                  fontWeight: 750,
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                  color: "#9A81C2",
                }}
              >
                Direct Communication
              </span>
              <h3
                style={{
                  fontFamily: "var(--font-heading)",
                  fontSize: "clamp(1.35rem, 2vw, 1.7rem)",
                  fontWeight: 800,
                  color: "#1C1921",
                  marginTop: "0.35rem",
                  marginBottom: "0.85rem",
                }}
              >
                Let’s talk about your next campaign
              </h3>
              <p style={{ color: "#484352", fontSize: "0.98rem", lineHeight: 1.6 }}>
                Reach out directly via phone, WhatsApp, or email. I typically respond within a few hours to discuss strategy and project scope.
              </p>

              {/* Direct Info List */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "1.15rem",
                  marginTop: "1.75rem",
                }}
              >
                {/* Phone */}
                <div style={{ display: "flex", alignItems: "center", gap: "0.85rem" }}>
                  <div
                    style={{
                      width: "46px",
                      height: "46px",
                      borderRadius: "14px",
                      backgroundColor: "#EAE2F5",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#563E75",
                      border: "1px solid rgba(184, 164, 216, 0.4)",
                      flexShrink: 0,
                    }}
                  >
                    <HiPhone size={20} />
                  </div>
                  <div>
                    <span style={{ fontSize: "0.75rem", color: "#6B6577", textTransform: "uppercase", letterSpacing: "0.06em", display: "block" }}>
                      Phone &amp; Call
                    </span>
                    <a
                      href={PORTFOLIO_DATA.contact.phoneTel}
                      style={{
                        fontFamily: "var(--font-heading)",
                        fontSize: "1.05rem",
                        fontWeight: 750,
                        color: "#1C1921",
                        textDecoration: "none",
                      }}
                    >
                      {PORTFOLIO_DATA.contact.phoneDisplay}
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div style={{ display: "flex", alignItems: "center", gap: "0.85rem" }}>
                  <div
                    style={{
                      width: "46px",
                      height: "46px",
                      borderRadius: "14px",
                      backgroundColor: "#FAF0F1",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#96424e",
                      border: "1px solid rgba(232, 199, 203, 0.6)",
                      flexShrink: 0,
                    }}
                  >
                    <HiEnvelope size={20} />
                  </div>
                  <div>
                    <span style={{ fontSize: "0.75rem", color: "#6B6577", textTransform: "uppercase", letterSpacing: "0.06em", display: "block" }}>
                      Email Address
                    </span>
                    <a
                      href={PORTFOLIO_DATA.contact.emailMailto}
                      style={{
                        fontFamily: "var(--font-heading)",
                        fontSize: "1.05rem",
                        fontWeight: 750,
                        color: "#1C1921",
                        textDecoration: "none",
                      }}
                    >
                      {PORTFOLIO_DATA.contact.email}
                    </a>
                  </div>
                </div>

                {/* Social & Chat Icons Row */}
                <div style={{ display: "flex", alignItems: "center", gap: "0.85rem", marginTop: "0.5rem" }}>
                  {/* WhatsApp Clickable Icon */}
                  <a
                    href={PORTFOLIO_DATA.contact.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Open WhatsApp chat with Payal Arora"
                    style={{
                      width: "46px",
                      height: "46px",
                      borderRadius: "14px",
                      backgroundColor: "rgba(37, 211, 102, 0.12)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#25D366",
                      border: "1px solid rgba(37, 211, 102, 0.4)",
                      transition: "transform 0.2s ease",
                      textDecoration: "none",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = "scale(1.08)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = "scale(1)";
                    }}
                  >
                    <FaWhatsapp size={22} />
                  </a>

                  {/* Instagram Clickable Icon */}
                  <a
                    href={INSTAGRAM_PROFILE_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Visit Payal Arora's Instagram profile"
                    style={{
                      width: "46px",
                      height: "46px",
                      borderRadius: "14px",
                      backgroundColor: "rgba(225, 48, 108, 0.1)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#E1306C",
                      border: "1px solid rgba(225, 48, 108, 0.35)",
                      transition: "transform 0.2s ease",
                      textDecoration: "none",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = "scale(1.08)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = "scale(1)";
                    }}
                  >
                    <FaInstagram size={22} />
                  </a>

                  <span style={{ fontSize: "0.82rem", color: "#6B6577" }}>
                    WhatsApp &amp; Instagram
                  </span>
                </div>
              </div>
            </div>

            {/* Quick Action Buttons */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 110px), 1fr))",
                gap: "0.75rem",
              }}
            >
              <a
                href={PORTFOLIO_DATA.contact.phoneTel}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "0.45rem",
                  padding: "0.85rem 1rem",
                  borderRadius: "9999px",
                  backgroundColor: "#1C1921",
                  color: "#FAF8F5",
                  fontFamily: "var(--font-heading)",
                  fontSize: "0.9rem",
                  fontWeight: 650,
                  textDecoration: "none",
                  boxShadow: "0 6px 16px rgba(28, 25, 33, 0.18)",
                  textAlign: "center",
                }}
              >
                <HiPhone size={15} />
                <span>Call Now</span>
              </a>

              <a
                href={PORTFOLIO_DATA.contact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "0.45rem",
                  padding: "0.85rem 1rem",
                  borderRadius: "9999px",
                  backgroundColor: "#25D366",
                  color: "#FFFFFF",
                  fontFamily: "var(--font-heading)",
                  fontSize: "0.9rem",
                  fontWeight: 650,
                  textDecoration: "none",
                  boxShadow: "0 6px 16px rgba(37, 211, 102, 0.25)",
                  textAlign: "center",
                }}
              >
                <FaWhatsapp size={17} />
                <span>WhatsApp</span>
              </a>

              <a
                href={PORTFOLIO_DATA.contact.emailMailto}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "0.45rem",
                  padding: "0.85rem 1rem",
                  borderRadius: "9999px",
                  backgroundColor: "#EAE2F5",
                  color: "#563E75",
                  fontFamily: "var(--font-heading)",
                  fontSize: "0.9rem",
                  fontWeight: 650,
                  textDecoration: "none",
                  border: "1px solid rgba(184, 164, 216, 0.5)",
                  textAlign: "center",
                }}
              >
                <HiEnvelope size={15} />
                <span>Email</span>
              </a>
            </div>
          </motion.div>

          {/* Right Card: Quick Consultation Launcher */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{
              background: "linear-gradient(145deg, #1C1921 0%, #2A2434 100%)",
              borderRadius: "26px",
              padding: "clamp(1.5rem, 3.5vw, 2.75rem)",
              color: "#FAF8F5",
              boxShadow:
                "0 24px 55px -12px rgba(28, 25, 33, 0.38), 0 0 30px rgba(184, 164, 216, 0.25)",
              border: "1px solid rgba(184, 164, 216, 0.3)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.75rem",
                  marginBottom: "1.25rem",
                }}
              >
                <div
                  style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "12px",
                    backgroundColor: "rgba(184, 164, 216, 0.22)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#EAE2F5",
                    border: "1px solid rgba(184, 164, 216, 0.35)",
                    flexShrink: 0,
                  }}
                >
                  <HiChatBubbleLeftRight size={22} />
                </div>
                <div>
                  <h3
                    style={{
                      fontFamily: "var(--font-heading)",
                      fontSize: "clamp(1.15rem, 1.8vw, 1.35rem)",
                      fontWeight: 750,
                      color: "#FAF8F5",
                    }}
                  >
                    Quick Project Inquiry
                  </h3>
                  <span style={{ fontSize: "0.8rem", color: "#B8A4D8" }}>
                    Instant dispatch to WhatsApp
                  </span>
                </div>
              </div>

              <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1.1rem" }}>
                <div>
                  <label
                    htmlFor="contact-name"
                    style={{
                      display: "block",
                      fontSize: "0.82rem",
                      fontWeight: 650,
                      marginBottom: "0.35rem",
                      color: "#EAE2F5",
                    }}
                  >
                    Your Name / Brand *
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    placeholder="e.g. Simran Kaur / Urban Cafe"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    style={{
                      width: "100%",
                      padding: "0.8rem 1.1rem",
                      borderRadius: "12px",
                      border: "1px solid rgba(184, 164, 216, 0.4)",
                      backgroundColor: "rgba(255, 255, 255, 0.08)",
                      color: "#FAF8F5",
                      fontSize: "0.95rem",
                      outline: "none",
                      fontFamily: "var(--font-body)",
                    }}
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-service"
                    style={{
                      display: "block",
                      fontSize: "0.82rem",
                      fontWeight: 650,
                      marginBottom: "0.35rem",
                      color: "#EAE2F5",
                    }}
                  >
                    Service Required
                  </label>
                  <select
                    id="contact-service"
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    style={{
                      width: "100%",
                      padding: "0.8rem 1.1rem",
                      borderRadius: "12px",
                      border: "1px solid rgba(184, 164, 216, 0.4)",
                      backgroundColor: "rgba(28, 25, 33, 0.96)",
                      color: "#FAF8F5",
                      fontSize: "0.95rem",
                      outline: "none",
                      fontFamily: "var(--font-body)",
                    }}
                  >
                    <option value="Social Media Management">Social Media Management</option>
                    <option value="Graphics & Logo Designing">Graphics & Logo Designing</option>
                    <option value="Video Editing & Content Creation">Video Editing & Content Creation</option>
                    <option value="Paid Advertising (Meta Ads)">Paid Advertising (Meta Ads)</option>
                    <option value="Profile Optimization">Google Profile Optimization</option>
                    <option value="Website Designing">Website Designing</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="contact-message"
                    style={{
                      display: "block",
                      fontSize: "0.82rem",
                      fontWeight: 650,
                      marginBottom: "0.35rem",
                      color: "#EAE2F5",
                    }}
                  >
                    Brief Goals / Project Details
                  </label>
                  <textarea
                    id="contact-message"
                    rows={3}
                    placeholder="Tell me a bit about your target audience or deliverables..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    style={{
                      width: "100%",
                      padding: "0.8rem 1.1rem",
                      borderRadius: "12px",
                      border: "1px solid rgba(184, 164, 216, 0.4)",
                      backgroundColor: "rgba(255, 255, 255, 0.08)",
                      color: "#FAF8F5",
                      fontSize: "0.95rem",
                      outline: "none",
                      resize: "none",
                      fontFamily: "var(--font-body)",
                    }}
                  />
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "0.6rem",
                    padding: "0.95rem 1.5rem",
                    borderRadius: "9999px",
                    background: "linear-gradient(135deg, #B8A4D8 0%, #a087c8 100%)",
                    color: "#1C1921",
                    fontFamily: "var(--font-heading)",
                    fontSize: "0.98rem",
                    fontWeight: 750,
                    border: "none",
                    cursor: "pointer",
                    boxShadow: "0 8px 24px rgba(184, 164, 216, 0.4)",
                    marginTop: "0.25rem",
                  }}
                >
                  <FaWhatsapp size={20} color="#1C1921" />
                  <span>{submitted ? "Inquiry Dispatched!" : "Send WhatsApp Inquiry"}</span>
                </motion.button>
              </form>
            </div>

            <div
              style={{
                marginTop: "1.25rem",
                paddingTop: "0.85rem",
                borderTop: "1px solid rgba(184, 164, 216, 0.18)",
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
                fontSize: "0.78rem",
                color: "#B8A4D8",
              }}
            >
              <HiCheckCircle size={16} />
              <span>Direct access to Payal Arora — No intermediaries</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
