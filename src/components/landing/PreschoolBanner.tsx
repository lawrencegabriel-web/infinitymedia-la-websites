import { motion } from "framer-motion";
import RevealOnScroll from "../RevealOnScroll";

const PreschoolBanner = () => {
  return (
    <section className="px-4 py-16 md:px-8">
      <RevealOnScroll>
        <motion.div
          className="group relative mx-auto max-w-[750px] overflow-hidden border border-champagne/10 px-8 py-20 text-center md:px-16"
          style={{ backgroundColor: "hsl(var(--champagne) / 0.03)" }}
          whileHover={{ borderColor: "hsl(37 42% 55% / 0.25)" }}
          transition={{ duration: 0.5 }}
        >
          {/* Corner accents */}
          <div className="absolute top-0 left-0 h-6 w-px bg-champagne/30" />
          <div className="absolute top-0 left-0 h-px w-6 bg-champagne/30" />
          <div className="absolute bottom-0 right-0 h-6 w-px bg-champagne/30" />
          <div className="absolute bottom-0 right-0 h-px w-6 bg-champagne/30" />

          <motion.span
            className="text-uppercase-label"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Fall 2027
          </motion.span>
          <motion.h3
            className="mt-5 font-display text-display-sm text-ivory"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Our preschool opens with automatic acceptance for founding members
          </motion.h3>
          <motion.p
            className="mt-4 text-body-md text-ivory-muted"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Education woven into the fabric of the club, not bolted on.
          </motion.p>
        </motion.div>
      </RevealOnScroll>
    </section>
  );
};

export default PreschoolBanner;
