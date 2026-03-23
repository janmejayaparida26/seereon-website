import { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Globe, 
  Smartphone, 
  Database, 
  Layers, 
  BarChart, 
  Code,
  ChevronDown 
} from "lucide-react";

const NAV_LINKS = [
  { label: "About Us", href: "/aboutus" },
  { 
    label: "Services", 
    href: "/services",
    isMega: true,
    subLinks: [
      {
        category: "Development",
        items: [
          { name: "Custom Software Development", href: "/services/software", icon: <Code size={20}/> },
          { name: "Mobile App Development", href: "/services/mobile", icon: <Smartphone size={20}/> },
          { name: "Website Development", href: "/services/web", icon: <Globe size={20}/> },
        ]
      },
      {
        category: "Solutions",
        items: [
          { name: "MVP Builder", href: "/services/mvp", icon: <Database size={20}/> },
          { name: "E-Commerce", href: "/services/ecommerce", icon: <Layers size={20}/> },
          { name: "AI Development", href: "/services/ai", icon: <BarChart size={20}/> },
        ]
      }
    ]
  },
  { label: "Works", href: "/work" },
  { label: "Products", href: "/Products"},
  { label: "Career", href: "/career" },
  { label: "Contact", href: "/contact" },
];

function DesktopLink({ link, active, onHover, isMegaOpen }) {
  const [hovered, setHovered] = useState(false);
  const isActive = active || hovered;

  return (
    <div 
      className="relative py-6 cursor-pointer flex items-center gap-1"
      onMouseEnter={() => { setHovered(true); if(onHover) onHover(true); }}
      onMouseLeave={() => { setHovered(false); if(onHover) onHover(false); }}
    >
      <Link
        to={link.href}
        className="text-[12px] font-semibold uppercase tracking-[0.08em] transition-colors duration-250 no-underline flex items-center gap-1.5"
        style={{
          fontFamily: "'Arimo', sans-serif",
          color: isActive ? "#ffffff" : "rgba(255,255,255,0.8)",
        }}
      >
        {link.label}
        {link.isMega && (
          <motion.span
            animate={{ rotate: isMegaOpen ? 180 : 0 }}
            transition={{ duration: 0.3 }}
            className="flex items-center"
          >
            <ChevronDown size={14} strokeWidth={3} />
          </motion.span>
        )}
        <span
          className="absolute bottom-4 left-0 h-px w-full bg-[#e8ff00] origin-left transition-transform duration-[350ms]"
          style={{ transform: isActive ? "scaleX(1)" : "scaleX(0)" }}
        />
      </Link>
    </div>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [megaMenuOpen, setMegaMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMenuOpen(false);
    setMegaMenuOpen(false);
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
          background: scrolled || menuOpen || megaMenuOpen ? "rgba(0, 0, 0, 0.95)" : "transparent",
          backdropFilter: scrolled || menuOpen || megaMenuOpen ? "blur(16px)" : "none",
          borderBottom: scrolled || menuOpen || megaMenuOpen ? "1px solid rgba(255,255,255,0.08)" : "1px solid transparent",
        }}
      >
        <div className="w-[90%] max-w-[1400px] mx-auto h-[80px] flex items-center justify-between relative">
          <Link to="/" className="flex items-center no-underline z-10">
            <img 
              src="https://res.cloudinary.com/dcc7qgxmb/image/upload/v1773926744/Updated_Logo_ppjmvp.png" 
              alt="Seereon Logo" 
              className="h-[200px] w-auto object-contain" 
            />
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <DesktopLink
                key={link.label}
                link={link}
                isMegaOpen={link.isMega && megaMenuOpen}
                onHover={link.isMega ? setMegaMenuOpen : null}
                active={location.pathname.startsWith(link.href)}
              />
            ))}
          </nav>

          <div className="flex items-center gap-4 z-10">
            <Link
              to="/contact"
              className="hidden md:inline-block text-[#e8ff00] border border-[#e8ff00] px-[22px] py-[10px] text-[11px] font-bold tracking-[0.08em] no-underline uppercase transition-all duration-200 hover:bg-[#e8ff00] hover:text-black"
              style={{ fontFamily: "'Arimo', sans-serif" }}
            >
              Contact Us
            </Link>

            <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden flex flex-col gap-[6px] bg-transparent border-none">
              <motion.span animate={menuOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }} className="w-6 h-[1.5px] bg-white" />
              <motion.span animate={menuOpen ? { opacity: 0 } : { opacity: 1 }} className="w-6 h-[1.5px] bg-white" />
              <motion.span animate={menuOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }} className="w-6 h-[1.5px] bg-white" />
            </button>
          </div>

          <AnimatePresence>
            {megaMenuOpen && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                onMouseEnter={() => setMegaMenuOpen(true)}
                onMouseLeave={() => setMegaMenuOpen(false)}
                className="absolute top-[78px] left-0 right-0 w-full bg-white shadow-2xl z-40 hidden md:flex rounded-b-2xl border-t-2"
              >
                <div className="w-full flex min-h-[350px]">
                  {/* Left Side: Blue CTA Box */}
                  <div className="w-[35%] bg-[#2563eb] p-12 flex flex-col justify-between relative overflow-hidden">
                    <div className="relative z-10">
                      <span className="text-white/60 text-[10px] uppercase tracking-[0.2em] font-['Arimo',sans-serif] font-bold">Expert Consultation</span>
                      <h3 className="text-white text-[32px] font-['Arimo',sans-serif] font-bold leading-[1.1] mt-4">Book a Free Call <br /> with an Expert!</h3>
                    </div>
                    <div className="relative z-10">
                      <Link to="/contact" className="inline-block bg-white text-[#2563eb] px-10 py-4 text-[12px] font-['Arimo',sans-serif] font-black uppercase tracking-widest no-underline hover:bg-gray-100 transition-all">Book Now!</Link>
                    </div>
                    <div className="absolute bottom-[-20px] left-[-20px] w-40 h-40 bg-white/10 -rotate-45" />
                  </div>

                  {/* Right Side: Two Large Columns */}
                  <div className="w-[65%] p-12 grid grid-cols-2 gap-16 bg-white items-start">
                    {NAV_LINKS.find(l => l.isMega).subLinks.map((cat, idx) => (
                      <div key={idx} className="flex flex-col gap-8">
                        <h4 className="text-black text-[16px] uppercase tracking-[0.2em] font-['Arimo',sans-serif] font-black border-b-2 border-gray-100 pb-4">{cat.category}</h4>
                        <ul className="flex flex-col gap-6 p-0 m-0 list-none">
                          {cat.items.map((item, i) => (
                            <li key={i}>
                              <Link to={item.href} className="group flex items-center gap-4 text-gray-600 hover:text-[#2563eb] transition-all no-underline">
                                <span className="bg-gray-50 p-2 rounded-lg group-hover:bg-blue-50 transition-colors">{item.icon}</span>
                                <span className="text-[16px] font-bold">{item.name}</span>
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </header>

      {/* MOBILE MENU (Condensed for brevity, same logic as before) */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }} className="fixed inset-0 z-40 bg-black pt-[72px] md:hidden">
            <div className="w-[90%] mx-auto py-8">
              {NAV_LINKS.map((link) => (
                <Link key={link.label} to={link.href} className="block py-5 border-b border-white/10 no-underline text-white text-[18px] font-bold uppercase">{link.label}</Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}