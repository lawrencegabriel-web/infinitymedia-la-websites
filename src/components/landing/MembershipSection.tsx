import { motion } from "framer-motion";
import Reveal from "../RevealOnScroll";
import CrecheButton from "../CrecheButton";

const values = [
  { value: "$9,000", label: "Initiation" },
  { value: "$6,500", label: "Annual Dues" },
  { value: "150", label: "Founding Families" },
];

const MembershipSection = () => {
  return (
    <section className="relative px-6 py-32 md:px-12 md:py-48">
      <div className="mx-auto max-w-[1400px]">
        {/* Section number */}
        <Reveal>
          <div className="mb-16 flex items-center gap-6">
            <span className="font-display text-[4rem] font-light leading-none text-gold/10 md:text-[6rem]">03</span>
            <div>
              <span className="text-label">Founding Membership</span>
              <span className="gold-line mt-2" />
            </div>
          </div>
        </Reveal>

        <div className="grid gap-16 md:grid-cols-[1fr_1fr] md:gap-24">
          {/* Left - Headline and values */}
          <div>
            <Reveal delay={0.1}>
              <h2 className="text-display-lg text-cream">
                150 families.
                <br />
                <em className="italic text-gold">One community.</em>
              </h2>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="mt-16 grid grid-cols-3 gap-6">
                {values.map((item, i) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.8,
                      delay: 0.3 + i * 0.1,
                      ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
                    }}
                  >
                    <div className="font-display text-[clamp(1.8rem,3.5vw,2.8rem)] font-light leading-[1.1] text-gold">
                      {item.value}
                    </div>
                    <div className="mt-2 text-[0.65rem] uppercase tracking-[0.2em] text-stone">
                      {item.label}
                    </div>
                  </motion.div>
                ))}
              </div>
            </Reveal>
          </div>

          {/* Right - Body text and CTA */}
          <div className="flex flex-col justify-center">
            <Reveal delay={0.2}>
              <p className="text-body-lg text-cream-muted">
                Founding members receive priority access to all club amenities,
                automatic preschool acceptance for their children, and the rare
                privilege of shaping a community from its very beginning.
              </p>
            </Reveal>

            <Reveal delay={0.3}>
              <div className="mt-12">
                <CrecheButton to="/waitlist">Request an Invitation</CrecheButton>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MembershipSection;
