import { useState, useEffect } from "react";
import { useLocation, Link, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Globe, 
  Smartphone, 
  BarChart, 
  Code,
  ChevronDown,
  Box,
  Target,
  Menu,
  X
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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => { 
    setMegaMenuOpen(false); 
    setMobileMenuOpen(false);
  }, [location.pathname]);
  
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
        background: scrolled || megaMenuOpen || mobileMenuOpen ? "black" : "transparent", 
        borderBottom: "1px solid rgba(255,255,255,0.1)" 
      }}
    >
      <div className="w-full max-w-[1440px] mx-auto h-[80px] md:h-[90px] flex items-center justify-between px-6 md:px-12 lg:px-12 relative">
        
        <Link to="/" className="flex items-center h-full">
          <img 
            src="https://res.cloudinary.com/dcc7qgxmb/image/upload/v1773926744/Updated_Logo_ppjmvp.png" 
            alt="Logo" 
            className="h-[170px] md:h-[140px] lg:h-[220px] w-auto object-contain transform -translate-x-4 md:-translate-x-6" 
          />
        </Link>

        <nav className="hidden md:flex items-center gap-6 lg:gap-10">
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

        <div className="flex items-center gap-4">
          <Link 
            to="/contact" 
            className="hidden md:block text-[#dbb34e] border border-[#dbb34e] px-6 py-2.5 text-[11px] font-bold uppercase no-underline hover:bg-[#dbb34e] hover:text-black transition-all"
          >
            Contact Us
          </Link>

          <button 
            className="md:hidden text-white p-2 z-[110]"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
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
              className="absolute top-[80px] md:top-[90px] right-0 left-0 mx-auto w-[calc(100%-48px)] max-w-[1000px] bg-white shadow-2xl rounded-2xl overflow-hidden border border-gray-100 z-50 hidden md:block"
            >
              <div className="grid grid-cols-2 p-8 gap-x-6 gap-y-2">
                {services.map((item, i) => (
                  <Link 
                    key={i} 
                    to={item.href} 
                    className="group flex items-center gap-4 p-4 rounded-xl no-underline transition-all hover:bg-gray-50"
                  >
                    <div 
                      className="p-3 rounded-lg transition-colors shrink-0" 
                      style={{ backgroundColor: `${item.color}10`, color: item.color }}
                    >
                      {item.icon}
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[18px] font-bold text-black group-hover:text-lime-500 transition-colors leading-tight">
                        {item.name}
                      </span>
                      <span className="text-[13px] text-gray-400 mt-1 line-clamp-1">
                        {item.desc}
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3 }}
              className="fixed top-0 left-0 w-full h-screen bg-black z-[100] md:hidden flex flex-col pt-[100px]"
            >
              <div className="flex flex-col p-8 gap-1 overflow-y-auto">
                {NAV_LINKS.map((link) => (
                  <div key={link.label}>
                    {link.isMega ? (
                      <div className="border-b border-white/10">
                        {/* Wrapper to allow both clicking the text and the arrow */}
                        <div className="w-full flex items-center justify-between py-5">
                          <span 
                            onClick={() => {
                              navigate(link.href);
                              setMobileMenuOpen(false);
                            }}
                            className="text-[20px] font-bold text-white uppercase tracking-wider cursor-pointer"
                          >
                            {link.label}
                          </span>
                          <motion.span 
                            onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                            animate={{ rotate: mobileServicesOpen ? 180 : 0 }}
                            className="p-2 text-white cursor-pointer"
                          >
                            <ChevronDown size={24} />
                          </motion.span>
                        </div>
                        <AnimatePresence>
                          {mobileServicesOpen && (
                            <motion.div 
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              className="overflow-hidden bg-white/5 rounded-xl mb-4"
                            >
                              {services.map((s) => (
                                <Link
                                  key={s.name}
                                  to={s.href}
                                  className="flex items-center gap-4 p-4 border-b border-white/5 last:border-0"
                                >
                                   <div style={{ color: s.color }}>{s.icon}</div>
                                   <div className="flex flex-col">
                                      <span className="text-white font-semibold text-[16px]">{s.name}</span>
                                      <span className="text-gray-500 text-[12px]">{s.desc}</span>
                                   </div>
                                </Link>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : (
                      <Link 
                        to={link.href}
                        className="block py-5 text-[20px] font-bold text-white uppercase tracking-wider border-b border-white/10"
                      >
                        {link.label}
                      </Link>
                    )}
                  </div>
                ))}
                
                <Link 
                  to="/contact" 
                  className="mt-8 w-full text-center bg-[#dbb34e] text-black py-5 font-bold uppercase tracking-widest rounded-lg"
                >
                  Contact Us
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}