import Link from "next/link";

const footerLinks = [
  { href: "/", label: "Home" },
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
];

export function SiteFooter() {
  return (
    <footer className="relative z-10 border-t border-white/10 bg-black px-6 py-5 text-[11px] text-neutral-300/80 md:px-10 md:text-xs md:uppercase md:tracking-[0.28em]">
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center gap-4 text-center md:flex-row md:justify-between md:text-left">
        <nav className="order-1 flex flex-wrap justify-center gap-3 text-[11px] uppercase tracking-[0.24em] md:order-2 md:gap-6 md:text-inherit md:tracking-inherit">
          {footerLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition-colors hover:text-neutral-50 focus:outline-none focus:text-neutral-50"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <p className="order-2 max-w-sm leading-5 md:order-1 md:max-w-none md:leading-normal">
          Copyright Ruberto Inc. 2026. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
