import { motion } from "framer-motion";
import CrecheButton from "../../CrecheButton";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      delay: 0.3 + i * 0.2,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  }),
};

const HeroSectionV1 = () => {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-4 py-24 md:px-8">
      {/* Soft radial glow */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 50% 50% at 50% 50%, hsl(var(--champagne) / 0.06) 0%, transparent 70%)",
        }}
      />

      <motion.span
        custom={0}
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        className="text-uppercase-label mb-8 block"
      >
        Los Angeles · 2027
      </motion.span>

      <motion.h1
        custom={1}
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        className="text-display-xl text-ivory text-center"
      >
        Crèche
      </motion.h1>

      <motion.p
        custom={2}
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        className="mt-6 font-display text-display-sm italic text-ivory-muted"
      >
        A club for young families
      </motion.p>

      <motion.div
        custom={3}
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        className="mt-12"
      >
        <CrecheButton to="/waitlist">Join the Waitlist</CrecheButton>
      </motion.div>

      {/* Simple scroll arrow */}
      <motion.div
        className="absolute bottom-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
      >
        <motion.div
          className="h-8 w-px bg-champagne/40"
          animate={{ scaleY: [0.5, 1, 0.5], opacity: [0.3, 0.8, 0.3] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>
    </section>
  );
};

export default HeroSectionV1;
