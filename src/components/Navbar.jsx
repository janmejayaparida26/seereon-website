import { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Globe, 
  Smartphone, 
  Database, 
  Figma, 
  Layout, 
  Layers, 
  BarChart, 
  Code 
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
          { name: "Web Development", href: "/services/web", icon: <Globe size={16}/> },
          { name: "Mobile Apps", href: "/services/mobile", icon: <Smartphone size={16}/> },
          { name: "SaaS Solutions", href: "/services/saas", icon: <Database size={16}/> },
          { name: "E-Commerce", href: "/services/ecommerce", icon: <Layers size={16}/> },
        ]
      },
      {
        category: "Design & UX",
        items: [
          { name: "UI/UX Design", href: "/services/ux", icon: <Figma size={16}/> },
          { name: "Product Design", href: "/services/product", icon: <Layout size={16}/> },
          { name: "Brand Identity", href: "/services/branding", icon: <Layers size={16}/> },
          { name: "Graphic Design", href: "/services/graphics", icon: <Layout size={16}/> },
        ]
      },
      {
        category: "Strategy",
        items: [
          { name: "Digital Strategy", href: "/services/strategy", icon: <BarChart size={16}/> },
          { name: "Custom Software", href: "/services/custom", icon: <Code size={16}/> },
          { name: "IT Consulting", href: "/services/consulting", icon: <Globe size={16}/> },
        ]
      }
    ]
  },
  { label: "Works", href: "/work" },
  { label: "Career", href: "/career" },
  { label: "Contact", href: "/contact" },
];

function DesktopLink({ link, active, onHover }) {
  const [hovered, setHovered] = useState(false);
  const isActive = active || hovered;

  return (
    <div 
      className="relative py-6 cursor-pointer"
      onMouseEnter={() => { setHovered(true); if(onHover) onHover(true); }}
      onMouseLeave={() => { setHovered(false); if(onHover) onHover(false); }}
    >
      <Link
        to={link.href}
        className="text-[11px] font-semibold uppercase tracking-[0.08em] transition-colors duration-250 no-underline"
        style={{
          fontFamily: "'DM Sans', sans-serif",
          color: isActive ? "#ffffff" : "rgba(255,255,255,0.8)",
        }}
      >
        {link.label}
        <span
          className="absolute bottom-4 left-0 h-px w-full bg-[#e8ff00] origin-left transition-transform duration-[350ms]"
          style={{
            transform: isActive ? "scaleX(1)" : "scaleX(0)",
            transitionTimingFunction: "cubic-bezier(0.16,1,0.3,1)",
          }}
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
        <div className="w-[90%] max-w-[1400px] mx-auto h-[72px] flex items-center justify-between relative">
          <Link to="/" className="flex items-center no-underline flex-shrink-0 relative z-10">
            <img 
              src="https://res.cloudinary.com/dcc7qgxmb/image/upload/v1773926744/Updated_Logo_ppjmvp.png" 
              alt="Seereon Logo" 
              className="h-[180px] w-auto object-contain" 
            />
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <DesktopLink
                key={link.label}
                link={link}
                onHover={link.isMega ? setMegaMenuOpen : null}
                active={
                  location.pathname === link.href ||
                  location.pathname.startsWith(link.href + "/")
                }
              />
            ))}
          </nav>

          <div className="flex items-center gap-4 relative z-10">
            <Link
              to="/contact"
              className="hidden md:inline-block text-[#e8ff00] border border-[#e8ff00] px-[22px] py-[10px]
                         text-[11px] font-bold tracking-[0.08em] no-underline uppercase
                         transition-all duration-200 hover:bg-[#e8ff00] hover:text-black flex-shrink-0"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              Contact Us
            </Link>

            <button
              onClick={() => setMenuOpen((v) => !v)}
              className="md:hidden flex flex-col justify-center items-center w-10 h-10 gap-[6px] bg-transparent border-none cursor-pointer"
            >
              <motion.span animate={menuOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }} className="block w-6 h-[1.5px] bg-white origin-center" />
              <motion.span animate={menuOpen ? { opacity: 0 } : { opacity: 1 }} className="block w-6 h-[1.5px] bg-white" />
              <motion.span animate={menuOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }} className="block w-6 h-[1.5px] bg-white origin-center" />
            </button>
          </div>

          {/* MEGA MENU - Modern Layout */}
          <AnimatePresence>
            {megaMenuOpen && (
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 15 }}
                onMouseEnter={() => setMegaMenuOpen(true)}
                onMouseLeave={() => setMegaMenuOpen(false)}
                className="absolute top-[72px] left-0 right-0 w-full bg-white shadow-2xl z-40 overflow-hidden hidden md:flex rounded-b-2xl border-t-2 border-[#e8ff00]"
              >
                <div className="w-full flex min-h-[420px]">
                  
                  {/* Left Side: Blue CTA Box */}
                  <div className="w-[30%] bg-[#2563eb] p-12 flex flex-col justify-between relative overflow-hidden">
                    <div className="relative z-10">
                      <span className="text-white/60 text-[10px] uppercase tracking-[0.2em] font-bold">Expert Consultation</span>
                      <h3 className="text-white text-[32px] font-bold leading-[1.1] mt-4">
                        Book a Free Call <br /> with an Expert!
                      </h3>
                    </div>
                    
                    <div className="relative z-10">
                      <Link 
                        to="/contact" 
                        className="inline-block bg-white text-[#2563eb] px-10 py-4 text-[12px] font-black uppercase tracking-widest no-underline transition-all hover:bg-gray-100 hover:-translate-y-1 active:scale-95"
                      >
                        Book Now!
                      </Link>
                    </div>

                    {/* Decorative Geometric Shapes */}
                    <div className="absolute bottom-[-20px] left-[-20px] w-40 h-40 bg-white/10 -rotate-45" />
                    <div className="absolute top-10 right-[-30px] w-32 h-32 rounded-full bg-white/5" />
                  </div>

                  {/* Right Side: Links Columns */}
                  <div className="w-[70%] p-12 grid grid-cols-3 gap-10 bg-white">
                    {NAV_LINKS.find(l => l.isMega).subLinks.map((cat, idx) => (
                      <div key={idx} className="flex flex-col gap-6">
                        <h4 className="text-black text-[11px] uppercase tracking-[0.15em] font-black border-b border-gray-100 pb-3">
                          {cat.category}
                        </h4>
                        <ul className="flex flex-col gap-4 p-0 m-0 list-none">
                          {cat.items.map((item, i) => (
                            <li key={i}>
                              <Link 
                                to={item.href} 
                                className="group flex items-center gap-3 text-gray-500 hover:text-[#2563eb] transition-all no-underline"
                              >
                                <span className="text-gray-300 group-hover:text-[#2563eb] transition-colors">{item.icon}</span>
                                <span className="text-[14px] font-semibold">{item.name}</span>
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

      {/* MOBILE MENU */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-40 bg-black pt-[72px] overflow-y-auto md:hidden"
          >
            <div className="w-[90%] mx-auto py-8 flex flex-col">
              {NAV_LINKS.map((link) => (
                <div key={link.label}>
                  {link.isMega ? (
                    <div className="border-b border-white/[0.07]">
                      <button 
                        onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                        className="w-full flex justify-between items-center py-5 bg-transparent border-none text-left"
                      >
                        <span className="text-white text-[18px] font-bold uppercase tracking-wider">{link.label}</span>
                        <motion.span animate={{ rotate: mobileServicesOpen ? 180 : 0 }} className="text-[#e8ff00] text-xl">+</motion.span>
                      </button>
                      <AnimatePresence>
                        {mobileServicesOpen && (
                          <motion.div 
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="overflow-hidden bg-white/[0.03] px-4 rounded-lg mb-4"
                          >
                            {link.subLinks.map((cat) => (
                              <div key={cat.category} className="py-4 border-b border-white/5 last:border-0">
                                <div className="text-[#e8ff00] text-[10px] font-black tracking-widest uppercase mb-3 opacity-60">{cat.category}</div>
                                {cat.items.map((sub) => (
                                  <Link key={sub.name} to={sub.href} className="block py-2 text-white/70 text-sm no-underline">{sub.name}</Link>
                                ))}
                              </div>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link
                      to={link.href}
                      className="block py-5 border-b border-white/[0.07] no-underline text-white text-[18px] font-bold uppercase tracking-wider"
                    >
                      {link.label}
                    </Link>
                  )}
                </div>
              ))}
              <Link
                to="/contact"
                className="mt-10 block text-center text-black bg-[#e8ff00] py-4 text-[12px] font-black uppercase tracking-[0.1em] no-underline"
              >
                HIRE SEEREON
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}