import styles from "./LoadingScreen.module.scss";
import bg from "./images/Loading.jpg";
import circle from "./images/logo-no-background 1.png";
import note from "./images/Group 57.svg";
import uhr from "./images/10_00.svg";

const LoadingScreen = () => {
  return (
    <div className={styles.wrapper} style={{ backgroundImage: `url(${bg})` }}>
      {/* Üstteki satır: Uhr solda, Note sağda */}
      <div className={styles.topRow}>
        <img src={uhr} className={styles.uhr} />
        <img src={note} className={styles.note} />
      </div>

      {/* Ortadaki circle */}
      <div className={styles.centerCircle}>
        <img src={circle} className={styles.circle} />
      </div>

      {/* Loading yazısı */}
      <div className={styles.loadingRow}>
        <span>Loading</span>
        <div className={styles.spinner}></div>
      </div>
    </div>
  );
};

export default LoadingScreen;
