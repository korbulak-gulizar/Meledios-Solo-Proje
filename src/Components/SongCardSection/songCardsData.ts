import type { SongCardProps } from "./SongCards";
import whatever from "../SongCardSection/Images/whatever.png";
import softcore from "../SongCardSection/Images/softcore.png";
import skyfall from "../SongCardSection/Images/skyfall.png";
import loneliest from "../SongCardSection/Images/loneliest.png";
import eminem from "../SongCardSection/Images/eminem.png";

export const cards: SongCardProps[] = [
  {
    title: "Whatever It Takes",
    description: "Imagine Dragons",
    imageUrl: whatever,
  },
  { title: "Skyfall", description: "Adele", imageUrl: skyfall },
  { title: "Superman", description: "Eminem", imageUrl: eminem },
  { title: "Softcore", description: "The Neighbourhood", imageUrl: softcore },
  { title: "The Loneliest", description: "Måneskin", imageUrl: loneliest },
];
