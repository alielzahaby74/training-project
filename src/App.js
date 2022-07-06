import "./App.css";
import Header from "./UI/Header";
import Landing from "./components/Landing";
import Welcome from "./components/Welcome";
import Intro from "./components/Descriptive Sections/Intro";
import Description from "./components/Descriptive Sections/Description";
import Technology from "./components/Descriptive Sections/Technology";
import UploadImage from "./components/UploadImage";
import { ParallaxProvider } from "react-scroll-parallax";

function App() {

  return (
    <ParallaxProvider>
      <Header />
      <Landing />
      <Welcome />
      <Intro />
      <Description />
      <Technology />
      <UploadImage />
    </ParallaxProvider>
  );
}

export default App;
