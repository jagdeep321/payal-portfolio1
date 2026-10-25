"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  TbBrandInstagram,
  TbPalette,
  TbVideo,
  TbTargetArrow,
  TbChartBar,
  TbDeviceDesktopAnalytics,
} from "react-icons/tb";
import { HiSparkles } from "react-icons/hi2";
import { PORTFOLIO_DATA, ServiceItem } from "@/data/portfolio";

const iconMap: Record<string, React.ReactNode> = {
  TbBrandInstagram: <TbBrandInstagram size={28} />,
  TbPalette: <TbPalette size={28} />,
  TbVideo: <TbVideo size={28} />,
  TbTargetArrow: <TbTargetArrow size={28} />,
  TbChartBar: <TbChartBar size={28} />,
  TbDeviceDesktopAnalytics: <TbDeviceDesktopAnalytics size={28} />,
};

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="section-wrapper"
      style={{
        backgroundColor: "rgba(234, 226, 245, 0.3)",
        position: "relative",
        borderTop: "1px solid rgba(184, 164, 216, 0.25)",
        borderBottom: "1px solid rgba(184, 164, 216, 0.25)",
      }}
    >
      {/* Ambient decorative lighting */}
      <div
        className="ambient-glow-orb orb-lavender"
        style={{
          width: "min(550px, 85vw)",
          height: "min(550px, 85vw)",
          top: "15%",
          left: "-10%",
          opacity: 0.35,
        }}
      />
      <div
        className="ambient-glow-orb orb-blush"
        style={{
          width: "min(480px, 80vw)",
          height: "min(480px, 80vw)",
          bottom: "10%",
          right: "-8%",
          opacity: 0.35,
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
              boxShadow: "0 4px 14px rgba(184, 164, 216, 0.2)",
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
              Core Capabilities
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="section-title"
          >
            What <span className="text-gradient-luxury">I Do</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="section-subtitle"
            style={{ margin: "0.75rem auto 0 auto" }}
          >
            Creative digital solutions designed to grow your brand.
          </motion.p>
        </div>

        {/* 6 Services Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 310px), 1fr))",
            gap: "clamp(1.25rem, 2.5vw, 2rem)",
          }}
        >
          {PORTFOLIO_DATA.services.map((service: ServiceItem, index: number) => {
            const icon = iconMap[service.iconName] || <TbBrandInstagram size={28} />;

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                whileHover={{
                  y: -8,
                  scale: 1.01,
                  boxShadow:
                    "0 24px 50px -10px rgba(28, 25, 33, 0.14), 0 0 30px rgba(184, 164, 216, 0.35)",
                }}
                className="glass-panel-luxury"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  padding: "clamp(1.5rem, 3vw, 2.25rem)",
                  borderRadius: "22px",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                {/* Subtle top corner gradient accent */}
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    right: 0,
                    width: "90px",
                    height: "90px",
                    background:
                      index % 2 === 0
                        ? "radial-gradient(circle at top right, rgba(184, 164, 216, 0.4), transparent 70%)"
                        : "radial-gradient(circle at top right, rgba(232, 199, 203, 0.5), transparent 70%)",
                    pointerEvents: "none",
                  }}
                />

                <div>
                  {/* Service Icon Container */}
                  <div
                    style={{
                      width: "56px",
                      height: "56px",
                      borderRadius: "16px",
                      backgroundColor: index % 2 === 0 ? "#EAE2F5" : "#FAF0F1",
                      border: "1px solid rgba(184, 164, 216, 0.4)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: index % 2 === 0 ? "#563E75" : "#96424e",
                      marginBottom: "1.35rem",
                      boxShadow: "0 6px 16px rgba(28, 25, 33, 0.06)",
                    }}
                  >
                    {icon}
                  </div>

                  {/* Service Number Tag */}
                  <div
                    style={{
                      fontFamily: "var(--font-heading)",
                      fontSize: "0.75rem",
                      fontWeight: 750,
                      letterSpacing: "0.08em",
                      color: "#9A81C2",
                      textTransform: "uppercase",
                      marginBottom: "0.45rem",
                    }}
                  >
                    Service 0{index + 1}
                  </div>

                  {/* Service Title */}
                  <h3
                    style={{
                      fontFamily: "var(--font-heading)",
                      fontSize: "clamp(1.2rem, 1.8vw, 1.35rem)",
                      fontWeight: 750,
                      color: "#1C1921",
                      marginBottom: "0.85rem",
                      lineHeight: 1.3,
                    }}
                  >
                    {service.title}
                  </h3>

                  {/* Complete Description */}
                  <p
                    style={{
                      fontSize: "0.96rem",
                      color: "#484352",
                      lineHeight: 1.65,
                      marginBottom: "1.5rem",
                    }}
                  >
                    {service.description}
                  </p>
                </div>

                {/* Highlights List */}
                <div
                  style={{
                    borderTop: "1px solid rgba(184, 164, 216, 0.25)",
                    paddingTop: "1.15rem",
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.45rem",
                  }}
                >
                  {service.highlights.map((item) => (
                    <div
                      key={item}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "0.5rem",
                        fontSize: "0.85rem",
                        color: "#6B6577",
                        fontWeight: 500,
                      }}
                    >
                      <span
                        style={{
                          width: "6px",
                          height: "6px",
                          borderRadius: "50%",
                          backgroundColor: "#B8A4D8",
                          display: "inline-block",
                          flexShrink: 0,
                        }}
                      />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
