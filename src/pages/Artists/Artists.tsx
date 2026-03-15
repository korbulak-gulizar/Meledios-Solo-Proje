import ArtistPopularSongsList from "../../Components/ArtistPopularSongsSection/ArtistPopularSongsList";
import ArtistsHero from "../../Components/ArtistsHeroSection/ArtistsHero";
import ArtistsAlbumList from "../../Components/ArtistsAlbumSection/ArtistsAlbumList";
import SingleSongsList from "../../Components/SingleSongsSection/SingleSongsList";

const Artists = () => {
  return (
    <div>
      <ArtistsHero />
      <ArtistPopularSongsList />
      <ArtistsAlbumList />
      <SingleSongsList />
    </div>
  );
};

export default Artists;
