import React from "react";
import styles from "./About.module.css";

import {
  FiAward,
  FiTrendingUp,
  FiShield,
  FiDollarSign,
} from "react-icons/fi";

const metrics = [
  {
    value: "12+",
    label: "Years of Mastery",
    icon: <FiAward />,
  },
  {
    value: "340+",
    label: "Brands Elevated",
    icon: <FiTrendingUp />,
  },
  {
    value: "98%",
    label: "Client Retention",
    icon: <FiShield />,
  },
  {
    value: "$2B+",
    label: "Revenue Generated",
    icon: <FiDollarSign />,
  },
];

const pillars = [
  { title: "Strategy", desc: "Data-led positioning that carves market share." },
  { title: "Creative", desc: "Visual systems built to stop the scroll." },
  { title: "Growth", desc: "Paid, organic, and owned channels unified." },
  { title: "Growth", desc: "Paid, organic, and owned channels unified." },
];

export default function About() {
  return (
    <section className={styles.section}>
      {/* Ambient background layers */}
      <div className={styles.ambientOrb1} aria-hidden="true" />
      <div className={styles.ambientOrb2} aria-hidden="true" />
      <div className={styles.gridOverlay} aria-hidden="true" />

      <div className="container-xxl px-4 px-md-5">
        {/* ── Top label ── */}
        <div className={`row ${styles.labelRow}`}>
          <div className="col-12">
            <span className={styles.eyebrow}>
              <span className={styles.eyebrowDot} />
              Who We Are
            </span>
          </div>
        </div>

        {/* ── Hero row ── */}
        <div className="row align-items-center g-5 mb-5">
          {/* Left */}
          <div className="col-12 col-lg-6 order-2 order-lg-1">
            <div className={styles.copyBlock}>
              <h2 className={styles.headline}>
                We Turn <em className={styles.accentItalic}>Ambition</em>
                <br />
                Into Authority.
              </h2>

              <p className={styles.lead}>
                We are a full-service digital marketing agency obsessed with one
                thing — making your brand impossible to ignore.
              </p>

              <p className={styles.body}>
                We combine strategy, creativity, and technology to deliver real
                growth with measurable results.
              </p>

              {/* Pillars */}
              <div
                className={`d-flex flex-wrap gap-3 mt-4 ${styles.pillarsRow}`}
              >
                {pillars.map((p) => (
                  <div key={p.title} className={styles.pillarChip}>
                    <span className={styles.pillarTitle}>{p.title}</span>
                    <span className={styles.pillarDesc}>{p.desc}</span>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <div
                className={`d-flex align-items-center gap-4 mt-5 ${styles.ctaRow}`}
              >
                <button className={styles.ctaPrimary}>
                  <span>Our Work</span>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path
                      d="M3 8h10M9 4l4 4-4 4"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>

                <a href="#" className={styles.ctaGhost}>
                  Meet the Team →
                </a>
              </div>
            </div>
          </div>

          {/* Right */}
          <div className="col-12 col-lg-6 order-1 order-lg-2">
            <div className={styles.imageFrame}>
              <div className={styles.imageGlow} />
              <div className={styles.imageBorder} />

              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80"
                alt="Our team"
                className={styles.heroImage}
              />

              <div className={styles.floatingBadge}>
                <span className={styles.badgeStar}>★</span>
                <div>
                  <div className={styles.badgeTitle}>Top Agency 2025</div>
                  <div className={styles.badgeSub}>Clutch Global</div>
                </div>
              </div>

              <div className={styles.cornerAccent} />
            </div>
          </div>
        </div>

        {/* ── Metrics ── */}
        <div className={`row g-4 ${styles.metricsRow}`}>
          {metrics.map((m, i) => (
            <div key={m.label} className="col-6 col-md-3">
              <div
                className={styles.metricCard}
                style={{ animationDelay: `${i * 0.12}s` }}
              >
                <div className={styles.metricIcon}>{m.icon}</div>
                <div className={styles.metricValue}>{m.value}</div>
                <div className={styles.metricLabel}>{m.label}</div>
                <div className={styles.metricGlow} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}