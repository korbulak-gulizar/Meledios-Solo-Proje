import React from "react";
import styles from "./styleRoundCard.module.scss";

export type RoundCardProps = {
  description: string;
  imageUrl?: string;
};

const RoundCards: React.FC<RoundCardProps> = ({ description, imageUrl }) => {
  return (
    <div className={styles.card}>
      {imageUrl && <img src={imageUrl} alt={description} />}
      <p>{description}</p>
    </div>
  );
};

export default RoundCards;
