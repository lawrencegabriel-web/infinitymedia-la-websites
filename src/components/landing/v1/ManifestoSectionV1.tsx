import RevealOnScroll from "../../RevealOnScroll";

const paragraphs = [
  "We spend a lot of time with our kids. Twice as much as our grandparents spent with our parents, in fact. And though we'd like to think we parent better than the golden generation, one thing we lost somewhere in the intervening six decades is that becoming a parent was never supposed to be a 24/7 activity.",
  "Deep down, we all understand this. But it's hard to do anything about it — the days of handing your kids a few dollars in the morning and yelling at them to be back by supper as you watch them bike away are long gone. So what's a millennial to do?",
  "We're building Crèche to be a modern incarnation of old wisdom. A place where great Californian families can come together and watch their kids form lifelong friendships. A place specifically designed for young families, with activities for kids of all ages and staff onsite to give parents a break.",
  "Above all, a place where the whole family can feel at home away from home.",
];

const ManifestoSectionV1 = () => {
  return (
    <section id="manifesto" className="px-4 py-24 md:px-8 md:py-40">
      <div className="mx-auto max-w-[800px]">
        <RevealOnScroll>
          <span className="text-uppercase-label">The Idea</span>
        </RevealOnScroll>
        <RevealOnScroll delay={0.1}>
          <h2 className="mt-6 font-display text-display-md italic text-ivory">
            "Sometimes it feels like the weekends are even harder than the weekdays."
          </h2>
        </RevealOnScroll>
        <div className="mt-12 space-y-8">
          {paragraphs.map((text, i) => (
            <RevealOnScroll key={i} delay={i * 0.1}>
              <p className={`text-body-lg ${i === 3 ? "font-display italic text-ivory text-display-sm" : "text-ivory-muted"}`}>
                {text}
              </p>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ManifestoSectionV1;
