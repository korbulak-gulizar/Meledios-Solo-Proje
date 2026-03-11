import React from "react";
import styles from "./AlbumSongCard.module.scss";

interface AlbumSongCardProps {
  rank: number;
  title: string;
  artist: string;
  date: string;
  album: string;
  duration: string;
  cover: string;
  herz: string;
  playingSongId: number;
  setPlayingSongId: (id: number) => void;
}

const AlbumSongCard: React.FC<AlbumSongCardProps> = ({
  rank,
  title,
  artist,
  date,
  album,
  duration,
  cover,
  herz,
  playingSongId,
  setPlayingSongId,
}) => {
  return (
    <div className={styles.cardContainer} onClick={()=> setPlayingSongId(rank)} >
      <div className={styles.rank}>{rank === playingSongId ? <span>▶</span> : rank}</div>

      <div className={styles.card}>
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
          <div>...</div>
        </div>
      </div>
    </div>
  );
};

export default AlbumSongCard;
