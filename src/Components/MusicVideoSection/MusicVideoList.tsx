import React from "react";
import type { HorizontalCardProps } from "../Cards/HorizantalCard";
import HorizontalCard from "../Cards/HorizantalCard";
import { cards } from "./MusicVideoData";
import styles from "./styleMusicVideo.module.scss";
import { ViewAll } from "../WievAllIcon/WievAllicon";

type CardListProps = {
  isDiscover?: boolean;
};

const CardList: React.FC<CardListProps> = ({ isDiscover }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <h1 className={styles.titleMusic}>
          Music <span>Video</span>
        </h1>
      </div>

      <div
        style={{
          display: "flex",
          backgroundColor: "red",
          justifyContent: "space-between",
        }}
      >
        <div className={styles.cardListContainer}>
          <div className={styles.cardList}>
            {isDiscover
              ? cards.map((card: HorizontalCardProps, index: number) => (
                  <HorizontalCard key={index} {...card} />
                ))
              : null}
          </div>
        </div>

        <div className={styles.viewAllContainer}>
          <ViewAll />
        </div>
      </div>
    </div>
  );
};

export default CardList;
