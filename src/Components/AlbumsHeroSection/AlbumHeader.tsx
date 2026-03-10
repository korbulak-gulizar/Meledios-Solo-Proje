import React from "react";
import styles from "./AlbumHeader.module.scss";

import AlbumsHero from "./AlbumsHero.png";

import { ProfilCircel, PlayIcon, ArrowBackIcon } from "../Buttons/iconsButtons";

const AlbumHeader: React.FC = () => {
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

      {/* SOLDA RESİM - SAĞDA YAZILAR */}
      <div className={styles.content}>
        <div className={styles.left}>
          <img src={AlbumsHero} alt="Trending Cover" className={styles.cover} />
        </div>

        <div className={styles.right}>
          <h1 className={styles.title}>
            Trending Songs
            <span>mix</span>
          </h1>

          <p className={styles.artists}>
            tate mcree, nightmares, the neighborhood, <br></br>doja cat and ...
          </p>

          <p className={styles.meta}>20 songs • 1h 36m</p>
        </div>
      </div>

      {/* SAĞ ALTA PLAY ALL */}
      <div className={styles.bottomRight}>
        <button className={styles.playAll}>Play All</button>
        <PlayIcon />
      </div>
    </div>
  );
};

export default AlbumHeader;
