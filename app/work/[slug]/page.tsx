import Link from "next/link";
import { notFound } from "next/navigation";
import { MobileHeader } from "../../mobile-header";
import { NarrativeProjectDetail } from "../narrative-project-detail";
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
  if (!project) {
    notFound();
  }
  const narrativeProject = project;

  return (
    <main className="relative min-h-screen overflow-hidden bg-neutral-950 px-6 py-8 text-stone-100 md:px-10">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(245,158,11,0.15),_transparent_30%),linear-gradient(180deg,_rgba(255,255,255,0.02),_rgba(255,255,255,0)_30%),linear-gradient(to_bottom,_rgba(10,10,10,0.1),_rgba(10,10,10,0.72))]" />

      <div className="relative mx-auto flex w-full max-w-6xl flex-col gap-10 pb-12">
        <MobileHeader className="fixed inset-x-0 top-0 z-30 mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4 text-sm uppercase tracking-[0.3em] text-stone-300/80 [text-shadow:0_2px_10px_rgba(0,0,0,0.52)] md:left-1/2 md:top-6 md:z-40 md:w-[calc(100%-5rem)] md:-translate-x-1/2 md:px-0 md:py-0">
          <p>{narrativeProject.title}</p>
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
              {narrativeProject.title}
            </h1>
            <div className="flex flex-wrap gap-3 text-xs uppercase tracking-[0.22em] text-stone-300/75">
              <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2">
                {narrativeProject.format}
              </span>
              <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2">
                {narrativeProject.status}
              </span>
            </div>
            <p className="max-w-4xl text-base leading-8 text-stone-200/82 md:text-lg">
              {narrativeProject.logline}
            </p>
          </div>
        </section>

        <NarrativeProjectDetail project={narrativeProject} />
      </div>
    </main>
  );
}
