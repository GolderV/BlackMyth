import { FC, useEffect } from "react";
import { MENU } from "./config";
import { Link, Route, Routes } from "react-router-dom";
import styles from "./index.module.scss";
import { Menu } from "antd";
// import video from '/background.mp4';

export const MainPage: FC = () => {
  const audio = document.querySelector("audio");

  return (
    <div className={styles.wrapper}>
      <video
        className={styles["background-video"]}
        src={process.env.PUBLIC_URL + "/background.mp4"}
        autoPlay
        muted
        loop
      />
      <audio src={process.env.PUBLIC_URL + "/main.mp3"}></audio>
      <div className={styles.pause} onClick={() => audio?.pause()}>
        关闭声音
      </div>
      <div className={styles.menu}>
        <Menu items={MENU} />
      </div>
    </div>
  );
};
