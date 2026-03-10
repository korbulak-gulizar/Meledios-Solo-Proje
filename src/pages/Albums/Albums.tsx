import AlbumHeader from "../../Components/AlbumsHeroSection/AlbumHeader";
import AlbumSongList from "../../Components/AlbumSongList/AlbumSongList";
import styles from "./Albums.module.scss";

const Albums = () => {
  return (
    <div className={styles.albumsPage}>
      <AlbumHeader />
      <AlbumSongList />
    </div>
  );
};

export default Albums;
