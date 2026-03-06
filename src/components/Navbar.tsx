import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isWaitlist = location.pathname === "/waitlist";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = isWaitlist
    ? [
        { label: "Home", href: "/" },
        { label: "Club", href: "/#amenities" },
        { label: "Waitlist", href: "/waitlist", active: true },
      ]
    : [
        { label: "About", href: "#manifesto" },
        { label: "Club", href: "#amenities" },
        { label: "Waitlist", href: "/waitlist" },
      ];

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-[100] transition-all duration-[400ms] ease-out"
      style={{
        backgroundColor: scrolled ? "rgba(10, 15, 13, 0.92)" : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(20px)" : "none",
        padding: scrolled ? "16px 0" : "32px 0",
      }}
    >
      <div className="mx-auto flex max-w-[1400px] items-center justify-between px-8">
        <Link
          to="/"
          className="font-display text-[1.6rem] tracking-[0.05em] text-ivory transition-colors hover:text-champagne"
        >
          Crèche
        </Link>
        <div className="flex items-center gap-4 md:gap-8">
          {links.map((link) => (
            <NavItem key={link.label} {...link} />
          ))}
        </div>
      </div>
    </motion.nav>
  );
};

const NavItem = ({
  label,
  href,
  active,
}: {
  label: string;
  href: string;
  active?: boolean;
}) => {
  const isExternal = href.startsWith("/");
  const className = `text-nav-link relative group transition-colors ${
    active ? "text-champagne" : "text-ivory-muted hover:text-champagne"
  }`;

  const underline = (
    <span className="absolute -bottom-1 left-0 h-px w-0 bg-champagne transition-all duration-[400ms] ease-out group-hover:w-full" />
  );

  if (isExternal) {
    return (
      <Link to={href} className={className}>
        {label}
        {underline}
      </Link>
    );
  }

  return (
    <a href={href} className={className}>
      {label}
      {underline}
    </a>
  );
};

export default Navbar;
