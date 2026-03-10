import AlbumSongList from "../../Components/AlbumSongList/AlbumSongList";
import styles from "./Albums.module.scss";

const Albums = () => {
  return (
    <div className={styles.albumsPage}>
      <AlbumSongList />
    </div>
  );
};

export default Albums;
