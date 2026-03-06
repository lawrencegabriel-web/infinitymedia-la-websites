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
  const baseClasses = `
    relative inline-flex items-center justify-center gap-[10px] overflow-hidden
    px-[2.8rem] py-[1.1rem] font-body text-[0.75rem] font-medium uppercase
    tracking-[0.2em] transition-all duration-300 border
    ${fullWidth ? "w-full" : ""}
    ${disabled ? "opacity-60 pointer-events-none" : ""}
  `;

  const variantClasses =
    variant === "filled"
      ? "bg-champagne border-champagne text-midnight hover:bg-champagne-dim"
      : "bg-transparent border-champagne text-champagne hover:bg-champagne hover:text-midnight";

  const content = (
    <>
      <span className="relative z-10">{children}</span>
      {showArrow && (
        <svg
          className="relative z-10 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
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
      <Link to={to} className={`group ${baseClasses} ${variantClasses}`}>
        {content}
      </Link>
    );
  }

  return (
    <motion.button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={`group ${baseClasses} ${variantClasses}`}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      {content}
    </motion.button>
  );
};

export default CrecheButton;
