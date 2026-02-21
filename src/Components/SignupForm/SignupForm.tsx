import React from "react";
import InputField from "../InputField/InputField";
import styles from "./styleSignupForm.module.scss";
import Google from "../SignupForm/Google.svg";

const SignupForm = () => {
  return (
    <div className={styles.formBox}>
      <div className={styles.header}>
        <button className={styles.signupBtnH}>Sign Up</button>
        <button className={styles.loginBtn}>Login</button>
      </div>

      <div className={styles.inputs}>
        <InputField label="Name" placeholder="Enter Your Name" />
        <InputField label="Number" placeholder="Enter Your Number" />
      </div>
      <InputField label="E-Mail" placeholder="Enter Your E-Mail" type="email" />

      <button className={styles.signupBtn}>Sign Up</button>

      <div className={styles.or}>Or</div>

      <button className={styles.googleBtn}>
        <img src={Google} alt="Google Icon" /> Sign Up With Google
      </button>
    </div>
  );
};

export default SignupForm;
