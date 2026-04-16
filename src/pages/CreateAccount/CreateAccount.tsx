import { useState } from "react";
import styles from "./CreateAccount.module.scss";
import TextLogo from "../../Components/TextLogo/TextLogo";
import InputField from "../../Components/InputField/InputField";
import { EnvelopeIcon, KeyIcon } from "../../Components/Buttons/iconsButtons";
import Button from "../../Components/Buttons/Button";
import {
  GoogleIcon,
  FacebookIcon,
} from "../../Components/Buttons/iconsButtons";
import { useNavigate } from "react-router-dom";

const CreateAccount = () => {
  const navigate = useNavigate();
  const [success, setSuccess] = useState(false);

  const handleSignUp = () => {
    setSuccess(true);

    // 2 saniye sonra login sayfasına yönlendir
    setTimeout(() => {
      navigate("/login");
    }, 2000);
  };

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
        <h2 className={styles.title}>Create An Account</h2>

        {/* Başarı mesajı */}
        {success && (
          <div className={styles.successMessage}>
            Your account has been created successfully!
          </div>
        )}

        {!success && (
          <>
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
                placeholder="Your Password"
                type="password"
                icon={<KeyIcon />}
              />

              <InputField
                label="Confirm Password"
                placeholder="Confirm Password"
                type="password"
                icon={<KeyIcon />}
              />
            </form>

            <button className={styles.signupBtn} onClick={handleSignUp}>
              Sign Up
            </button>

            <div className={styles.orDivider}>
              <span className={styles.line}></span>
              <span className={styles.text}>Or</span>
              <span className={styles.line}></span>
            </div>

            <div className={styles.btnContainer}>
              <Button
                variant="google"
                icon={<GoogleIcon />}
                label="Google Login"
              />
              <Button
                variant="facebook"
                icon={<FacebookIcon />}
                label="Facebook Login"
              />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default CreateAccount;
