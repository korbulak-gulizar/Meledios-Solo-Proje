import React from "react";
import styles from "../InputField/styleInputField.module.scss";

interface Props {
  label: string;
  placeholder: string;
  type?: string;
  icon?: React.ReactNode;
}

const InputField: React.FC<Props> = ({
  label,
  placeholder,
  type = "text",
  icon,
}) => {
  return (
    <div className={styles.field}>
      <label>{label}</label>
      <div className={styles.inputWrapper}>
        {icon && <div className={styles.icon}>{icon}</div>}
        <input type={type} placeholder={placeholder} />
      </div>
    </div>
  );
};

export default InputField;
