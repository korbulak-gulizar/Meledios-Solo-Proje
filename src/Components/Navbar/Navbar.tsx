import React from "react";
import styles from "../Navbar/Navbar.module.scss";
import Button from "../../Components/Buttons/Button";
import { LupeIcon, HamburgerMenu, RightLupe } from "../Navbar/NavbarIcon";

// 🔥 Loading import
import { useLoading } from "../../Context/LoadingContext";

const Navbar: React.FC = () => {
  // 🔥 Loading fonksiyonları
  const { showLoading, hideLoading } = useLoading();

  // 🔥 Tüm butonlarda kullanacağın fonksiyon
  const handleClick = () => {
    showLoading();
    setTimeout(() => hideLoading(), 2000);
  };

  return (
    <header className={styles.navbar}>
      <div className={styles.left}>
        <div className={styles.searchWrapper}>
          <LupeIcon />
          <input
            type="text"
            placeholder="Search For Musics, Artists, ..."
            className={styles.search}
          />
        </div>
      </div>

      <nav className={styles.center}>
        <a href="/about">About Us</a>
        <a href="/contact">Contact</a>
        <a href="/premium">Premium</a>
      </nav>

      <div className={styles.homePage}>
        <RightLupe />
        <h1 className={styles.homeTitle}>
          <span className={styles.home}>Home</span>
          <span className={styles.page}>page</span>
        </h1>
        <HamburgerMenu />
      </div>

      <div className={styles.right}>
        {/* 🔥 Loading tetikleyen butonlar */}
        <Button variant="secondary" label="Login" onClick={handleClick} />
        <Button variant="primary" label="Sign Up" onClick={handleClick} />
      </div>
    </header>
  );
};

export default Navbar;
