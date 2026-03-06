import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

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
    <nav
      className="fixed top-0 left-0 right-0 z-[100] transition-all duration-500"
      style={{
        backgroundColor: scrolled ? "hsla(0, 0%, 2%, 0.95)" : "transparent",
        backdropFilter: scrolled ? "blur(24px)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(24px)" : "none",
      }}
    >
      <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 md:px-12"
        style={{ padding: scrolled ? "18px 48px" : "32px 48px" }}
      >
        <Link
          to="/"
          className="font-display text-xl tracking-[0.06em] text-cream transition-colors duration-300 hover:text-gold"
        >
          Crèche
        </Link>
        <div className="flex items-center gap-6 md:gap-10">
          {links.map((link) => {
            const className = `text-nav relative transition-colors duration-300 ${
              link.active ? "text-gold" : "text-cream-muted hover:text-gold"
            }`;

            const inner = (
              <>
                {link.label}
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-gold transition-all duration-500 ease-out group-hover:w-full" />
              </>
            );

            return link.href.startsWith("/") ? (
              <Link key={link.label} to={link.href} className={`group ${className}`}>
                {inner}
              </Link>
            ) : (
              <a key={link.label} href={link.href} className={`group ${className}`}>
                {inner}
              </a>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
