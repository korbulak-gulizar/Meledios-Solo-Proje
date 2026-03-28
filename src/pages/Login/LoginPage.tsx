import React from "react";
import styles from "./LoginPage.module.scss";
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

const LoginPage = () => {
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
        <button className={styles.signupBtn}>Login</button>
        <div className={styles.paragContainer}>
          <span>Forget Password</span>
          <Arrow />
        </div>
        <div className={styles.btnContainer}>
          <Button variant="google" icon={<GoogleIcon />} label="Google Login" />
          <Button
            variant="facebook"
            icon={<FacebookIcon />}
            label="Facebook Login"
          />
        </div>
        <div className={styles.divider}>
          <div className={styles.accountinfo}>
            <h3 className={styles.accountInfoTitle}>Dont Have An Account?</h3>
            <p className={styles.accountInfoText}>Sign Up Here</p>
          </div>

          <Button variant="blueSignUp" label="Sign Up" />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
