import React from "react";
import type { CoverCardProps } from "../Cards/CoverCard";
import CoverCards from "../Cards/CoverCard";
import { cards } from "./Genresdata";

import styles from "./GenresList.module.scss";
import { ViewAll } from "../WievAllIcon/WievAllicon";

const CardList: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <h1 className={styles.titleGenres}>
          Music <span>Genres</span>
        </h1>
      </div>

      <div className={styles.cardList}>
        {cards.map((card: CoverCardProps, index: number) => (
          <CoverCards key={index} {...card} />
        ))}
        <ViewAll />
      </div>
    </div>
  );
};
export default CardList;
