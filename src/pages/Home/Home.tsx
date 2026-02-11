//import Button from "../../Components/Buttons/Button";
//import {
//FacebookIcon,
//GoogleIcon,
//} from "../../Components/Buttons/iconsButtons";
import Navbar from "../../Components/Navbar/Navbar";
import SongCardList from "../../Components/SongCardSection/SongCardList.tsx";
import HeroSection from "../../Components/HeroSection/Hero";
import NewReleaseList from "../../Components/NewReleaseSection/NewReleaseList";
import PopularArtistList from "../../Components/PopularArtist/PopularList";
import MusicVideoList from "../../Components/MusicVideoSection/MusicVideoList";
import TopAlbumsList from "../../Components/TopAlbumsSection/TopAlbumsList";

const Home = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <SongCardList />
      <NewReleaseList />
      <PopularArtistList />
      <MusicVideoList />
      <TopAlbumsList />

      {/*<header>
        <div style={{ display: "flex", gap: "20px" }}>
          <Button variant="secondary" label="Login" />
          <Button variant="primary" label="Sign Up" />
          <Button variant="createPlayList" label="Create Playlist" />
          <Button variant="discoverNow" label="Discover Now" />

          <Button variant="google" icon={<GoogleIcon />} label="Google Login" />
          <Button
            variant="facebook"
            icon={<FacebookIcon />}
            label="FAcebook Login"
          />
        </div>
      </header>*/}
    </div>
  );
};

export default Home;
