import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

import "./App.css";
import Navbar from "./components/Navbar";
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
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      smoothWheel: true,
      smoothTouch: false,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <>
      <Navbar />
      <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/Contact" element={<Contact />} />
       <Route path="/career" element={<Career />} />

        <Route path="/" element={<Home />} />
        <Route path="/Contact" element={<Contact />} />
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
