import React from "react";
import styles from "../HeroSection/Hero.module.scss";
import Button from "../../Components/Buttons/Button";

// 🔥 Loading import
import { useLoading } from "../../Context/LoadingContext";

const HeroSection: React.FC = () => {
  // 🔥 Loading fonksiyonları
  const { showLoading, hideLoading } = useLoading();

  // 🔥 Tüm butonlarda kullanacağın fonksiyon
  const handleClick = () => {
    showLoading();
    setTimeout(() => hideLoading(), 5000);
  };

  return (
    <section className={styles.hero}>
      <div className={styles.overlay}></div>
      <div className={styles.content}>
        <h1 className={styles.title}>
          All the <span>Best Songs</span> <br /> in One Place
        </h1>

        <br />
        <br />

        <p className={styles.subtitle}>
          On our website, you can access an amazing collection of <br />
          popular and new songs. Stream your favorite tracks in high <br />
          quality and enjoy without interruptions. Whatever your taste in <br />
          music, we have it all for you!
        </p>

        <div style={{ display: "flex", gap: "20px" }}>
          {/* 🔥 Loading tetikleyen butonlar */}
          <Button
            variant="discoverNow"
            label="Discover Now"
            onClick={handleClick}
          />
          <Button
            variant="createPlayList"
            label="Create Playlist"
            onClick={handleClick}
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
