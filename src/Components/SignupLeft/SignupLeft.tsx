import styles from "./styleSignupLeft.module.scss";
import Button from "../../Components/Buttons/Button";
import { useLoading } from "../../Context/LoadingContext";

const SignupLeft = () => {
  const { showLoading, hideLoading } = useLoading();

  const handleClick = () => {
    showLoading();
    setTimeout(() => hideLoading(), 2000);
  };

  return (
    <div className={styles.left}>
      <h1>Join Our Platform</h1>
      <p>
        You can be one of the <span className={styles.pink}>members</span> of
        our platform by <br />
        just adding some necessary information. If you <br />
        already have an account, just <br />
        hit the{" "}
        <Button
          variant="secondary"
          label="Login"
          onClick={handleClick} // 🔥 EKLENDİ
        />
        .
      </p>
    </div>
  );
};

export default SignupLeft;
