import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import RevealOnScroll from "../RevealOnScroll";

const paragraphs = [
  "We spend a lot of time with our kids. Twice as much as our grandparents spent with our parents, in fact. And though we'd like to think we parent better than the golden generation, one thing we lost somewhere in the intervening six decades is that becoming a parent was never supposed to be a 24/7 activity.",
  "Deep down, we all understand this. But it's hard to do anything about it — the days of handing your kids a few dollars in the morning and yelling at them to be back by supper as you watch them bike away are long gone. So what's a millennial to do?",
  "We're building Crèche to be a modern incarnation of old wisdom. A place where great Californian families can come together and watch their kids form lifelong friendships. A place specifically designed for young families, with activities for kids of all ages and staff onsite to give parents a break.",
  "Above all, a place where the whole family can feel at home away from home.",
];

const ManifestoSection = () => {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 0.5], ["0%", "100%"]);

  return (
    <section id="manifesto" ref={containerRef} className="relative px-4 py-24 md:px-8 md:py-40">
      <div className="mx-auto grid max-w-[1400px] gap-16 md:grid-cols-[1fr_1.2fr] md:gap-24">
        {/* Left column - sticky quote */}
        <div className="md:sticky md:top-40 md:self-start">
          <RevealOnScroll>
            <span className="text-uppercase-label">The Idea</span>
          </RevealOnScroll>
          <RevealOnScroll delay={0.1}>
            <blockquote className="mt-6 font-display text-display-md italic text-ivory">
              "Sometimes it feels like the weekends are even harder than the weekdays."
            </blockquote>
          </RevealOnScroll>
          {/* Animated vertical line */}
          <motion.div
            className="mt-10 hidden w-px bg-champagne/30 md:block"
            style={{ height: lineHeight, maxHeight: 200 }}
          />
        </div>

        {/* Right column - staggered paragraphs with word highlight */}
        <div className="space-y-10">
          {paragraphs.map((text, i) => (
            <RevealOnScroll key={i} delay={i * 0.15} y={50}>
              <motion.p
                className="text-body-lg text-ivory-muted"
                whileInView={{ opacity: 1 }}
                initial={{ opacity: 0.4 }}
                viewport={{ once: true, amount: 0.8 }}
                transition={{ duration: 0.8 }}
              >
                {i === 3 ? (
                  <span className="text-display-sm text-ivory font-display italic">
                    {text}
                  </span>
                ) : (
                  text
                )}
              </motion.p>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ManifestoSection;
