import Navbar from "../../Components/Navbar/Navbar";
import ImageHeaderList from "../../Components/MoodPlaylistSection/ImageHeaderList";
import PopularArtistList from "../../Components/PopularArtist/PopularList";
import MusicVideoList from "../../Components/MusicVideoSection/MusicVideoList";
import NewReleaseList from "../../Components/NewReleaseSection/NewReleaseList";
import TopAlbumsList from "../../Components/TopAlbumsSection/TopAlbumsList";

const Discover = () => {
  return (
    <div>
      <Navbar />
      <ImageHeaderList />
      <PopularArtistList />
      <MusicVideoList isDiscover />
      <NewReleaseList />
      <TopAlbumsList />
    </div>
  );
};

export default Discover;
