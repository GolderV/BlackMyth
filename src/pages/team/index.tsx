import ReactGA from "react-ga4";
import { FC, useEffect } from "react";
import styles from "./index.module.scss";
import { TEAM_LIST } from "./config";

export const TeamPage: FC = () => {
  useEffect(() => {
    ReactGA.send({ hitType: "pageview", page: "/team", title: "team" });
  }, []);

  return (
    <div className={styles.list}>
      <p className={styles.sp}>特别鸣谢：游戏科学、黑神话·悟空官方</p>

      {TEAM_LIST.map((e) => (
        <p>
          {e.label}:&nbsp;
          {e.member.map((m) => (
            <a href={m.link} target="_blank">
              {m.name}
            </a>
          ))}
        </p>
      ))}
    </div>
  );
};
