import Image from "next/image";
import { NarrativeProjectPoster } from "./narrative-project-poster";
import type { NarrativeProject } from "./narrative-projects";

type NarrativeProjectDetailProps = {
  project: NarrativeProject;
};

type NarrativeProjectSectionProps = {
  project: NarrativeProject;
};

export function NarrativeProjectDetail({ project }: NarrativeProjectDetailProps) {
  return (
    <section className="grid gap-6 md:grid-cols-[1.5fr_0.7fr]">
      <div className="space-y-6">
        <HeroStill project={project} />
        <SynopsisBlock project={project} />
        <CastGallery project={project} />
        <StillGallery project={project} />
      </div>

      <aside className="space-y-6">
        <PosterPlaceholder project={project} />
        <CrewBlock project={project} />
      </aside>
    </section>
  );
}

function HeroStill({ project }: NarrativeProjectSectionProps) {
  return (
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
          {project.videoUrl ? (
            <a
              href={project.videoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex rounded-full border border-white/12 bg-black/35 px-4 py-2 text-[11px] uppercase tracking-[0.22em] text-stone-100/85 backdrop-blur-sm transition-colors hover:border-amber-200/35 hover:text-amber-100"
            >
              Watch on YouTube
            </a>
          ) : (
            <span className="inline-flex rounded-full border border-white/12 bg-black/35 px-4 py-2 text-[11px] uppercase tracking-[0.22em] text-stone-100/75 backdrop-blur-sm">
              Video Coming Soon
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

function SynopsisBlock({ project }: NarrativeProjectSectionProps) {
  return (
    <div className="rounded-[1.8rem] border border-white/10 bg-white/[0.05] p-6 shadow-[0_24px_70px_rgba(0,0,0,0.22)]">
      <div className="space-y-3">
        <p className="eyebrow text-[11px] text-amber-200/80">Synopsis</p>
        <p className="max-w-3xl text-sm leading-8 text-stone-200/82 md:text-base">
          {project.synopsis}
        </p>
      </div>
    </div>
  );
}

function CastGallery({ project }: NarrativeProjectSectionProps) {
  return (
    <div className="rounded-[1.8rem] border border-white/10 bg-white/[0.05] p-6 shadow-[0_24px_70px_rgba(0,0,0,0.22)]">
      <div className="flex items-center justify-between gap-4">
        <div className="space-y-1">
          <p className="eyebrow text-[11px] text-amber-200/80">Cast</p>
          <p className="text-sm text-stone-300/75">
            Starring Brennan Clost (Tiny Pretty Things), Cecilia Lee (Star Trek: Starfleet Academy), and Kaden Connors (Heated Rivalry)
            Pegged is packed with some of Canada's most compelling young talents and Queer advocates are locked in one room, with nowhere to hide.
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
                  className="object-cover object-top"
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
  );
}

function StillGallery({ project }: NarrativeProjectSectionProps) {
  return (
    <div className="rounded-[1.8rem] border border-white/10 bg-white/[0.05] p-6 shadow-[0_24px_70px_rgba(0,0,0,0.22)]">
      <div className="flex items-center justify-between gap-4">
        <div className="space-y-1">
          <p className="eyebrow text-[11px] text-amber-200/80">
            BTS / Gallery
          </p>
          <p className="text-sm text-stone-300/75">
            Stills and behind-the-scenes frames from PEGGED.
          </p>
        </div>
        <p className="hidden text-[11px] uppercase tracking-[0.22em] text-stone-400 md:block">
          Production stills
        </p>
      </div>

      <div className="mt-5 grid gap-3 md:grid-cols-3">
        {project.galleryImages.map((src, index) => (
          <div
            key={src}
            className="relative aspect-[16/10] overflow-hidden rounded-[1.25rem] border border-white/10 bg-black/20"
          >
            <Image
              src={src}
              alt={`PEGGED production still ${index + 1}`}
              fill
              className="object-cover"
              sizes="(min-width: 768px) 22vw, 100vw"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

function PosterPlaceholder({ project }: NarrativeProjectSectionProps) {
  return (
    <div className="rounded-[1.8rem] border border-white/10 bg-white/[0.05] p-4 shadow-[0_24px_70px_rgba(0,0,0,0.22)]">
      <NarrativeProjectPoster
        project={project}
        sizes="(min-width: 768px) 30vw, 100vw"
      />
    </div>
  );
}

function CrewBlock({ project }: NarrativeProjectSectionProps) {
  return (
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
  );
}
