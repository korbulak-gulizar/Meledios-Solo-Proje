import type { VerticalCardProps } from "./../Cards/VerticalCard";
import lace from "../SingleSongsSection/images/lace.png";
import realesc from "../SingleSongsSection/images/realesc.png";
import eminemSnoop from "../SingleSongsSection/images/eminemSnoop.png";
import booyaa from "../SingleSongsSection/images/booyaa.png";
import killshot from "../SingleSongsSection/images/killshot.png";

export const cards: VerticalCardProps[] = [
  {
    title: "Lace It",
    description: "2023",
    imageUrl: lace,
  },

  { title: "Releast", description: "202", imageUrl: realesc },

  { title: "From The D 2 Th...", description: "2023", imageUrl: eminemSnoop },

  { title: "911", description: "2022", imageUrl: booyaa },

  { title: "Killshot", description: "2018", imageUrl: killshot },
];
