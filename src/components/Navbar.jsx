import { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Globe, 
  Smartphone, 
  BarChart, 
  Code,
  ChevronDown,
  Box,
  Target
} from "lucide-react";

const NAV_LINKS = [
  { label: "About Us", href: "/aboutus" },
 { 
    label: "Services", 
    href: "/services",
    isMega: true,
    subLinks: [
      { name: "Custom Software Development", desc: "Lean frameworks applied to your vision.", href: "/services/custom-software", icon: <Code size={20} />, color: "#3b82f6" },
      { name: "Mobile App Development", desc: "High-performance iOS and Android apps.", href: "/services/mobile-app", icon: <Smartphone size={20} />, color: "#a855f7" },
      { name: "Website Development", desc: "Scalable and lightning-fast web experiences.", href: "/services/website-development", icon: <Globe size={20} />, color: "#06b6d4" },
      { name: "MVP Builder", desc: "Go to market quickly with high quality.", href: "/services/mvp-builder", icon: <Target size={20} />, color: "#eab308" },
      { name: "AI Development", desc: "Leveraging ML to ensure you are future-ready.", href: "/services/ai-development", icon: <BarChart size={20} />, color: "#6366f1" },
      { name: "E-Commerce", desc: "End-to-end storefronts designed to convert.", href: "/services/ecommerce", icon: <Box size={20} />, color: "#f97316" },
    ]
  },
  { label: "Works", href: "/work" },
  { label: "Products", href: "/product"},
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
        className="text-[12px] font-semibold uppercase tracking-[0.08em] no-underline flex items-center gap-1.5 transition-colors relative"
        style={{ 
          fontFamily: "'Arimo', sans-serif", 
          color: isActive ? "#ffffff" : "rgba(255,255,255,0.8)" 
        }}
      >
        {link.label}
        {link.isMega && (
          <motion.span animate={{ rotate: isMegaOpen ? 180 : 0 }} className="flex items-center">
            <ChevronDown size={14} strokeWidth={3} />
          </motion.span>
        )}
        
        {/* Animated Underline Hook */}
        <span
          className="absolute -bottom-1 left-0 h-[1px] w-full bg-[#e8ff00] origin-left transition-transform duration-[350ms] ease-out"
          style={{ transform: isActive ? "scaleX(1)" : "scaleX(0)" }}
        />
      </Link>
    </div>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [megaMenuOpen, setMegaMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => { setMegaMenuOpen(false); }, [location.pathname]);
  
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const services = NAV_LINKS.find(l => l.isMega).subLinks;

  return (
    <header 
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{ 
        background: scrolled || megaMenuOpen ? "black" : "transparent", 
        borderBottom: "1px solid rgba(255,255,255,0.1)" 
      }}
    >
      <div className="w-[90%] max-w-[1400px] mx-auto h-[80px] flex items-center justify-between relative">
        <Link to="/">
          <img 
            src="https://res.cloudinary.com/dcc7qgxmb/image/upload/v1773926744/Updated_Logo_ppjmvp.png" 
            alt="Logo" 
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

        <Link 
          to="/contact" 
          className="hidden md:block text-[#e8ff00] border border-[#e8ff00] px-5 py-2 text-[11px] font-bold uppercase no-underline hover:bg-[#e8ff00] hover:text-black transition-all"
        >
          Contact Us
        </Link>

        {/* CONTAINED MEGA MENU */}
        <AnimatePresence>
          {megaMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: 10 }} 
              animate={{ opacity: 1, y: 0 }} 
              exit={{ opacity: 0, y: 10 }}
              onMouseEnter={() => setMegaMenuOpen(true)} 
              onMouseLeave={() => setMegaMenuOpen(false)}
              className="absolute top-[80px] right-0 left-0 mx-auto w-full max-w-[900px] bg-white shadow-2xl rounded-2xl overflow-hidden border border-gray-100 z-50"
            >
              <div className="grid grid-cols-2 p-10 gap-x-8 gap-y-2">
                {services.map((item, i) => (
                  <Link 
                    key={i} 
                    to={item.href} 
                    className="group flex items-center gap-4 p-4 rounded-xl no-underline transition-all hover:bg-gray-50"
                  >
                    <div 
                      className="p-3 rounded-lg transition-colors" 
                      style={{ backgroundColor: `${item.color}10`, color: item.color }}
                    >
                      {item.icon}
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[20px] font-bold text-black group-hover:text-lime-500 transition-colors leading-tight">
                        {item.name}
                      </span>
                      <span className="text-[14px] text-gray-400 mt-1">
                        {item.desc}
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}