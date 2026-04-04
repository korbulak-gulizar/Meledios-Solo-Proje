import React from "react";
import styles from "./BottomTabs.module.scss";
import {
  HomeIcons,
  DiscoverIcons,
  AlbumsIcons,
  LibraryIcons,
} from "./iconsBottom";
import { useNavigate, useLocation } from "react-router-dom";

const BottomTabs = () => {
  const navigate = useNavigate();
  const location = useLocation();
  console.log("lokasyon", location);
  const tabs = [
    { name: "Home", icon: <HomeIcons />, path: "/" },
    { name: "Discover", icon: <DiscoverIcons />, path: "/discover" },
    { name: "Albums", icon: <AlbumsIcons />, path: "/albums" },
    { name: "Artists", icon: <LibraryIcons />, path: "/artists" },
  ];

  return (
    <div className={styles.bottomTabs}>
      {tabs.map((tab) => (
        <div
          key={tab.name}
          className={`${styles.tab} ${
            location.pathname === tab.path ? styles.active : ""
          }`}
          onClick={() => navigate(tab.path)}
        >
          {tab.icon}
          <span>{tab.name}</span>
        </div>
      ))}
    </div>
  );
};

export default BottomTabs;
