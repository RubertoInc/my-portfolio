"use client";

import { useState } from "react";
import Image from "next/image";
type StillGalleryProps = {
  galleryImages: string[];
};

const previewImageCount = 3;
const mobilePreviewImageIndex = 1;

export function StillGallery({ galleryImages }: StillGalleryProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const hasMoreImages = galleryImages.length > previewImageCount;
  const desktopVisibleImages = isExpanded
    ? galleryImages
    : galleryImages.slice(0, previewImageCount);
  const mobileVisibleImages = isExpanded
    ? galleryImages
    : galleryImages.slice(mobilePreviewImageIndex, mobilePreviewImageIndex + 1);

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

      <div className="mt-5 grid gap-3 md:hidden">
        {mobileVisibleImages.map((src, index) => (
          <div
            key={src}
            className="relative aspect-[16/10] overflow-hidden rounded-[1.25rem] border border-white/10 bg-black/20"
          >
            <Image
              src={src}
              alt={`PEGGED production still ${index + 1}`}
              fill
              className="object-cover"
              sizes="100vw"
            />
          </div>
        ))}
      </div>

      <div className="mt-5 hidden gap-3 md:grid md:grid-cols-3">
        {desktopVisibleImages.map((src, index) => (
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

      {hasMoreImages ? (
        <div className="mt-5 flex justify-center">
          <button
            type="button"
            onClick={() => setIsExpanded((current) => !current)}
            className="rounded-full border border-white/10 bg-black/20 px-4 py-2 text-[11px] uppercase tracking-[0.22em] text-stone-100/80 transition-colors hover:border-amber-200/35 hover:text-amber-100 focus:outline-none focus-visible:border-amber-200/50"
            aria-expanded={isExpanded}
          >
            {isExpanded ? "Show Less" : "Show Full Gallery"}
          </button>
        </div>
      ) : null}
    </div>
  );
}
