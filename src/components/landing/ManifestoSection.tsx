import RevealOnScroll from "../RevealOnScroll";

const ManifestoSection = () => {
  return (
    <section id="manifesto" className="px-4 py-24 md:px-8 md:py-40">
      <div className="mx-auto grid max-w-[1400px] gap-16 md:grid-cols-2 md:gap-24">
        {/* Left column */}
        <div>
          <RevealOnScroll>
            <span className="text-uppercase-label">The Idea</span>
          </RevealOnScroll>
          <RevealOnScroll delay={0.1}>
            <blockquote className="mt-6 font-display text-display-sm italic text-ivory">
              "Sometimes it feels like the weekends are even harder than the
              weekdays."
            </blockquote>
          </RevealOnScroll>
        </div>

        {/* Right column */}
        <div className="space-y-6">
          <RevealOnScroll delay={0}>
            <p className="text-body-lg text-ivory-muted">
              We spend a lot of time with our kids. Twice as much as our
              grandparents spent with our parents, in fact. And though we'd like
              to think we parent better than the golden generation, one thing we
              lost somewhere in the intervening six decades is that becoming a
              parent was never supposed to be a 24/7 activity.
            </p>
          </RevealOnScroll>
          <RevealOnScroll delay={0.2}>
            <p className="text-body-lg text-ivory-muted">
              Deep down, we all understand this. But it's hard to do anything
              about it — the days of handing your kids a few dollars in the
              morning and yelling at them to be back by supper as you watch them
              bike away are long gone. So what's a millennial to do?
            </p>
          </RevealOnScroll>
          <RevealOnScroll delay={0.4}>
            <p className="text-body-lg text-ivory-muted">
              We're building Crèche to be a modern incarnation of old wisdom. A
              place where great Californian families can come together and watch
              their kids form lifelong friendships. A place specifically designed
              for young families, with activities for kids of all ages and staff
              onsite to give parents a break.
            </p>
          </RevealOnScroll>
          <RevealOnScroll delay={0.6}>
            <p className="text-body-lg text-ivory-muted">
              Above all, a place where the whole family can feel at home away
              from home.
            </p>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
};

export default ManifestoSection;
