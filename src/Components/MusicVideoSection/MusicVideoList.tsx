import React from "react";
import type { HorizontalCardProps } from "../Cards/HorizantalCard";
import HorizontalCard from "../Cards/HorizantalCard";
import { cards } from "./MusicVideoData";
import styles from "./styleMusicVideo.module.scss";
import { ViewAll } from "../WievAllIcon/WievAllicon";

const CardList: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <h1 className={styles.titleMusic}>
          Music <span>Video</span>
        </h1>
      </div>

      <div className={styles.cardList}>
        {cards.map((card: HorizontalCardProps, index: number) => (
          <HorizontalCard key={index} {...card} />
        ))}
        <ViewAll />
      </div>
    </div>
  );
};

export default CardList;
