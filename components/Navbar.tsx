"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { FaWhatsapp, FaInstagram } from "react-icons/fa";
import { PORTFOLIO_DATA, INSTAGRAM_PROFILE_URL } from "@/data/portfolio";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);

      const sections = ["home", "about", "services", "projects", "contact"];
      const scrollPosition = window.scrollY + 140;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const handleLinkClick = (href: string) => {
    setIsOpen(false);
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
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        paddingTop: scrolled ? "0.65rem" : "1.1rem",
        paddingBottom: scrolled ? "0.65rem" : "1.1rem",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(20px)" : "none",
        backgroundColor: scrolled ? "rgba(250, 248, 245, 0.92)" : "transparent",
        borderBottom: scrolled ? "1px solid rgba(184, 164, 216, 0.35)" : "1px solid transparent",
        boxShadow: scrolled ? "0 10px 30px -10px rgba(28, 25, 33, 0.08)" : "none",
        transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
      }}
    >
      <div className="site-container">
        <nav
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
          }}
          aria-label="Main Navigation"
        >
          {/* Brand Logo */}
          <Link
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick("#home");
            }}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.85rem",
              textDecoration: "none",
              color: "inherit",
            }}
            aria-label="Payal Arora - Return to Home"
          >
            <div className="pa-monogram">PA</div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <span
                style={{
                  fontFamily: "var(--font-heading)",
                  fontWeight: 750,
                  fontSize: "1.15rem",
                  letterSpacing: "-0.02em",
                  color: "#1C1921",
                  lineHeight: 1.2,
                }}
              >
                {PORTFOLIO_DATA.personal.name}
              </span>
              <span
                style={{
                  fontSize: "0.72rem",
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  color: "#70559E",
                  fontWeight: 600,
                }}
              >
                Digital Marketer
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <div
            className="desktop-only-flex"
            style={{
              alignItems: "center",
              gap: "0.35rem",
              background: scrolled ? "transparent" : "rgba(255, 255, 255, 0.75)",
              backdropFilter: "blur(14px)",
              WebkitBackdropFilter: "blur(14px)",
              padding: "0.35rem 0.6rem",
              borderRadius: "9999px",
              border: scrolled ? "none" : "1px solid rgba(184, 164, 216, 0.3)",
              boxShadow: scrolled ? "none" : "0 4px 16px rgba(28, 25, 33, 0.04)",
            }}
          >
            {PORTFOLIO_DATA.navigation.map((item) => {
              const isActive = activeSection === item.href.replace("#", "");
              return (
                <button
                  key={item.href}
                  onClick={() => handleLinkClick(item.href)}
                  style={{
                    position: "relative",
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    padding: "0.5rem 1.15rem",
                    fontSize: "0.92rem",
                    fontWeight: isActive ? 650 : 500,
                    color: isActive ? "#1C1921" : "#484352",
                    fontFamily: "var(--font-heading)",
                    transition: "color 0.2s ease",
                    borderRadius: "9999px",
                  }}
                  aria-current={isActive ? "page" : undefined}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeNavPill"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      style={{
                        position: "absolute",
                        inset: 0,
                        backgroundColor: "#EAE2F5",
                        borderRadius: "9999px",
                        border: "1px solid rgba(184, 164, 216, 0.55)",
                        zIndex: -1,
                      }}
                    />
                  )}
                  {item.label}
                </button>
              );
            })}
          </div>

          {/* Quick CTA Hire Me (Desktop) */}
          <div
            className="desktop-cta-flex"
            style={{
              alignItems: "center",
              gap: "0.85rem",
            }}
          >
            <a
              href={PORTFOLIO_DATA.contact.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                padding: "0.6rem 1.35rem",
                borderRadius: "9999px",
                backgroundColor: "#1C1921",
                color: "#FAF8F5",
                fontSize: "0.9rem",
                fontWeight: 650,
                fontFamily: "var(--font-heading)",
                textDecoration: "none",
                boxShadow: "0 6px 16px rgba(28, 25, 33, 0.22)",
                transition: "all 0.2s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "#2E2838";
                e.currentTarget.style.transform = "translateY(-1px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "#1C1921";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              <FaWhatsapp style={{ color: "#25D366", fontSize: "1.1rem" }} />
              <span>Hire Me</span>
            </a>
          </div>

          {/* Mobile Hamburger Toggle Button */}
          <button
            type="button"
            className="mobile-only-flex"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isOpen}
            style={{
              background: "rgba(255, 255, 255, 0.9)",
              border: "1px solid rgba(184, 164, 216, 0.5)",
              borderRadius: "14px",
              padding: "0.6rem",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              color: "#1C1921",
              boxShadow: "0 4px 14px rgba(28, 25, 33, 0.08)",
            }}
          >
            {isOpen ? <HiX size={24} /> : <HiMenuAlt3 size={24} />}
          </button>
        </nav>
      </div>

      {/* Mobile Animated Dropdown Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.98 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            style={{
              position: "absolute",
              top: "100%",
              left: 0,
              right: 0,
              backgroundColor: "rgba(250, 248, 245, 0.98)",
              backdropFilter: "blur(24px)",
              WebkitBackdropFilter: "blur(24px)",
              borderBottom: "1px solid rgba(184, 164, 216, 0.4)",
              boxShadow: "0 24px 48px rgba(28, 25, 33, 0.15)",
              padding: "1.25rem 1.25rem 2rem 1.25rem",
              zIndex: 90,
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "0.45rem",
                maxWidth: "420px",
                margin: "0 auto",
              }}
            >
              {PORTFOLIO_DATA.navigation.map((item) => {
                const isActive = activeSection === item.href.replace("#", "");
                return (
                  <button
                    key={item.href}
                    onClick={() => handleLinkClick(item.href)}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      padding: "0.9rem 1.25rem",
                      borderRadius: "14px",
                      background: isActive ? "#EAE2F5" : "transparent",
                      border: isActive
                        ? "1px solid rgba(184, 164, 216, 0.5)"
                        : "1px solid transparent",
                      color: isActive ? "#1C1921" : "#484352",
                      fontSize: "1.02rem",
                      fontWeight: isActive ? 700 : 500,
                      fontFamily: "var(--font-heading)",
                      textAlign: "left",
                      cursor: "pointer",
                      width: "100%",
                      transition: "all 0.15s ease",
                    }}
                  >
                    <span>{item.label}</span>
                    {isActive && (
                      <span
                        style={{
                          width: "8px",
                          height: "8px",
                          borderRadius: "50%",
                          backgroundColor: "#70559E",
                          boxShadow: "0 0 6px #B8A4D8",
                        }}
                      />
                    )}
                  </button>
                );
              })}

              {/* Social Channels Row in Mobile Nav */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "1.25rem",
                  marginTop: "0.75rem",
                  paddingTop: "0.75rem",
                  borderTop: "1px solid rgba(184, 164, 216, 0.25)",
                }}
              >
                <a
                  href={PORTFOLIO_DATA.contact.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.45rem",
                    color: "#25D366",
                    fontWeight: 650,
                    fontSize: "0.9rem",
                    textDecoration: "none",
                  }}
                >
                  <FaWhatsapp size={20} />
                  <span>WhatsApp</span>
                </a>
                <span style={{ color: "rgba(184, 164, 216, 0.5)" }}>•</span>
                <a
                  href={INSTAGRAM_PROFILE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.45rem",
                    color: "#E1306C",
                    fontWeight: 650,
                    fontSize: "0.9rem",
                    textDecoration: "none",
                  }}
                >
                  <FaInstagram size={20} />
                  <span>Instagram</span>
                </a>
              </div>

              {/* WhatsApp CTA in Mobile Nav */}
              <div style={{ marginTop: "0.75rem" }}>
                <a
                  href={PORTFOLIO_DATA.contact.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "0.6rem",
                    width: "100%",
                    padding: "0.9rem 1.25rem",
                    borderRadius: "14px",
                    backgroundColor: "#1C1921",
                    color: "#FAF8F5",
                    fontSize: "0.98rem",
                    fontWeight: 700,
                    fontFamily: "var(--font-heading)",
                    textDecoration: "none",
                    boxShadow: "0 8px 20px rgba(28, 25, 33, 0.25)",
                  }}
                  onClick={() => setIsOpen(false)}
                >
                  <FaWhatsapp size={20} color="#25D366" />
                  <span>Hire Me on WhatsApp</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
