import { motion } from "framer-motion";
import CrecheButton from "../CrecheButton";

const heroVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.9,
      delay: i * 0.15,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  }),
};

const HeroSection = () => {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center px-4 py-24 md:px-8">
      {/* Background gradient */}
      <motion.div
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          background:
            "radial-gradient(ellipse at 50% 40%, hsl(var(--champagne) / 0.08) 0%, transparent 60%)",
        }}
        animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.span
        custom={0}
        variants={heroVariants}
        initial="hidden"
        animate="visible"
        className="text-uppercase-label mb-6"
      >
        Los Angeles · 2027
      </motion.span>

      <motion.h1
        custom={1}
        variants={heroVariants}
        initial="hidden"
        animate="visible"
        className="text-display-xl text-ivory"
      >
        Crèche
      </motion.h1>

      <motion.p
        custom={2}
        variants={heroVariants}
        initial="hidden"
        animate="visible"
        className="mt-4 font-display text-display-sm italic text-ivory-muted"
      >
        A club for young families
      </motion.p>

      <motion.div
        custom={3}
        variants={heroVariants}
        initial="hidden"
        animate="visible"
        className="mt-12"
      >
        <CrecheButton to="/waitlist">Join the Waitlist</CrecheButton>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        custom={4}
        variants={heroVariants}
        initial="hidden"
        animate="visible"
        className="absolute bottom-16 flex flex-col items-center gap-3"
      >
        <span className="text-[0.65rem] uppercase tracking-[0.25em] text-warm-gray">
          Scroll
        </span>
        <motion.div
          className="h-12 w-px"
          style={{
            background:
              "linear-gradient(to bottom, hsl(var(--champagne)), transparent)",
          }}
          animate={{ opacity: [0.3, 1, 0.3], scaleY: [0.6, 1, 0.6] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>
    </section>
  );
};

export default HeroSection;
