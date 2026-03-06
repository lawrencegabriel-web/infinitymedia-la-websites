import { motion } from "framer-motion";
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
  return (
    <section id="amenities" className="relative overflow-hidden bg-forest py-24 md:py-40">
      {/* Radial gradient overlay */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 80% 20%, hsl(var(--champagne) / 0.06) 0%, transparent 50%)",
        }}
      />

      <div className="relative mx-auto max-w-[1400px] px-4 md:px-8">
        {/* Header */}
        <div className="mb-16 text-center md:mb-24">
          <RevealOnScroll>
            <span className="text-uppercase-label">The Club</span>
          </RevealOnScroll>
          <RevealOnScroll delay={0.1}>
            <h2 className="mt-4 text-display-md text-ivory">
              Designed around
              <br />
              <em className="italic">how families actually live</em>
            </h2>
          </RevealOnScroll>
          <RevealOnScroll delay={0.2}>
            <p className="mx-auto mt-8 max-w-[550px] text-body-md text-ivory-muted">
              Every corner considered. Every detail in service of the same
              question: what would make this weekend better?
            </p>
          </RevealOnScroll>
        </div>

        {/* Cards grid */}
        <div className="grid gap-px bg-champagne/10 md:grid-cols-2">
          {amenities.map((amenity, i) => (
            <motion.div
              key={amenity.number}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.8,
                delay: i * 0.15,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="bg-forest p-8 transition-colors hover:bg-forest-light md:p-12 lg:p-16"
            >
              <span className="font-display text-[1.2rem] text-champagne/40">
                {amenity.number}
              </span>
              <h3 className="mt-3 font-display text-display-sm text-ivory">
                {amenity.title}
              </h3>
              <p className="mt-4 text-body-md text-ivory-muted">
                {amenity.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AmenitiesSection;
