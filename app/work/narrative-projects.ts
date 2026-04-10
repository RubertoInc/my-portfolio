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
  vimeoUrl?: string;
  logline: string;
  synopsis: string;
  posterSrc?: string;
  posterNote: string;
  heroStillSrc?: string;
  heroStillClassName?: string;
  heroStillNote: string;
  galleryNotes: string[];
  cast: NarrativeCastMember[];
  crew: string[];
};

export const narrativeProjects: NarrativeProject[] = [
  {
    slug: "pegged",
    title: '"PEGGED"',
    format: "Short Film",
    status: "In Post Production",
    logline:
      "Trying to reignite the spark in her relationship, Chloe seduces her boyfriend, only to realize the reason it died in the first place might already be in the room with them.",
    synopsis:
      "A queer relationship drama built around tension, intimacy, and the quiet collapse of a couple's shared fantasy. The project page is structured like a film dossier so poster art, letterboxed stills, BTS photography, cast, crew, and festival-facing details can be dropped in as materials are ready.",
    posterSrc: "/PeggedPoster-PlaceHolder.jpg",
    posterNote: "Poster art placeholder",
    heroStillSrc: "/PeggedHeroStill-PlaceHolder_1.1.1.png",
    heroStillClassName: "object-cover object-[50%_42%]",
    heroStillNote: "Pegged hero still",
    galleryNotes: [
      "BTS still placeholder",
      "Gallery still placeholder",
      "Cast still placeholder",
    ],
    cast: [
      {
        character: "CHLOE",
        actorName: "Cecilia Lee",
        imdbUrl: "https://www.imdb.com/name/nm10673020/",
      },
      {
        character: "BRETT",
        actorName: "Brennan Clost",
        imdbUrl: "https://www.imdb.com/name/nm5250195/",
      },
      {
        character: "ADREAN",
        actorName: "Kaden Connors",
        imdbUrl: "https://www.imdb.com/name/nm10423248/",
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
