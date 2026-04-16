import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

/* ────────────────────────────────────────────
   Shared Components (same base as V1)
   ──────────────────────────────────────────── */

const NAV_LINKS = ["How It Works", "Testimonials", "FAQ"];

const Navbar = ({ ctaText = "Get Started" }: { ctaText?: string }) => (
  <nav className="flex items-center justify-between px-6 md:px-12 py-4 bg-white/5 backdrop-blur-sm">
    <img src="/oodles-logo.png" alt="Oodles of Leads" className="h-8 md:h-10 object-contain" />
    <div className="hidden md:flex items-center gap-8">
      {NAV_LINKS.map((l) => (
        <span key={l} className="text-white/80 text-sm hover:text-white cursor-pointer transition-colors">
          {l}
        </span>
      ))}
      <button className="bg-orange-500 hover:bg-orange-600 text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-colors">
        {ctaText}
      </button>
    </div>
  </nav>
);

const GoogleIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4 flex-shrink-0" xmlns="http://www.w3.org/2000/svg">
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/>
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
  </svg>
);

const TrustBadges = () => (
  <div className="flex flex-wrap items-center justify-center gap-2 md:gap-4 py-3 px-4">
    <div className="flex items-center gap-1.5 bg-white/10 backdrop-blur-sm rounded-full px-3 py-1.5">
      <GoogleIcon />
      <span className="text-orange-400 text-xs">★★★★★</span>
      <span className="text-white font-bold text-sm">4.9</span>
    </div>
    <div className="flex items-center gap-1.5 bg-white/10 backdrop-blur-sm rounded-full px-3 py-1.5">
      <svg className="w-3.5 h-3.5 text-orange-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
      <span className="text-white font-bold text-sm">10K+</span>
      <span className="text-white/70 text-xs">Conversations</span>
    </div>
    <div className="flex items-center gap-1.5 bg-white/10 backdrop-blur-sm rounded-full px-3 py-1.5">
      <svg className="w-3.5 h-3.5 text-orange-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
      <span className="text-white font-bold text-sm">30+</span>
      <span className="text-white/70 text-xs">States</span>
    </div>
  </div>
);

const HunterTestimonial = () => (
  <div className="max-w-lg bg-white/5 backdrop-blur-sm rounded-xl p-5 border border-white/10">
    <p className="text-white text-base md:text-lg font-semibold italic leading-snug whitespace-nowrap">
      "In just 5 days, Oodles delivered <span className="text-orange-400 font-bold not-italic">56 quality leads</span>"
    </p>
    <div className="flex items-center gap-3 mt-4">
      <img
        src="/hunter-ballew.jpg"
        alt="Hunter Ballew"
        className="w-12 h-12 rounded-full object-cover object-top border-2 border-orange-400 flex-shrink-0"
      />
      <div>
        <p className="text-white font-bold text-sm">Hunter Ballew</p>
        <p className="text-white/60 text-xs">Founder of Roofing.com &amp; RoofCON</p>
        <span className="inline-block bg-orange-500/20 text-orange-300 text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full mt-1">
          #1 Roofing Conference in the U.S.
        </span>
      </div>
    </div>
  </div>
);

const ContractorImage = ({ src, alt }: { src: string; alt: string }) => (
  <div className="relative w-full max-w-md mx-auto">
    <img src={src} alt={alt} className="rounded-2xl object-cover w-full h-[420px] md:h-[540px]" />
    <div className="absolute -bottom-3 -left-3 bg-orange-500 text-white text-xs font-bold px-4 py-2 rounded-full shadow-lg">
      100% Exclusive
    </div>
  </div>
);

const VariantLabel = ({ number, title, description, principles }: { number: number; title: string; description: string; principles: string[] }) => (
  <div className="bg-gray-950 border-b border-white/10 px-6 md:px-12 py-6">
    <div className="max-w-5xl mx-auto">
      <div className="flex items-center gap-3 mb-2">
        <span className="bg-emerald-500 text-white text-xs font-bold px-3 py-1 rounded-full">
          V2 — TEST {number}
        </span>
        <h2 className="text-white text-xl font-bold">{title}</h2>
      </div>
      <p className="text-white/50 text-sm mb-2">{description}</p>
      <div className="flex flex-wrap gap-1.5">
        {principles.map((p) => (
          <span key={p} className="bg-emerald-500/10 text-emerald-400 text-[10px] font-semibold px-2 py-0.5 rounded-full">
            {p}
          </span>
        ))}
      </div>
    </div>
  </div>
);

/* ────────────────────────────────────────────
   V2 TEST 1 — "Speak with Conviction" + Caveman Test
   Principle: Replace "we help / we deliver" with assertive ownership.
   "It's how" > "We help". Conviction language. Memorable > Likeable.
   ──────────────────────────────────────────── */

const V2Test1 = () => (
  <section>
    <VariantLabel
      number={1}
      title="Speak with Conviction"
      description={"Replace passive \"We deliver leads\" with assertive ownership. Conviction language is more memorable. \"It's how\" beats \"We help\". If a caveman can't understand it in 3 seconds, rewrite it."}
      principles={["Conviction language", "Caveman test", "Memorability beats Likability"]}
    />
    <div className="bg-[#7c3aed] min-h-[600px]">
      <Navbar ctaText="Get Started" />
      <TrustBadges />
      <div className="max-w-6xl mx-auto px-6 md:px-12 py-10 md:py-14">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <span className="inline-block bg-orange-500/20 text-orange-300 text-xs font-bold uppercase tracking-wider px-4 py-1.5 rounded-full mb-6">
              For Contractors Who Want More Jobs
            </span>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-[1.1] mb-4">
              It's How Contractors<br />
              <span className="text-orange-400">Fill Their Schedule.</span>
            </h1>
            <p className="text-white/70 text-base leading-relaxed mb-6">
              Exclusive homeowner leads. Sent directly to you. No ad spend. No shared lists. No guesswork.
            </p>
            <div className="mb-2">
              <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold text-lg px-8 py-4 rounded-full transition-colors shadow-lg">
                Claim My Service Area
              </button>
            </div>
            <p className="text-white/50 text-xs mb-6">No long-term contracts. No ad spend. Cancel anytime.</p>
            <HunterTestimonial />
          </div>
          <ContractorImage
            src="/hero-contractor-current.jpg"
            alt="Contractor with clipboard"
          />
        </div>
      </div>
    </div>
  </section>
);

/* ────────────────────────────────────────────
   V2 TEST 2 — Sell the Outcome, Not the Product
   Principle: "Acing the SAT" > "Next generation SAT prep".
   Don't sell leads. Sell a full schedule, ringing phone, booked jobs.
   ──────────────────────────────────────────── */

const V2Test2 = () => (
  <section>
    <VariantLabel
      number={2}
      title="Sell the Outcome, Not the Product"
      description={"\"Acing the SAT\" beats \"Next generation SAT prep\". Don't sell leads — sell what leads GET them: a ringing phone, a full calendar, more revenue. Paint the after-picture."}
      principles={["Outcome over product", "Specificity = credibility", "Before/After framing"]}
    />
    <div className="bg-[#7c3aed] min-h-[600px]">
      <Navbar ctaText="Get Started" />
      <TrustBadges />
      <div className="max-w-6xl mx-auto px-6 md:px-12 py-10 md:py-14">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <span className="inline-block bg-orange-500/20 text-orange-300 text-xs font-bold uppercase tracking-wider px-4 py-1.5 rounded-full mb-6">
              For Home Improvement Contractors
            </span>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-[1.1] mb-4">
              Your Phone Rings.<br />
              It's a Homeowner<br />
              <span className="text-orange-400">Ready to Hire You.</span>
            </h1>
            <p className="text-white/70 text-base leading-relaxed mb-6">
              That's what happens when you stop chasing leads and let them come to you. Exclusive. Verified. Zero ad spend.
            </p>
            <div className="mb-2">
              <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold text-lg px-8 py-4 rounded-full transition-colors shadow-lg">
                Claim My Service Area
              </button>
            </div>
            <p className="text-white/50 text-xs mb-6">No long-term contracts. No ad spend. Cancel anytime.</p>
            <HunterTestimonial />
          </div>
          <ContractorImage
            src="https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=500&h=600&fit=crop&crop=face"
            alt="Contractor on phone receiving leads"
          />
        </div>
      </div>
    </div>
  </section>
);

/* ────────────────────────────────────────────
   V2 TEST 3 — Specificity + Sincerity
   Principle: "You can't bullshit specifics." + Blinkist's sincerity
   (+23% by being transparent). Stack specific numbers. Be honest
   about what happens when they click.
   ──────────────────────────────────────────── */

const V2Test3 = () => (
  <section>
    <VariantLabel
      number={3}
      title="Specificity + Sincerity"
      description={"\"You can't bullshit specifics.\" Lead with exact numbers. Then be radically transparent about what happens next (Blinkist got +23% by being honest). Sincerity sells."}
      principles={["Specificity = credibility", "Sincerity sells", "Transparent next steps"]}
    />
    <div className="bg-[#7c3aed] min-h-[600px]">
      <Navbar ctaText="Get Started" />
      <TrustBadges />
      <div className="max-w-6xl mx-auto px-6 md:px-12 py-10 md:py-14">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <span className="inline-block bg-orange-500/20 text-orange-300 text-xs font-bold uppercase tracking-wider px-4 py-1.5 rounded-full mb-6">
              Trusted by Contractors in 30+ States
            </span>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-[1.1] mb-4">
              56 Leads. 5 Days.<br />
              <span className="text-orange-400">$0 in Ad Spend.</span>
            </h1>
            <p className="text-white/70 text-base leading-relaxed mb-6">
              That's a real result from a real contractor. We lock your territory, find verified homeowners in your area, and send them straight to you. No one else gets them.
            </p>
            <div className="mb-2">
              <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold text-lg px-8 py-4 rounded-full transition-colors shadow-lg">
                Check If My Area Is Available
              </button>
            </div>
            {/* Sincerity: tell them exactly what happens next */}
            <p className="text-white/50 text-xs mb-6">
              You'll pick a time to chat. We'll check your ZIP codes. Takes 15 minutes. No pressure, no long-term contracts.
            </p>
            <HunterTestimonial />
          </div>
          <ContractorImage
            src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=500&h=600&fit=crop"
            alt="Contractor reviewing leads on tablet"
          />
        </div>
      </div>
    </div>
  </section>
);

/* ────────────────────────────────────────────
   V2 TEST 4 — Segmented Social Proof + Value CTA
   Principle: Ahrefs shows different testimonials for different customers.
   Contractors in different trades want to see proof from THEIR trade.
   CTA describes the value, not the action.
   ──────────────────────────────────────────── */

const TRADE_PROOFS = [
  { quote: "56 quality leads in 5 days", name: "Hunter Ballew", trade: "Roofing", location: "Nationwide" },
  { quote: "No more competing with 5 other contractors for the same job", name: "Maria", trade: "Kitchen Remodeling", location: "California" },
  { quote: "I was paying $200 per lead with ads. Now I get verified jobs for half", name: "Rick", trade: "Roofing", location: "Florida" },
  { quote: "Started getting quality leads within 48 hours. No more chasing bad contacts", name: "David", trade: "HVAC", location: "Arizona" },
];

const SegmentedProof = () => {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % TRADE_PROOFS.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="max-w-lg bg-white/5 backdrop-blur-sm rounded-xl p-5 border border-white/10">
      <AnimatePresence mode="wait">
        <motion.div
          key={active}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
        >
          <p className="text-white text-base md:text-lg font-semibold italic leading-snug">
            "{TRADE_PROOFS[active].quote}"
          </p>
          <div className="flex items-center gap-3 mt-3">
            <div>
              <p className="text-white font-bold text-sm">{TRADE_PROOFS[active].name}</p>
              <p className="text-white/60 text-xs">{TRADE_PROOFS[active].trade} — {TRADE_PROOFS[active].location}</p>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
      {/* Progress dots */}
      <div className="flex gap-1.5 mt-3">
        {TRADE_PROOFS.map((_, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className={`w-2 h-2 rounded-full transition-colors ${i === active ? "bg-orange-400" : "bg-white/20"}`}
          />
        ))}
      </div>
    </div>
  );
};

const V2Test4 = () => (
  <section>
    <VariantLabel
      number={4}
      title="Segmented Social Proof + Value CTA"
      description="Ahrefs shows different testimonials for different customer types. Rotate proof from different trades so every contractor sees someone like them. CTA describes value received, not action taken."
      principles={["Segmented testimonials", "Value-focused CTA", "People like seeing customers like them"]}
    />
    <div className="bg-[#7c3aed] min-h-[600px]">
      <Navbar ctaText="Get Started" />
      <TrustBadges />
      <div className="max-w-6xl mx-auto px-6 md:px-12 py-10 md:py-14">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <span className="inline-block bg-orange-500/20 text-orange-300 text-xs font-bold uppercase tracking-wider px-4 py-1.5 rounded-full mb-6">
              For Home Improvement Contractors
            </span>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-[1.1] mb-4">
              Exclusive Leads.<br />
              Sent to You.<br />
              <span className="text-orange-400">Nobody Else.</span>
            </h1>
            <p className="text-white/70 text-base leading-relaxed mb-6">
              One contractor per territory. Verified homeowners. No ad spend required. No shared lists. Ever.
            </p>
            <div className="mb-2">
              {/* Value-focused CTA: describes what they GET, not what they DO */}
              <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold text-lg px-8 py-4 rounded-full transition-colors shadow-lg">
                See Available Leads in My Area
              </button>
            </div>
            <p className="text-white/50 text-xs mb-6">No long-term contracts. No ad spend. Cancel anytime.</p>
            <SegmentedProof />
          </div>
          <ContractorImage
            src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=500&h=600&fit=crop"
            alt="Contractor shaking hands with homeowner"
          />
        </div>
      </div>
    </div>
  </section>
);

/* ────────────────────────────────────────────
   V2 TEST 5 — Anchoring + Comparison + Warmth CTA
   Principle: Basecamp's price comparison technique. Frame against
   the OLD way (expensive agencies, shared leads) to make Oodles
   feel like a steal. Wine List's price anchoring. Warm CTA with
   explanation of next step.
   ──────────────────────────────────────────── */

const V2Test5 = () => (
  <section>
    <VariantLabel
      number={5}
      title="Anchoring + Comparison + Warm CTA"
      description="Basecamp frames pricing against competitors. Wine List anchors high first. Show what they're CURRENTLY wasting (shared leads, expensive agencies, ad spend) to make Oodles feel like a no-brainer. Warm CTA explains exactly what happens next."
      principles={["Price/value anchoring", "Comparison framing", "CTA warmth", "Reduce friction"]}
    />
    <div className="bg-[#7c3aed] min-h-[600px]">
      <Navbar ctaText="Get Started" />
      <TrustBadges />
      <div className="max-w-6xl mx-auto px-6 md:px-12 py-10 md:py-14">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <span className="inline-block bg-orange-500/20 text-orange-300 text-xs font-bold uppercase tracking-wider px-4 py-1.5 rounded-full mb-6">
              For Contractors Tired of Wasting Money
            </span>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-[1.1] mb-4">
              You're Paying for<br />
              Shared Leads.<br />
              <span className="text-orange-400">We Replaced That.</span>
            </h1>

            {/* Comparison anchor — show the old cost vs new */}
            <div className="flex flex-wrap gap-3 mb-5">
              <div className="bg-red-500/10 border border-red-500/20 rounded-lg px-4 py-2.5">
                <p className="text-red-300 text-xs font-bold uppercase tracking-wider">The Old Way</p>
                <p className="text-white/60 text-sm line-through">$200+ per lead</p>
                <p className="text-white/60 text-sm line-through">Shared with 4-6 others</p>
                <p className="text-white/60 text-sm line-through">6-12 month contracts</p>
              </div>
              <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-lg px-4 py-2.5">
                <p className="text-emerald-300 text-xs font-bold uppercase tracking-wider">Oodles</p>
                <p className="text-white text-sm font-semibold">100% exclusive to you</p>
                <p className="text-white text-sm font-semibold">No ad spend included</p>
                <p className="text-white text-sm font-semibold">Month-to-month</p>
              </div>
            </div>

            <div className="mb-2">
              <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold text-lg px-8 py-4 rounded-full transition-colors shadow-lg">
                Claim My Service Area
              </button>
            </div>
            {/* Warm CTA: tell them exactly what happens */}
            <p className="text-white/50 text-xs mb-6">
              You'll book a quick call → We check your ZIP codes → You start getting leads. No pressure.
            </p>
            <HunterTestimonial />
          </div>
          <ContractorImage
            src="/hero-contractor-current.jpg"
            alt="Contractor with clipboard"
          />
        </div>
      </div>
    </div>
  </section>
);

/* ────────────────────────────────────────────
   Page Layout
   ──────────────────────────────────────────── */

const OodlesVariationsV2 = () => (
  <div className="bg-gray-950 min-h-screen">
    {/* Page Header */}
    <div className="bg-gray-950 border-b border-white/10 px-6 md:px-12 py-10">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center gap-3 mb-3">
          <span className="bg-emerald-500 text-white text-xs font-bold px-3 py-1 rounded-full">V2</span>
          <h1 className="text-3xl md:text-4xl font-extrabold text-white">
            Oodles of Leads — Marketing Examples Edition
          </h1>
        </div>
        <p className="text-white/50 text-base max-w-2xl mb-4">
          5 new header variants applying principles from Marketing Examples (Harry Dry). Each variant layers a specific technique from the research. Green tags show which principles are applied.
        </p>
        <div className="bg-white/5 border border-white/10 rounded-lg p-4 max-w-2xl">
          <p className="text-white/70 text-sm font-semibold mb-2">Principles Applied:</p>
          <div className="flex flex-wrap gap-1.5 text-[11px]">
            {[
              "Speak with conviction",
              "Sell outcome, not product",
              "Specificity = credibility",
              "Sincerity sells (+23%)",
              "Segmented social proof",
              "Value-focused CTAs",
              "CTA warmth (explain next steps)",
              "Price/value anchoring",
              "Caveman test",
              "Memorability > Likability",
            ].map((p) => (
              <span key={p} className="bg-emerald-500/10 text-emerald-400 font-semibold px-2 py-0.5 rounded-full">
                {p}
              </span>
            ))}
          </div>
        </div>
        <div className="flex flex-wrap gap-2 mt-4">
          {["Test 1", "Test 2", "Test 3", "Test 4", "Test 5"].map((label, i) => (
            <a
              key={label}
              href={`#v2-test-${i + 1}`}
              className="bg-white/10 hover:bg-emerald-500/20 text-white/70 hover:text-emerald-300 text-xs font-semibold px-3 py-1.5 rounded-full transition-colors"
            >
              {label}
            </a>
          ))}
        </div>
      </div>
    </div>

    {/* Variants */}
    <div id="v2-test-1"><V2Test1 /></div>
    <div id="v2-test-2"><V2Test2 /></div>
    <div id="v2-test-3"><V2Test3 /></div>
    <div id="v2-test-4"><V2Test4 /></div>
    <div id="v2-test-5"><V2Test5 /></div>

    {/* Footer */}
    <div className="bg-gray-950 border-t border-white/10 px-6 md:px-12 py-10">
      <div className="max-w-5xl mx-auto text-center">
        <p className="text-white/30 text-sm">
          Oodles of Leads — V2 Marketing Examples Edition — Header Optimization
        </p>
      </div>
    </div>
  </div>
);

export default OodlesVariationsV2;
