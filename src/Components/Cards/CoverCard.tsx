import styles from "./CoverCardStyle.module.scss";
import React from "react";

export type CoverCardProps = {
  imageUrl?: string;
};

const CoverCard: React.FC<CoverCardProps> = ({ imageUrl }) => {
  return (
    <div className={styles.card}>{imageUrl && <img src={imageUrl} />}</div>
  );
};
export default CoverCard;
