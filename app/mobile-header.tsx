"use client";

import { useEffect, useState } from "react";

type MobileHeaderProps = {
  children: React.ReactNode;
  className: string;
};

export function MobileHeader({ children, className }: MobileHeaderProps) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    let lastY = window.scrollY;

    function handleScroll() {
      const currentY = window.scrollY;
      const delta = currentY - lastY;

      if (currentY <= 24) {
        setIsVisible(true);
      } else if (delta > 6) {
        setIsVisible(false);
      } else if (delta < -6) {
        setIsVisible(true);
      }

      lastY = currentY;
    }

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const visibilityClass = isVisible
    ? "translate-y-0 opacity-100"
    : "-translate-y-4 opacity-0 pointer-events-none";

  return (
    <header
      className={`${className} ${visibilityClass} transition-[opacity,transform] duration-300 ease-out`}
    >
      {children}
    </header>
  );
}
