import Image from "next/image";
import Link from "next/link";
import { MusicVideoGrid } from "./music-video-grid";

const sectionLinks = [
  { href: "#narrative", label: "Narrative" },
  { href: "#music-videos", label: "Music Videos" },
  { href: "#commercial", label: "Commercial" },
];

const musicVideoProjects = [
  {
    fallbackTitle: "Music Video 01",
    href: "https://www.youtube.com/watch?v=9lj7zQBqVlA",
  },
  {
    fallbackTitle: "Music Video 02",
    href: "https://www.youtube.com/watch?v=UZQCQbN6h9w&list=RDUZQCQbN6h9w&start_radio=1",
  },
  {
    fallbackTitle: "Music Video 03",
    href: "https://www.youtube.com/watch?v=NB4mljuVgts",
  },
  {
    fallbackTitle: "Music Video 04",
    href: "https://www.youtube.com/watch?v=RTdYtzv-wwI&list=RDRTdYtzv-wwI&start_radio=1",
  },
];

export function WorkPage() {
  return (
    <main className="relative overflow-hidden bg-neutral-950 px-6 py-8 text-stone-100 md:px-10">
      <div className="pointer-events-none fixed inset-0 md:absolute">
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

      <div className="relative mx-auto flex w-full max-w-6xl flex-col gap-14 pb-10">
        <header className="flex items-center justify-between text-sm uppercase tracking-[0.3em] text-stone-300/80">
          <p>Selected Work</p>
          <nav className="flex items-center gap-4 md:gap-6">
            <Link
              href="/about"
              className="font-semibold transition-colors hover:text-stone-100 focus:outline-none focus:text-stone-100"
            >
              About
            </Link>
            <Link
              href="/"
              className="font-semibold transition-colors hover:text-stone-100 focus:outline-none focus:text-stone-100"
            >
              Home
            </Link>
          </nav>
        </header>

        <section className="max-w-3xl space-y-2 pt-8 md:pt-14">
          <h1 className="text-4xl font-semibold tracking-tight text-stone-50 md:text-6xl">
            Directing Work
          </h1>
          <p className="eyebrow text-xs text-amber-200/70">
            damen r. brar
          </p>
          <p className="max-w-2xl text-base leading-8 text-stone-200/80 md:text-lg">
            Each project is a special collaboration of beautiful minds. 
            Scroll to see original work directed, produced, or written by me.
          </p>
        </section>

        <nav className="sticky top-4 z-20 flex flex-wrap gap-3 pt-2 text-xs uppercase tracking-[0.3em] text-stone-300/75">
          {sectionLinks.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-full border border-white/10 bg-white/5 px-4 py-2 transition-colors hover:bg-white/10 hover:text-stone-50"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <section
          id="narrative"
          className="scroll-mt-24 rounded-[2rem] border border-white/10 bg-white/6 p-6 shadow-[0_30px_80px_rgba(0,0,0,0.2)] backdrop-blur-sm md:p-8"
        >
          <div className="max-w-3xl space-y-2">
            <h2 className="text-3xl font-semibold tracking-tight text-stone-50 md:text-5xl">
              Narrative Work
            </h2>
            <p className="eyebrow text-xs text-amber-200/70">
              Written & Directed by: Damen R. Brar
            </p>
            <p className="text-base leading-8 text-stone-200/80 md:text-lg">
              
            </p>
          </div>

          <article className="mt-7 overflow-hidden rounded-[1.75rem] border border-white/10 bg-black/20">
            <div className="flex h-64 w-full items-center justify-center bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.015))] md:h-80">
              <p className="text-3xl font-semibold tracking-[-0.04em] text-stone-100/90 md:text-5xl">
                Coming soon...
              </p>
            </div>

            <div className="flex flex-col justify-between gap-6 p-5 md:flex-row md:items-end md:p-6">
              <div className="max-w-2xl space-y-2">
                <p className="eyebrow text-[11px] text-amber-200/80">
                  Featured Narrative
                </p>
                <h3 className="text-2xl font-semibold tracking-tight text-stone-50 md:text-3xl">
                  a Queer Oner - Short Film
                </h3>
                <p className="text-sm leading-7 text-stone-200/80 md:text-base">
                  Trying to reignite the spark in her relationship, Chloe seduces her boyfriend, only to realize
                  the reason it died in the first place might already be in the room with them...
                </p>
              </div>

              <div className="inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm uppercase tracking-[0.18em] text-stone-200/75">
                Vimeo Coming Soon
              </div>
            </div>
          </article>
        </section>

        <section
          id="music-videos"
          className="scroll-mt-24 space-y-7 rounded-[2rem] border border-white/10 bg-white/6 p-6 shadow-[0_30px_80px_rgba(0,0,0,0.2)] backdrop-blur-sm md:p-8"
        >
          <div className="max-w-3xl space-y-2">
            <h2 className="text-3xl font-semibold tracking-tight text-stone-50 md:text-5xl">
              Music Videos
            </h2>
            <p className="eyebrow text-xs text-amber-200/70">
              Produced & Directed by: Damen R. Brar
            </p>
            <p className="text-base leading-8 text-stone-200/80 md:text-lg">
              
            </p>
          </div>

          <MusicVideoGrid projects={musicVideoProjects} />
        </section>

        <section
          id="commercial"
          className="scroll-mt-24 rounded-[2rem] border border-dashed border-white/15 bg-black/15 p-6 backdrop-blur-sm md:p-8"
        >
          <div className="max-w-3xl space-y-2">
            <h2 className="text-3xl font-semibold tracking-tight text-stone-50 md:text-5xl">
              Commercial / Spec
            </h2>
            <p className="eyebrow text-xs text-amber-200/70">
              Coming soon...
            </p>
            <p className="text-base leading-8 text-stone-200/80 md:text-lg">
              More to come. Give me a call, this could be your brand!
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
