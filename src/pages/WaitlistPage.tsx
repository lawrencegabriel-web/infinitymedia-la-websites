import { useState, useRef, FormEvent, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Reveal from "../components/RevealOnScroll";
import CrecheButton from "../components/CrecheButton";
import { Link } from "react-router-dom";

const easeOutExpo: [number, number, number, number] = [0.16, 1, 0.3, 1];

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
    }, 800);
    return () => clearTimeout(delay);
  }, []);

  return (
    <div className="mt-10 inline-flex items-center gap-3 border border-gold/20 px-6 py-3">
      <motion.div
        className="h-1.5 w-1.5 rounded-full bg-gold"
        animate={{ opacity: [0.4, 1, 0.4] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      />
      <span className="text-[0.7rem] uppercase tracking-[0.2em] text-gold">
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
    <div className="relative min-h-screen bg-noir">
      {/* Background orbs */}
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        <motion.div
          className="absolute -right-[10%] -top-[10%] h-[600px] w-[600px] rounded-full bg-noir-light opacity-40 blur-[120px]"
          animate={{ x: [0, 30, 0], y: [0, -25, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -left-[5%] bottom-[10%] h-[400px] w-[400px] rounded-full opacity-20 blur-[120px]"
          style={{ backgroundColor: "hsl(var(--gold) / 0.2)" }}
          animate={{ x: [0, -35, 0], y: [0, 40, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        />
      </div>

      <Navbar />

      {/* Hero */}
      <section className="relative z-10 px-6 pb-20 pt-48 md:px-12 md:pt-56">
        <div className="mx-auto max-w-[800px]">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="mb-8"
          >
            <span className="text-label">Founding Membership</span>
            <span className="gold-line mt-2" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.3, ease: easeOutExpo }}
            className="text-display-xl text-cream"
          >
            This is your<br />
            <em className="italic text-gold">invitation</em>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: easeOutExpo }}
            className="mt-6 max-w-[550px] text-body-lg text-cream-muted"
          >
            We're looking for 150 families who believe that the best childhood memories are the ones the whole family shares.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.7, ease: easeOutExpo }}
          >
            <CounterPill />
          </motion.div>

          <motion.div
            className="mt-12 h-px origin-left bg-gold/15"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.5, delay: 0.9, ease: easeOutExpo }}
          />
        </div>
      </section>

      {/* Content grid */}
      <section className="relative z-10 mx-auto max-w-[1200px] px-6 pb-24 md:px-12">
        <div className="grid items-start gap-16 md:grid-cols-[1fr_1.1fr] md:gap-20">
          {/* Left column - Info */}
          <div className="md:sticky md:top-[12vh] md:pt-8">
            <Reveal>
              <div className="mb-14">
                <div className="mb-4 flex items-center gap-3">
                  <span className="font-display text-[2rem] text-gold/15">01</span>
                  <h3 className="text-label">What you're joining</h3>
                </div>
                <p className="text-body-md text-cream-muted">
                  Crèche is a private family club on the Westside of Los Angeles, built for families with young children. Padel and pickleball courts, golf simulators, family and adults-only dining, coworking space, seasonal entertainment, and a preschool opening Fall 2027 with automatic acceptance for members.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="mb-14">
                <div className="mb-4 flex items-center gap-3">
                  <span className="font-display text-[2rem] text-gold/15">02</span>
                  <h3 className="text-label">How it works</h3>
                </div>
                <p className="text-body-md text-cream-muted">
                  Submit your interest below. Our team reviews every application personally. If there's a fit, we'll reach out to schedule a conversation. There's no obligation — just a chance to learn more and see if Crèche feels right for your family.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="mb-14 grid grid-cols-2 gap-8 border-t border-gold/10 pt-8">
                {infoValues.map((item) => (
                  <div key={item.label}>
                    <div className="font-display text-[clamp(1.5rem,3vw,2rem)] font-light text-gold">
                      {item.value}
                    </div>
                    <div className="mt-1 text-[0.65rem] uppercase tracking-[0.2em] text-stone">
                      {item.label}
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.3}>
              <blockquote className="border-l-2 border-gold/20 pl-6 font-display text-display-sm italic text-cream/70">
                "A place where the whole family can feel at home away from home."
              </blockquote>
            </Reveal>
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
                  <Reveal>
                    <div className="border border-gold/10 bg-noir-light/50 p-8 md:p-12">
                      {/* Corner accents */}
                      <div className="relative">
                        <div className="absolute -left-3 -top-3 h-4 w-4 border-l border-t border-gold/30" />
                        <div className="absolute -right-3 -top-3 h-4 w-4 border-r border-t border-gold/30" />
                      </div>

                      <h3 className="font-display text-display-sm text-cream">
                        Request an Invitation
                      </h3>
                      <p className="mt-2 text-body-sm text-stone">
                        All fields are considered. Take your time.
                      </p>

                      <form ref={formRef} onSubmit={handleSubmit} className="mt-10 space-y-7">
                        <div className="grid gap-7 md:grid-cols-2">
                          <FormField label="First Name" name="first-name" placeholder="First Name" />
                          <FormField label="Last Name" name="last-name" placeholder="Last Name" />
                        </div>
                        <FormField label="Email" name="email" type="email" placeholder="Email" />
                        <FormField label="Phone" name="phone" placeholder="(310) 555-0000" optional />
                        <FormField label="Neighborhood" name="neighborhood" placeholder="e.g. Santa Monica, Brentwood, Pacific Palisades" />
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
                          <p className="mt-4 text-center text-[0.72rem] text-ash">
                            We review every application personally. You'll hear from us within a few days.
                          </p>
                        </div>
                      </form>

                      {/* Bottom corner accents */}
                      <div className="relative">
                        <div className="absolute -bottom-3 -left-3 h-4 w-4 border-b border-l border-gold/30" />
                        <div className="absolute -bottom-3 -right-3 h-4 w-4 border-b border-r border-gold/30" />
                      </div>
                    </div>
                  </Reveal>
                </motion.div>
              ) : (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: easeOutExpo }}
                  className="flex min-h-[500px] flex-col items-center justify-center border border-gold/10 bg-noir-light/50 p-16 text-center"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.2, ease: easeOutExpo }}
                    className="mb-10 flex h-16 w-16 items-center justify-center border-2 border-gold"
                  >
                    <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="hsl(var(--gold))" strokeWidth="2">
                      <path d="M5 13l4 4L19 7" />
                    </svg>
                  </motion.div>
                  <h3 className="font-display text-display-md text-cream">You're on the list</h3>
                  <p className="mx-auto mt-4 max-w-[380px] text-body-md text-cream-muted">
                    We've received your application and will be in touch soon. In the meantime, the best thing you can do is tell a friend.
                  </p>
                  <div className="mt-10">
                    <Link
                      to="/"
                      className="inline-flex items-center gap-3 border border-gold/40 px-10 py-4 text-[0.7rem] font-medium uppercase tracking-[0.25em] text-gold transition-all duration-500 hover:border-gold hover:bg-gold hover:text-noir"
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
    "w-full border border-gold/15 bg-transparent px-4 py-3.5 text-body-sm text-cream placeholder:text-ash focus:border-gold/40 focus:outline-none transition-colors duration-300";

  return (
    <div>
      <label className="text-label mb-2.5 block text-[0.6rem]">
        {label}
        {optional && (
          <span className="ml-1.5 normal-case tracking-normal text-ash opacity-70">
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
