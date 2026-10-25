"use client";

import React from "react";
import { motion } from "framer-motion";
import { HiAcademicCap, HiSparkles, HiLightBulb, HiCheckBadge } from "react-icons/hi2";
import { PORTFOLIO_DATA } from "@/data/portfolio";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="section-wrapper"
      style={{
        backgroundColor: "#FAF8F5",
        position: "relative",
      }}
    >
      {/* Decorative ambient background accents */}
      <div
        className="ambient-glow-orb orb-lilac"
        style={{
          width: "min(480px, 80vw)",
          height: "min(480px, 80vw)",
          top: "10%",
          right: "-10%",
          opacity: 0.5,
        }}
      />
      <div
        className="ambient-glow-orb orb-blush"
        style={{
          width: "min(400px, 75vw)",
          height: "min(400px, 75vw)",
          bottom: "10%",
          left: "-5%",
          opacity: 0.4,
        }}
      />

      <div className="site-container" style={{ position: "relative", zIndex: 10 }}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: "clamp(2rem, 4.5vw, 3.5rem)" }}
        >
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              padding: "0.4rem 1rem",
              borderRadius: "9999px",
              backgroundColor: "rgba(184, 164, 216, 0.22)",
              border: "1px solid rgba(184, 164, 216, 0.45)",
              marginBottom: "0.85rem",
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
              Background &amp; Vision
            </span>
          </div>
          <h2 className="section-title">
            About <span className="text-gradient-accent">Me</span>
          </h2>
        </motion.div>

        {/* Content Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 420px), 1fr))",
            gap: "clamp(1.5rem, 3.5vw, 3rem)",
            alignItems: "start",
          }}
        >
          {/* Left Column: Introduction & My Approach */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1.75rem" }}>
            {/* Bio Card */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="glass-panel-luxury"
              style={{
                padding: "clamp(1.35rem, 3.5vw, 2.5rem)",
                borderRadius: "24px",
                position: "relative",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "5px",
                  height: "100%",
                  background: "linear-gradient(180deg, #B8A4D8 0%, #E8C7CB 100%)",
                }}
              />
              <p
                style={{
                  fontSize: "clamp(1.02rem, 1.35vw, 1.18rem)",
                  lineHeight: 1.75,
                  color: "#1C1921",
                  fontWeight: 450,
                }}
              >
                {PORTFOLIO_DATA.about.introduction}
              </p>
            </motion.div>

            {/* My Approach Highlighted Panel */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              style={{
                background: "linear-gradient(145deg, #1C1921 0%, #2B2536 100%)",
                borderRadius: "24px",
                padding: "clamp(1.35rem, 3.5vw, 2.5rem)",
                color: "#FAF8F5",
                boxShadow: "0 20px 45px -10px rgba(28, 25, 33, 0.35), 0 0 30px rgba(184, 164, 216, 0.25)",
                border: "1px solid rgba(184, 164, 216, 0.3)",
                position: "relative",
                overflow: "hidden",
              }}
            >
              {/* Subtle background glow */}
              <div
                style={{
                  position: "absolute",
                  top: "-40px",
                  right: "-40px",
                  width: "160px",
                  height: "160px",
                  borderRadius: "50%",
                  background: "radial-gradient(circle, rgba(184, 164, 216, 0.4) 0%, transparent 70%)",
                  filter: "blur(20px)",
                  pointerEvents: "none",
                }}
              />

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.75rem",
                  marginBottom: "1rem",
                }}
              >
                <div
                  style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "12px",
                    backgroundColor: "rgba(184, 164, 216, 0.25)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    border: "1px solid rgba(184, 164, 216, 0.35)",
                    flexShrink: 0,
                  }}
                >
                  <HiLightBulb style={{ color: "#EAE2F5", fontSize: "1.3rem" }} />
                </div>
                <h3
                  style={{
                    fontFamily: "var(--font-heading)",
                    fontSize: "clamp(1.2rem, 2vw, 1.4rem)",
                    fontWeight: 750,
                    color: "#FAF8F5",
                    letterSpacing: "-0.01em",
                  }}
                >
                  {PORTFOLIO_DATA.about.myApproach.heading}
                </h3>
              </div>

              <p
                style={{
                  fontSize: "clamp(0.96rem, 1.2vw, 1.1rem)",
                  lineHeight: 1.7,
                  color: "#EAE2F5",
                  fontWeight: 400,
                }}
              >
                {PORTFOLIO_DATA.about.myApproach.text}
              </p>
            </motion.div>
          </div>

          {/* Right Column: Education & Training + Core Strategic Strengths */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1.75rem" }}>
            {/* Education & Training Section */}
            <div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.6rem",
                  marginBottom: "1rem",
                }}
              >
                <HiAcademicCap style={{ color: "#70559E", fontSize: "1.45rem" }} />
                <h3
                  style={{
                    fontFamily: "var(--font-heading)",
                    fontSize: "1.28rem",
                    fontWeight: 750,
                    color: "#1C1921",
                  }}
                >
                  Education &amp; Training
                </h3>
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                {PORTFOLIO_DATA.about.education.map((item, idx) => (
                  <motion.div
                    key={item.degree}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ duration: 0.5, delay: idx * 0.15 }}
                    whileHover={{ y: -3, boxShadow: "0 16px 36px rgba(28, 25, 33, 0.1)" }}
                    className="glass-panel-luxury"
                    style={{
                      padding: "clamp(1.1rem, 2.5vw, 1.5rem)",
                      borderRadius: "18px",
                      display: "flex",
                      flexDirection: "column",
                      gap: "0.35rem",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        flexWrap: "wrap",
                        gap: "0.5rem",
                      }}
                    >
                      <h4
                        style={{
                          fontFamily: "var(--font-heading)",
                          fontSize: "1.12rem",
                          fontWeight: 750,
                          color: "#1C1921",
                        }}
                      >
                        {item.degree}
                      </h4>
                      <span
                        style={{
                          fontSize: "0.74rem",
                          fontWeight: 700,
                          textTransform: "uppercase",
                          letterSpacing: "0.06em",
                          padding: "0.25rem 0.75rem",
                          borderRadius: "9999px",
                          backgroundColor: "#EAE2F5",
                          color: "#563E75",
                          border: "1px solid rgba(184, 164, 216, 0.5)",
                        }}
                      >
                        {item.badge}
                      </span>
                    </div>
                    <p
                      style={{
                        fontSize: "0.94rem",
                        color: "#484352",
                        fontWeight: 500,
                      }}
                    >
                      {item.institution}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Strategic Pillars Grid */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 180px), 1fr))",
                gap: "0.85rem",
              }}
            >
              {PORTFOLIO_DATA.about.statsPills.map((pill, idx) => (
                <motion.div
                  key={pill.label}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.2 + idx * 0.08 }}
                  style={{
                    backgroundColor: "rgba(255, 255, 255, 0.78)",
                    backdropFilter: "blur(14px)",
                    WebkitBackdropFilter: "blur(14px)",
                    border: "1px solid rgba(184, 164, 216, 0.35)",
                    borderRadius: "16px",
                    padding: "1rem 1.15rem",
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "0.75rem",
                    boxShadow: "0 4px 14px rgba(28, 25, 33, 0.04)",
                  }}
                >
                  <HiCheckBadge
                    style={{
                      color: "#70559E",
                      fontSize: "1.35rem",
                      flexShrink: 0,
                      marginTop: "0.1rem",
                    }}
                  />
                  <div>
                    <span
                      style={{
                        display: "block",
                        fontFamily: "var(--font-heading)",
                        fontSize: "0.9rem",
                        fontWeight: 750,
                        color: "#1C1921",
                        lineHeight: 1.25,
                      }}
                    >
                      {pill.label}
                    </span>
                    <span
                      style={{
                        display: "block",
                        fontSize: "0.8rem",
                        color: "#6B6577",
                        marginTop: "0.2rem",
                      }}
                    >
                      {pill.value}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
