import Image from "next/image";
import Link from "next/link";

function InstagramIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-5 w-5"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.9" fill="currentColor" stroke="none" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-5 w-5"
      fill="currentColor"
    >
      <path d="M6.94 8.5H3.56V20h3.38V8.5Zm-1.69-5a1.96 1.96 0 1 0 0 3.92 1.96 1.96 0 0 0 0-3.92ZM20.44 12.64c0-3.45-1.84-5.06-4.3-5.06-1.98 0-2.87 1.09-3.36 1.85V8.5H9.4c.04.62 0 11.5 0 11.5h3.38v-6.42c0-.34.02-.68.13-.92.27-.68.88-1.39 1.91-1.39 1.35 0 1.89 1.03 1.89 2.54V20h3.38v-7.36Z" />
    </svg>
  );
}

export function AboutPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-neutral-950 px-6 py-8 text-neutral-100 md:px-10">
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

      <div className="relative mx-auto flex min-h-[calc(100vh-4rem)] w-full max-w-5xl flex-col justify-between gap-12">
        <header className="flex items-center justify-between text-sm uppercase tracking-[0.3em] text-neutral-300/80">
          <p>About</p>
          <nav className="flex items-center gap-4 md:gap-6">
            <Link
              href="/work"
              className="font-semibold transition-colors hover:text-neutral-100 focus:outline-none focus:text-neutral-100"
            >
              Work
            </Link>
            <Link
              href="/"
              className="font-semibold transition-colors hover:text-neutral-100 focus:outline-none focus:text-neutral-100"
            >
              Home
            </Link>
          </nav>
        </header>

        <section className="grid gap-8 md:grid-cols-[1.65fr_1fr] md:items-end">
          <div className="relative rounded-[2rem] border border-white/6 bg-[linear-gradient(180deg,rgba(255,255,255,0.035)_0%,rgba(255,255,255,0.025)_18%,rgba(255,255,255,0.055)_100%)] p-4 shadow-[0_18px_45px_rgba(0,0,0,0.12)] backdrop-blur-[1px] md:p-6">
            <div className="pointer-events-none absolute inset-0 rounded-[2rem] bg-[linear-gradient(180deg,rgba(255,255,255,0.015)_0%,rgba(255,255,255,0.005)_22%,transparent_38%)]" />
            <div className="relative space-y-2">
            <h1 className="font-display relative max-w-3xl text-4xl font-black tracking-[-0.05em] text-neutral-50 md:text-6xl">
              DiR. BRAR
            </h1>
            <p className="relative eyebrow text-xs text-amber-200/78">
              Profile
            </p>
            <div className="relative max-w-2xl pt-2 text-base leading-8 text-neutral-200/90 md:text-lg">
              <div className="mb-4 h-px w-28 bg-[linear-gradient(90deg,rgba(255,255,255,0.38),rgba(255,255,255,0.14)_55%,transparent)] shadow-[0_1px_10px_rgba(255,255,255,0.08)]" />
              <div className="space-y-4">
              <p>
                Damen is a Toronto-based director seeking to creat bold,
                character-driven stories that strike the balance between technical perfection
                and raw authenticity.
              </p>
              <p>
                His work often explores identity and relationships through a sharp,
                human lens, finding both the absurd and the honest in how we connect.
                He is passionate about uplifting Queer and BIPOC voices, crafting
                stories that reflect the nuance, contradiction, and richness of those
                communities without flattening them into stereotypes.
              </p>
              <p>
                With a background in post production and digital imaging, Damen brings a strong
                technical understanding and visual authorship to his work, making images that serve both emotion
                and story.
              </p>
              </div>
            </div>
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.09),rgba(255,255,255,0.03))] p-6 shadow-[0_30px_80px_rgba(0,0,0,0.22)] backdrop-blur-sm">
            <div className="space-y-6">
              <div className="space-y-2">
                <p className="eyebrow text-[11px] text-amber-200/80">Contact</p>
                <p className="text-xl font-semibold tracking-tight text-neutral-50">
                  Have a project you want to make?
                  Don&apos;t hesitate to reach out.
                </p>
              </div>

              <div className="space-y-4">
                <div className="border-t border-white/10 pt-4">
                  <p className="text-[11px] uppercase tracking-[0.28em] text-neutral-400">
                    Email
                  </p>
                  <a
                    href="mailto:dirbrar@gmail.com"
                    className="mt-1 block text-base font-medium text-neutral-100 transition-colors hover:text-amber-200"
                  >
                    dirbrar@gmail.com
                  </a>
                </div>

                <div className="border-t border-white/10 pt-4">
                  <p className="text-[11px] uppercase tracking-[0.28em] text-neutral-400">
                    Phone
                  </p>
                  <a
                    href="tel:6477058334"
                    className="mt-1 block text-base font-medium text-neutral-100 transition-colors hover:text-amber-200"
                  >
                    647 705 8334
                  </a>
                </div>

                <div className="border-t border-white/10 pt-4">
                  <p className="text-[11px] uppercase tracking-[0.28em] text-neutral-400">
                    Instagram
                  </p>
                  <a
                    href="https://www.instagram.com/damenrb/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 flex items-center gap-3 rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-neutral-100 transition-colors hover:border-amber-200/40 hover:text-amber-200"
                  >
                    <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-neutral-100">
                      <InstagramIcon />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-sm uppercase tracking-[0.22em] text-neutral-400">
                        Instagram
                      </span>
                      <span className="block text-base font-medium">@damenrb</span>
                    </span>
                  </a>
                </div>

                <div className="border-t border-white/10 pt-4">
                  <p className="text-[11px] uppercase tracking-[0.28em] text-neutral-400">
                    LinkedIn
                  </p>
                  <a
                    href="https://ca.linkedin.com/in/drubertob"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 flex items-center gap-3 rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-neutral-100 transition-colors hover:border-amber-200/40 hover:text-amber-200"
                  >
                    <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-neutral-100">
                      <LinkedInIcon />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-sm uppercase tracking-[0.22em] text-neutral-400">
                        LinkedIn
                      </span>
                      <span className="block text-base font-medium">Damen Brar</span>
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
