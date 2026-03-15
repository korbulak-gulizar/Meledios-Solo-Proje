import ArtistPopularSongsList from "../../Components/ArtistPopularSongsSection/ArtistPopularSongsList";
import ArtistsHero from "../../Components/ArtistsHeroSection/ArtistsHero";
import ArtistsAlbumList from "../../Components/ArtistsAlbumSection/ArtistsAlbumList";

const Artists = () => {
  return (
    <div>
      <ArtistsHero />
      <ArtistPopularSongsList />
      <ArtistsAlbumList />
    </div>
  );
};

export default Artists;
