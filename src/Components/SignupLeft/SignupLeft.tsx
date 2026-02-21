import React from "react";
import styles from "./styleSignupLeft.module.scss";
import Button from "../../Components/Buttons/Button";

const SignupLeft = () => {
  return (
    <div className={styles.left}>
      <h1>Join Our Platform</h1>
      <p>
        You can be one of the <span className={styles.pink}>members</span> of
        our platform by <br />
        just adding some necessary information. If you <br />
        already have an account, just <br />
        hit the <Button variant="secondary" label="Login" />.
      </p>
    </div>
  );
};

export default SignupLeft;
