import PropTypes from "prop-types";
import styles from "./VideoContent.module.css";
import VideoDetail from "./VideoDetail";

const VideoContent = ({ className = "" }) => {
  return (
    <div className={[styles.videoBuyer, className].join(" ")}>
      <div className={styles.videoContainer}>
        <img
          className={styles.i8tgrhxx4oqSd1Icon}
          alt=""
          src="/i8tgrhxx4oqsd-1@2x.png"
        />
        <div className={styles.progressBarParent}>
          <div className={styles.progressBar} />
          <img
            className={styles.playButtonIcon}
            loading="lazy"
            alt=""
            src="/vector.svg"
          />
        </div>
      </div>
      <VideoDetail />
    </div>
  );
};

VideoContent.propTypes = {
  className: PropTypes.string,
};

export default VideoContent;
