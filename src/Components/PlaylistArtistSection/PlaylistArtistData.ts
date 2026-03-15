import type { HeaderCardProps } from "./../Cards/HeaderCard";
import full from "../PlaylistArtistSection/images/full.png";
import best from "../PlaylistArtistSection/images/best.png";
import old from "../PlaylistArtistSection/images/old.png";
import fans from "../PlaylistArtistSection/images/fans.png";
import neww from "../PlaylistArtistSection/images/neww.png";

export const cards: HeaderCardProps[] = [
  {
    title: "Full Collection",
    imageUrl: full,
  },
  { title: "est Of Eminem", imageUrl: best },

  { title: "Old Songs", imageUrl: old },
  { title: "Fan`s Favorite", imageUrl: fans },

  { title: "New Releases", imageUrl: neww },
];
