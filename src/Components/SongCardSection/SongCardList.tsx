import React from "react";
import type { SongCardProps } from "./SongCards";
import SongCards from "./SongCards";
import { cards } from "./songCardsData";
import styles from "./CardList.module.scss";
import { ViewAll } from "./WievAllicon";

const CardList: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <h1>
          Weekly Top <span>Songs</span>
        </h1>
      </div>

      <div className={styles.cardList}>
        {cards.map((card: SongCardProps, index: number) => (
          <SongCards key={index} {...card} />
        ))}
        <ViewAll />
      </div>
    </div>
  );
};

export default CardList;
