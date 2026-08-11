import { useEffect, useState } from "react";

const UseIsMobile = (query = "(max-width: 767px)") => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const isMobile = () => {
      const mql = window.matchMedia(query);
      setIsMobile(mql.matches);
      const handler = (e: MediaQueryListEvent) => setIsMobile(e.matches);
      mql.addEventListener("change", handler);
      return () => mql.removeEventListener("change", handler);
    };
    isMobile();
  }, [query]);
  return isMobile;
};

export default UseIsMobile;
