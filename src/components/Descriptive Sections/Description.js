import classes from "./Description.module.css";
import { Parallax } from "react-scroll-parallax";

export default function Description() {
  const bannerSlideHander = (progress) => {
    const banner = document.getElementById("description-banner");
    if (progress > 0.1 && progress < 0.9) {
      // console.log(progress);
      banner.className = classes.banner + " " + classes.slided;
    } else {
      banner.className = classes.banner;
    }
  };

  return (
    <div className="section composite-section">
      <Parallax
        className={classes.banner}
        onProgressChange={bannerSlideHander}
        id="description-banner"
      >
        <h1>Description</h1>
      </Parallax>
      <div className={classes.descriptionText}>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore.
        </p>
      </div>
    </div>
  );
}
