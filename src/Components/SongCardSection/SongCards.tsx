import React from "react";
import styles from "./SongCards.module.scss";

export type SongCardProps = {
  title: string;
  description: string;
  imageUrl?: string;
};

const SongCards: React.FC<SongCardProps> = ({
  title,
  description,
  imageUrl,
}) => {
  return (
    <div className={styles.card}>
      {imageUrl && <img src={imageUrl} alt={title} />}
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
};
export default SongCards;
