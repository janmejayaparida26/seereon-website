import { useEffect, useRef } from "react";
import Lenis from "@studio-freight/lenis";

import "./App.css";
import Navbar from "./components/Navbar";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import Contact from "./pages/contact/Contact";
import Career from "./pages/career/Career";

import AboutUs from "./pages/aboutus/AboutUs";
import TeamPage from "./pages/teams/TeamPage";
import Services from "./pages/services/ServicesPage";
import ServiceInner from "./pages/services/ServiceInner";
import Work from "./pages/work/Work";
function App() {
  const lenisRef = useRef(null);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      smoothWheel: true,
      smoothTouch: false,
    });
    lenisRef.current = lenis;

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenisRef.current = null;
      if (typeof lenis.destroy === "function") lenis.destroy();
    };
  }, []);

  return (
    <>
      <Navbar />
      <ScrollToTop lenisRef={lenisRef} />
      <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/Contact" element={<Contact />} />
       <Route path="/career" element={<Career />} />

        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/teams" element={<TeamPage />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/:id" element={<ServiceInner />} />
        <Route path="/work" element={<Work />} />
      </Routes>
    </>
  );
}

export default App;
