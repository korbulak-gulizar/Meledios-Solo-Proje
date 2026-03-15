import React from "react";
import type { HeaderCardProps } from "../Cards/HeaderCard";
import HeaderCard from "../Cards/HeaderCard";
import { cards } from "./PlaylistArtistData";
import styles from "./PlaylistArtistList.module.scss";
import { ViewAll } from "../WievAllIcon/WievAllicon";

const PlaylistArtistsList: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <h1 className={styles.titleMoodPlaylist}>
          Artist`s <span>Playlist</span>
        </h1>
      </div>

      <div className={styles.cardList}>
        {cards.map((card: HeaderCardProps, index: number) => (
          <HeaderCard key={index} {...card} />
        ))}
        <ViewAll />
      </div>
    </div>
  );
};

export default PlaylistArtistsList;
