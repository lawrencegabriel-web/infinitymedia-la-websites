import { motion } from "framer-motion";
import Reveal from "../RevealOnScroll";

const PreschoolBanner = () => {
  return (
    <section className="relative px-6 py-16 md:px-12 md:py-24">
      <Reveal>
        <div className="relative mx-auto max-w-[800px] overflow-hidden border border-gold/10 px-8 py-20 text-center md:px-20">
          {/* Corner accents */}
          <div className="absolute left-4 top-4 h-6 w-6 border-l border-t border-gold/30" />
          <div className="absolute right-4 top-4 h-6 w-6 border-r border-t border-gold/30" />
          <div className="absolute bottom-4 left-4 h-6 w-6 border-b border-l border-gold/30" />
          <div className="absolute bottom-4 right-4 h-6 w-6 border-b border-r border-gold/30" />

          <span className="text-label">Fall 2027</span>
          <h3 className="mx-auto mt-6 max-w-[500px] font-display text-display-sm text-cream">
            Our preschool opens with automatic acceptance for founding members
          </h3>
          <motion.div
            className="mx-auto mt-6 h-px w-16 origin-center bg-gold/30"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
          />
          <p className="mt-6 text-body-md text-stone">
            Education woven into the fabric of the club, not bolted on.
          </p>
        </div>
      </Reveal>
    </section>
  );
};

export default PreschoolBanner;
