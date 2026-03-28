import React from "react";
import styles from "./BottomTabs.module.scss";
import {
  HomeIcons,
  DiscoverIcons,
  AlbumsIcons,
  LibraryIcons,
} from "./iconsBottom";
import { useNavigate } from "react-router-dom";

const BottomTabs = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.bottomTabs}>
      <div className={styles.tab} onClick={() => navigate("/")}>
        <HomeIcons />
        <span>Home</span>
      </div>
      <div className={styles.tab} onClick={() => navigate("/discover")}>
        <DiscoverIcons />
        <span>Discover</span>
      </div>
      <div className={styles.tab} onClick={() => navigate("/albums")}>
        <AlbumsIcons />
        <span>Albums</span>
      </div>
      <div className={styles.tab} onClick={() => navigate("/artists")}>
        <LibraryIcons />
        <span>Artists</span>
      </div>
    </div>
  );
};

export default BottomTabs;
