import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import CrecheButton from "../CrecheButton";

const letterVariants = {
  hidden: { y: "100%", opacity: 0 },
  visible: (i: number) => ({
    y: "0%",
    opacity: 1,
    transition: {
      duration: 1.2,
      delay: 0.8 + i * 0.06,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  }),
};

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.2,
      delay: i,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  }),
};

const title = "Crèche";

const HeroSection = () => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const titleY = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const subtitleY = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.8], [1, 0.9]);

  return (
    <section
      ref={ref}
      className="relative flex min-h-[110vh] flex-col items-center justify-center overflow-hidden px-4 py-24 md:px-8"
    >
      {/* Animated concentric rings */}
      {[1, 2, 3].map((ring) => (
        <motion.div
          key={ring}
          className="pointer-events-none absolute rounded-full border border-champagne/5"
          style={{
            width: `${ring * 35}vw`,
            height: `${ring * 35}vw`,
          }}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{
            duration: 2,
            delay: 0.3 + ring * 0.3,
            ease: [0.16, 1, 0.3, 1],
          }}
        />
      ))}

      {/* Floating champagne orbs */}
      {[
        { x: "15%", y: "25%", size: 300, delay: 0 },
        { x: "75%", y: "65%", size: 200, delay: 2 },
        { x: "60%", y: "20%", size: 150, delay: 4 },
      ].map((orb, i) => (
        <motion.div
          key={i}
          className="pointer-events-none absolute rounded-full"
          style={{
            left: orb.x,
            top: orb.y,
            width: orb.size,
            height: orb.size,
            background: `radial-gradient(circle, hsl(var(--champagne) / 0.04) 0%, transparent 70%)`,
            filter: "blur(60px)",
          }}
          animate={{
            x: [0, 40, -20, 0],
            y: [0, -30, 20, 0],
          }}
          transition={{
            duration: 15,
            delay: orb.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Top label */}
      <motion.div style={{ opacity, scale }}>
        <motion.span
          custom={0.5}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="text-uppercase-label mb-10 block"
        >
          Los Angeles · 2027
        </motion.span>
      </motion.div>

      {/* Letter-by-letter title reveal */}
      <motion.div style={{ y: titleY, opacity, scale }} className="overflow-hidden">
        <h1 className="text-display-xl text-ivory flex">
          {title.split("").map((letter, i) => (
            <motion.span
              key={i}
              custom={i}
              variants={letterVariants}
              initial="hidden"
              animate="visible"
              className="inline-block"
            >
              {letter}
            </motion.span>
          ))}
        </h1>
      </motion.div>

      {/* Subtitle with line drawing */}
      <motion.div style={{ y: subtitleY, opacity }} className="relative mt-6">
        <motion.div
          className="absolute -left-8 top-1/2 h-px bg-champagne/40"
          initial={{ width: 0 }}
          animate={{ width: 48 }}
          transition={{ duration: 1.2, delay: 1.8, ease: [0.16, 1, 0.3, 1] }}
        />
        <motion.div
          className="absolute -right-8 top-1/2 h-px bg-champagne/40"
          initial={{ width: 0 }}
          animate={{ width: 48 }}
          transition={{ duration: 1.2, delay: 1.8, ease: [0.16, 1, 0.3, 1] }}
        />
        <motion.p
          custom={1.6}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="px-14 font-display text-display-sm italic text-ivory-muted"
        >
          A club for young families
        </motion.p>
      </motion.div>

      {/* CTA */}
      <motion.div
        custom={2.0}
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        className="mt-14"
      >
        <CrecheButton to="/waitlist">Join the Waitlist</CrecheButton>
      </motion.div>

      {/* Scroll indicator with rotating text */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 1 }}
        className="absolute bottom-12 flex flex-col items-center gap-4"
      >
        <motion.div
          className="relative h-14 w-14"
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        >
          <svg viewBox="0 0 100 100" className="h-full w-full">
            <defs>
              <path id="circle" d="M 50,50 m -37,0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" />
            </defs>
            <text className="fill-warm-gray text-[11px] uppercase tracking-[0.35em]">
              <textPath href="#circle">scroll · explore · discover · </textPath>
            </text>
          </svg>
        </motion.div>
        <motion.div
          className="h-10 w-px"
          style={{
            background: "linear-gradient(to bottom, hsl(var(--champagne)), transparent)",
          }}
          animate={{ scaleY: [0.4, 1, 0.4], opacity: [0.3, 1, 0.3] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>
    </section>
  );
};

export default HeroSection;
