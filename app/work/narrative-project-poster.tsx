import Image from "next/image";
import type { NarrativeProject } from "./narrative-projects";

type NarrativeProjectPosterProps = {
  project: NarrativeProject;
  sizes: string;
};

export function NarrativeProjectPoster({
  project,
  sizes,
}: NarrativeProjectPosterProps) {
  return (
    <div className="overflow-hidden rounded-[1.4rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.015))] shadow-[0_18px_40px_rgba(0,0,0,0.2)]">
      <div className="relative aspect-[2/3] w-full">
        {project.posterSrc ? (
          <Image
            src={project.posterSrc}
            alt={project.posterNote}
            fill
            className="object-cover"
            sizes={sizes}
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center p-6 text-center text-sm uppercase tracking-[0.22em] text-stone-300/72">
            {project.posterNote}
          </div>
        )}
      </div>
    </div>
  );
}
