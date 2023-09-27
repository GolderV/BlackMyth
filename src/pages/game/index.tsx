import { FC, useEffect, useState } from "react";
import "./index.scss";

// 24/8/20
const DATE = 1724119200000;
function formatDuring(mss: number) {
  var days = Math.ceil(mss / (1000 * 60 * 60 * 24));
  var hours = Math.ceil((mss % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.ceil((mss % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.ceil((mss % (1000 * 60)) / 1000);
  return days + "天 " + hours + "：" + minutes + "：" + seconds;
}

export const GamePage: FC = () => {
  const [progress, setProgress] = useState(0);
  const [countdown, setCountdown] = useState(DATE - Date.now());
  const [clickCount, setClickCount] = useState(0);

  useEffect(() => {
    const timer1 = setInterval(() => {
      setProgress((preState) => {
        // 模拟加载卡顿
        if (Math.random() > 0.6) {
          return preState;
        }
        if (preState === 100) {
          clearInterval(timer1);
          return 100;
        }
        return Math.min(100, preState + 5);
      });
    }, 200);

    const timer2 = setInterval(() => {
      setCountdown((preState) => preState - 1000);
    }, 1000);

    return () => {
      clearInterval(timer1);
      clearInterval(timer2);
    };
  }, []);

  useEffect(() => {
    if (clickCount < 5) return;
    setClickCount(0);
    window.location.href += "/new";
  }, [clickCount]);

  const progressComp = progress < 100 && (
    <div className="progress-wrapper">
      <div className="progress">
        <div style={{ width: progress + "%" }} />
      </div>
      <div>载入中</div>
    </div>
  );

  const countdownComp = (
    <div className="countdown">
      <div className="tips">施主今日无缘，麻烦再等几天</div>
      <div className="time">{formatDuring(countdown)}</div>
      <div className="extra">“做一日和尚，撞一日钟”</div>
    </div>
  );

  return (
    <div className="game-page" onClick={() => setClickCount(clickCount + 1)}>
      <audio src={process.env.PUBLIC_URL + "/oldMonkey.mp3"} autoPlay loop />
      <div className="shadow" />
      <div className="title">
        <img
          className="avatar"
          src={process.env.PUBLIC_URL + "/avatar.jpg"}
          alt="avatar"
        />
        <span className="tag">PC</span>
        <span className="label">黑神话:悟空 数字预购版</span>
      </div>
      <img
        className="bg"
        src={process.env.PUBLIC_URL + "/background/game.png"}
        alt="老猴子"
      />
      {progressComp || countdownComp}
    </div>
  );
};
