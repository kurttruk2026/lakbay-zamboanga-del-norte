import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname, hash } = useLocation();
  const previous = useRef(pathname);
  useEffect(() => {
    if (hash)
      document
        .getElementById(hash.slice(1))
        ?.scrollIntoView({ behavior: "smooth" });
    else window.scrollTo({ top: 0, behavior: "instant" });
    if (previous.current !== pathname)
      document.getElementById("main-content")?.focus({ preventScroll: true });
    previous.current = pathname;
  }, [pathname, hash]);
  return null;
}
