import Image from "next/image";
import { NarrativeProjectPoster } from "./narrative-project-poster";
import type { NarrativeProject } from "./narrative-projects";
import { StillGallery } from "./still-gallery";
import { VideoGateButton } from "./video-gate-button";

type NarrativeProjectDetailProps = {
  project: NarrativeProject;
};

type NarrativeProjectSectionProps = {
  project: NarrativeProject;
};

export function NarrativeProjectDetail({ project }: NarrativeProjectDetailProps) {
  return (
    <section className="grid gap-4 md:grid-cols-[1.5fr_0.7fr] md:gap-6">
      <div className="order-1 md:hidden">
        <SynopsisBlock project={project} />
      </div>

      <aside className="order-2 space-y-4 md:space-y-6">
        <PosterPlaceholder project={project} />
        {project.videoUrl ? (
          <div className="flex justify-center md:hidden">
            <VideoGateButton videoUrl={project.videoUrl} />
          </div>
        ) : null}
        <div className="hidden md:block">
          <CrewBlock project={project} />
        </div>
      </aside>

      <div className="order-3 space-y-6 md:order-1">
        <HeroStill project={project} />
        <div className="hidden md:block">
          <SynopsisBlock project={project} />
        </div>
        <CastGallery project={project} />
        <StillGallery galleryImages={project.galleryImages} />
      </div>

      <div className="order-4 md:hidden">
        <CrewBlock project={project} />
      </div>
    </section>
  );
}

function HeroStill({ project }: NarrativeProjectSectionProps) {
  return (
    <div className="hidden overflow-hidden rounded-[1.8rem] border border-white/10 bg-black/20 md:block">
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
        <div className="flex justify-end bg-black/25 px-4 py-4 md:absolute md:inset-x-0 md:bottom-0 md:bg-transparent md:px-6 md:py-6">
          {project.videoUrl ? (
            <VideoGateButton videoUrl={project.videoUrl} />
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
        <p className="max-w-3xl text-[15px] leading-6 text-stone-100/88 md:text-base md:leading-7 md:text-stone-200/82">
          {project.synopsis}
        </p>
      </div>
    </div>
  );
}

function CastGallery({ project }: NarrativeProjectSectionProps) {
  return (
    <div className="rounded-[1.8rem] border border-white/10 bg-white/[0.05] p-4 shadow-[0_24px_70px_rgba(0,0,0,0.22)] md:p-6">
      <div className="flex items-center justify-between gap-4">
        <div className="space-y-1">
          <p className="eyebrow text-[11px] text-amber-200/80">Cast</p>
          <p className="text-[15px] leading-6 text-stone-100/88 md:text-sm md:text-stone-300/75">
            Starring Cecilia Lee (Star Trek: Starfleet Academy), Brennan Clost (Tiny Pretty Things), and Kaden Connors (Heated Rivalry)
            Pegged is packed with some of Canada&apos;s most compelling young talents and Queer advocates are locked in one room, with nowhere to hide.
          </p>
        </div>
      </div>

      <div className="mt-5 grid gap-3 md:grid-cols-3 md:gap-4">
        {project.cast.map((member) => {
          const cardContent = (
            <>
              <div className="relative min-h-24 overflow-hidden md:aspect-[4/5] md:min-h-0">
                {member.headshotSrc ? (
                  <Image
                    src={member.headshotSrc}
                    alt={`${member.actorName} headshot`}
                    fill
                    className={member.headshotClassName ?? "object-cover object-top"}
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

              <div className="space-y-1.5 p-3 md:space-y-2 md:p-4">
                <p className="text-[11px] uppercase tracking-[0.22em] text-stone-400">
                  {member.character}
                </p>
                <p className="text-base font-semibold tracking-tight text-stone-50 transition-colors group-hover:text-amber-200 md:text-lg">
                  {member.actorName}
                </p>
                <p className="text-[10px] uppercase tracking-[0.18em] text-stone-400 transition-colors group-hover:text-stone-300 md:text-[11px] md:tracking-[0.2em]">
                  {member.imdbUrl ? "Open IMDb" : "Portrait slot"}
                </p>
              </div>
            </>
          );

          return member.imdbUrl ? (
            <a
              key={`${member.character}-${member.actorName}`}
              href={member.imdbUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Open ${member.actorName} on IMDb`}
              className="group grid grid-cols-[5.75rem_minmax(0,1fr)] overflow-hidden rounded-[1.35rem] border border-white/10 bg-black/20 transition-[border-color,background-color] duration-200 hover:border-amber-200/30 hover:bg-white/[0.07] focus:outline-none focus-visible:border-amber-200/50 md:block"
            >
              {cardContent}
            </a>
          ) : (
            <article
              key={`${member.character}-${member.actorName}`}
              className="group grid grid-cols-[5.75rem_minmax(0,1fr)] overflow-hidden rounded-[1.35rem] border border-white/10 bg-black/20 md:block"
            >
              {cardContent}
            </article>
          );
        })}
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
              <p key={`${credit.role}-${credit.name}`}>
                <span className="font-semibold text-stone-100/90">
                  {credit.role}
                </span>
                {" — "}
                {credit.url ? (
                  <a
                    href={credit.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-colors hover:text-amber-200 focus:outline-none focus:text-amber-200"
                  >
                    {credit.name}
                  </a>
                ) : (
                  credit.name
                )}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
