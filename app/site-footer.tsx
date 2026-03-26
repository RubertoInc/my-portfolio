import Link from "next/link";

const footerLinks = [
  { href: "/", label: "Home" },
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
];

export function SiteFooter() {
  return (
    <footer className="relative z-10 border-t border-white/10 bg-black/35 px-6 py-5 text-xs uppercase tracking-[0.28em] text-neutral-300/80 backdrop-blur-sm md:px-10">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <p>Copyright Ruberto Inc. 2026. All rights reserved.</p>
        <nav className="flex flex-wrap gap-4 md:gap-6">
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
      </div>
    </footer>
  );
}
