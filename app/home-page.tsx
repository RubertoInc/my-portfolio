import Image from "next/image";
import Link from "next/link";
import { MobileHeader } from "./mobile-header";

const navigation = [
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
];

export function HomePage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-neutral-950 text-neutral-50">
      <div className="fixed inset-0 md:absolute">
        <Image
          src="/hero.jpg"
          alt="Cinematic portrait background"
          fill
          priority
          className="object-cover object-[22%_18%] md:object-left md:scale-[1.08]"
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(245,158,11,0.18),_transparent_34%),linear-gradient(115deg,_rgba(10,10,10,0.12),_rgba(10,10,10,0.5)_52%,_rgba(10,10,10,0.64)),linear-gradient(to_top,_rgba(10,10,10,0.62),_rgba(10,10,10,0.08)_48%,_rgba(10,10,10,0.42))]" />
        <div className="absolute inset-x-0 bottom-0 h-56 bg-gradient-to-t from-neutral-950/70 via-neutral-950/35 to-transparent" />
      </div>

      <div className="relative mx-auto flex min-h-screen w-full max-w-7xl flex-col justify-between px-6 py-8 md:px-10 md:py-10">
        <MobileHeader className="fixed inset-x-0 top-0 z-30 mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-4 text-sm uppercase tracking-[0.3em] text-neutral-300/80 [text-shadow:0_2px_10px_rgba(0,0,0,0.52)] md:left-1/2 md:top-6 md:z-40 md:w-[calc(100%-5rem)] md:-translate-x-1/2 md:px-0 md:py-0">
          <p className="text-xs uppercase tracking-[0.35em] text-neutral-300/70">
            Toronto, CANADA
          </p>
          <nav className="flex items-center gap-4 md:gap-6">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="font-semibold transition-colors hover:text-neutral-50 focus:outline-none focus:text-neutral-50"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </MobileHeader>

        <section className="flex max-w-4xl flex-1 items-end py-16 md:py-24">
          <div className="space-y-1.5 md:space-y-2">
            <h1 className="font-display max-w-3xl text-5xl font-extrabold tracking-[-0.06em] text-white sm:text-6xl md:text-8xl">
              Damen R. Brar
            </h1>
            <p className="eyebrow !ml-[4px] text-sm font-bold italic text-amber-200/95 drop-shadow-[0_2px_10px_rgba(245,158,11,0.22)] md:text-base">
              Writer / Director
            </p>
            <p className="ml-2 max-w-xl text-base leading-7 text-neutral-200/80 md:ml-1.25 md:text-lg md:leading-8">
              Helping tell stories of the underrepresented.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
