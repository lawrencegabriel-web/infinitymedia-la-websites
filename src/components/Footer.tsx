import { Link, useLocation } from "react-router-dom";

const Footer = () => {
  const location = useLocation();
  const isWaitlist = location.pathname === "/waitlist";

  return (
    <footer className="border-t border-champagne/10">
      <div className="mx-auto flex max-w-[1400px] flex-col items-center gap-8 px-8 py-16 pt-24 md:flex-row md:justify-between">
        <span className="font-display text-[1.4rem] tracking-[0.05em] text-ivory">
          Crèche
        </span>
        <span className="text-[0.8rem] text-soft-gray">
          © 2025 Crèche. Westside Los Angeles.
        </span>
        <Link
          to={isWaitlist ? "/" : "/waitlist"}
          className="text-[0.75rem] uppercase tracking-[0.1em] text-warm-gray transition-colors hover:text-champagne"
        >
          {isWaitlist ? "Home" : "Waitlist"}
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
