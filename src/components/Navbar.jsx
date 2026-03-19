import { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const NAV_LINKS = [
  { label: "About Us", href: "/aboutus" },
  { label: "Teams", href: "/teams" },
  { label: "Services", href: "/services" },
  { label: "Works", href: "/work" },
  { label: "Career", href: "/career" },
  { label: "Contact", href: "/contact" },
];

function DesktopLink({ link, active }) {
  const [hovered, setHovered] = useState(false);
  const isActive = active || hovered;

  return (
    <Link
      to={link.href}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative pb-1 text-[11px] font-semibold uppercase tracking-[0.08em] transition-colors duration-250"
      style={{
        fontFamily: "'DM Sans', sans-serif",
        // Brighter inactive state (0.8 instead of 0.5)
        color: isActive ? "#ffffff" : "rgba(255,255,255,0.8)",
        textDecoration: "none",
      }}
    >
      {link.label}
      <span
        className="absolute bottom-0 left-0 h-px w-full bg-[#e8ff00] origin-left transition-transform duration-[350ms]"
        style={{
          transform: isActive ? "scaleX(1)" : "scaleX(0)",
          transitionTimingFunction: "cubic-bezier(0.16,1,0.3,1)",
        }}
      />
    </Link>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
        style={{
          background: scrolled || menuOpen ? "#000000" : "#027501",
          backdropFilter: scrolled ? "blur(12px)" : "none",
        }}
      >
        <div className="w-[90%] max-w-[1400px] mx-auto h-[72px] flex items-center justify-between">
          <Link
            to="/"
            className="text-white no-underline tracking-[0.04em] flex-shrink-0"
            style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 22 }}
          >
            SEEREON
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <DesktopLink
                key={link.label}
                link={link}
                active={
                  location.pathname === link.href ||
                  location.pathname.startsWith(link.href + "/")
                }
              />
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <Link
              to="/contact"
              className="hidden md:inline-block text-[#e8ff00] border border-[#e8ff00] px-[22px] py-[10px]
                         text-[11px] font-bold tracking-[0.08em] no-underline uppercase
                         transition-all duration-200 hover:bg-[#e8ff00] hover:text-black flex-shrink-0"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              HIRE SEEREON
            </Link>

            <button
              onClick={() => setMenuOpen((v) => !v)}
              className="md:hidden flex flex-col justify-center items-center w-10 h-10 gap-[6px] bg-transparent border-none cursor-pointer"
              aria-label="Toggle menu"
            >
              <motion.span
                animate={menuOpen ? { rotate: 45, y: 9 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.3 }}
                className="block w-6 h-px bg-white origin-center"
              />
              <motion.span
                animate={menuOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
                transition={{ duration: 0.2 }}
                className="block w-6 h-px bg-white origin-center"
              />
              <motion.span
                animate={menuOpen ? { rotate: -45, y: -9 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.3 }}
                className="block w-6 h-px bg-white origin-center"
              />
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="fixed top-[72px] left-0 right-0 z-40 bg-black border-t border-white/10"
          >
            <div className="w-[90%] mx-auto py-8 flex flex-col gap-1">
              {NAV_LINKS.map((link, i) => (
                <motion.div
                  key={link.label}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    duration: 0.35,
                    delay: i * 0.05,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  <Link
                    to={link.href}
                    className="block py-4 border-b border-white/[0.07] no-underline transition-colors duration-200"
                    style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: 14,
                      fontWeight: 600,
                      letterSpacing: "0.06em",
                      textTransform: "uppercase",
                      // Brighter mobile inactive state
                      color: location.pathname === link.href ? "#fff" : "rgba(255,255,255,0.8)",
                    }}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: NAV_LINKS.length * 0.05 + 0.1 }}
                className="mt-6"
              >
                <Link
                  to="/contact"
                  className="block text-center text-[#e8ff00] border border-[#e8ff00] py-3 px-6
                               text-[12px] font-bold tracking-[0.1em] uppercase no-underline
                               hover:bg-[#e8ff00] hover:text-black transition-all duration-200"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  HIRE SEEREON
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}