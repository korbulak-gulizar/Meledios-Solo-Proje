import Button from "../../Components/Buttons/Button";
import {
  FacebookIcon,
  GoogleIcon,
} from "../../Components/Buttons/iconsButtons";
const Home = () => {
  return (
    <div>
      <h1>Welcome to the Home Page</h1>
      <header>
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
      </header>
    </div>
  );
};

export default Home;
