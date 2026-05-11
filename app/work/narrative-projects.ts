export type NarrativeCastMember = {
  character: string;
  actorName: string;
  imdbUrl?: string;
  headshotSrc?: string;
  headshotClassName?: string;
};

export type NarrativeCrewCredit = {
  role: string;
  name: string;
  url?: string;
};

export type NarrativeProject = {
  slug: string;
  title: string;
  format: string;
  status?: string;
  videoUrl?: string;
  logline: string;
  synopsis: string;
  posterSrc?: string;
  posterNote: string;
  heroStillSrc?: string;
  heroStillClassName?: string;
  heroStillNote: string;
  galleryImages: string[];
  cast: NarrativeCastMember[];
  crew: NarrativeCrewCredit[];
};

export const narrativeProjects: NarrativeProject[] = [
  {
    slug: "pegged",
    title: "PEGGED",
    format: "Short Film",
    status: "In Festival Consideration",
    videoUrl: "https://www.youtube.com/watch?v=JeLSpDa7nzU",
    logline:
      "PEGGED is an original short film written and directed by Damen R. Brar, starring exceptional Canadian talent from the queer creative community in an intimate, sharply observed story about desire, identity, and self-acceptance.",
    synopsis:
      "Chloe comes home early from work armed with a silk slip and a last-ditch plan to revive her dying relationship, only to discover that the reason it unraveled is already in the room with them. Told in a single continuous take, PEGGED argues that it's impossible to truly love someone without first loving yourself.",
    posterSrc: "/POSTER.png",
    posterNote: "PEGGED poster",
    heroStillSrc: "/pegged-gallery/DSCF8473.jpg",
    heroStillClassName: "object-cover object-[50%_42%]",
    heroStillNote: "Pegged hero still",
    galleryImages: [
      "/pegged-gallery/DSCF8502.jpg",
      "/pegged-gallery/IMG_5935.jpg",
      "/pegged-gallery/IMG_6121.jpg",
      "/pegged-gallery/DSCF8473.jpg",
      "/pegged-gallery/DSCF8467.jpg",
      "/pegged-gallery/DSCF8471.jpg",
      "/pegged-gallery/DSCF8565.jpg",
      "/pegged-gallery/DSCF8568.jpg",
      "/pegged-gallery/DSCF8583.jpg",
      "/pegged-gallery/DSCF8581.jpg",
      "/pegged-gallery/DSCF8552.jpg",
      "/pegged-gallery/DSCF8545.jpg",
      "/pegged-gallery/DSCF8579.jpg",
      "/pegged-gallery/DSCF8522.jpg",
      "/pegged-gallery/DSCF8531.jpg",
      "/pegged-gallery/DSCF8493.jpg",
    ],
    cast: [
      {
        character: "CHLOE",
        actorName: "Cecilia Lee",
        imdbUrl: "https://www.imdb.com/name/nm10673020/",
        headshotSrc: "/cecilia.png",
      },
      {
        character: "BRETT",
        actorName: "Brennan Clost",
        imdbUrl: "https://www.imdb.com/name/nm5250195/",
        headshotSrc: "/brennan-profile.png",
      },
      {
        character: "ADREAN",
        actorName: "Kaden Connors",
        imdbUrl: "https://www.imdb.com/name/nm10423248/",
        headshotSrc: "/kaden-profile.png",
        headshotClassName: "scale-110 object-cover object-[50%_18%]",
      },
    ],
    crew: [
      { role: "Writer / Director", name: "Damen R. Brar" },
      {
        role: "Composer",
        name: "AKILA",
        url: "https://linktr.ee/the_wonder_machine",
      },
      { role: "Prod Designer", name: "Vashti Anne" },
      { role: "DOP", name: "Jacob Lea", url: "https://jlea.ca" },
      { role: "1st AC", name: "Sarah Sun" },
      { role: "Gaffer", name: "Marco Ciardullo" },
      { role: "Board Op", name: "Evan Jones" },
      {
        role: "Location Sound",
        name: "Nicolas Field",
        url: "https://nicolasfield.studio/",
      },
      { role: "Editor", name: "Damen R. Brar" },
      { role: "Colorist", name: "Andrew Lea", url: "https://andrewlea.ca" },
      {
        role: "Sound Design / Mixer",
        name: "Alexandra Huynh Do",
        url: "https://www.huynhdosound.com/",
      },
      {
        role: "Vocals / Lyrics",
        name: "Joelle Rose Peresin",
        url: "https://linktr.ee/JoelleRoseMusic",
      },
      { role: "Bass / Guitar", name: "Kaashff Earle" },
      { role: "Saxophone", name: "Ridgeclub" },
      {
        role: "Featuring \"LUCKY\" by",
        name: "AKILA and The Wonder Machine",
        url: "https://linktr.ee/the_wonder_machine",
      },
    ],
  },
];

export function getNarrativeProject(slug: string) {
  return narrativeProjects.find((project) => project.slug === slug);
}

export function getFeaturedNarrativeProject() {
  return narrativeProjects[0];
}
