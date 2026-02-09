import type { RoundCardProps } from "./../Cards/RoundCard";
import Eminem1 from "../PopularArtist/Images/Eminem1.png";
import TheWeekend from "../PopularArtist/Images/TheWeekend.png";
import Adele from "../PopularArtist/Images/Adele.png";
import Lana from "../PopularArtist/Images/Lana.png";
import Harry from "../PopularArtist/Images/Harry.png";
import Billie from "../PopularArtist/Images/Billie.png";

export const cards: RoundCardProps[] = [
  {
    description: "Eminem",
    imageUrl: Eminem1,
  },
  { description: "The Weekend", imageUrl: TheWeekend },
  { description: "Adele", imageUrl: Adele },
  { description: "Lana Del Rey", imageUrl: Lana },
  { description: "Harry Styles", imageUrl: Harry },
  { description: "Billie Eilish", imageUrl: Billie },
];
