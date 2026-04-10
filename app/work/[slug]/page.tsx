import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MobileHeader } from "../../mobile-header";
import { getNarrativeProject, narrativeProjects } from "../narrative-projects";

export function generateStaticParams() {
  return narrativeProjects.map((project) => ({ slug: project.slug }));
}

export default async function NarrativeProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getNarrativeProject(slug);

  // Temporarily keep narrative project detail pages private. Re-enable this
  // when `/work` cards should link through to the full film pages.
  notFound();

  if (!project) {
    notFound();
  }

  return (
    <main className="relative min-h-screen overflow-hidden bg-neutral-950 px-6 py-8 text-stone-100 md:px-10">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(245,158,11,0.15),_transparent_30%),linear-gradient(180deg,_rgba(255,255,255,0.02),_rgba(255,255,255,0)_30%),linear-gradient(to_bottom,_rgba(10,10,10,0.1),_rgba(10,10,10,0.72))]" />

      <div className="relative mx-auto flex w-full max-w-6xl flex-col gap-10 pb-12">
        <MobileHeader className="fixed inset-x-0 top-0 z-30 mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4 text-sm uppercase tracking-[0.3em] text-stone-300/80 [text-shadow:0_2px_10px_rgba(0,0,0,0.52)] md:left-1/2 md:top-6 md:z-40 md:w-[calc(100%-5rem)] md:-translate-x-1/2 md:px-0 md:py-0">
          <p>{project.title}</p>
          <nav className="flex items-center gap-4 md:gap-6">
            <Link
              href="/work"
              className="font-semibold transition-colors hover:text-stone-100 focus:outline-none focus:text-stone-100"
            >
              Work
            </Link>
            <Link
              href="/about"
              className="font-semibold transition-colors hover:text-stone-100 focus:outline-none focus:text-stone-100"
            >
              About
            </Link>
          </nav>
        </MobileHeader>

        <section className="pt-24 md:pt-14">
          <div className="space-y-3">
            <p className="eyebrow text-xs text-amber-200/75">
              Narrative Project
            </p>
            <h1 className="text-4xl font-semibold tracking-[-0.05em] text-stone-50 md:text-7xl">
              {project.title}
            </h1>
            <div className="flex flex-wrap gap-3 text-xs uppercase tracking-[0.22em] text-stone-300/75">
              <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2">
                {project.format}
              </span>
              <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2">
                {project.status}
              </span>
            </div>
            <p className="max-w-4xl text-base leading-8 text-stone-200/82 md:text-lg">
              {project.logline}
            </p>
          </div>
        </section>

        <section className="grid gap-6 md:grid-cols-[1.5fr_0.7fr]">
          <div className="space-y-6">
            <div className="overflow-hidden rounded-[1.8rem] border border-white/10 bg-black/20">
              <div className="relative aspect-[16/7] bg-[radial-gradient(circle_at_18%_18%,rgba(245,158,11,0.16),transparent_22%),linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.015))]">
                {project.heroStillSrc ? (
                  <Image
                    src={project.heroStillSrc}
                    alt={project.heroStillNote}
                    fill
                    className={project.heroStillClassName ?? "object-cover"}
                    sizes="(min-width: 768px) 66vw, 100vw"
                  />
                ) : null}
                <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent,rgba(0,0,0,0.18)_52%,rgba(0,0,0,0.58))]" />
                {!project.heroStillSrc ? (
                  <div className="absolute inset-0 flex items-center justify-center px-8 text-center">
                    <p className="max-w-lg text-sm uppercase tracking-[0.24em] text-stone-300/72">
                      {project.heroStillNote}
                    </p>
                  </div>
                ) : null}
                <div className="absolute inset-x-0 bottom-0 flex justify-end px-5 py-5 md:px-6 md:py-6">
                  {project.vimeoUrl ? (
                    <a
                      href={project.vimeoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex rounded-full border border-white/12 bg-black/35 px-4 py-2 text-[11px] uppercase tracking-[0.22em] text-stone-100/85 backdrop-blur-sm transition-colors hover:border-amber-200/35 hover:text-amber-100"
                    >
                      Watch on Vimeo
                    </a>
                  ) : (
                    <span className="inline-flex rounded-full border border-white/12 bg-black/35 px-4 py-2 text-[11px] uppercase tracking-[0.22em] text-stone-100/75 backdrop-blur-sm">
                      Vimeo Coming Soon
                    </span>
                  )}
                </div>
              </div>
            </div>

            <div className="rounded-[1.8rem] border border-white/10 bg-white/[0.05] p-6 shadow-[0_24px_70px_rgba(0,0,0,0.22)]">
              <div className="space-y-3">
                <p className="eyebrow text-[11px] text-amber-200/80">Synopsis</p>
                <p className="max-w-3xl text-sm leading-8 text-stone-200/82 md:text-base">
                  {project.synopsis}
                </p>
              </div>
            </div>

            <div className="rounded-[1.8rem] border border-white/10 bg-white/[0.05] p-6 shadow-[0_24px_70px_rgba(0,0,0,0.22)]">
              <div className="flex items-center justify-between gap-4">
                <div className="space-y-1">
                  <p className="eyebrow text-[11px] text-amber-200/80">Cast</p>
                  <p className="text-sm text-stone-300/75">
                    IMDb-linked cast now, easy to replace with your own portrait selects later.
                  </p>
                </div>
              </div>

              <div className="mt-5 grid gap-4 md:grid-cols-3">
                {project.cast.map((member) => (
                  <article
                    key={`${member.character}-${member.actorName}`}
                    className="overflow-hidden rounded-[1.35rem] border border-white/10 bg-black/20"
                  >
                    <div className="relative aspect-[4/5]">
                      {member.headshotSrc ? (
                        <Image
                          src={member.headshotSrc}
                          alt={`${member.actorName} headshot`}
                          fill
                          className="object-cover"
                          sizes="(min-width: 768px) 33vw, 100vw"
                        />
                      ) : (
                        <div className="flex h-full w-full items-center justify-center bg-[radial-gradient(circle_at_top,rgba(245,158,11,0.14),transparent_35%),linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.015))] p-6 text-center">
                          <div className="space-y-2">
                            <p className="eyebrow text-[11px] text-amber-200/75">
                              Headshot
                            </p>
                            <p className="text-xs uppercase tracking-[0.22em] text-stone-300/70">
                              Replace with film portrait later
                            </p>
                          </div>
                        </div>
                      )}
                    </div>

                    <div className="space-y-2 p-4">
                      <p className="text-[11px] uppercase tracking-[0.22em] text-stone-400">
                        {member.character}
                      </p>
                      {member.imdbUrl ? (
                        <a
                          href={member.imdbUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block text-lg font-semibold tracking-tight text-stone-50 transition-colors hover:text-amber-200"
                        >
                          {member.actorName}
                        </a>
                      ) : (
                        <p className="text-lg font-semibold tracking-tight text-stone-50">
                          {member.actorName}
                        </p>
                      )}
                      <p className="text-[11px] uppercase tracking-[0.2em] text-stone-400">
                        {member.imdbUrl ? "Open IMDb" : "Portrait slot"}
                      </p>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            <div className="rounded-[1.8rem] border border-white/10 bg-white/[0.05] p-6 shadow-[0_24px_70px_rgba(0,0,0,0.22)]">
              <div className="flex items-center justify-between gap-4">
                <div className="space-y-1">
                  <p className="eyebrow text-[11px] text-amber-200/80">
                    BTS / Gallery
                  </p>
                  <p className="text-sm text-stone-300/75">
                    Drop stills, BTS frames, festival photos, or production ephemera here.
                  </p>
                </div>
                <p className="hidden text-[11px] uppercase tracking-[0.22em] text-stone-400 md:block">
                  3-up placeholder strip
                </p>
              </div>

              <div className="mt-5 grid gap-3 md:grid-cols-3">
                {project.galleryNotes.map((note) => (
                  <div
                    key={note}
                    className="flex aspect-[16/10] items-center justify-center rounded-[1.25rem] border border-dashed border-white/12 bg-black/20 px-4 text-center text-[11px] uppercase tracking-[0.2em] text-stone-400"
                  >
                    {note}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <aside className="space-y-6">
            <div className="rounded-[1.8rem] border border-white/10 bg-white/[0.05] p-4 shadow-[0_24px_70px_rgba(0,0,0,0.22)]">
              <div className="flex aspect-[2/3] items-center justify-center rounded-[1.4rem] border border-dashed border-white/14 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.015))] text-center">
                <div className="space-y-2 px-4">
                  <p className="eyebrow text-[11px] text-amber-200/80">Poster</p>
                  <p className="text-sm uppercase tracking-[0.22em] text-stone-300/72">
                    {project.posterNote}
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-[1.8rem] border border-white/10 bg-white/[0.05] p-6 shadow-[0_24px_70px_rgba(0,0,0,0.22)]">
              <div className="space-y-4">
                <div>
                  <p className="eyebrow text-[11px] text-amber-200/80">Crew</p>
                  <div className="mt-2 space-y-2 text-sm leading-7 text-stone-200/82">
                    {project.crew.map((credit) => (
                      <p key={credit}>{credit}</p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </aside>
        </section>
      </div>
    </main>
  );
}
