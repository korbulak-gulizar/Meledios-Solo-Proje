import type { VerticalCardProps } from "./../Cards/VerticalCard";
import Adale from "../TopAlbumsSection/images/Adale.png";
import Scorpion from "../TopAlbumsSection/images/Scorpion.png";
import HStyles from "../TopAlbumsSection/images/HStyles.png";

import Born from "../TopAlbumsSection/images/Born.png";
import Beauty from "../TopAlbumsSection/images/Beauty.png";
export const cards: VerticalCardProps[] = [
  {
    title: "Adele 21",
    description: "Adele",
    imageUrl: Adale,
  },
  { title: "Scorpion", description: "Drake", imageUrl: Scorpion },
  { title: "Harry`s House", description: "Harry Styles", imageUrl: HStyles },
  { title: "Born To Die", description: "Lana Del Rey", imageUrl: Born },
  {
    title: "Beauty Behind the...",
    description: "The Weekend",
    imageUrl: Beauty,
  },
];
