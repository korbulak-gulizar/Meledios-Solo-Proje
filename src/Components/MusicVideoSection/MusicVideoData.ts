import type { HorizontalCardProps } from "./../Cards/HorizantalCard";
import Gossip from "./images/Gossip.png";
import Shape from "./images/Shape.png";
import Someone from "./images/Someone.png";
import shake from "./images/shake.png";
import newRules from "./images/newRules.png";
import wakaWaka from "./images/wakaWaka.png";

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
  {
    title: "Shake It Off",
    description: "Taylor swift",
    views: "4.2M views",
    imageUrl: shake,
  },
  {
    title: "New Rules",
    description: "Dua Lipa",
    views: "3.7M views",
    imageUrl: newRules,
  },
  {
    title: "Waka Waka",
    description: "Shakira",
    views: "3.5M views",
    imageUrl: wakaWaka,
  },
];
