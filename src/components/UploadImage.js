import { useState } from "react";
import classes from "./UploadImage.module.css";
import { storage } from "../firebase";

export default function UploadImage() {
  const [image, setImage] = useState(null);
  const [url, setUrl] = useState("");
  const uploadHandler = async (e) => {
    const image = e.target.files[0];
    setImage(image);

    const uploadTask = storage.ref(`images/bicubic_image`).put(image);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        // setProgress(progress);
      },
      (error) => {
        console.log(error);
      },
      () => {
        storage
          .ref("images")
          .child("bicubic_image")
          .getDownloadURL()
          .then((url) => {
            setUrl(url);
            console.log(url);
          });
      }
    );
  };

  return (
    <div
      className={`section ${
        image ? "big-section" : "small-section"
      } shaded-section ${classes.uploadContainer}`}
    >
      <h1>Start Enhancing</h1>
      <input type="file" id={classes["actual-btn"]} onChange={uploadHandler} />
      <label htmlFor={classes["actual-btn"]}>Upload Bicubic Image</label>
      
      {url && (
        <div className = {classes.uploadedImageContainer}>
          <div className={classes.uploadedImage}>
            <img src={url} alt="bicubic"></img>
          </div>
          <p>{url}</p>
        </div>
      )}
    </div>
  );
}
