import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import RevealOnScroll from "../RevealOnScroll";

const amenities = [
  {
    number: "01",
    title: "Eat & Drink",
    description:
      "Family quick-service dining for the chaos of Saturday lunch. An adults-only lounge and seated dining for when you need to remember you're a person, not just a parent.",
  },
  {
    number: "02",
    title: "Play",
    description:
      "Two padel courts, two pickleball courts, a versatile sport court, and three golf simulators with a putting green. Movement for every age and every mood.",
  },
  {
    number: "03",
    title: "Entertainment",
    description:
      "A 10-foot projector screen for movie nights and match days. Seasonal programming that gives the family a reason to come back every week.",
  },
  {
    number: "04",
    title: "Work",
    description:
      "Coworking desks, phone booths, conference rooms, and dedicated offices. Because sometimes the best parenting move is finishing that email before dinner.",
  },
];

const AmenitiesSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const bgX = useTransform(scrollYProgress, [0, 1], ["0%", "-15%"]);

  return (
    <section
      id="amenities"
      ref={sectionRef}
      className="relative overflow-hidden bg-forest py-24 md:py-40"
    >
      {/* Moving gradient background */}
      <motion.div
        className="pointer-events-none absolute inset-0"
        style={{
          x: bgX,
          background:
            "radial-gradient(ellipse 80% 60% at 70% 40%, hsl(var(--champagne) / 0.08) 0%, transparent 60%)",
        }}
      />

      <div className="relative mx-auto max-w-[1400px] px-4 md:px-8">
        {/* Header */}
        <div className="mb-16 md:mb-24">
          <RevealOnScroll>
            <span className="text-uppercase-label">The Club</span>
          </RevealOnScroll>
          <RevealOnScroll delay={0.1}>
            <h2 className="mt-4 text-display-lg text-ivory max-w-[700px]">
              Designed around
              <br />
              <em className="italic text-champagne">how families actually live</em>
            </h2>
          </RevealOnScroll>
          <RevealOnScroll delay={0.2}>
            <p className="mt-8 max-w-[550px] text-body-md text-ivory-muted">
              Every corner considered. Every detail in service of the same
              question: what would make this weekend better?
            </p>
          </RevealOnScroll>
        </div>

        {/* Staggered cards with hover effects */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {amenities.map((amenity, i) => (
            <motion.div
              key={amenity.number}
              initial={{ opacity: 0, y: 60, rotateX: 15 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 1,
                delay: i * 0.12,
                ease: [0.16, 1, 0.3, 1],
              }}
              whileHover={{ y: -12, transition: { duration: 0.4 } }}
              className="group relative border border-champagne/10 bg-midnight/50 p-8 backdrop-blur-sm transition-colors duration-500 hover:border-champagne/30 md:p-10"
            >
              {/* Top line animation on hover */}
              <div className="absolute top-0 left-0 h-px w-0 bg-champagne transition-all duration-700 group-hover:w-full" />

              <motion.span
                className="font-display text-[3rem] font-light leading-none text-champagne/15 transition-colors duration-500 group-hover:text-champagne/30"
              >
                {amenity.number}
              </motion.span>
              <h3 className="mt-4 font-display text-display-sm text-ivory transition-colors duration-500 group-hover:text-champagne">
                {amenity.title}
              </h3>
              <p className="mt-4 text-body-sm text-ivory-muted">
                {amenity.description}
              </p>

              {/* Bottom accent */}
              <div className="absolute bottom-0 right-0 h-px w-0 bg-champagne/40 transition-all duration-700 delay-100 group-hover:w-full" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AmenitiesSection;
