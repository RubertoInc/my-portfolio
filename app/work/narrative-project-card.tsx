import Link from "next/link";
import { NarrativeProjectPoster } from "./narrative-project-poster";
import type { NarrativeProject } from "./narrative-projects";

type NarrativeProjectCardProps = {
  project: NarrativeProject;
};

export function NarrativeProjectCard({ project }: NarrativeProjectCardProps) {
  return (
    <Link
      href={`/work/${project.slug}`}
      className="group mt-7 block overflow-hidden rounded-[1.75rem] border border-white/10 bg-black/20 transition-[transform,border-color,background-color,box-shadow] duration-300 hover:-translate-y-0.5 hover:border-amber-200/30 hover:bg-white/[0.08] hover:shadow-[0_36px_90px_rgba(0,0,0,0.28)]"
    >
      <div className="grid gap-5 p-5 md:grid-cols-[220px_minmax(0,1fr)] md:items-center md:gap-8 md:p-6">
        <NarrativeProjectPoster
          project={project}
          sizes="(min-width: 768px) 220px, 100vw"
        />

        <div className="flex flex-col gap-4">
          <div className="space-y-2">
            <p className="eyebrow text-[11px] text-amber-200/80">
              Featured Narrative
            </p>
            <h3 className="text-3xl font-semibold tracking-[-0.04em] text-stone-50 md:text-5xl">
              {project.title}
            </h3>
          </div>

          <div className="flex flex-wrap items-center gap-3 text-[11px] uppercase tracking-[0.22em] text-stone-300/72">
            <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2">
              {project.format}
            </span>
            <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2">
              {project.status}
            </span>
          </div>

          <p className="max-w-3xl text-base leading-8 text-stone-100/90 md:text-lg">
            {project.logline}
          </p>

          <div className="pt-1">
            <span className="inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[11px] uppercase tracking-[0.22em] text-stone-100/80">
              Open Full Project Page
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
