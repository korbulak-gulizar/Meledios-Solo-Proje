import React from "react";
import styles from "../Navbar/Navbar.module.scss";
import Button from "../../Components/Buttons/Button";
import { LupeIcon, HamburgerMenu, RightLupe } from "../Navbar/NavbarIcon";

const Navbar: React.FC = () => {
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

      {/* Home Page Basligi */}
      <div className={styles.homePage}>
        <RightLupe />
        <h1 className={styles.homeTitle}>
          <span className={styles.home}>Home</span>
          <span className={styles.page}>page</span>
        </h1>
        <HamburgerMenu />
      </div>

      <div className={styles.right}>
        <Button variant="secondary" label="Login" />
        <Button variant="primary" label="Sign Up" />
      </div>
    </header>
  );
};

export default Navbar;
