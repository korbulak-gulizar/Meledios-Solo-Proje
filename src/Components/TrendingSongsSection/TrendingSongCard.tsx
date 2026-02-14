import React from "react";
import styles from "./styleTrendingCard.module.scss";

interface TrendingSongCardProps {
  rank: number;
  title: string;
  artist: string;
  date: string;
  album: string;
  duration: string;
  cover: string;
  herz: string;
}

const TrendingSongCard: React.FC<TrendingSongCardProps> = ({
  rank,
  title,
  artist,
  date,
  album,
  duration,
  cover,
  herz,
}) => {
  return (
    <div className={styles.card}>
      <div className={styles.rank}>#{rank}</div>

      <img src={cover} alt={title} className={styles.cover} />

      <div className={styles.info}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.artist}>{artist}</p>
      </div>
      <p className={styles.date}>{date}</p>
      <p className={styles.album}>{album}</p>
      <div className={styles.actions}>
        <img src={herz} alt="Herz" className={styles.herz} />
        <div className={styles.duration}>{duration}</div>
      </div>
    </div>
  );
};

export default TrendingSongCard;
