import React from "react";
import styles from "../HeroSection/Hero.module.scss";
import Button from "../../Components/Buttons/Button";

const HeroSection: React.FC = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.overlay}></div>
      <div className={styles.content}>
        <h1 className={styles.title}>
          All the <span>Best Songs</span> <br></br>in One Place
        </h1>
        <br></br>
        <br></br>
        <p className={styles.subtitle}>
          On our website, you can access an amazing collection of <br></br>
          popular and new songs. Stream your favorite tracks in high<br></br>
          quality and enjoy without interruptions. Whatever your taste in{" "}
          <br></br>music, we have it all for you!
        </p>
        <div style={{ display: "flex", gap: "20px" }}>
          <Button variant="discoverNow" label="Discover Now" />
          <Button variant="createPlayList" label="Create Playlist" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
