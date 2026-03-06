import { motion } from "framer-motion";
import Reveal from "../RevealOnScroll";

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
    <section id="amenities" className="relative overflow-hidden py-32 md:py-48">
      {/* Dark section background with subtle gradient */}
      <div className="absolute inset-0 bg-noir-light">
        <div
          className="absolute inset-0 opacity-60"
          style={{
            background: "radial-gradient(ellipse at 70% 20%, hsl(var(--gold) / 0.04) 0%, transparent 50%)",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-[1400px] px-6 md:px-12">
        {/* Header */}
        <div className="mb-20 flex items-start gap-6 md:mb-28">
          <Reveal>
            <span className="font-display text-[4rem] font-light leading-none text-gold/10 md:text-[6rem]">02</span>
          </Reveal>
          <div className="pt-4">
            <Reveal delay={0.05}>
              <span className="text-label">The Club</span>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="mt-4 text-display-lg text-cream">
                Designed around<br />
                <em className="italic text-gold">how families actually live</em>
              </h2>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="mt-6 max-w-[450px] text-body-md text-stone">
                Every corner considered. Every detail in service of the same question: what would make this weekend better?
              </p>
            </Reveal>
          </div>
        </div>

        {/* Cards - alternating layout */}
        <div className="space-y-0">
          {amenities.map((amenity, i) => (
            <motion.div
              key={amenity.number}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.9,
                delay: i * 0.1,
                ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
              }}
              className="group border-t border-gold/10 py-10 md:py-14"
            >
              <div className={`flex flex-col gap-6 md:flex-row md:items-start md:gap-16 ${i % 2 === 1 ? "md:flex-row-reverse md:text-right" : ""}`}>
                <span className="font-display text-[2.5rem] font-light text-gold/15 transition-colors duration-500 group-hover:text-gold/30 md:text-[3.5rem]">
                  {amenity.number}
                </span>
                <div className="flex-1">
                  <h3 className="font-display text-display-sm text-cream transition-colors duration-500 group-hover:text-gold">
                    {amenity.title}
                  </h3>
                  <p className="mt-3 max-w-[500px] text-body-md text-stone">
                    {amenity.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
          <div className="border-t border-gold/10" />
        </div>
      </div>
    </section>
  );
};

export default AmenitiesSection;
