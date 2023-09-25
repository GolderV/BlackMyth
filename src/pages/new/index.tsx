import { useState } from "react";
import styles from "./index.module.scss";
import { BOSS_ITEMS, BossData } from "./config";
import { Modal } from "antd";

interface Props {}

function NewGame(props: Props) {
  const {} = props;
  const [showTips, setShowTips] = useState(true);
  const [currentSelect, setCurrentSelect] = useState<BossData>();
  const img = currentSelect?.img || "wukong.jpg";

  const onKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    console.log(event);
    if (event.key === "e") {
      setShowTips(false);
    }
  };

  const onClick = () => {
    Modal.confirm({
      icon: null,
      centered: true,
      className: styles["new-game-modal"],
      content: "确定前往该关卡吗",
      maskClosable: true,
      okType: "default",
      okText: "确定",
      cancelText: "取消",
      onOk() {
        // document.querySelector("audio")?.pause();
        window.open(currentSelect?.href);
      },
    });
  };

  const tipsComp = (
    <div className={styles.tips}>
      <div className={styles.time}>
        <div>试玩时间为</div>
        <div>45:00</div>
      </div>
      <div className={styles.desc}>
        天命人，久等了！
        <br />
        本次试玩，我们提供了
        <span className={styles.yellow}> 4 个关卡片段 </span>
        供您体验。您可以随时在设置界面退出当前关卡，切换不同内容。
        <br />
        已经通关的内容会自动保存进度，并在试玩时间结束后集中显示。
        <br />
        <br />
        试玩中如遇到困难或需要帮助，请联系在线客服，谢谢！
      </div>
      <div className={styles.confirm} onClick={() => setShowTips(false)}>
        <span className={styles.keyboard}>E</span>
        <span>确定</span>
      </div>
    </div>
  );

  const leftComp = (
    <div className={styles.left}>
      <div className={styles.title}>
        {currentSelect && (
          <>
            <div className={styles.label}>{currentSelect?.label}</div>
            <div className={styles.divider} />
            <div className={styles.poetry}>{currentSelect?.poetry}</div>
            <div className={styles.duration}>
              预计游玩时长：{currentSelect?.duration}
            </div>
            <div className={styles.cleared}>
              {currentSelect?.isClear ? "已通关" : "未通关"}
            </div>
          </>
        )}
      </div>
      <div className={styles.menu}>
        {BOSS_ITEMS.map((e) => (
          <div
            key={e.key}
            className={styles.item}
            style={{
              backgroundImage: `url(${
                process.env.PUBLIC_URL + "/background/" + e.img
              })`,
            }}
            onMouseEnter={() => setCurrentSelect(e)}
            onClick={onClick}
          />
        ))}
      </div>
    </div>
  );

  return (
    <div
      className={styles.wrapper}
      style={{
        backgroundImage: `url(${
          process.env.PUBLIC_URL + "/background/" + img
        })`,
      }}
      onKeyDown={onKeyDown}
      tabIndex={-1}
    >
      {/* <audio src={process.env.PUBLIC_URL + "/shanbei.mp3"} autoPlay></audio> */}
      <div className={styles.declare}>
        您体验的是专为本次试玩定制的内容，不代表产品发售时的最终内容与体验。
      </div>
      {showTips && tipsComp}
      {!showTips && leftComp}
    </div>
  );
}

export default NewGame;
