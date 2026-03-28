import React from "react";
import styles from "./CreateAccount.module.scss";
import TextLogo from "../../Components/TextLogo/TextLogo";
import InputField from "../../Components/InputField/InputField";
import {
  EnvelopeIcon,
  KeyIcon,
  Arrow,
} from "../../Components/Buttons/iconsButtons";
import Button from "../../Components/Buttons/Button";
import {
  GoogleIcon,
  FacebookIcon,
} from "../../Components/Buttons/iconsButtons";
import { useNavigate } from "react-router-dom";

const CreateAccount = () => {
  const navigate = useNavigate();

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
            label="Email"
            placeholder="Enter Your Email"
            type="email"
            icon={<EnvelopeIcon />}
          />

          <InputField
            label="Password"
            placeholder="Enter Your Password"
            type="password"
            icon={<KeyIcon />}
          />
        </form>

        <button className={styles.signupBtn} onClick={() => navigate("/login")}>
          Login
        </button>
        <div className={styles.paragContainer}>
          <span>Forget Password</span>
          <Arrow />
        </div>
        <div className={styles.orDivider}>
          <span className={styles.line}></span>
          <span className={styles.text}>Or</span>
          <span className={styles.line}></span>
        </div>
        <div className={styles.btnContainer}>
          <Button variant="google" icon={<GoogleIcon />} label="Google Login" />
          <Button
            variant="facebook"
            icon={<FacebookIcon />}
            label="Facebook Login"
          />
        </div>
      </div>
    </div>
  );
};

export default CreateAccount;
