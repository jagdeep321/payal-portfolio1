"use client";

import React from "react";
import { FaWhatsapp, FaInstagram } from "react-icons/fa";
import { PORTFOLIO_DATA, INSTAGRAM_PROFILE_URL } from "@/data/portfolio";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleScroll = (href: string) => {
    const targetId = href.replace("#", "");
    const element = document.getElementById(targetId);
    if (element) {
      const navOffset = 76;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <footer
      style={{
        backgroundColor: "#1C1921",
        color: "#FAF8F5",
        paddingTop: "clamp(3.5rem, 6vw, 4.5rem)",
        paddingBottom: "clamp(2rem, 4vw, 2.75rem)",
        position: "relative",
        borderTop: "1px solid rgba(184, 164, 216, 0.22)",
      }}
    >
      <div className="site-container">
        {/* Top Footer Section */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "2rem",
            paddingBottom: "2.5rem",
            borderBottom: "1px solid rgba(184, 164, 216, 0.15)",
          }}
        >
          {/* Brand Info */}
          <div style={{ display: "flex", alignItems: "center", gap: "0.85rem" }}>
            <div className="pa-monogram" style={{ boxShadow: "0 0 16px rgba(184, 164, 216, 0.35)" }}>
              PA
            </div>
            <div>
              <span
                style={{
                  fontFamily: "var(--font-heading)",
                  fontWeight: 750,
                  fontSize: "1.25rem",
                  letterSpacing: "-0.02em",
                  color: "#FAF8F5",
                  display: "block",
                  lineHeight: 1.2,
                }}
              >
                {PORTFOLIO_DATA.personal.name}
              </span>
              <span
                style={{
                  fontSize: "0.8rem",
                  letterSpacing: "0.06em",
                  color: "#B8A4D8",
                  fontWeight: 500,
                }}
              >
                {PORTFOLIO_DATA.personal.profession}
              </span>
            </div>
          </div>

          {/* Navigation Links */}
          <nav
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "clamp(0.85rem, 2vw, 1.75rem)",
              alignItems: "center",
            }}
            aria-label="Footer Navigation"
          >
            {PORTFOLIO_DATA.navigation.map((item) => (
              <button
                key={item.href}
                onClick={() => handleScroll(item.href)}
                style={{
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  color: "#c6c3cd",
                  fontSize: "0.92rem",
                  fontWeight: 500,
                  fontFamily: "var(--font-heading)",
                  transition: "color 0.2s ease",
                  padding: 0,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = "#EAE2F5";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = "#c6c3cd";
                }}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Social Icons */}
          <div style={{ display: "flex", alignItems: "center", gap: "0.85rem" }}>
            <a
              href={PORTFOLIO_DATA.contact.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open WhatsApp chat with Payal Arora"
              style={{
                width: "42px",
                height: "42px",
                borderRadius: "12px",
                backgroundColor: "rgba(255, 255, 255, 0.08)",
                border: "1px solid rgba(184, 164, 216, 0.28)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#25D366",
                transition: "all 0.2s ease",
                textDecoration: "none",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "rgba(37, 211, 102, 0.2)";
                e.currentTarget.style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.08)";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              <FaWhatsapp size={20} />
            </a>

            <a
              href={INSTAGRAM_PROFILE_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit Payal Arora's Instagram profile"
              style={{
                width: "42px",
                height: "42px",
                borderRadius: "12px",
                backgroundColor: "rgba(255, 255, 255, 0.08)",
                border: "1px solid rgba(184, 164, 216, 0.28)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#E1306C",
                transition: "all 0.2s ease",
                textDecoration: "none",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "rgba(225, 48, 108, 0.2)";
                e.currentTarget.style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.08)";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              <FaInstagram size={20} />
            </a>
          </div>
        </div>

        {/* Bottom Copyright Notice */}
        <div
          style={{
            paddingTop: "1.75rem",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "0.85rem",
            fontSize: "0.84rem",
            color: "#847E91",
          }}
        >
          <p>© {currentYear} Payal Arora. All rights reserved.</p>
          <p style={{ fontStyle: "italic", color: "#6a6578" }}>
            Designed with 3D Depth &amp; Strategic Creative Direction
          </p>
        </div>
      </div>
    </footer>
  );
}
