import styles from "./style.module.scss";
import React from "react";

export type VerticalCardProps = {
  title: string;
  description: string;
  imageUrl?: string;
};

const VerticalCards: React.FC<VerticalCardProps> = ({
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
export default VerticalCards;
