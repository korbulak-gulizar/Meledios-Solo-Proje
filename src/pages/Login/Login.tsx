import React from "react";
import styles from "./LoginPage.module.scss";
import TextLogo from "../../Components/TextLogo/TextLogo";
import InputField from "../../Components/InputField/InputField";
import { EnvelopeIcon, KeyIcon } from "../../Components/Buttons/iconsButtons";

const Login = () => {
  return (
    <div className={styles.container}>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <img
          src="/images/logo.png"
          alt="Meledios Logo"
          className={styles.logo}
        />

        <TextLogo />
      </div>
      <div className={styles.formContainer}>
        <h2 className={styles.title}>Login To Continue</h2>
        <form className={styles.form}>
          <InputField
            label="Name"
            placeholder="Enter Your Name"
            icon={<EnvelopeIcon />}
          />
          <InputField
            label="Password"
            placeholder="Enter Your Password"
            type="password"
            icon={<KeyIcon />}
          />
        </form>
      </div>
    </div>
  );
};

export default Login;
