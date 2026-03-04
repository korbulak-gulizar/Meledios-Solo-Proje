import InputField from "../InputField/InputField";
import styles from "./styleSignupForm.module.scss";
import Google from "../SignupForm/Google.svg";
import { useState } from "react";

const SignupForm = () => {
  const [tab, setTab] = useState("signup");

  return (
    <div className={styles.formBox}>
      <div className={styles.header}>
        <button className={`${styles.signupBtnH} ${tab === "signup" ? styles.active : ""}`} onClick={() => setTab("signup")}>
          Sign Up
        </button>
        <button className={`${styles.loginBtn} ${tab === "login" ? styles.active : ""}`} onClick={() => setTab("login")}>
          Login
        </button>
      </div>

      <div className={styles.inputs}>
        {tab === "signup" && (
          <>
            <InputField label="Name" placeholder="Enter Your Name" />
            <InputField label="Number" placeholder="Enter Your Number" />
          </>
        )}
      </div>

      <InputField label="E-Mail" placeholder="Enter Your E-Mail" type="email" />
      <InputField
        label="Password"
        placeholder="Enter Your Password"
        type="password"
      />

      {tab === "signup" ? (
        <>
          <button className={styles.signupBtn}>Sign Up</button>

          <div className={styles.or}>Or</div>

          <button className={styles.googleBtn}>
            <img src={Google} alt="Google Icon" /> Sign Up With Google
          </button>
        </>
      ) : (
        <>
          <button className={styles.signupBtn}>Login</button>

          <div className={styles.or}>Or</div>

          <button className={styles.googleBtn}>
            <img src={Google} alt="Google Icon" /> Login With Google
          </button>
        </>
      )}
    </div>
  );
};

export default SignupForm;
