export type NarrativeCastMember = {
  character: string;
  actorName: string;
  imdbUrl?: string;
  headshotSrc?: string;
};

export type NarrativeProject = {
  slug: string;
  title: string;
  format: string;
  status: string;
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
  crew: string[];
};

export const narrativeProjects: NarrativeProject[] = [
  {
    slug: "pegged",
    title: '"PEGGED"',
    format: "Short Film",
    status: "In Post Production",
    videoUrl: "https://www.youtube.com/watch?v=JeLSpDa7nzU",
    logline:
      "Trying to reignite the spark in her relationship, Chloe seduces her boyfriend, only to realize the reason it died in the first place might already be in the room with them.",
    synopsis:
      "Chloe comes home early from work armed with a silk slip and a last-ditch plan to revive her dying relationship, only to discover that the reason it unraveled is already in the room with them. Told in a single continuous take, PEGGED argues that it's impossible to truly love someone without first loving yourself.",
    posterSrc: "/POSTER.png",
    posterNote: "PEGGED poster",
    heroStillSrc: "/PeggedHeroStill-PlaceHolder_1.1.1.png",
    heroStillClassName: "object-cover object-[50%_42%]",
    heroStillNote: "Pegged hero still",
    galleryImages: [
      "/pegged-gallery/DSCF8502.jpg",
      "/pegged-gallery/DSCF8471.jpg",
      "/pegged-gallery/IMG_6121.jpg",
      "/pegged-gallery/DSCF8473.jpg",
      "/pegged-gallery/DSCF8467.jpg",
      "/pegged-gallery/IMG_5935.jpg",
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
      },
    ],
    crew: [
      "Director / Producer — Damen R. Brar",
      "DOP — Jacob Lea",
      "1st AC — Sarah Sun",
      "Gaffer — Marco Ciardullo",
      "Lighting Console Prog. — Evan Jones",
      "Boom/Mixer — Nic Fields",
      "Prod Designer — Vashti Anne",
      "Post Sound — Alexandra Huynh Do",
      "Colour — Andrew Lea",
    ],
  },
];

export function getNarrativeProject(slug: string) {
  return narrativeProjects.find((project) => project.slug === slug);
}

export function getFeaturedNarrativeProject() {
  return narrativeProjects[0];
}
