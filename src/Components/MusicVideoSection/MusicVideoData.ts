import type { HorizontalCardProps } from "./../Cards/HorizantalCard";
import Gossip from "../MusicVideoSection/Images/Gossip.png";
import Shape from "../MusicVideoSection/Images/Shape.png";
import Someone from "../MusicVideoSection/Images/Someone.png";

export const cards: HorizontalCardProps[] = [
  {
    title: "Gossip",
    description: "Måneskin",
    views: "3M views",
    imageUrl: Gossip,
  },
  {
    title: "Shape Of You",
    description: "Ed Sheeran",
    views: "2M views",
    imageUrl: Shape,
  },
  {
    title: "Someone Like You",
    description: "Adele",
    views: "1M views",
    imageUrl: Someone,
  },
];
