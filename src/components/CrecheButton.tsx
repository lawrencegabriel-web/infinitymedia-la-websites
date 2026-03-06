import { Link } from "react-router-dom";
import { motion } from "framer-motion";

interface CrecheButtonProps {
  children: React.ReactNode;
  to?: string;
  variant?: "outlined" | "filled";
  type?: "button" | "submit";
  disabled?: boolean;
  fullWidth?: boolean;
  onClick?: () => void;
  showArrow?: boolean;
}

const CrecheButton = ({
  children,
  to,
  variant = "outlined",
  type = "button",
  disabled,
  fullWidth,
  onClick,
  showArrow = true,
}: CrecheButtonProps) => {
  const base = `
    group relative inline-flex items-center justify-center gap-3 overflow-hidden
    px-10 py-4 font-body text-[0.7rem] font-medium uppercase
    tracking-[0.25em] transition-all duration-500 border
    ${fullWidth ? "w-full" : ""}
    ${disabled ? "opacity-50 pointer-events-none" : ""}
  `;

  const variants = {
    outlined:
      "border-gold/40 text-gold bg-transparent hover:border-gold hover:bg-gold hover:text-noir",
    filled:
      "border-gold bg-gold text-noir hover:bg-gold-bright",
  };

  const content = (
    <>
      <span className="relative z-10 transition-transform duration-500">{children}</span>
      {showArrow && (
        <svg
          className="relative z-10 h-3.5 w-3.5 transition-transform duration-500 group-hover:translate-x-1.5"
          viewBox="0 0 16 16"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        >
          <path d="M3 8h10M9 4l4 4-4 4" />
        </svg>
      )}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={`${base} ${variants[variant]}`}>
        {content}
      </Link>
    );
  }

  return (
    <motion.button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={`${base} ${variants[variant]}`}
      whileTap={{ scale: 0.97 }}
    >
      {content}
    </motion.button>
  );
};

export default CrecheButton;
