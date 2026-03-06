import RevealOnScroll from "../../RevealOnScroll";

const PreschoolBannerV1 = () => {
  return (
    <section className="px-4 py-16 md:px-8">
      <RevealOnScroll>
        <div className="mx-auto max-w-[750px] border border-champagne/10 px-8 py-20 text-center md:px-16" style={{ backgroundColor: "hsl(var(--champagne) / 0.03)" }}>
          <span className="text-uppercase-label">Fall 2027</span>
          <h3 className="mt-5 font-display text-display-sm text-ivory">
            Our preschool opens with automatic acceptance for founding members
          </h3>
          <p className="mt-4 text-body-md text-ivory-muted">
            Education woven into the fabric of the club, not bolted on.
          </p>
        </div>
      </RevealOnScroll>
    </section>
  );
};

export default PreschoolBannerV1;
