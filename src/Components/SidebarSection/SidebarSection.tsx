import React, { useState, useEffect } from "react";
import styles from "../../Components/SidebarSection/SidebarSection.module.scss";
import {
  HomeIcon,
  DiscoverIcon,
  AlbumsIcon,
  ArtistsIcon,
  RecentlyAddedIcon,
  MostPlayedIcon,
  YourFavoritesIcon,
  YourPlaylistsIcon,
  AddPlaylistIcon,
  SettingsIcon,
  LogoutIcon,
} from "../SidebarSection/iconsSidebar/SidebarIcons";

const iconMap: Record<string, JSX.Element> = {
  home: <HomeIcon />,
  discover: <DiscoverIcon />,
  albums: <AlbumsIcon />,
  artists: <ArtistsIcon />,
  recentlyAdded: <RecentlyAddedIcon />,
  mostPlayed: <MostPlayedIcon />,
  favorites: <YourFavoritesIcon />,
  playlists: <YourPlaylistsIcon />,
  addPlaylist: <AddPlaylistIcon />,
  settings: <SettingsIcon />,
  logout: <LogoutIcon />,
};

interface SidebarItem {
  label: string;
  icon?: string;
  highlight?: string;
}

interface SidebarSectionProps {
  section: {
    title: string;
    children: SidebarItem[];
  };
}

function SidebarSection({ section }: SidebarSectionProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  // ekran boyutu değişince güncelle
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);

    // başlangıç durumu: mobilde kapalı, desktopta açık
    if (window.innerWidth <= 768) {
      setIsOpen(false);
    } else {
      setIsOpen(true);
    }

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className={`${styles.sidebarSection} ${isOpen ? styles.open : ""}`}>
      <div
        className={styles.sectionHeader}
        onClick={() => isMobile && setIsOpen(!isOpen)}
      >
        <p className={styles.p1}>{section.title}</p>
        {isMobile && (
          <span className={`${styles.arrow} ${isOpen ? styles.open : ""}`}>
            ▼
          </span>
        )}
      </div>

      {(isMobile ? isOpen : true) && (
        <ul>
          {section.children.map((item, index) => (
            <li
              key={index}
              className={`${item.highlight ? styles[item.highlight] : ""} ${
                activeIndex === index ? styles.active : ""
              }`}
              onClick={() => setActiveIndex(index)}
            >
              {item.icon && (
                <span className={styles.icon}>{iconMap[item.icon]}</span>
              )}
              <span className={styles.label}>{item.label}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default SidebarSection;
