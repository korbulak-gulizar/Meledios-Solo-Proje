import styles from "./HeaderCardStyle.module.scss";
import React from "react";

export type HeaderCardProps = {
  title: string;

  imageUrl?: string;
};

const HeaderCard: React.FC<HeaderCardProps> = ({
  title,

  imageUrl,
}) => {
  return (
    <div className={styles.card}>
      {imageUrl && <img src={imageUrl} alt={title} />}
      <h2>{title}</h2>
    </div>
  );
};
export default HeaderCard;
