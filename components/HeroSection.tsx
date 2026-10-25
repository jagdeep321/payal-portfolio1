"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { HiArrowRight, HiSparkles } from "react-icons/hi2";
import { FaWhatsapp } from "react-icons/fa";
import { PORTFOLIO_DATA } from "@/data/portfolio";

export default function HeroSection() {
  const scrollToProjects = (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById("projects");
    if (element) {
      const navOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="home"
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        paddingTop: "clamp(5.5rem, 10vw, 7.5rem)",
        paddingBottom: "clamp(3rem, 6vw, 5rem)",
        overflow: "hidden",
      }}
    >
      {/* 3D Ambient Glowing Mesh / Orbs */}
      <div
        className="ambient-glow-orb orb-lavender"
        style={{
          width: "min(550px, 85vw)",
          height: "min(550px, 85vw)",
          top: "-5%",
          left: "-10%",
        }}
      />
      <div
        className="ambient-glow-orb orb-blush"
        style={{
          width: "min(500px, 80vw)",
          height: "min(500px, 80vw)",
          bottom: "5%",
          right: "-8%",
        }}
      />
      <div
        className="ambient-glow-orb orb-lilac"
        style={{
          width: "min(400px, 70vw)",
          height: "min(400px, 70vw)",
          top: "35%",
          left: "35%",
          opacity: 0.4,
        }}
      />

      <div className="site-container" style={{ position: "relative", zIndex: 10, width: "100%" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 340px), 1fr))",
            gap: "clamp(2.5rem, 5vw, 4.5rem)",
            alignItems: "center",
          }}
        >
          {/* Left Column: Typography & CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "1.35rem",
            }}
          >
            {/* Profession Pill Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              style={{ display: "inline-flex", width: "fit-content" }}
            >
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.55rem",
                  padding: "0.45rem 1.15rem",
                  borderRadius: "9999px",
                  backgroundColor: "rgba(234, 226, 245, 0.85)",
                  border: "1px solid rgba(184, 164, 216, 0.5)",
                  backdropFilter: "blur(12px)",
                  WebkitBackdropFilter: "blur(12px)",
                  boxShadow: "0 4px 16px rgba(184, 164, 216, 0.25)",
                }}
              >
                <HiSparkles style={{ color: "#70559E", fontSize: "1rem" }} />
                <span
                  style={{
                    fontFamily: "var(--font-heading)",
                    fontSize: "0.85rem",
                    fontWeight: 750,
                    letterSpacing: "0.06em",
                    textTransform: "uppercase",
                    color: "#1C1921",
                  }}
                >
                  {PORTFOLIO_DATA.personal.profession}
                </span>
              </div>
            </motion.div>

            {/* Main Typographic Heading */}
            <div>
              <h1 className="hero-heading" style={{ color: "#1C1921" }}>
                <span>{PORTFOLIO_DATA.personal.heroTitlePrefix}</span>{" "}
                <span className="text-gradient-luxury">
                  {PORTFOLIO_DATA.personal.heroTitleSuffix}
                </span>
              </h1>
            </div>

            {/* Hero Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 0.7 }}
              style={{
                fontSize: "clamp(1.05rem, 1.8vw, 1.35rem)",
                lineHeight: 1.6,
                color: "#484352",
                fontWeight: 450,
                maxWidth: "540px",
                fontStyle: "italic",
              }}
            >
              {PORTFOLIO_DATA.personal.heroSubtitle}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.7 }}
              className="hero-cta-group"
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "1rem",
                paddingTop: "0.5rem",
              }}
            >
              {/* Hire Me Button */}
              <motion.a
                href={PORTFOLIO_DATA.contact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="hero-cta-btn"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "0.65rem",
                  padding: "0.95rem 2rem",
                  borderRadius: "9999px",
                  backgroundColor: "#1C1921",
                  color: "#FAF8F5",
                  fontFamily: "var(--font-heading)",
                  fontSize: "1rem",
                  fontWeight: 650,
                  textDecoration: "none",
                  boxShadow: "0 12px 28px -5px rgba(28, 25, 33, 0.35), 0 0 20px rgba(184, 164, 216, 0.3)",
                  border: "1px solid rgba(28, 25, 33, 0.2)",
                  cursor: "pointer",
                }}
              >
                <FaWhatsapp style={{ fontSize: "1.25rem", color: "#25D366" }} />
                <span>Hire Me</span>
              </motion.a>

              {/* Explore My Work Button */}
              <motion.a
                href="#projects"
                onClick={scrollToProjects}
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="hero-cta-btn"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "0.6rem",
                  padding: "0.95rem 2rem",
                  borderRadius: "9999px",
                  backgroundColor: "rgba(255, 255, 255, 0.9)",
                  backdropFilter: "blur(14px)",
                  WebkitBackdropFilter: "blur(14px)",
                  color: "#1C1921",
                  fontFamily: "var(--font-heading)",
                  fontSize: "1rem",
                  fontWeight: 650,
                  textDecoration: "none",
                  border: "1px solid rgba(184, 164, 216, 0.5)",
                  boxShadow: "0 8px 24px -5px rgba(28, 25, 33, 0.08)",
                  cursor: "pointer",
                }}
              >
                <span>Explore My Work</span>
                <HiArrowRight style={{ fontSize: "1.05rem" }} />
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right Column: 3D Layered Portrait Composition */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            style={{
              position: "relative",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              width: "100%",
            }}
          >
            {/* Portrait Wrapper with Ambient 3D Cards */}
            <div
              style={{
                position: "relative",
                width: "100%",
                maxWidth: "430px",
                margin: "0 auto",
              }}
            >
              {/* Background 3D Layer 1: Soft Tinted Lilac/Blush Plate */}
              <motion.div
                animate={{
                  y: [0, -6, 0],
                  rotate: [-1.5, 0.5, -1.5],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                style={{
                  position: "absolute",
                  inset: "4px",
                  borderRadius: "28px",
                  background: "linear-gradient(135deg, rgba(234, 226, 245, 0.9) 0%, rgba(232, 199, 203, 0.75) 100%)",
                  border: "1px solid rgba(184, 164, 216, 0.4)",
                  transform: "translate(-8px, 12px)",
                  zIndex: 1,
                }}
              />

              {/* Background 3D Layer 2: White Glass Outline */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  borderRadius: "30px",
                  background: "rgba(255, 255, 255, 0.4)",
                  border: "1px solid rgba(255, 255, 255, 0.85)",
                  transform: "translate(8px, -6px)",
                  zIndex: 2,
                }}
              />

              {/* Main Portrait Frame with Luxury Glass Border & Depth Shadow */}
              <motion.div
                whileHover={{ scale: 1.015 }}
                transition={{ duration: 0.4 }}
                style={{
                  position: "relative",
                  zIndex: 3,
                  width: "100%",
                  aspectRatio: "4 / 5",
                  borderRadius: "26px",
                  overflow: "hidden",
                  border: "2px solid rgba(255, 255, 255, 0.95)",
                  boxShadow:
                    "0 24px 50px -12px rgba(28, 25, 33, 0.22), 0 0 35px rgba(184, 164, 216, 0.35)",
                  backgroundColor: "#FAF8F5",
                }}
              >
                <Image
                  src={PORTFOLIO_DATA.personal.portrait.src}
                  alt={PORTFOLIO_DATA.personal.portrait.alt}
                  fill
                  priority
                  sizes="(max-width: 640px) 90vw, (max-width: 1024px) 50vw, 430px"
                  style={{
                    objectFit: "cover",
                    objectPosition: "center 20%",
                  }}
                />
                {/* Subtle base gradient for high contrast badge readability */}
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background:
                      "linear-gradient(180deg, transparent 60%, rgba(28, 25, 33, 0.5) 100%)",
                    pointerEvents: "none",
                  }}
                />

                {/* Mobile Safe Inset Badge 1 (Inside frame top) */}
                <div
                  style={{
                    position: "absolute",
                    top: "14px",
                    right: "14px",
                    zIndex: 4,
                    padding: "0.45rem 0.95rem",
                    borderRadius: "14px",
                    backgroundColor: "rgba(255, 255, 255, 0.92)",
                    backdropFilter: "blur(14px)",
                    WebkitBackdropFilter: "blur(14px)",
                    border: "1px solid rgba(184, 164, 216, 0.4)",
                    boxShadow: "0 8px 20px rgba(28, 25, 33, 0.14)",
                    display: "flex",
                    alignItems: "center",
                    gap: "0.55rem",
                  }}
                >
                  <div
                    style={{
                      width: "9px",
                      height: "9px",
                      borderRadius: "50%",
                      backgroundColor: "#25D366",
                      boxShadow: "0 0 8px #25D366",
                    }}
                  />
                  <span
                    style={{
                      fontFamily: "var(--font-heading)",
                      fontSize: "0.8rem",
                      fontWeight: 700,
                      color: "#1C1921",
                      whiteSpace: "nowrap",
                    }}
                  >
                    Available for Projects
                  </span>
                </div>

                {/* Mobile Safe Inset Badge 2 (Inside frame bottom) */}
                <div
                  style={{
                    position: "absolute",
                    bottom: "14px",
                    left: "14px",
                    right: "14px",
                    zIndex: 4,
                    padding: "0.65rem 1rem",
                    borderRadius: "16px",
                    backgroundColor: "rgba(28, 25, 33, 0.92)",
                    backdropFilter: "blur(16px)",
                    WebkitBackdropFilter: "blur(16px)",
                    border: "1px solid rgba(234, 226, 245, 0.25)",
                    boxShadow: "0 12px 28px rgba(28, 25, 33, 0.28)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    color: "#FAF8F5",
                  }}
                >
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    <span
                      style={{
                        fontSize: "0.72rem",
                        textTransform: "uppercase",
                        letterSpacing: "0.08em",
                        color: "#B8A4D8",
                        fontWeight: 700,
                      }}
                    >
                      Digital Strategy
                    </span>
                    <span
                      style={{
                        fontFamily: "var(--font-heading)",
                        fontSize: "0.92rem",
                        fontWeight: 700,
                        color: "#FAF8F5",
                      }}
                    >
                      Creative &amp; Meta Ads
                    </span>
                  </div>
                  <HiSparkles style={{ color: "#E8C7CB", fontSize: "1.1rem" }} />
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
