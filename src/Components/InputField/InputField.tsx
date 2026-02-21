import React from "react";
import styles from "../InputField/styleInputField.module.scss";

interface Props {
  label: string;
  placeholder: string;
  type?: string;
}

const InputField: React.FC<Props> = ({ label, placeholder, type = "text" }) => {
  return (
    <div className={styles.field}>
      <label>{label}</label>
      <input type={type} placeholder={placeholder} />
    </div>
  );
};

export default InputField;
