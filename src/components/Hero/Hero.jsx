import { useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import style from "./Hero.module.css";

gsap.registerPlugin(ScrollTrigger);

const sections = [
  {
    kicker: "Brand Systems",
    title: "Build a digital presence with character.",
    description:
      "A premium identity-first hero that uses The EGO Studio palette, clean hierarchy, and the mascot as the visual anchor.",
    features: ["Navy-first visual system", "Orange conversion moments", "Mascot-led brand recall"],
    stat: "01",
    cardTitle: "Identity",
  },
  {
    kicker: "Growth Motion",
    title: "Turn attention into scroll-led action.",
    description:
      "The sticky story changes as the visitor scrolls, keeping one cinematic screen in focus while the message evolves.",
    features: ["GSAP ScrollTrigger progress", "Smooth content transitions", "Responsive motion control"],
    stat: "02",
    cardTitle: "Motion",
  },
];

const contentVariants = {
  enter: { opacity: 0, y: 42, filter: "blur(12px)" },
  center: { opacity: 1, y: 0, filter: "blur(0px)" },
  exit: { opacity: 0, y: -34, filter: "blur(10px)" },
};

function Hero() {
  const wrapperRef = useRef(null);
  const stickyRef = useRef(null);
  const imageRef = useRef(null);
  const progressRef = useRef(null);
  const [activeSection, setActiveSection] = useState(0);
  const [isDesktop, setIsDesktop] = useState(true);
  const reduceMotion = useReducedMotion();

  const current = sections[activeSection];
  const activeVariants =
    isDesktop && !reduceMotion
      ? contentVariants
      : {
          enter: { opacity: 0, y: 24 },
          center: { opacity: 1, y: 0 },
          exit: { opacity: 0, y: -18 },
        };

  const progressWidth = useMemo(
    () => `${((activeSection + 1) / sections.length) * 100}%`,
    [activeSection],
  );

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 992px)");
    const handleChange = () => setIsDesktop(mediaQuery.matches);

    handleChange();
    mediaQuery.addEventListener("change", handleChange);

    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  useEffect(() => {
    if (!wrapperRef.current || !stickyRef.current) return undefined;

    const context = gsap.context(() => {
      ScrollTrigger.create({
        trigger: wrapperRef.current,
        start: "top top",
        end: "bottom bottom",
        scrub: 0.7,
        onUpdate: (self) => {
          const nextIndex = Math.min(
            sections.length - 1,
            Math.floor(self.progress * sections.length),
          );

          setActiveSection(nextIndex);

          if (progressRef.current) {
            gsap.to(progressRef.current, {
              scaleX: self.progress,
              duration: 0.18,
              ease: "power2.out",
            });
          }

          if (!reduceMotion && imageRef.current) {
            gsap.to(imageRef.current, {
              y: -22 * self.progress,
              rotate: -3 + self.progress * 6,
              scale: 1 + self.progress * 0.04,
              duration: 0.28,
              ease: "power2.out",
            });
          }
        },
      });
    }, wrapperRef);

    return () => context.revert();
  }, [isDesktop, reduceMotion]);

  return (
    <section className={style.storyWrapper} ref={wrapperRef}>
      <div className={style.stickyHero} ref={stickyRef}>
        <div className={style.ambient} aria-hidden="true" />
        <div className={`container ${style.heroGrid}`}>
          <div className={style.leftPanel}>
          

            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={current.title}
                variants={activeVariants}
                initial={reduceMotion ? false : "enter"}
                animate="center"
                exit={reduceMotion ? undefined : "exit"}
                transition={{ duration: 0.72, ease: [0.22, 1, 0.36, 1] }}
                className={style.copyBlock}
              >
                <span className={style.kicker}>{current.kicker}</span>
                <h1>{current.title}</h1>
                <p>{current.description}</p>
                <ul>
                  {current.features.map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className={style.visualPanel}>
            <motion.div
              className={style.glassCard}
              animate={reduceMotion ? undefined : { y: [0, -14, 0] }}
              transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className={style.cardHeader}>
                <span>{current.stat}</span>
                <strong>{current.cardTitle}</strong>
              </div>

              <div className={style.mascotFrame}>
                <img
                  ref={imageRef}
                  src="/Mascot Light Orange.png"
                  alt="The EGO Studio mascot"
                />
              </div>

              <div className={style.cardFooter}>
                <span style={{ width: progressWidth }} />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
