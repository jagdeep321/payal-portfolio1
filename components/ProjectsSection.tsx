"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { HiSparkles, HiFolderOpen, HiUser } from "react-icons/hi2";
import { PORTFOLIO_DATA, ProjectItem } from "@/data/portfolio";

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="section-wrapper"
      style={{
        backgroundColor: "#FAF8F5",
        position: "relative",
      }}
    >
      {/* Ambient background glow */}
      <div
        className="ambient-glow-orb orb-lilac"
        style={{
          width: "min(500px, 80vw)",
          height: "min(500px, 80vw)",
          top: "5%",
          right: "-5%",
          opacity: 0.45,
        }}
      />
      <div
        className="ambient-glow-orb orb-blush"
        style={{
          width: "min(450px, 75vw)",
          height: "min(450px, 75vw)",
          bottom: "15%",
          left: "-5%",
          opacity: 0.35,
        }}
      />

      <div className="site-container" style={{ position: "relative", zIndex: 10 }}>
        {/* Section Header */}
        <div style={{ textAlign: "center", marginBottom: "clamp(2.5rem, 5vw, 4.5rem)" }}>
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
              backgroundColor: "rgba(184, 164, 216, 0.22)",
              border: "1px solid rgba(184, 164, 216, 0.45)",
              marginBottom: "0.85rem",
              boxShadow: "0 4px 14px rgba(184, 164, 216, 0.15)",
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
              Selected Showcase
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="section-title"
          >
            Portfolio &amp; <span className="text-gradient-accent">Success Stories</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="section-subtitle"
            style={{ margin: "0.75rem auto 0 auto" }}
          >
            Creative work, thoughtful strategies, and digital experiences designed to help brands stand out.
          </motion.p>
        </div>

        {/* Projects Stack */}
        <div style={{ display: "flex", flexDirection: "column", gap: "clamp(2.5rem, 5vw, 4.5rem)" }}>
          {PORTFOLIO_DATA.projects.map((project: ProjectItem, index: number) => {
            return (
              <motion.article
                key={project.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.7, delay: index * 0.15 }}
                className="glass-panel-luxury"
                style={{
                  padding: "clamp(1.25rem, 3.5vw, 3rem)",
                  borderRadius: "26px",
                }}
              >
                {/* Project Header Info */}
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "1.25rem",
                    marginBottom: "1.75rem",
                  }}
                >
                  {/* Category Pill and Index */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      flexWrap: "wrap",
                      gap: "0.75rem",
                    }}
                  >
                    <div
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "0.5rem",
                        padding: "0.35rem 0.95rem",
                        borderRadius: "9999px",
                        backgroundColor: "#EAE2F5",
                        color: "#563E75",
                        fontSize: "0.82rem",
                        fontWeight: 700,
                        letterSpacing: "0.04em",
                        fontFamily: "var(--font-heading)",
                      }}
                    >
                      <HiFolderOpen size={16} />
                      <span>{project.category}</span>
                    </div>

                    <span
                      style={{
                        fontFamily: "var(--font-heading)",
                        fontSize: "0.92rem",
                        fontWeight: 750,
                        color: "#70559E",
                        letterSpacing: "0.06em",
                      }}
                    >
                      0{index + 1} / 03
                    </span>
                  </div>

                  {/* Project Title */}
                  <h3
                    style={{
                      fontFamily: "var(--font-heading)",
                      fontSize: "clamp(1.5rem, 2.5vw, 2.2rem)",
                      fontWeight: 800,
                      color: "#1C1921",
                      letterSpacing: "-0.02em",
                      lineHeight: 1.22,
                    }}
                  >
                    {project.title}
                  </h3>

                  {/* Role & Scope Metadata Grid */}
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 220px), 1fr))",
                      gap: "1.25rem",
                      backgroundColor: "rgba(250, 248, 245, 0.85)",
                      border: "1px solid rgba(184, 164, 216, 0.32)",
                      borderRadius: "18px",
                      padding: "clamp(1rem, 2.5vw, 1.5rem)",
                    }}
                  >
                    {project.role && (
                      <div>
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "0.45rem",
                            fontSize: "0.76rem",
                            textTransform: "uppercase",
                            letterSpacing: "0.08em",
                            color: "#6B6577",
                            fontWeight: 700,
                            marginBottom: "0.35rem",
                          }}
                        >
                          <HiUser size={14} color="#70559E" />
                          <span>Role</span>
                        </div>
                        <p
                          style={{
                            fontFamily: "var(--font-heading)",
                            fontSize: "1rem",
                            fontWeight: 750,
                            color: "#1C1921",
                          }}
                        >
                          {project.role}
                        </p>
                      </div>
                    )}

                    <div>
                      <div
                        style={{
                          fontSize: "0.76rem",
                          textTransform: "uppercase",
                          letterSpacing: "0.08em",
                          color: "#6B6577",
                          fontWeight: 700,
                          marginBottom: "0.35rem",
                        }}
                      >
                        Scope of Work
                      </div>
                      <p
                        style={{
                          fontSize: "0.94rem",
                          color: "#484352",
                          lineHeight: 1.55,
                        }}
                      >
                        {project.scope}
                      </p>
                    </div>

                    {project.deliverables && (
                      <div>
                        <div
                          style={{
                            fontSize: "0.76rem",
                            textTransform: "uppercase",
                            letterSpacing: "0.08em",
                            color: "#6B6577",
                            fontWeight: 700,
                            marginBottom: "0.35rem",
                          }}
                        >
                          Deliverables
                        </div>
                        <p
                          style={{
                            fontSize: "0.94rem",
                            color: "#484352",
                            lineHeight: 1.55,
                          }}
                        >
                          {project.deliverables}
                        </p>
                      </div>
                    )}
                  </div>
                </div>

                {/* Exactly Two Project Images: Side by Side on Desktop, Stacked on Mobile */}
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 300px), 1fr))",
                    gap: "clamp(1rem, 2vw, 1.5rem)",
                  }}
                >
                  {project.images.map((img) => (
                    <motion.div
                      key={img.src}
                      whileHover={{ scale: 1.015 }}
                      transition={{ duration: 0.35 }}
                      style={{
                        position: "relative",
                        borderRadius: "18px",
                        overflow: "hidden",
                        aspectRatio: "16 / 10",
                        backgroundColor: "#EAE2F5",
                        boxShadow: "0 12px 28px -8px rgba(28, 25, 33, 0.12)",
                        border: "1px solid rgba(184, 164, 216, 0.35)",
                      }}
                    >
                      <Image
                        src={img.src}
                        alt={img.alt}
                        fill
                        sizes="(max-width: 640px) 95vw, (max-width: 1024px) 50vw, 550px"
                        style={{
                          objectFit: "cover",
                          transition: "transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)",
                        }}
                      />
                      {img.caption && (
                        <div
                          style={{
                            position: "absolute",
                            bottom: 0,
                            left: 0,
                            right: 0,
                            padding: "0.75rem 1rem",
                            background:
                              "linear-gradient(180deg, transparent 0%, rgba(28, 25, 33, 0.82) 100%)",
                            color: "#FFFFFF",
                            fontSize: "0.82rem",
                            fontWeight: 500,
                            fontFamily: "var(--font-heading)",
                            backdropFilter: "blur(4px)",
                          }}
                        >
                          {img.caption}
                        </div>
                      )}
                    </motion.div>
                  ))}
                </div>

                {/* Project Tags */}
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "0.5rem",
                    marginTop: "1.5rem",
                    paddingTop: "1.15rem",
                    borderTop: "1px solid rgba(184, 164, 216, 0.25)",
                  }}
                >
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      style={{
                        fontSize: "0.8rem",
                        fontWeight: 600,
                        color: "#484352",
                        backgroundColor: "rgba(234, 226, 245, 0.7)",
                        padding: "0.3rem 0.8rem",
                        borderRadius: "9999px",
                        border: "1px solid rgba(184, 164, 216, 0.35)",
                      }}
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
