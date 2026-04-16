import { useState } from "react";

/* ────────────────────────────────────────────
   Executive Brief — Oodles Hero A/B Test
   Compact, mobile-first, high-impact
   ──────────────────────────────────────────── */

const STATUS_COLOR = "bg-amber-500";
const STATUS_TEXT = "Pending Approval";

const Badge = ({ children, color = "bg-white/10 text-white/70" }: { children: React.ReactNode; color?: string }) => (
  <span className={`inline-flex items-center text-[11px] font-semibold px-2.5 py-1 rounded-full ${color}`}>
    {children}
  </span>
);

const SectionTitle = ({ children }: { children: React.ReactNode }) => (
  <h2 className="text-white text-sm font-bold uppercase tracking-wider mb-3 flex items-center gap-2">
    <span className="w-1 h-4 bg-orange-500 rounded-full" />
    {children}
  </h2>
);

const VariantCard = ({
  label,
  angle,
  headline,
  subline,
  color,
}: {
  label: string;
  angle: string;
  headline: string;
  subline: string;
  color: string;
}) => (
  <div className={`border rounded-xl p-4 ${color}`}>
    <div className="flex items-center gap-2 mb-2">
      <span className="text-[10px] font-bold uppercase tracking-widest text-white/50">{label}</span>
      <Badge color="bg-orange-500/15 text-orange-400">{angle}</Badge>
    </div>
    <p className="text-white font-bold text-base leading-snug mb-1.5">"{headline}"</p>
    <p className="text-white/50 text-xs leading-relaxed">{subline}</p>
  </div>
);

const V2Card = ({
  number,
  title,
  headline,
  principle,
}: {
  number: number;
  title: string;
  headline: string;
  principle: string;
}) => (
  <div className="bg-white/[0.03] border border-white/10 rounded-lg p-3">
    <div className="flex items-center gap-2 mb-1.5">
      <span className="bg-emerald-500/20 text-emerald-400 text-[10px] font-bold px-2 py-0.5 rounded-full">V2-{number}</span>
      <span className="text-white/80 text-xs font-semibold">{title}</span>
    </div>
    <p className="text-white/90 text-sm font-semibold leading-snug mb-1">"{headline}"</p>
    <p className="text-white/40 text-[11px]">{principle}</p>
  </div>
);

const PreviewLink = ({ label, href, badge }: { label: string; href: string; badge?: string }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center justify-between bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 hover:border-orange-500/30 rounded-xl px-4 py-3 transition-all group"
  >
    <div className="flex items-center gap-3">
      <div className="w-8 h-8 rounded-lg bg-orange-500/15 flex items-center justify-center group-hover:bg-orange-500/25 transition-colors">
        <svg className="w-4 h-4 text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
        </svg>
      </div>
      <div>
        <p className="text-white text-sm font-semibold">{label}</p>
        {badge && <span className="text-white/40 text-[11px]">{badge}</span>}
      </div>
    </div>
    <svg className="w-4 h-4 text-white/30 group-hover:text-orange-400 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
    </svg>
  </a>
);

const OodlesBrief = () => {
  const [approved, setApproved] = useState(false);

  return (
    <div className="bg-[#0a0a0f] min-h-screen text-white">
      {/* ── Top Bar ── */}
      <div className="bg-red-500/10 border-b border-red-500/20 px-4 py-2.5 text-center">
        <p className="text-red-400 text-xs font-bold tracking-wide">
          PENDING APPROVAL — ACTION REQUIRED
        </p>
      </div>

      {/* ── Header ── */}
      <div className="px-5 pt-6 pb-5 border-b border-white/10">
        <div className="max-w-2xl mx-auto">
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <Badge color={`${STATUS_COLOR} text-white`}>{STATUS_TEXT}</Badge>
            <Badge>4/16/2026</Badge>
            <Badge color="bg-purple-500/15 text-purple-400">A/B Test</Badge>
          </div>
          <h1 className="text-xl md:text-2xl font-extrabold leading-tight mb-2">
            Website Hero A/B Test
            <span className="text-orange-400"> — Oodles of Leads</span>
          </h1>
          <p className="text-white/50 text-sm leading-relaxed">
            We're testing multiple headline angles on the Oodles landing page to find which hero converts the most contractor leads.
          </p>
        </div>
      </div>

      <div className="max-w-2xl mx-auto px-5 py-6 space-y-8">
        {/* ── What's Changing ── */}
        <section>
          <SectionTitle>What's Changing</SectionTitle>
          <div className="bg-white/[0.03] border border-white/10 rounded-xl p-4 space-y-3">
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-orange-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                <svg className="w-3.5 h-3.5 text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <p className="text-white/70 text-sm leading-relaxed">
                <span className="text-white font-semibold">Only the Hero section.</span> Everything below stays exactly as-is — How It Works, testimonials, FAQ, footer.
              </p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-orange-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                <svg className="w-3.5 h-3.5 text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <p className="text-white/70 text-sm leading-relaxed">
                <span className="text-white font-semibold">8 new hero variants</span> across two rounds. Same purple brand layout. Only the headline copy, CTA, and proof elements change between variants.
              </p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-orange-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                <svg className="w-3.5 h-3.5 text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <p className="text-white/70 text-sm leading-relaxed">
                <span className="text-white font-semibold">Fully responsive.</span> Optimized for mobile with compact badges, stacked layout, and all critical content above the fold.
              </p>
            </div>
          </div>
        </section>

        {/* ── Round 1 Variants ── */}
        <section>
          <SectionTitle>Round 1 — Layout & CTA Testing</SectionTitle>
          <p className="text-white/40 text-xs mb-3">Same headline. Isolating layout variables: CTA count, trust elements, image badges.</p>
          <div className="space-y-3">
            <VariantCard
              label="Test 1"
              angle="Single CTA"
              headline="Exclusive Homeowner Leads. Without Spending a Dime on Ads."
              subline="Google badge, floating image badges, single 'Claim My Service Area' CTA, Hunter Ballew testimonial with photo."
              color="border-orange-500/20 bg-orange-500/[0.04]"
            />
            <VariantCard
              label="Test 1.1"
              angle="Dual CTA"
              headline="Exclusive Homeowner Leads. Without Spending a Dime on Ads."
              subline="Same as Test 1 + ghost 'See How It Works' button to catch hesitant visitors who aren't ready to commit."
              color="border-orange-500/20 bg-orange-500/[0.04]"
            />
            <VariantCard
              label="Test 2"
              angle="Outcome-First"
              headline="Book More Jobs This Week. Without Running a Single Ad."
              subline="Leads with the RESULT (booked jobs) instead of the FEATURE (exclusive leads). Tests benefit framing."
              color="border-blue-500/20 bg-blue-500/[0.04]"
            />
          </div>
        </section>

        {/* ── Round 2 Variants ── */}
        <section>
          <SectionTitle>Round 2 — Copywriting Principles</SectionTitle>
          <p className="text-white/40 text-xs mb-3">Applying Marketing Examples (Harry Dry) principles. Each variant tests one specific technique.</p>
          <div className="space-y-2">
            <V2Card
              number={1}
              title="Conviction Language"
              headline="It's How Contractors Fill Their Schedule."
              principle="Replace passive 'we deliver' with assertive ownership. Caveman test."
            />
            <V2Card
              number={2}
              title="Sell the Outcome"
              headline="Your Phone Rings. It's a Homeowner Ready to Hire You."
              principle="Don't sell leads — sell the ringing phone and booked calendar."
            />
            <V2Card
              number={3}
              title="Specificity + Sincerity"
              headline="56 Leads. 5 Days. $0 in Ad Spend."
              principle="Exact numbers + transparent next steps. Blinkist got +23% with sincerity."
            />
            <V2Card
              number={4}
              title="Segmented Social Proof"
              headline="Exclusive Leads. Sent to You. Nobody Else."
              principle="Rotating testimonials from different trades so every contractor sees someone like them."
            />
            <V2Card
              number={5}
              title="Anchoring + Comparison"
              headline="You're Paying for Shared Leads. We Replaced That."
              principle="Old Way vs Oodles comparison cards. Basecamp-style price anchoring."
            />
          </div>
        </section>

        {/* ── Hypothesis ── */}
        <section>
          <SectionTitle>Hypothesis</SectionTitle>
          <div className="bg-gradient-to-br from-purple-500/10 to-orange-500/10 border border-purple-500/20 rounded-xl p-4">
            <p className="text-white/80 text-sm leading-relaxed">
              The current hero tries to communicate too many value props simultaneously — exclusive leads, no ad spend, no shared lists — which dilutes the message. By isolating <span className="text-white font-semibold">one emotional driver per variant</span>, we can identify which angle actually converts contractors:
            </p>
            <div className="grid grid-cols-2 gap-3 mt-4">
              <div className="bg-black/20 rounded-lg p-3">
                <p className="text-orange-400 text-[10px] font-bold uppercase tracking-widest mb-1">Round 1</p>
                <p className="text-white/70 text-xs leading-relaxed">Do contractors click more with one CTA or two? Does outcome-framing beat feature-framing?</p>
              </div>
              <div className="bg-black/20 rounded-lg p-3">
                <p className="text-emerald-400 text-[10px] font-bold uppercase tracking-widest mb-1">Round 2</p>
                <p className="text-white/70 text-xs leading-relaxed">Which copywriting technique produces the highest conversion? Conviction, outcome, proof, or anchoring?</p>
              </div>
            </div>
            <p className="text-white/60 text-xs mt-4 leading-relaxed">
              The winner from Round 1 informs the layout. The winner from Round 2 becomes the core messaging angle for all future ads, landing pages, and outreach.
            </p>
          </div>
        </section>

        {/* ── Previews ── */}
        <section>
          <SectionTitle>Live Previews</SectionTitle>
          <div className="space-y-2">
            <PreviewLink
              label="Round 1 — Layout & CTA Tests"
              href="/oodles"
              badge="Tests 1, 1.1, 2"
            />
            <PreviewLink
              label="Round 2 — Marketing Examples Edition"
              href="/oodles-v2"
              badge="Tests V2-1 through V2-5"
            />
          </div>
        </section>

        {/* ── Approval ── */}
        <section className="pb-10">
          <div className={`border rounded-xl p-5 text-center transition-all ${approved ? "border-emerald-500/30 bg-emerald-500/[0.06]" : "border-white/10 bg-white/[0.02]"}`}>
            {!approved ? (
              <>
                <p className="text-white/50 text-xs mb-4">
                  Review the variants above. When ready, approve to begin A/B testing.
                </p>
                <button
                  onClick={() => setApproved(true)}
                  className="bg-orange-500 hover:bg-orange-600 text-white font-bold text-sm px-8 py-3 rounded-full transition-colors shadow-lg shadow-orange-500/20"
                >
                  Approve & Begin Testing
                </button>
              </>
            ) : (
              <div>
                <div className="w-12 h-12 rounded-full bg-emerald-500/20 flex items-center justify-center mx-auto mb-3">
                  <svg className="w-6 h-6 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-emerald-400 font-bold text-sm">Approved</p>
                <p className="text-white/40 text-xs mt-1">A/B testing will begin shortly.</p>
              </div>
            )}
          </div>
        </section>
      </div>

      {/* ── Footer ── */}
      <div className="border-t border-white/10 px-5 py-6 text-center">
        <p className="text-white/20 text-xs">
          Oodles of Leads — Executive Brief — InfinityMEDIA LA
        </p>
      </div>
    </div>
  );
};

export default OodlesBrief;
