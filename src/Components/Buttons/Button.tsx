import React from "react";
import styles from "./Button.module.scss";

type ButtonProbs = {
  variant?: string;
  label?: string;
  icon?: React.ReactNode;
  className?: string;
  onClick?: () => void;
};

const Button = ({ variant, label, icon, className, onClick }: ButtonProbs) => {
  return (
    <button
      className={`${styles.btn} ${styles[variant || "primary"]}${
        className || ""
      }`}
      onClick={onClick}
    >
      {icon && <span className={styles.icon}>{icon}</span>}
      {label}
    </button>
  );
};

export default Button;
