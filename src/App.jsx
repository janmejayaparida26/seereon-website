import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import Contact from "./pages/contact/Contact";

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
  </Routes>
    </>
  );
}

export default App;