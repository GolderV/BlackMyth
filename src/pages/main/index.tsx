import { FC, useEffect } from "react";
import { menu } from "./config";
import { Link, Route, Routes } from "react-router-dom";
import styles from './index.module.scss'
// import video from '/background.mp4';

export const MainPage:FC = ()=>{
    const audio = document.querySelector('audio');
    useEffect(()=>{
        // setTimeout(() => {
        //     audio?.play();
        //     // audio?.setAttribute('muted','false')
        // }, 100);
        document.onclick = ()=>{
            // audio?.play();
        }
    },[audio])

    return (
      <div className={styles.wrapper}>
        <video
          className={styles["background-video"]}
          src={process.env.PUBLIC_URL + "/background.mp4"}
          autoPlay
          muted
          loop
        />
        <audio src={process.env.PUBLIC_URL + "/main.mp3"} autoPlay></audio>
        <div className={styles.pause} onClick={()=>audio?.pause()}>关闭声音</div>
        <div className={styles.menu}>
          <div>
            {menu.map((item) => (
              <Link key={item.label} to={item.path}>
                <div className={styles.item}>{item.label}</div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    );
} 