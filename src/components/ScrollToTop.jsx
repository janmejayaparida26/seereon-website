import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop({ lenisRef }) {
  const { pathname } = useLocation();

  useEffect(() => {
    // If Lenis is active, use it; otherwise fall back to native scroll.
    const lenis = lenisRef?.current;
    if (lenis && typeof lenis.scrollTo === "function") {
      lenis.scrollTo(0, { immediate: true });
      return;
    }

    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [pathname, lenisRef]);

  return null;
}

