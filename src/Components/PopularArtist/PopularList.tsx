import React from "react";
import type { RoundCardProps } from "../Cards/RoundCard";
import RoundCard from "../Cards/RoundCard";
import { cards } from "./popularCardsData";
import styles from "../PopularArtist/stylePopularList.module.scss";
import { ViewAll } from "../WievAllIcon/WievAllicon";

const CardList: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <h1 className={styles.titlePopular}>
          Popular <span>Artist</span>
        </h1>
      </div>

      <div className={styles.cardList}>
        {cards.map((card: RoundCardProps, index: number) => (
          <RoundCard key={index} {...card} />
        ))}
        <ViewAll />
      </div>
    </div>
  );
};

export default CardList;
