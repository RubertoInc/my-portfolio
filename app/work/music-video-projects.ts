export type MusicVideoProject = {
  fallbackTitle: string;
  href: string;
  artistName?: string;
  thumbnailSrc?: string;
  thumbnailClassName?: string;
};

export const musicVideoProjects: MusicVideoProject[] = [
  {
    fallbackTitle: "KEY - Official Music Video",
    href: "https://www.youtube.com/watch?v=9lj7zQBqVlA",
    artistName: "Akila & The Wonder Machine",
    thumbnailSrc: "/KEY-thumbnail-5.png",
    thumbnailClassName: "object-cover object-[75%_30%]",
  },
  {
    fallbackTitle: "Sorry Dad - Official Music Video",
    href: "https://www.youtube.com/watch?v=UZQCQbN6h9w&list=RDUZQCQbN6h9w&start_radio=1",
    artistName: "Angie Khoury",
    thumbnailSrc: "/SorryDad-thumbnail.png",
    thumbnailClassName: "object-cover object-[50%_25%]",
  },
  {
    fallbackTitle: "The Devil - Official Music Video",
    href: "https://www.youtube.com/watch?v=NB4mljuVgts",
    artistName: "Akila & The Wonder Machine",
    thumbnailSrc: "/TheDevil-thumbnail_v2.png",
  },
  {
    fallbackTitle: "Choose U - Official Music Video",
    href: "https://www.youtube.com/watch?v=RTdYtzv-wwI&list=RDRTdYtzv-wwI&start_radio=1",
    artistName: "Jacob Hayden",
    thumbnailSrc: "/ChooseU-Thumbnail.png",
  },
];
