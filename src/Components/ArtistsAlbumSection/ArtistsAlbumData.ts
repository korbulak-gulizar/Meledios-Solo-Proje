import type { VerticalCardProps } from "./../Cards/VerticalCard";
import eminem11 from "../ArtistsAlbumSection/images/eminem11.png";
import encore from "../ArtistsAlbumSection/images/encore.png";
import music from "../ArtistsAlbumSection/images/music.png";
import recovery from "../ArtistsAlbumSection/images/recovery.png";
import eminem12 from "../ArtistsAlbumSection/images/eminem12.png";

export const cards: VerticalCardProps[] = [
  {
    title: "The Eminem Show",
    description: "2002",
    imageUrl: eminem11,
  },
  { title: "Encore", description: "2004", imageUrl: encore },
  { title: "Music To Be Mrde...", description: "2020", imageUrl: music },

  { title: "Recovery", description: "2010", imageUrl: recovery },

  { title: "Eminem The Slim...", description: "1999", imageUrl: eminem12 },
];
