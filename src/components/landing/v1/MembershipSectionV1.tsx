import RevealOnScroll from "../../RevealOnScroll";
import CrecheButton from "../../CrecheButton";

const values = [
  { value: "$9,000", label: "Initiation" },
  { value: "$6,500", label: "Annual Dues" },
  { value: "150", label: "Founding Families" },
];

const MembershipSectionV1 = () => {
  return (
    <section className="px-4 py-24 md:px-8 md:py-40">
      <div className="mx-auto max-w-[900px] text-center">
        <RevealOnScroll>
          <span className="text-uppercase-label">Founding Membership</span>
        </RevealOnScroll>
        <RevealOnScroll delay={0.1}>
          <h2 className="mt-6 font-display text-display-lg text-ivory">
            150 families. <em className="italic text-champagne">One community.</em>
          </h2>
        </RevealOnScroll>

        <RevealOnScroll delay={0.2}>
          <div className="mt-16 grid grid-cols-3 gap-8 border-y border-champagne/10 py-12">
            {values.map((item) => (
              <div key={item.label} className="text-center">
                <div className="font-display text-[clamp(2rem,4vw,3.5rem)] font-light text-champagne">
                  {item.value}
                </div>
                <div className="mt-3 text-[0.7rem] uppercase tracking-[0.2em] text-warm-gray">
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </RevealOnScroll>

        <RevealOnScroll delay={0.3}>
          <p className="mx-auto mt-12 max-w-[600px] text-body-md text-ivory-muted">
            Founding members receive priority access to all club amenities,
            automatic preschool acceptance for their children, and the rare
            privilege of shaping a community from its very beginning.
          </p>
        </RevealOnScroll>

        <RevealOnScroll delay={0.4}>
          <div className="mt-16">
            <CrecheButton to="/waitlist">Request an Invitation</CrecheButton>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
};

export default MembershipSectionV1;
