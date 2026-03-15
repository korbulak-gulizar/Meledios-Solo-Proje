import React from "react";
import type { RoundCardProps } from "../Cards/RoundCard";
import RoundCard from "../Cards/RoundCard";
import { cards } from "./EminemData";
import styles from "../EminemListSection/EminemList.module.scss";
import { ViewAll } from "../WievAllIcon/WievAllicon";

const EminemList: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <h1 className={styles.titlePopular}>
          Eminem Fans <span>Also Listen To</span>
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

export default EminemList;
