import { motion } from "framer-motion";
import CrecheButton from "../CrecheButton";

const HeroSection = () => {
  return (
    <section className="relative flex min-h-screen flex-col justify-end overflow-hidden px-6 pb-20 md:px-12 md:pb-32">
      {/* Atmospheric background */}
      <div className="pointer-events-none absolute inset-0">
        <motion.div
          className="absolute left-1/2 top-1/3 h-[800px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-[0.07]"
          style={{
            background: "radial-gradient(circle, hsl(var(--gold)) 0%, transparent 70%)",
          }}
          animate={{ scale: [1, 1.15, 1], opacity: [0.07, 0.1, 0.07] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -right-32 top-0 h-[400px] w-[1px] origin-top"
          style={{ background: "linear-gradient(to bottom, hsl(var(--gold) / 0.15), transparent)" }}
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 2, delay: 0.5, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
        />
      </div>

      {/* Top label */}
      <motion.div
        className="absolute left-6 top-32 md:left-12 md:top-40"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        <span className="text-label">Los Angeles · 2027</span>
        <span className="gold-line mt-3" />
      </motion.div>

      {/* Main title */}
      <div className="relative">
        <motion.h1
          className="text-hero text-cream"
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
        >
          Crèche
        </motion.h1>

        <div className="mt-6 flex flex-col gap-6 md:mt-8 md:flex-row md:items-end md:justify-between">
          <motion.p
            className="font-display text-display-sm italic text-cream-muted"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
          >
            A club for young families
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.7, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
          >
            <CrecheButton to="/waitlist">Join the Waitlist</CrecheButton>
          </motion.div>
        </div>

        {/* Horizontal gold line */}
        <motion.div
          className="mt-8 h-px origin-left bg-gold/20"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.5, delay: 0.8, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
        />
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 right-6 flex flex-col items-center gap-3 md:right-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
      >
        <span className="text-[0.6rem] uppercase tracking-[0.3em] text-stone [writing-mode:vertical-lr]">
          Scroll
        </span>
        <motion.div
          className="h-10 w-px"
          style={{ background: "linear-gradient(to bottom, hsl(var(--gold) / 0.6), transparent)" }}
          animate={{ opacity: [0.3, 1, 0.3], scaleY: [0.5, 1, 0.5] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>
    </section>
  );
};

export default HeroSection;
