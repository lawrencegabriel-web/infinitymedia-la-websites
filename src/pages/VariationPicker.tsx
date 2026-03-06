import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const variations = [
  {
    label: "Variation 1",
    subtitle: "Clean & Classic",
    description: "Simple fade-in animations, centered layout, 2×2 amenities grid, static counters.",
    to: "/v1",
  },
  {
    label: "Variation 2",
    subtitle: "Cinematic & Bold",
    description: "Letter-by-letter reveals, parallax scrolling, 3D card flips, animated counters, rotating scroll indicator.",
    to: "/",
  },
];

const VariationPicker = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-midnight px-4 py-24">
      <motion.span
        className="text-uppercase-label mb-6"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Choose a Design
      </motion.span>
      <motion.h1
        className="font-display text-display-lg text-ivory text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        Two variations of <em className="italic text-champagne">Crèche</em>
      </motion.h1>

      <div className="mt-16 grid w-full max-w-[900px] gap-6 md:grid-cols-2">
        {variations.map((v, i) => (
          <motion.div
            key={v.to}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 + i * 0.15 }}
          >
            <Link
              to={v.to}
              className="group block border border-champagne/10 p-10 transition-all duration-500 hover:border-champagne/30 hover:bg-champagne/5"
            >
              <span className="text-[0.7rem] uppercase tracking-[0.2em] text-warm-gray">
                {v.label}
              </span>
              <h2 className="mt-3 font-display text-display-sm text-ivory transition-colors group-hover:text-champagne">
                {v.subtitle}
              </h2>
              <p className="mt-4 text-body-sm text-ivory-muted">
                {v.description}
              </p>
              <span className="mt-6 inline-block text-[0.75rem] uppercase tracking-[0.15em] text-champagne opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                View →
              </span>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default VariationPicker;
