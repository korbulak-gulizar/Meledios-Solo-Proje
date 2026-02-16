import React from "react";
import styles from "../FooterSection/styleFooterColumn.module.scss";

interface FooterColumnProps {
  title: string;
  items: string[];
}

const FooterColumn: React.FC<FooterColumnProps> = ({ title, items }) => {
  return (
    <div className={styles.footerColumn}>
      <h3 className={styles.title}>{title}</h3>
      <ul>
        {items.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default FooterColumn;
