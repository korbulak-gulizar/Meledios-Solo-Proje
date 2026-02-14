import React from "react";
import type { VerticalCardProps } from "../Cards/VerticalCard";
import VerticalCards from "../Cards/VerticalCard";
import { cards } from "./newRelCardsData";
import styles from "./../NewReleaseSection/styleList.module.scss";
import { ViewAll } from "../WievAllIcon/WievAllicon";

const CardList: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <h1 className={styles.titleWeekly}>
          New Release <span>Songs</span>
        </h1>
      </div>

      <div className={styles.cardList}>
        {cards.map((card: VerticalCardProps, index: number) => (
          <VerticalCards key={index} {...card} />
        ))}
        <ViewAll />
      </div>
    </div>
  );
};

export default CardList;
