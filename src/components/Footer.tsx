import { Link, useLocation } from "react-router-dom";

const Footer = () => {
  const location = useLocation();
  const isWaitlist = location.pathname === "/waitlist";

  return (
    <footer className="relative">
      <div className="gold-line-wide mx-12" />
      <div className="mx-auto flex max-w-[1400px] flex-col items-center gap-8 px-8 py-20 md:flex-row md:justify-between">
        <span className="font-display text-xl tracking-[0.06em] text-cream">
          Crèche
        </span>
        <span className="text-[0.75rem] tracking-wider text-ash">
          © 2025 Crèche · Westside Los Angeles
        </span>
        <Link
          to={isWaitlist ? "/" : "/waitlist"}
          className="text-nav text-stone transition-colors duration-300 hover:text-gold"
        >
          {isWaitlist ? "Home" : "Waitlist"}
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
