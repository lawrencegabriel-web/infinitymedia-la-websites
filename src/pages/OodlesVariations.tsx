import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

/* ────────────────────────────────────────────
   Shared Components
   ──────────────────────────────────────────── */

const NAV_LINKS = ["How It Works", "Testimonials", "FAQ"];

const Navbar = ({ ctaText = "Get Started" }: { ctaText?: string }) => (
  <nav className="flex items-center justify-between px-5 md:px-12 py-3 md:py-4 bg-white/5 backdrop-blur-sm">
    <img src="/oodles-logo.png" alt="Oodles of Leads" className="h-7 md:h-10 object-contain" />
    <div className="hidden md:flex items-center gap-8">
      {NAV_LINKS.map((l) => (
        <span key={l} className="text-white/80 text-sm hover:text-white cursor-pointer transition-colors">
          {l}
        </span>
      ))}
    </div>
    <button className="bg-orange-500 hover:bg-orange-600 text-white text-xs md:text-sm font-semibold px-4 py-2 md:px-5 md:py-2.5 rounded-full transition-colors">
      {ctaText}
    </button>
  </nav>
);

/* Google "G" icon as inline SVG */
const GoogleIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4 flex-shrink-0" xmlns="http://www.w3.org/2000/svg">
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/>
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
  </svg>
);

const TrustStrip = () => (
  <div className="flex flex-wrap items-center justify-center gap-2 md:gap-4 py-3 px-4">
    {/* Google Rating Badge */}
    <div className="flex items-center gap-1.5 bg-white/10 backdrop-blur-sm rounded-full px-3 py-1.5">
      <GoogleIcon />
      <span className="text-orange-400 text-xs">★★★★★</span>
      <span className="text-white font-bold text-sm">4.9</span>
    </div>
    {/* Conversations Badge */}
    <div className="flex items-center gap-1.5 bg-white/10 backdrop-blur-sm rounded-full px-3 py-1.5">
      <svg className="w-3.5 h-3.5 text-orange-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
      <span className="text-white font-bold text-sm">10K+</span>
      <span className="text-white/70 text-xs">Conversations</span>
    </div>
    {/* States Badge */}
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

const AnimatedTrustStrip = () => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          const target = 10000;
          const duration = 2000;
          const start = performance.now();
          const animate = (now: number) => {
            const elapsed = now - start;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(eased * target));
            if (progress < 1) requestAnimationFrame(animate);
          };
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="flex flex-wrap items-center justify-center gap-2 md:gap-4 py-3 px-4">
      <div className="flex items-center gap-1.5 bg-white/10 backdrop-blur-sm rounded-full px-3 py-1.5">
        <GoogleIcon />
        <span className="text-orange-400 text-xs">★★★★★</span>
        <span className="text-white font-bold text-sm">4.9</span>
      </div>
      <div className="flex items-center gap-1.5 bg-white/10 backdrop-blur-sm rounded-full px-3 py-1.5">
        <svg className="w-3.5 h-3.5 text-orange-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
        <span className="text-white font-bold text-sm">{count.toLocaleString()}+</span>
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
};

const HunterTestimonial = ({ showPhoto = false }: { showPhoto?: boolean }) => (
  <div className="mt-4 md:mt-6 max-w-lg bg-white/5 backdrop-blur-sm rounded-xl p-4 md:p-5 border border-white/10">
    <p className="text-white text-sm md:text-lg font-semibold italic leading-snug">
      "In just 5 days, Oodles delivered <span className="text-orange-400 font-bold not-italic">56 quality leads</span>"
    </p>
    <div className="flex items-center gap-3 mt-3 md:mt-4">
      {showPhoto && (
        <img
          src="/hunter-ballew.jpg"
          alt="Hunter Ballew"
          className="w-12 h-12 md:w-16 md:h-16 rounded-full object-cover object-top border-2 border-orange-400 flex-shrink-0"
        />
      )}
      <div>
        <p className="text-white font-bold text-sm">Hunter Ballew</p>
        <p className="text-white/60 text-xs">
          Founder of Roofing.com &amp; RoofCON
        </p>
        <span className="inline-block bg-orange-500/20 text-orange-300 text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full mt-1">
          #1 Roofing Conference in the U.S.
        </span>
      </div>
    </div>
  </div>
);

/* Mobile-friendly image with floating badges */
const HeroImageWithBadges = () => (
  <div className="relative mt-2 md:mt-0">
    <div className="w-full max-w-sm md:max-w-md mx-auto">
      <img
        src="/hero-contractor-current.jpg"
        alt="Contractor with clipboard"
        className="rounded-2xl object-cover w-full h-[300px] md:h-[540px] brightness-110"
      />
      <div className="absolute inset-0 rounded-2xl bg-[#7c3aed]/10" />
    </div>

    {/* ── Mobile: compact pill badges (like reference PDF 2) ── */}
    <div className="md:hidden absolute top-4 right-3 bg-white rounded-full shadow-lg px-3 py-1.5 flex items-center gap-1.5">
      <span className="text-orange-500 text-sm">★</span>
      <span className="text-gray-900 text-[11px] font-bold">4.9+ Reviews</span>
    </div>

    <div className="md:hidden absolute top-1/4 left-2 bg-orange-500 rounded-full shadow-lg px-3 py-1.5 flex items-center gap-1.5">
      <span className="text-white text-[11px] font-bold">No Ad Spend</span>
    </div>

    <div className="md:hidden absolute bottom-20 left-2 bg-white rounded-full shadow-lg px-3 py-1.5 flex items-center gap-1.5">
      <span className="text-gray-900 text-[11px] font-bold">No Shared Lists</span>
    </div>

    <div className="md:hidden absolute bottom-6 right-3 bg-orange-500 rounded-full shadow-lg px-3 py-1.5 flex items-center gap-1.5">
      <span className="text-white text-[11px] font-bold">100% Exclusive to You</span>
    </div>

    {/* ── Desktop: card badges with descriptions ── */}
    <div className="hidden md:flex absolute top-6 right-2 bg-white rounded-xl shadow-xl px-4 py-3 items-center gap-2">
      <span className="text-orange-500 text-lg">★</span>
      <div>
        <p className="text-gray-900 text-xs font-bold">4.9+ Reviews</p>
        <p className="text-gray-500 text-[10px]">Rated by real contractors</p>
      </div>
    </div>

    <div className="hidden md:flex absolute top-1/3 -left-2 bg-orange-500 rounded-xl shadow-xl px-4 py-3 items-center gap-2">
      <svg className="w-4 h-4 text-white flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
      </svg>
      <div>
        <p className="text-white text-xs font-bold">No Ad Spend</p>
        <p className="text-white/80 text-[10px]">We handle the marketing</p>
      </div>
    </div>

    <div className="hidden md:flex absolute bottom-32 left-0 bg-white rounded-xl shadow-xl px-4 py-3 items-center gap-2">
      <svg className="w-4 h-4 text-purple-600 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
      <div>
        <p className="text-gray-900 text-xs font-bold">No Shared Lists</p>
        <p className="text-gray-500 text-[10px]">Your leads. Nobody else's.</p>
      </div>
    </div>

    <div className="hidden md:flex absolute bottom-12 right-4 bg-orange-500 rounded-xl shadow-xl px-4 py-3 text-center flex-col">
      <p className="text-white text-lg font-extrabold leading-none">100%</p>
      <p className="text-white/90 text-[10px] font-bold">Exclusive to You</p>
    </div>
  </div>
);

const MariaTestimonial = () => (
  <div className="flex items-start gap-3 mt-6 max-w-md">
    <div className="w-11 h-11 rounded-full bg-orange-400/20 flex items-center justify-center flex-shrink-0">
      <span className="text-orange-400 text-lg">★</span>
    </div>
    <div>
      <p className="text-white/90 text-sm italic leading-relaxed">
        "The exclusivity is real. No more competing with 5 other contractors for the same job."
      </p>
      <p className="text-white/60 text-xs mt-1">
        — <span className="font-semibold text-white/80">Maria</span>, Kitchen &amp; Bath Remodeling, California
      </p>
    </div>
  </div>
);

/* Hero image options — each variant can use a different image to test */
const HERO_IMAGES = {
  // Current: friendly contractor smiling at camera (matches existing site)
  current: {
    src: "/hero-contractor-current.jpg",
    alt: "Contractor with clipboard smiling",
    label: "Current Image",
  },
  // Option A: Contractor on phone — implies receiving leads/calls
  phoneLeads: {
    src: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=500&h=600&fit=crop&crop=face",
    alt: "Contractor on phone receiving leads",
    label: "Contractor on Phone (Receiving Leads)",
  },
  // Option B: Contractor shaking hands with homeowner — the OUTCOME (closing the deal)
  handshake: {
    src: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=500&h=600&fit=crop",
    alt: "Contractor shaking hands with homeowner",
    label: "Handshake with Homeowner (The Close)",
  },
  // Option C: Contractor looking at tablet/dashboard — implies technology & leads system
  tablet: {
    src: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=500&h=600&fit=crop",
    alt: "Contractor reviewing leads on tablet",
    label: "Contractor with Tablet (Tech/Dashboard)",
  },
  // Option D: Happy contractor thumbs up at job site — confidence & success
  success: {
    src: "https://images.unsplash.com/photo-1540569014015-19a7be504e3a?w=500&h=600&fit=crop&crop=face",
    alt: "Confident contractor at job site",
    label: "Confident Contractor (Success)",
  },
};

type HeroImageKey = keyof typeof HERO_IMAGES;

const ContractorImage = ({ variant = "current" }: { variant?: HeroImageKey }) => {
  const image = HERO_IMAGES[variant];
  return (
    <div className="relative">
      <div className="w-full max-w-md mx-auto">
        <img
          src={image.src}
          alt={image.alt}
          className="rounded-2xl object-cover w-full h-[420px] md:h-[540px]"
        />
      </div>
      <div className="absolute -bottom-3 -left-3 bg-orange-500 text-white text-xs font-bold px-4 py-2 rounded-full shadow-lg">
        100% Exclusive
      </div>
      <div className="absolute -top-3 -right-3 bg-gray-900/80 text-white/60 text-[10px] px-2 py-1 rounded-full">
        {image.label}
      </div>
    </div>
  );
};

const VariantLabel = ({ number, title, description }: { number: number; title: string; description: string }) => (
  <div className="bg-gray-950 border-b border-white/10 px-6 md:px-12 py-6">
    <div className="max-w-5xl mx-auto">
      <div className="flex items-center gap-3 mb-2">
        <span className="bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full">
          TEST {number}
        </span>
        <h2 className="text-white text-xl font-bold">{title}</h2>
      </div>
      <p className="text-white/50 text-sm">{description}</p>
    </div>
  </div>
);

const PulseCTA = ({ text }: { text: string }) => (
  <button className="relative bg-orange-500 hover:bg-orange-600 text-white font-bold text-base px-8 py-4 rounded-full transition-colors shadow-lg">
    <span className="absolute inset-0 rounded-full animate-[pulse-glow_3s_ease-in-out_infinite] bg-orange-500/40" />
    <span className="relative">{text}</span>
  </button>
);

/* ────────────────────────────────────────────
   CONTROL — Current Winner
   ──────────────────────────────────────────── */

const Control = () => (
  <section>
    <VariantLabel
      number={0}
      title="Control — Current Winner"
      description="The existing header that's beating other variants. This is what we measure everything against."
    />
    <div className="bg-[#7c3aed] min-h-[600px]">
      <Navbar />
      <div className="max-w-6xl mx-auto px-6 md:px-12 py-12 md:py-16">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <span className="inline-block bg-orange-500/20 text-orange-300 text-xs font-bold uppercase tracking-wider px-4 py-1.5 rounded-full mb-6">
              Attention: Home Improvement Business Owners
            </span>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-[1.1] mb-4">
              Exclusive Homeowner Leads.{" "}
              <span className="text-white/70 italic font-normal">Without Spending a Dime on Ads.</span>
            </h1>
            <p className="text-white/80 text-base font-bold mb-2">
              No Ad Budget. No Shared Leads. No Competition.
            </p>
            <p className="text-white/60 text-sm leading-relaxed mb-2">
              We deliver exclusive, verified homeowners who are ready to hire — without you running ads or wasting time on marketing.
            </p>
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              No bidding wars. No other contractors getting the same lead. Just exclusive leads.
            </p>
            <div className="flex flex-wrap gap-3 mb-6">
              <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-6 py-3 rounded-full transition-colors">
                Get Exclusive Leads
              </button>
              <button className="bg-white hover:bg-gray-100 text-gray-900 font-bold px-6 py-3 rounded-full transition-colors">
                See How It Works
              </button>
            </div>
            <HunterTestimonial />
          </div>
          <ContractorImage variant="current" />
        </div>
      </div>
    </div>
  </section>
);

/* ────────────────────────────────────────────
   TEST 1 — Trust Strip + Single CTA
   ──────────────────────────────────────────── */

/* Shared Google Badge */
const GoogleBadge = () => (
  <div className="flex items-center gap-2 md:gap-2.5 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-3 py-2 md:px-5 md:py-2.5 w-fit mb-4 md:mb-6">
    <GoogleIcon />
    <span className="text-orange-400 text-sm md:text-base">★★★★★</span>
    <span className="text-white font-extrabold text-xl md:text-2xl leading-none">4.9+</span>
    <span className="text-white/80 text-xs md:text-sm font-medium">Trusted by Contractors on Google</span>
  </div>
);

/* Shared FUD Strip */
const FUDStrip = () => (
  <>
    {/* Mobile: horizontal row, no dots */}
    <div className="flex md:hidden items-center justify-between text-white/70 text-xs mb-1 px-1">
      <span className="flex items-center gap-1">⚡ Quick setup</span>
      <span className="flex items-center gap-1">💳 No long term contracts</span>
      <span className="flex items-center gap-1">✨ Cancel anytime</span>
    </div>
    {/* Desktop: inline with dots */}
    <div className="hidden md:flex items-center gap-4 text-white/70 text-sm mb-6">
      <span className="flex items-center gap-1.5">⚡ Quick setup</span>
      <span className="text-white/30">•</span>
      <span className="flex items-center gap-1.5">💳 No long term contracts</span>
      <span className="text-white/30">•</span>
      <span className="flex items-center gap-1.5">✨ Cancel anytime</span>
    </div>
  </>
);

const Test1 = () => (
  <section>
    <VariantLabel
      number={1}
      title="Trust Strip + Single CTA"
      description="Testing: Does adding visible social proof above headline AND removing the secondary CTA increase clicks? Variables: trust strip added, single CTA, new CTA text, risk reversal micro-copy."
    />
    <div className="bg-[#7c3aed]">
      <Navbar ctaText="Get Started" />
      <div className="max-w-6xl mx-auto px-5 md:px-12 py-8 md:py-14">
        <div className="grid md:grid-cols-2 gap-6 md:gap-10 items-center">
          <div>
            <GoogleBadge />
            <h1 className="text-3xl md:text-5xl font-extrabold text-white leading-[1.1] mb-3 md:mb-4">
              Exclusive Homeowner Leads.{" "}
              <span className="text-white/70 italic font-normal">Without Spending a Dime on Ads.</span>
            </h1>
            <p className="text-white/70 text-sm md:text-base leading-relaxed mb-5 md:mb-6">
              Verified homeowners, exclusive to you. No ad spend. No shared lists. Trusted across <span className="text-white font-semibold">30+ states</span> with <span className="text-white font-semibold">10,000+ real conversations</span> started.
            </p>
            <div className="mb-3">
              <button className="w-full md:w-auto bg-orange-500 hover:bg-orange-600 text-white font-bold text-base md:text-lg px-8 py-4 rounded-full transition-colors shadow-lg">
                Claim My Service Area
              </button>
            </div>
            <FUDStrip />
            <div className="hidden md:block">
              <HunterTestimonial showPhoto />
            </div>
          </div>
          <HeroImageWithBadges />
          <div className="md:hidden -mt-2">
            <HunterTestimonial showPhoto />
          </div>
        </div>
      </div>
    </div>
  </section>
);

/* ────────────────────────────────────────────
   TEST 1.1 — Dual CTA (Primary + Secondary)
   Same as Test 1 but with a secondary "See How It Works" button
   ──────────────────────────────────────────── */

const Test1_1 = () => (
  <section>
    <VariantLabel
      number={1.1}
      title="Dual CTA (Primary + Secondary)"
      description="Testing: Does adding a soft secondary CTA catch hesitant visitors who aren't ready to commit? Only difference from Test 1: added 'See How It Works' ghost button."
    />
    <div className="bg-[#7c3aed]">
      <Navbar ctaText="Get Started" />
      <div className="max-w-6xl mx-auto px-5 md:px-12 py-8 md:py-14">
        <div className="grid md:grid-cols-2 gap-6 md:gap-10 items-center">
          <div>
            <GoogleBadge />
            <h1 className="text-3xl md:text-5xl font-extrabold text-white leading-[1.1] mb-3 md:mb-4">
              Exclusive Homeowner Leads.{" "}
              <span className="text-white/70 italic font-normal">Without Spending a Dime on Ads.</span>
            </h1>
            <p className="text-white/70 text-sm md:text-base leading-relaxed mb-5 md:mb-6">
              Verified homeowners, exclusive to you. No ad spend. No shared lists. Trusted across <span className="text-white font-semibold">30+ states</span> with <span className="text-white font-semibold">10,000+ real conversations</span> started.
            </p>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 mb-3">
              <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold text-base md:text-lg px-8 py-4 rounded-full transition-colors shadow-lg">
                Claim My Service Area
              </button>
              <button className="border-2 border-white/30 hover:border-white/60 text-white font-semibold text-sm md:text-base px-6 py-3.5 rounded-full transition-colors text-center">
                See How It Works
              </button>
            </div>
            <FUDStrip />
            <div className="hidden md:block">
              <HunterTestimonial showPhoto />
            </div>
          </div>
          <HeroImageWithBadges />
          <div className="md:hidden -mt-2">
            <HunterTestimonial showPhoto />
          </div>
        </div>
      </div>
    </div>
  </section>
);

/* ────────────────────────────────────────────
   TEST 2 — Outcome-First Headline
   ──────────────────────────────────────────── */

const Test2 = () => (
  <section>
    <VariantLabel
      number={2}
      title="Outcome-First Headline (Test 1 Layout)"
      description='Testing: Does leading with the RESULT (booked jobs) outperform leading with the FEATURE (exclusive leads)? Same layout as Test 1 — only headline and support line change.'
    />
    <div className="bg-[#7c3aed]">
      <Navbar ctaText="Get Started" />
      <div className="max-w-6xl mx-auto px-5 md:px-12 py-8 md:py-14">
        <div className="grid md:grid-cols-2 gap-6 md:gap-10 items-center">
          <div>
            <GoogleBadge />
            <h1 className="text-3xl md:text-5xl font-extrabold text-white leading-[1.1] mb-3 md:mb-4">
              Book More Jobs This Week.{" "}
              <span className="text-white/70 italic font-normal">Without Running a Single Ad.</span>
            </h1>
            <p className="text-white/70 text-sm md:text-base leading-relaxed mb-5 md:mb-6">
              We find homeowners ready to hire and send them straight to you. Exclusive to your territory across <span className="text-white font-semibold">30+ states</span> with <span className="text-white font-semibold">10,000+ real conversations</span> started.
            </p>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 mb-3">
              <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold text-base md:text-lg px-8 py-4 rounded-full transition-colors shadow-lg">
                Claim My Service Area
              </button>
              <button className="border-2 border-white/30 hover:border-white/60 text-white font-semibold text-sm md:text-base px-6 py-3.5 rounded-full transition-colors text-center">
                See How It Works
              </button>
            </div>
            <FUDStrip />
            <div className="hidden md:block">
              <HunterTestimonial showPhoto />
            </div>
          </div>
          <HeroImageWithBadges />
          <div className="md:hidden -mt-2">
            <HunterTestimonial showPhoto />
          </div>
        </div>
      </div>
    </div>
  </section>
);

/* ────────────────────────────────────────────
   TEST 3 — Pain-First Headline
   ──────────────────────────────────────────── */

const Test3 = () => (
  <section>
    <VariantLabel
      number={3}
      title="Pain-First Headline"
      description='Testing: Does leading with the PAIN (bad leads) outperform benefit framing? Variables: new headline "Stop Paying for Leads That Ghost You", aggressive eyebrow.'
    />
    <div className="bg-[#7c3aed] min-h-[600px]">
      <Navbar ctaText="Get Started" />
      <TrustStrip />
      <div className="max-w-6xl mx-auto px-6 md:px-12 py-10 md:py-14">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <span className="inline-block bg-red-500/20 text-red-300 text-xs font-bold uppercase tracking-wider px-4 py-1.5 rounded-full mb-6">
              Attention: Contractors Tired of Garbage Leads
            </span>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-[1.1] mb-4">
              Stop Paying for Leads{" "}
              <span className="text-white/70 italic font-normal">That Ghost You.</span>
            </h1>
            <p className="text-white/70 text-base leading-relaxed mb-6">
              Get homeowners who are actually ready to hire — exclusive to you, delivered weekly, zero ad spend required.
            </p>
            <div className="mb-2">
              <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold text-lg px-8 py-4 rounded-full transition-colors shadow-lg">
                Claim My Service Area
              </button>
            </div>
            <div className="flex flex-wrap items-center gap-3 text-white/60 text-xs mb-6">
              <span className="flex items-center gap-1"><span className="text-sm">⚡</span> Quick setup</span>
              <span className="text-white/30">•</span>
              <span className="flex items-center gap-1"><span className="text-sm">💳</span> No long term contracts</span>
              <span className="text-white/30">•</span>
              <span className="flex items-center gap-1"><span className="text-sm">✨</span> Cancel anytime</span>
            </div>
            <HunterTestimonial showPhoto />
          </div>
          <ContractorImage variant="handshake" />
        </div>
      </div>
    </div>
  </section>
);

/* ────────────────────────────────────────────
   TEST 4 — Proof-Led Headline
   ──────────────────────────────────────────── */

const Test4 = () => (
  <section>
    <VariantLabel
      number={4}
      title="Proof-Led Headline"
      description='Testing: Does leading with a SPECIFIC RESULT outperform benefit or pain framing? Variables: headline built from Hunter Ballew result, scarcity in sub-headline, different CTA text.'
    />
    <div className="bg-[#7c3aed] min-h-[600px]">
      <Navbar ctaText="Get Started" />
      <AnimatedTrustStrip />
      <div className="max-w-6xl mx-auto px-6 md:px-12 py-10 md:py-14">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <span className="inline-block bg-orange-500/20 text-orange-300 text-xs font-bold uppercase tracking-wider px-4 py-1.5 rounded-full mb-6">
              Trusted by Contractors in 30+ States
            </span>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-[1.1] mb-4">
              56 Exclusive Leads in 5 Days.{" "}
              <span className="text-orange-400 italic font-normal">Zero Ad Spend.</span>
            </h1>
            <p className="text-white/70 text-base leading-relaxed mb-6">
              That's what Hunter Ballew got. Join thousands of contractors already getting results.{" "}
              <span className="text-orange-300 font-semibold">Your service area might still be open.</span>
            </p>
            <div className="mb-2">
              <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold text-lg px-8 py-4 rounded-full transition-colors shadow-lg">
                Check My Service Area Availability
              </button>
            </div>
            <div className="flex flex-wrap items-center gap-3 text-white/60 text-xs mb-6">
              <span className="flex items-center gap-1"><span className="text-sm">⚡</span> Quick setup</span>
              <span className="text-white/30">•</span>
              <span className="flex items-center gap-1"><span className="text-sm">💳</span> No long term contracts</span>
              <span className="text-white/30">•</span>
              <span className="flex items-center gap-1"><span className="text-sm">✨</span> Cancel anytime</span>
            </div>
            <MariaTestimonial />
          </div>
          <ContractorImage variant="tablet" />
        </div>
      </div>
    </div>
  </section>
);

/* ────────────────────────────────────────────
   TEST 5 — Rotating Trade Names
   ──────────────────────────────────────────── */

const TRADES = [
  "Roofing Jobs",
  "HVAC Installs",
  "Painting Projects",
  "Remodeling Jobs",
  "Plumbing Calls",
  "Electrical Jobs",
];

const RotatingTrade = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % TRADES.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <span className="inline-block relative h-[1.2em] overflow-hidden align-bottom min-w-[280px]">
      <AnimatePresence mode="wait">
        <motion.span
          key={TRADES[index]}
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -40, opacity: 0 }}
          transition={{ duration: 0.4, ease: [0.25, 0.4, 0, 1] }}
          className="absolute left-0 text-orange-400"
        >
          {TRADES[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
};

const Test5 = () => (
  <section>
    <VariantLabel
      number={5}
      title="Rotating Trade Names (Automation)"
      description="Testing: Does personalizing the headline by trade increase engagement? Variables: dynamic rotating word in headline, cycles every 3 seconds. Apply to whichever headline wins from Tests 2-4."
    />
    <div className="bg-[#7c3aed] min-h-[600px]">
      <Navbar ctaText="Get Started" />
      <TrustStrip />
      <div className="max-w-6xl mx-auto px-6 md:px-12 py-10 md:py-14">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <span className="inline-block bg-orange-500/20 text-orange-300 text-xs font-bold uppercase tracking-wider px-4 py-1.5 rounded-full mb-6">
              For Home Improvement Contractors
            </span>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-[1.1] mb-4">
              Book More <RotatingTrade /> This Week.
            </h1>
            <p className="text-white/70 italic text-lg mb-1">Without Running a Single Ad.</p>
            <p className="text-white/70 text-base leading-relaxed mb-6">
              Verified homeowner leads, exclusive to you. No ad spend. No shared lists. No competition.
            </p>
            <div className="mb-2">
              <PulseCTA text="Claim My Service Area" />
            </div>
            <div className="flex flex-wrap items-center gap-3 text-white/60 text-xs mb-6">
              <span className="flex items-center gap-1"><span className="text-sm">⚡</span> Quick setup</span>
              <span className="text-white/30">•</span>
              <span className="flex items-center gap-1"><span className="text-sm">💳</span> No long term contracts</span>
              <span className="text-white/30">•</span>
              <span className="flex items-center gap-1"><span className="text-sm">✨</span> Cancel anytime</span>
            </div>
            <HunterTestimonial showPhoto />
          </div>
          <ContractorImage variant="success" />
        </div>
      </div>
    </div>
  </section>
);

/* ────────────────────────────────────────────
   Page Layout
   ──────────────────────────────────────────── */

const OodlesVariations = () => (
  <div className="bg-gray-950 min-h-screen">
    {/* Page Header */}
    <div className="bg-gray-950 border-b border-white/10 px-6 md:px-12 py-10">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-extrabold text-white mb-3">
          Oodles of Leads — Header A/B Test Variations
        </h1>
        <p className="text-white/50 text-base max-w-2xl">
          3 header variants for A/B testing. Same layout, isolated variables. Test 1 vs 1.1 tests CTA count. Test 1 vs 2 tests messaging.
        </p>
        <div className="flex flex-wrap gap-2 mt-4">
          {["Test 1", "Test 1.1", "Test 2"].map((label) => (
            <a
              key={label}
              href={`#test-${label.toLowerCase().replace("test ", "")}`}
              className="bg-white/10 hover:bg-orange-500/20 text-white/70 hover:text-orange-300 text-xs font-semibold px-3 py-1.5 rounded-full transition-colors"
            >
              {label}
            </a>
          ))}
        </div>
      </div>
    </div>

    {/* Variants */}
    <div id="test-1"><Test1 /></div>
    <div id="test-1.1"><Test1_1 /></div>
    <div id="test-2"><Test2 /></div>

    {/* Footer */}
    <div className="bg-gray-950 border-t border-white/10 px-6 md:px-12 py-10">
      <div className="max-w-5xl mx-auto text-center">
        <p className="text-white/30 text-sm">
          Oodles of Leads — Header Optimization Variants — Built for A/B Testing
        </p>
      </div>
    </div>
  </div>
);

export default OodlesVariations;
