import React from "react";
import styles from "./Button.module.scss";

type ButtonProbs = {
  variant?: string;
  label?: string;
  icon?: React.ReactNode;
  className?: string;
};

const Button = ({ variant, label, icon, className }: ButtonProbs) => {
  return (
    <button
      className={`${styles.btn} ${styles[variant || "primary"]}${
        className || ""
      }`}
    >
      {icon && <span className={styles.icon}>{icon}</span>}
      {label}
    </button>
  );
};

export default Button;
