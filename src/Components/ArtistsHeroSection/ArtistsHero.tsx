import styles from "./ArtistsHero.module.scss";

import { ProfilCircel, ArrowBackIcon } from "../Buttons/iconsButtons";

const ArtistsHero: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      {/* ÜSTTE TEK SIRA */}
      <div className={styles.actions}>
        <ArrowBackIcon />

        <div className={styles.rightActions}>
          <button className={styles.actionBtn}>Share</button>
          <button className={styles.actionBtn}>About</button>
          <button className={styles.actionBtn}>Premium</button>
          <ProfilCircel />
        </div>
      </div>

      <h1 className={styles.title}>Eminem</h1>
    </div>
  );
};

export default ArtistsHero;
