import React, { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom"; // Use Link from react-router-dom
import "./navbar.css";

const NAV_LINKS = [
  { label: "Company", href: "/company" },
  { label: "About Us", href: "/aboutus" },
  { label: "Teams", href: "/teams" },

  { label: "Solutions", href: "/solutions" },
  { label: "Clients", href: "/clients" },
  { label: "Career", href: "/career" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation(); // Hook to get current path

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        background: scrolled ? "rgba(10, 10, 10, 0.88)" : "transparent",
      }}
    >
      <div
        style={{
          maxWidth: "1920px",
          backgroundColor: "#000",
          margin: "0 auto",
          padding: "0 40px",
          height: "72px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Link
          to="/"
          style={{
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: "22px",
            color: "#fff",
            textDecoration: "none",
          }}
        >
          SEEREON
        </Link>

        <nav style={{ display: "flex", alignItems: "center", gap: "36px" }}>
          {NAV_LINKS.map((link) => (
            <DesktopLink
              key={link.label}
              link={link}
              // Dynamically check if current location matches the link href
              active={location.pathname === link.href}
            />
          ))}
        </nav>

        <Link
          to="/contact"
          style={{
            color: "#e8ff00",
            border: "1px solid #e8ff00",
            padding: "10px 22px",
            fontSize: "11px",
            fontWeight: 700,
            textDecoration: "none",
          }}
        >
          HIRE SEEREON
        </Link>
      </div>
    </header>
  );
}

function DesktopLink({ link, active }) {
  const [hovered, setHovered] = useState(false);
  const isActive = active || hovered;

  return (
    <Link
      to={link.href}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        color: isActive ? "#ffffff" : "rgba(255,255,255,0.5)",
        fontFamily: "'DM Sans', sans-serif",
        fontSize: "12px",
        textTransform: "uppercase",
        textDecoration: "none",
        position: "relative",
        paddingBottom: "4px",
      }}
    >
      {link.label}
      <span
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          height: "1px",
          background: "#e8ff00",
          width: "100%",
          transform: isActive ? "scaleX(1)" : "scaleX(0)",
          transition: "transform 0.35s cubic-bezier(0.16,1,0.3,1)",
        }}
      />
    </Link>
  );
}
