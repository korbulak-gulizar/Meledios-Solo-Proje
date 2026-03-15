import ArtistPopularSongsList from "../../Components/ArtistPopularSongsSection/ArtistPopularSongsList";
import ArtistsHero from "../../Components/ArtistsHeroSection/ArtistsHero";
import ArtistsAlbumList from "../../Components/ArtistsAlbumSection/ArtistsAlbumList";
import SingleSongsList from "../../Components/SingleSongsSection/SingleSongsList";
import PlaylistArtistsList from "../../Components/PlaylistArtistSection/PlaylistArtistsList";
import EminemList from "../../Components/EminemListSection/EminemList";

const Artists = () => {
  return (
    <div>
      <ArtistsHero />
      <ArtistPopularSongsList />
      <ArtistsAlbumList />
      <SingleSongsList />
      <PlaylistArtistsList />
      <EminemList />
    </div>
  );
};

export default Artists;
