import styles from "./styleHorizantalCard.module.scss";
import React from "react";

export type HorizontalCardProps = {
  title: string;
  description: string;
  views: string;
  imageUrl?: string;
};

const HorizontalCard: React.FC<HorizontalCardProps> = ({
  title,
  description,
  imageUrl,
  views,
}) => {
  return (
    <div className={styles.card}>
      {imageUrl && <img src={imageUrl} alt={title} />}
      <h2>{title}</h2>
      <div className={styles.info}>
        <p>{description}</p>
        <p>{views}</p>
      </div>
    </div>
  );
};
export default HorizontalCard;
