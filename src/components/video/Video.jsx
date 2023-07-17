import React from "react";

import videoMP4 from "../../assets/videos/video.mp4";
import videoWEBM from "../../assets/videos/video.webm";

import styles from "./Video.module.scss";

const Video = () => {
  return (
    <>
      <video
        className={styles.video}
        autoPlay
        muted
        loop
        id="myVideo"
        // playsinline
        // controls
      >
        <source src={videoMP4} type="video/mp4" />
        <source src={videoWEBM} type="video/webm" />
      </video>
    </>
  );
};

export default Video;
