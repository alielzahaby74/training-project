import classes from "./Landing.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import "font-awesome/css/font-awesome.min.css";

export default function Landing() {

  let blurToggle = false;
  const blurShiftHandler = () => {
    blurToggle = !blurToggle;

    const image = document.getElementById("image-container");
    const button = document.getElementById("play-button");
    image.className = blurToggle
      ? `${classes.image} ${classes.slided}`
      : classes.image;
    button.className = blurToggle ? classes.faded : null;
  };

  const playIcon = <FontAwesomeIcon icon={faPlay} />;

  return (
    <div className={classes.landing}>
      <h1>Enhance Your Images</h1>
      <div className={classes.container} onClick={blurShiftHandler}>
        <div className={classes.image} id="image-container">
          <img src="https://images.unsplash.com/photo-1638571179264-de62c4d84f52?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80" alt="a girl" />
        </div>
        <button id="play-button">{playIcon}</button>
      </div>
    </div>
  );
}
