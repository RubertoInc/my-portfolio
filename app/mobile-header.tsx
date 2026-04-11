"use client";

import { useEffect, useRef, useState } from "react";

type MobileHeaderProps = {
  children: React.ReactNode;
  className: string;
};

export function MobileHeader({ children, className }: MobileHeaderProps) {
  const headerRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(true);
  const [hasForegroundBehind, setHasForegroundBehind] = useState(false);

  useEffect(() => {
    let lastY = window.scrollY;
    let frameId: number | null = null;

    function detectTextBehindHeader() {
      const header = headerRef.current;

      if (!header || window.scrollY <= 24) {
        setHasForegroundBehind(false);
        return;
      }

      const rect = header.getBoundingClientRect();
      const sampleYs = [
        rect.top + rect.height * 0.35,
        rect.top + rect.height * 0.6,
        rect.bottom + 8,
      ];
      const sampleXs = [
        rect.left + rect.width * 0.2,
        rect.left + rect.width * 0.5,
        rect.left + rect.width * 0.8,
      ];
      const foregroundTags = new Set([
        "A",
        "BUTTON",
        "DIV",
        "H1",
        "H2",
        "H3",
        "H4",
        "IMG",
        "LI",
        "NAV",
        "P",
        "SECTION",
        "SPAN",
        "SVG",
      ]);

      const isOverForeground = sampleYs.some((y) =>
        sampleXs.some((x) =>
          document.elementsFromPoint(x, y).some((element) => {
            if (header.contains(element)) {
              return false;
            }

            const className =
              typeof element.className === "string" ? element.className : "";
            const isBackgroundLayer =
              className.includes("pointer-events-none") ||
              (className.includes("fixed") && className.includes("inset-0")) ||
              (className.includes("absolute") && className.includes("inset-0"));
            const isMeaningfulElement =
              foregroundTags.has(element.tagName) &&
              !["HTML", "BODY", "MAIN"].includes(element.tagName) &&
              !isBackgroundLayer;

            return (
              isMeaningfulElement &&
              ((element.textContent?.trim().length ?? 0) > 0 ||
                element.tagName === "IMG" ||
                element.tagName === "SVG")
            );
          }),
        ),
      );

      setHasForegroundBehind(window.innerWidth < 768 || isOverForeground);
    }

    function scheduleTextDetection() {
      if (frameId !== null) {
        cancelAnimationFrame(frameId);
      }

      frameId = requestAnimationFrame(() => {
        detectTextBehindHeader();
        frameId = null;
      });
    }

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
      scheduleTextDetection();
    }

    scheduleTextDetection();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", scheduleTextDetection);

    return () => {
      if (frameId !== null) {
        cancelAnimationFrame(frameId);
      }

      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", scheduleTextDetection);
    };
  }, []);

  const visibilityClass = isVisible
    ? "translate-y-0 opacity-100"
    : "-translate-y-4 opacity-0 pointer-events-none";
  const backingClass =
    isVisible && hasForegroundBehind
      ? "rounded-none border-b border-white/10 bg-neutral-950/72 shadow-[0_16px_45px_rgba(0,0,0,0.24)] backdrop-blur-md md:rounded-full md:border md:bg-neutral-950/55 md:px-5 md:py-3"
      : "";

  return (
    <header
      ref={headerRef}
      className={`${className} ${visibilityClass} ${backingClass} transition-[opacity,transform,background-color,border-color,box-shadow,backdrop-filter] duration-300 ease-out`}
    >
      {children}
    </header>
  );
}
