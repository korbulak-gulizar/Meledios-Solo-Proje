import Navbar from "../../Components/Navbar/Navbar";
import SongCardList from "../../Components/SongCardSection/SongCardList.tsx";
import HeroSection from "../../Components/HeroSection/Hero";
import NewReleaseList from "../../Components/NewReleaseSection/NewReleaseList";
import PopularArtistList from "../../Components/PopularArtist/PopularList";
import MusicVideoList from "../../Components/MusicVideoSection/MusicVideoList";
import TopAlbumsList from "../../Components/TopAlbumsSection/TopAlbumsList";
import ImageHeaderList from "../../Components/MoodPlaylistSection/ImageHeaderList";
import TrendingSongList from "../../Components/TrendingSongsSection/TrendingSongList.tsx";
import SignupPage from "../SignupPage/SignupPage.tsx";

import { useLoading } from "../../Context/LoadingContext.tsx"; // 🔥 loading eklendi

const Home = () => {
  const { showLoading, hideLoading } = useLoading(); // 🔥 loading fonksiyonları

  const handleClick = () => {
    showLoading();
    setTimeout(() => hideLoading(), 2000);
  };

  return (
    <div>
      <Navbar />

      <HeroSection />
      <SongCardList />
      <NewReleaseList />
      <TrendingSongList />
      <PopularArtistList />
      <MusicVideoList />
      <TopAlbumsList />
      <ImageHeaderList />
      <SignupPage />
    </div>
  );
};

export default Home;
