import React from "react";

import FooterColumn from "./FooterColumn";
import styles from "./Footer.module.scss";
import { Facebook } from "./iconsSosyal";
import { Instagram } from "./iconsSosyal";
import { Twitter } from "./iconsSosyal";
import { Phone } from "./iconsSosyal";

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles["footer-left"]}>
        <h2 className={styles.brand}>About</h2>
        <p className={styles.description}>
          Melodies is a website that has been created for <br />
          over <span className={styles.purple}>5 year's</span> now and it is one
          of the most <br />
          famous music player websites in the world. In <br />
          this website you can listen and download songs <br />
          for free. If you want no limitation you can
          <br /> buy our <span className={styles.blue}>premium pass's.</span>
        </p>
      </div>

      <div className={styles["footer-columns"]}>
        <FooterColumn title="Melodies" items={["Songs", "Radio", "Podcast"]} />

        <FooterColumn
          title="Access"
          items={["Explore", "Artists", "Playlists", "Albums", "Trending"]}
        />

        <FooterColumn
          title="Contact"
          items={["About", "Policy", "Social Media", "Support"]}
        />
      </div>
      <div className={styles["social-icons"]}>
        <h1 className={styles.melodies}>Melodies</h1>
        <div className={styles.iconsRow}>
          <Facebook />
          <Instagram />
          <Twitter />
          <Phone />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
