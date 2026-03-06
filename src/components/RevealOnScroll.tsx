import { motion } from "framer-motion";
import { ReactNode } from "react";

interface RevealProps {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
}

const Reveal = ({
  children,
  delay = 0,
  y = 40,
  className = "",
}: RevealProps) => (
  <motion.div
    initial={{ opacity: 0, y }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{
      duration: 1,
      delay,
      ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
    }}
    className={className}
  >
    {children}
  </motion.div>
);

export default Reveal;
