import classes from "./Technology.module.css";
import { Parallax } from "react-scroll-parallax";

export default function Technology() {
  const leftBannerSlideHander = (progress) => {
    const banner = document.getElementById("left-technology-banner");
    if (progress > 0.1 && progress < 0.9) {
      // console.log(progress);
      banner.className = `${classes.banner} ${classes.slided}`;
    } else {
      banner.className = `${classes.banner}`;
    }
  };

  const rightBannerSlideHander = (progress) => {
    const banner = document.getElementById("right-technology-banner");
    if (progress > 0.1) {
      // console.log(progress);
      banner.className = `${classes.banner} ${classes.rightBanner} ${classes.slided}` ;
    } else {
      banner.className = `${classes.banner} ${classes.rightBanner}`;
    }
  };

  return (
    <div className="section composite-section">
      <Parallax
        className={classes.banner}
        onProgressChange={leftBannerSlideHander}
        id="left-technology-banner"
      >
        <h1>Technology</h1>
      </Parallax>

      <Parallax
        className={`${classes.banner} ${classes.rightBanner}`}
        onProgressChange={rightBannerSlideHander}
        id="right-technology-banner"
      >
        <h1>Technology</h1>
      </Parallax>

      <div className={classes.technologyDescription}>
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
