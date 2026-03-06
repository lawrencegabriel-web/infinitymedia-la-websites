import { useState, useRef, FormEvent, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import RevealOnScroll from "../components/RevealOnScroll";
import CrecheButton from "../components/CrecheButton";
import { Link } from "react-router-dom";

const heroVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.9,
      delay: i * 0.15,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  }),
};

const CounterPill = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const delay = setTimeout(() => {
      const target = 150;
      const duration = 2500;
      const start = performance.now();
      const animate = (now: number) => {
        const elapsed = now - start;
        const progress = Math.min(elapsed / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 2);
        setCount(Math.round(eased * target));
        if (progress < 1) requestAnimationFrame(animate);
      };
      requestAnimationFrame(animate);
    }, 1000);
    return () => clearTimeout(delay);
  }, []);

  return (
    <div className="mt-8 inline-flex items-center gap-3 rounded-full border border-champagne/20 px-6 py-3">
      <motion.div
        className="h-1.5 w-1.5 rounded-full bg-champagne"
        animate={{ opacity: [0.4, 1, 0.4] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      />
      <span className="text-[0.75rem] uppercase tracking-[0.15em] text-champagne">
        {count} founding spots
      </span>
    </div>
  );
};

const infoValues = [
  { value: "$9k", label: "Initiation" },
  { value: "$6.5k", label: "Annual" },
  { value: "150", label: "Families" },
  { value: "2027", label: "Opening" },
];

const WaitlistPage = () => {
  const [formState, setFormState] = useState<"form" | "submitting" | "success">("form");
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    const fd = new FormData(formRef.current);
    const firstName = (fd.get("first-name") as string)?.trim();
    const lastName = (fd.get("last-name") as string)?.trim();
    const email = (fd.get("email") as string)?.trim();

    if (!firstName || !lastName || !email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      formRef.current.style.animation = "shake 0.5s ease";
      setTimeout(() => {
        if (formRef.current) formRef.current.style.animation = "";
      }, 500);
      return;
    }

    setFormState("submitting");
    await new Promise((r) => setTimeout(r, 1500));
    setFormState("success");
  };

  return (
    <div className="relative min-h-screen bg-midnight">
      {/* Background orbs */}
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        <motion.div
          className="absolute -right-[10%] -top-[10%] h-[600px] w-[600px] rounded-full bg-forest opacity-30 blur-[100px]"
          animate={{ x: [0, 30, 0], y: [0, -25, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -left-[5%] bottom-[10%] h-[400px] w-[400px] rounded-full opacity-30 blur-[100px]"
          style={{ backgroundColor: "hsl(var(--champagne) / 0.15)" }}
          animate={{ x: [0, -35, 0], y: [0, 40, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        />
        <motion.div
          className="absolute right-[20%] top-[40%] h-[300px] w-[300px] rounded-full bg-sage opacity-15 blur-[100px]"
          animate={{ x: [0, 20, 0], y: [0, -30, 0] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
      </div>

      <Navbar />

      {/* Hero */}
      <section className="relative z-10 px-4 pb-16 pt-48 text-center md:px-8 md:pt-56">
        <div className="mx-auto max-w-[800px]">
          <motion.span custom={0} variants={heroVariants} initial="hidden" animate="visible" className="text-uppercase-label">
            Founding Membership
          </motion.span>
          <motion.h1 custom={1} variants={heroVariants} initial="hidden" animate="visible" className="mt-6 text-display-lg text-ivory">
            This is your
            <br />
            <em className="italic">invitation</em>
          </motion.h1>
          <motion.p custom={2} variants={heroVariants} initial="hidden" animate="visible" className="mx-auto mt-4 max-w-[600px] text-body-md text-ivory-muted">
            We're looking for 150 families who believe that the best childhood memories are the ones the whole family shares.
          </motion.p>
          <motion.div custom={3} variants={heroVariants} initial="hidden" animate="visible">
            <CounterPill />
          </motion.div>
        </div>
      </section>

      {/* Content grid */}
      <section className="relative z-10 mx-auto max-w-[1200px] px-4 pb-24 md:px-16">
        <div className="grid items-start gap-16 md:grid-cols-2 md:gap-24">
          {/* Left column - Info */}
          <div className="md:sticky md:top-[12vh] md:pt-8">
            <RevealOnScroll>
              <div className="mb-12">
                <h3 className="text-uppercase-label mb-4">What you're joining</h3>
                <p className="text-body-md text-ivory-muted">
                  Crèche is a private family club on the Westside of Los Angeles, built for families with young children. Padel and pickleball courts, golf simulators, family and adults-only dining, coworking space, seasonal entertainment, and a preschool opening Fall 2027 with automatic acceptance for members.
                </p>
              </div>
            </RevealOnScroll>

            <RevealOnScroll delay={0.1}>
              <div className="mb-12">
                <h3 className="text-uppercase-label mb-4">How it works</h3>
                <p className="text-body-md text-ivory-muted">
                  Submit your interest below. Our team reviews every application personally. If there's a fit, we'll reach out to schedule a conversation. There's no obligation — just a chance to learn more and see if Crèche feels right for your family.
                </p>
              </div>
            </RevealOnScroll>

            <RevealOnScroll delay={0.2}>
              <div className="mb-12 grid grid-cols-2 gap-6">
                {infoValues.map((item) => (
                  <div key={item.label}>
                    <div className="font-display text-[clamp(1.5rem,3vw,2rem)] font-light text-champagne">
                      {item.value}
                    </div>
                    <div className="mt-1 text-[0.75rem] uppercase tracking-[0.15em] text-warm-gray">
                      {item.label}
                    </div>
                  </div>
                ))}
              </div>
            </RevealOnScroll>

            <RevealOnScroll delay={0.3}>
              <blockquote className="border-l border-champagne/20 pl-6 font-display text-display-sm italic text-ivory/80">
                "A place where the whole family can feel at home away from home."
              </blockquote>
            </RevealOnScroll>
          </div>

          {/* Right column - Form or Success */}
          <div>
            <AnimatePresence mode="wait">
              {formState !== "success" ? (
                <motion.div
                  key="form"
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                >
                  <RevealOnScroll>
                    <div className="border border-champagne/10 p-8 md:p-12">
                      <h3 className="font-display text-display-sm text-ivory">
                        Request an Invitation
                      </h3>
                      <p className="mt-2 text-body-sm text-warm-gray">
                        All fields are considered. Take your time.
                      </p>

                      <form ref={formRef} onSubmit={handleSubmit} className="mt-10 space-y-6">
                        <div className="grid gap-6 md:grid-cols-2">
                          <FormField label="First Name" name="first-name" placeholder="First Name" />
                          <FormField label="Last Name" name="last-name" placeholder="Last Name" />
                        </div>
                        <FormField label="Email" name="email" type="email" placeholder="Email" />
                        <FormField
                          label="Phone"
                          name="phone"
                          placeholder="(310) 555-0000"
                          optional
                        />
                        <FormField
                          label="Neighborhood"
                          name="neighborhood"
                          placeholder="e.g. Santa Monica, Brentwood, Pacific Palisades"
                        />
                        <FormField
                          label="Tell us about your family"
                          name="family"
                          placeholder="How many kids, their ages, what weekends look like for you... whatever feels relevant."
                          textarea
                        />
                        <FormField
                          label="What draws you to Crèche?"
                          name="interest"
                          placeholder="There's no right answer here."
                          textarea
                          rows={3}
                          optional
                        />

                        <div className="pt-8">
                          <CrecheButton
                            type="submit"
                            variant="filled"
                            fullWidth
                            showArrow={false}
                            disabled={formState === "submitting"}
                          >
                            {formState === "submitting" ? "Submitting..." : "Submit Application"}
                          </CrecheButton>
                          <p className="mt-4 text-center text-[0.78rem] text-soft-gray">
                            We review every application personally. You'll hear from us within a few days.
                          </p>
                        </div>
                      </form>
                    </div>
                  </RevealOnScroll>
                </motion.div>
              ) : (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] as const }}
                  className="flex min-h-[400px] flex-col items-center justify-center border border-champagne/10 p-16 text-center"
                >
                  <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-full border-2 border-champagne">
                    <svg
                      viewBox="0 0 24 24"
                      className="h-7 w-7"
                      fill="none"
                      stroke="hsl(var(--champagne))"
                      strokeWidth="2"
                    >
                      <path d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-display-sm text-ivory">You're on the list</h3>
                  <p className="mx-auto mt-2 max-w-[380px] text-body-md text-ivory-muted">
                    We've received your application and will be in touch soon. In the meantime, the best thing you can do is tell a friend.
                  </p>
                  <div className="mt-8">
                    <Link
                      to="/"
                      className="inline-flex items-center gap-2 border border-champagne px-[2.8rem] py-[1.1rem] text-[0.75rem] font-medium uppercase tracking-[0.2em] text-champagne transition-colors hover:bg-champagne hover:text-midnight"
                    >
                      Back to Home
                    </Link>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>

      <Footer />

      <style>{`
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          25% { transform: translateX(-8px); }
          50% { transform: translateX(8px); }
          75% { transform: translateX(-4px); }
        }
      `}</style>
    </div>
  );
};

const FormField = ({
  label,
  name,
  placeholder,
  type = "text",
  optional,
  textarea,
  rows = 5,
}: {
  label: string;
  name: string;
  placeholder?: string;
  type?: string;
  optional?: boolean;
  textarea?: boolean;
  rows?: number;
}) => {
  const inputClasses =
    "w-full border border-champagne/20 bg-transparent px-4 py-3 text-body-sm text-ivory placeholder:text-soft-gray focus:border-champagne/50 focus:outline-none transition-colors";

  return (
    <div>
      <label className="text-uppercase-label mb-2 block">
        {label}
        {optional && (
          <span className="ml-1 normal-case tracking-normal opacity-50">
            (optional)
          </span>
        )}
      </label>
      {textarea ? (
        <textarea
          name={name}
          placeholder={placeholder}
          rows={rows}
          className={`${inputClasses} min-h-[120px] resize-none`}
        />
      ) : (
        <input
          type={type}
          name={name}
          placeholder={placeholder}
          className={inputClasses}
        />
      )}
    </div>
  );
};

export default WaitlistPage;
