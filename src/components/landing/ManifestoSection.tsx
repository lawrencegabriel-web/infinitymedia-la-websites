import { motion } from "framer-motion";
import Reveal from "../RevealOnScroll";

const ManifestoSection = () => {
  return (
    <section id="manifesto" className="relative px-6 py-32 md:px-12 md:py-48">
      <div className="mx-auto max-w-[1400px]">
        {/* Section number + label */}
        <Reveal>
          <div className="mb-16 flex items-center gap-6">
            <span className="font-display text-[4rem] font-light leading-none text-gold/10 md:text-[6rem]">01</span>
            <div>
              <span className="text-label">The Idea</span>
              <span className="gold-line mt-2" />
            </div>
          </div>
        </Reveal>

        <div className="grid gap-12 md:grid-cols-[1fr_1.2fr] md:gap-24">
          {/* Left - Quote */}
          <Reveal delay={0.1}>
            <blockquote className="font-display text-display-md italic text-cream">
              "Sometimes it feels like the weekends are even harder than the weekdays."
            </blockquote>
          </Reveal>

          {/* Right - Body text */}
          <div className="space-y-8">
            {[
              "We spend a lot of time with our kids. Twice as much as our grandparents spent with our parents, in fact. And though we'd like to think we parent better than the golden generation, one thing we lost somewhere in the intervening six decades is that becoming a parent was never supposed to be a 24/7 activity.",
              "Deep down, we all understand this. But it's hard to do anything about it — the days of handing your kids a few dollars in the morning and yelling at them to be back by supper as you watch them bike away are long gone. So what's a millennial to do?",
              "We're building Crèche to be a modern incarnation of old wisdom. A place where great Californian families can come together and watch their kids form lifelong friendships. A place specifically designed for young families, with activities for kids of all ages and staff onsite to give parents a break.",
              "Above all, a place where the whole family can feel at home away from home.",
            ].map((text, i) => (
              <Reveal key={i} delay={0.15 * i}>
                <p className="text-body-lg text-cream-muted">{text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>

      {/* Decorative vertical line */}
      <motion.div
        className="absolute bottom-0 left-1/2 h-24 w-px -translate-x-1/2 origin-top"
        style={{ background: "linear-gradient(to bottom, hsl(var(--gold) / 0.2), transparent)" }}
        initial={{ scaleY: 0 }}
        whileInView={{ scaleY: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
      />
    </section>
  );
};

export default ManifestoSection;
