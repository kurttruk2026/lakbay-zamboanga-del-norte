import { useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { ArrowUpRight, Menu, X } from "lucide-react";
import Brand from "./Brand";
import { destinations } from "../data/destinations";

const links = [
  ["/", "Home"],
  ["/destinations", "Destinations"],
  ["/explore", "Explore"],
  ["/travel-guide", "Travel Guide"],
  ["/about", "About"],
];
export default function Navbar() {
  const [open, setOpen] = useState(false),
    [scrolled, setScrolled] = useState(false);
  const location = useLocation(),
    toggle = useRef(null);
  const overPhoto =
    location.pathname === "/" ||
    destinations.some(
      (destination) =>
        location.pathname === `/destinations/${destination.slug}`,
    );
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  useEffect(() => {
    setOpen(false);
  }, [location]);
  useEffect(() => {
    if (!open) return;
    const onKey = (event) => {
      if (event.key === "Escape") {
        setOpen(false);
        toggle.current?.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);
  return (
    <header
      className={`site-header ${overPhoto && !scrolled && !open ? "header-transparent" : "header-solid"}`}
    >
      <div className="container nav-wrap">
        <Brand />
        <nav
          aria-label="Main navigation"
          className={`nav-links ${open ? "is-open" : ""}`}
          id="main-nav"
        >
          {links.map(([to, title]) => (
            <NavLink
              key={to}
              to={to}
              end={to === "/"}
              onClick={() => setOpen(false)}
            >
              {title}
            </NavLink>
          ))}
          <Link className="button button-small nav-cta" to="/destinations">
            Explore ZaNorte <ArrowUpRight size={16} />
          </Link>
        </nav>
        <button
          ref={toggle}
          className="menu-toggle"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="main-nav"
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>
    </header>
  );
}
