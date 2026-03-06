import { motion } from "framer-motion";
import RevealOnScroll from "../../RevealOnScroll";

const amenities = [
  { number: "01", title: "Eat & Drink", description: "Family quick-service dining for the chaos of Saturday lunch. An adults-only lounge and seated dining for when you need to remember you're a person, not just a parent." },
  { number: "02", title: "Play", description: "Two padel courts, two pickleball courts, a versatile sport court, and three golf simulators with a putting green. Movement for every age and every mood." },
  { number: "03", title: "Entertainment", description: "A 10-foot projector screen for movie nights and match days. Seasonal programming that gives the family a reason to come back every week." },
  { number: "04", title: "Work", description: "Coworking desks, phone booths, conference rooms, and dedicated offices. Because sometimes the best parenting move is finishing that email before dinner." },
];

const AmenitiesSectionV1 = () => {
  return (
    <section id="amenities" className="relative overflow-hidden bg-forest py-24 md:py-40">
      <div className="mx-auto max-w-[1400px] px-4 md:px-8">
        <div className="mb-16">
          <RevealOnScroll>
            <span className="text-uppercase-label">The Club</span>
          </RevealOnScroll>
          <RevealOnScroll delay={0.1}>
            <h2 className="mt-4 text-display-lg text-ivory max-w-[700px]">
              Designed around <em className="italic text-champagne">how families actually live</em>
            </h2>
          </RevealOnScroll>
        </div>

        <div className="grid gap-px border border-champagne/10 md:grid-cols-2">
          {amenities.map((amenity, i) => (
            <RevealOnScroll key={amenity.number} delay={i * 0.1}>
              <div className="border border-champagne/10 p-8 md:p-12 transition-colors duration-500 hover:bg-champagne/5">
                <span className="text-[0.7rem] uppercase tracking-[0.2em] text-warm-gray">
                  {amenity.number}
                </span>
                <h3 className="mt-3 font-display text-display-sm text-ivory">
                  {amenity.title}
                </h3>
                <p className="mt-4 text-body-sm text-ivory-muted">
                  {amenity.description}
                </p>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AmenitiesSectionV1;
