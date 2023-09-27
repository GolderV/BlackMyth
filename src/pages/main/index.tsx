import { FC, useState } from "react";
import { MENU } from "./config";
import styles from "./index.module.scss";
import { Menu } from "antd";
// import video from '/background.mp4';

export const MainPage: FC = () => {
  const [isClicked, setIsClicked] = useState(false);
  const onPlay = () => {
    const audio = document.querySelector("audio");
    if (audio) {
      audio.play();
      audio.volume = 0.5;
    }
    setIsClicked(true);
  };

  return (
    <div className={styles.wrapper} onClick={onPlay} onKeyDown={onPlay}>
      <video
        className={styles["background-video"]}
        src={process.env.PUBLIC_URL + "/background.mp4"}
        autoPlay
        muted
        loop
      />
      <audio src={process.env.PUBLIC_URL + "/main.mp3"} autoPlay></audio>
      <div
        className={styles.pause}
        onClick={() => document.querySelector("audio")?.pause()}
      >
        关闭声音
      </div>
      {!isClicked ? (
        <div className={styles.tips}>
          <img src={process.env.PUBLIC_URL + "/titleWhite.png"} alt="title" />
          <div>按下任意按键开始游戏</div>
        </div>
      ) : (
        <div className={styles.menu}>
          <Menu items={MENU} />
        </div>
      )}
    </div>
  );
};
