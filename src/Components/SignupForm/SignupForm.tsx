import InputField from "../InputField/InputField";
import styles from "./styleSignupForm.module.scss";
import Google from "../SignupForm/Google.svg";

// 🔥 Loading import — PATH BURADA DOĞRU OLMALI
import { useLoading } from "../../Context/LoadingContext";

const SignupForm = () => {
  const { showLoading, hideLoading } = useLoading();

  const handleClick = () => {
    showLoading();
    setTimeout(() => hideLoading(), 2000);
  };

  return (
    <div className={styles.formBox}>
      <div className={styles.header}>
        <button className={styles.signupBtnH} onClick={handleClick}>
          Sign Up
        </button>

        <button className={styles.loginBtn} onClick={handleClick}>
          Login
        </button>
      </div>

      <div className={styles.inputs}>
        <InputField label="Name" placeholder="Enter Your Name" />
        <InputField label="Number" placeholder="Enter Your Number" />
      </div>

      <InputField label="E-Mail" placeholder="Enter Your E-Mail" type="email" />

      <button className={styles.signupBtn} onClick={handleClick}>
        Sign Up
      </button>

      <div className={styles.or}>Or</div>

      <button className={styles.googleBtn} onClick={handleClick}>
        <img src={Google} alt="Google Icon" /> Sign Up With Google
      </button>
    </div>
  );
};

export default SignupForm;
