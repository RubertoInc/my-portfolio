"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type MusicVideoProject = {
  fallbackTitle: string;
  href: string;
};

type VideoCardProps = {
  project: MusicVideoProject;
};

function extractYouTubeVideoId(href: string) {
  try {
    const url = new URL(href);

    if (url.hostname === "youtu.be") {
      return url.pathname.slice(1);
    }

    if (url.hostname.includes("youtube.com")) {
      return url.searchParams.get("v");
    }
  } catch {
    return null;
  }

  return null;
}

function VideoCard({ project }: VideoCardProps) {
  const [title, setTitle] = useState(project.fallbackTitle);
  const videoId = extractYouTubeVideoId(project.href);
  const thumbnailSrc = videoId
    ? `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`
    : null;

  useEffect(() => {
    let isCancelled = false;

    async function loadTitle() {
      try {
        const response = await fetch(
          `https://www.youtube.com/oembed?url=${encodeURIComponent(project.href)}&format=json`,
        );

        if (!response.ok) {
          return;
        }

        const data = (await response.json()) as { title?: string };

        if (!isCancelled && data.title) {
          setTitle(data.title);
        }
      } catch {
        // Keep the fallback title when YouTube metadata is unavailable.
      }
    }

    void loadTitle();

    return () => {
      isCancelled = true;
    };
  }, [project.href]);

  return (
    <article className="overflow-hidden rounded-[1.5rem] border border-white/10 bg-black/20">
      <a
        href={project.href}
        target="_blank"
        rel="noopener noreferrer"
        className="block transition-opacity hover:opacity-95"
      >
        {thumbnailSrc ? (
          <div className="relative h-52 w-full">
            <Image
              src={thumbnailSrc}
              alt={title}
              fill
              className="object-cover"
              sizes="(min-width: 768px) 50vw, 100vw"
            />
          </div>
        ) : (
          <div className="flex h-52 items-center justify-center bg-black/30 text-sm text-stone-300/70">
            Thumbnail unavailable
          </div>
        )}

        <div className="flex min-h-36 flex-col justify-between p-5">
          <div className="space-y-2">
            <p className="eyebrow text-[11px] font-medium text-amber-200/85">
              YouTube
            </p>
            <h3 className="text-[1.65rem] font-semibold leading-tight tracking-[-0.03em] text-stone-50">
              {title}
            </h3>
          </div>
          <p className="text-xs uppercase tracking-[0.18em] text-stone-200/75">
            Watch on YouTube
          </p>
        </div>
      </a>
    </article>
  );
}

export function MusicVideoGrid({
  projects,
}: {
  projects: MusicVideoProject[];
}) {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      {projects.map((project) => (
        <VideoCard key={project.href} project={project} />
      ))}
    </div>
  );
}
