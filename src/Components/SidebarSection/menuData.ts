// src/data/menuData.ts

export interface MenuItem {
  label: string;
  icon?: string;
  highlight?: string;
}

export interface MenuSection {
  title: string;
  children: MenuItem[];
}

export interface MenuData {
  title: string;
  children: MenuSection[];
}

export const menuData: MenuData = {
  title: "Melodies Sidebar Menu",
  children: [
    {
      title: "Menu",
      children: [
        { label: "Home", icon: "home", highlight: "pink" },
        { label: "Discover", icon: "discover" },
        { label: "Albums", icon: "albums" },
        { label: "Artists", icon: "artists" },
      ],
    },
    {
      title: "Library",
      children: [
        { label: "Recently Added", icon: "recentlyAdded" },
        { label: "Most played", icon: "mostPlayed" },
      ],
    },
    {
      title: "Playlist and Favorite",
      children: [
        { label: "Your favorites", icon: "favorites" },
        { label: "Your playlist", icon: "playlists" },
        { label: "Add playlist", icon: "addPlaylist", highlight: "blue" },
      ],
    },
    {
      title: "General",
      children: [
        { label: "Setting", icon: "settings" },
        { label: "Logout", icon: "logout", highlight: "pink" },
      ],
    },
  ],
};

export default menuData;
