import React from "react";
import SignupLeft from "../../Components/SignupLeft/SignupLeft";
import SignupForm from "../../Components/SignupForm/SignupForm";
import styles from "./styleSignupPage.module.scss";

const SignupPage = () => {
  return (
    <div className={styles.container}>
      <SignupLeft />
      <SignupForm />
    </div>
  );
};

export default SignupPage;
