import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import RevealOnScroll from "../RevealOnScroll";
import CrecheButton from "../CrecheButton";

const values = [
  { value: 9000, prefix: "$", suffix: "", label: "Initiation" },
  { value: 6500, prefix: "$", suffix: "", label: "Annual Dues" },
  { value: 150, prefix: "", suffix: "", label: "Founding Families" },
];

const AnimatedCounter = ({
  value,
  prefix,
  suffix,
}: {
  value: number;
  prefix: string;
  suffix: string;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const duration = 2000;
    const startTime = Date.now();

    const tick = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * value));
      if (progress < 1) requestAnimationFrame(tick);
    };

    requestAnimationFrame(tick);
  }, [isInView, value]);

  return (
    <div ref={ref} className="font-display text-[clamp(2.5rem,5vw,4rem)] font-light leading-[1] text-champagne">
      {prefix}
      {count.toLocaleString()}
      {suffix}
    </div>
  );
};

const MembershipSection = () => {
  return (
    <section className="relative overflow-hidden px-4 py-24 md:px-8 md:py-40">
      {/* Dramatic top border */}
      <motion.div
        className="absolute top-0 left-1/2 h-px -translate-x-1/2 bg-champagne/20"
        initial={{ width: 0 }}
        whileInView={{ width: "80%" }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
      />

      <div className="mx-auto max-w-[900px]">
        <div className="text-center">
          <RevealOnScroll>
            <span className="text-uppercase-label">Founding Membership</span>
          </RevealOnScroll>

          <RevealOnScroll delay={0.1}>
            <h2 className="mt-6 font-display text-display-lg text-ivory">
              150 families.
              <br />
              <motion.em
                className="italic text-champagne"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
              >
                One community.
              </motion.em>
            </h2>
          </RevealOnScroll>
        </div>

        {/* Animated counters */}
        <RevealOnScroll delay={0.2}>
          <div className="mt-16 grid grid-cols-3 gap-8 border-y border-champagne/10 py-12">
            {values.map((item) => (
              <div key={item.label} className="text-center">
                <AnimatedCounter
                  value={item.value}
                  prefix={item.prefix}
                  suffix={item.suffix}
                />
                <div className="mt-3 text-[0.7rem] uppercase tracking-[0.2em] text-warm-gray">
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </RevealOnScroll>

        <RevealOnScroll delay={0.3}>
          <p className="mx-auto mt-12 max-w-[600px] text-center text-body-md text-ivory-muted">
            Founding members receive priority access to all club amenities,
            automatic preschool acceptance for their children, and the rare
            privilege of shaping a community from its very beginning.
          </p>
        </RevealOnScroll>

        <RevealOnScroll delay={0.4}>
          <div className="mt-16 text-center">
            <CrecheButton to="/waitlist">Request an Invitation</CrecheButton>
          </div>
        </RevealOnScroll>
      </div>

      {/* Dramatic bottom line */}
      <motion.div
        className="absolute bottom-0 left-1/2 h-px -translate-x-1/2 bg-champagne/10"
        initial={{ width: 0 }}
        whileInView={{ width: "60%" }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
      />
    </section>
  );
};

export default MembershipSection;
