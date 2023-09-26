import { useState } from "react";
import styles from "./index.module.scss";
import { Spells, SpellsTypeEnum } from "./type";
import { SPELLS_ITEMS } from "./data";
import classnames from "classnames";
import BgMix from "../../../components/BgMix";

const TypeMap = {
  [SpellsTypeEnum.Active]: "主动法术",
  [SpellsTypeEnum.Passive]: "被动法术",
};

function SpellsComp() {
  const [selectItem, setSelectItem] = useState<Spells>();
  const [hoverItem, setHoverItem] = useState<Spells>();

  return (
    <div className={styles.wrapper}>
      <div className={styles.left}>
        {SPELLS_ITEMS.map((item) => (
          <div className={styles.item}>
            <div className={styles.label}>{item.label}</div>
            {item.children.map((e) => {
              return (
                <div
                  style={{
                    backgroundImage: `url(${process.env.PUBLIC_URL + e.icon})`,
                  }}
                  className={classnames(
                    styles.icon,
                    selectItem?.key === e.key && styles.selected
                    // styles[selectItem?.iconType || "light"]
                  )}
                  onClick={() => setSelectItem(e)}
                  onMouseEnter={() => setHoverItem(e)}
                />
              );
            })}
          </div>
        ))}
      </div>
      {hoverItem && (
        <div className={styles.right}>
          <video
            src={process.env.PUBLIC_URL + hoverItem.video}
            autoPlay
            muted
            loop
          />
          <div className={styles.name}>{hoverItem.name}</div>
          <div className={styles.attr}>
            <div className={styles.cost}>
              <img src={process.env.PUBLIC_URL + "/cost.png"} alt="cost" />
              <span>{hoverItem.cost || "--"}</span>
            </div>
            <div className={styles.coolDown}>
              <img src={process.env.PUBLIC_URL + "/cd.png"} alt="cd" />
              <span>{hoverItem.coolDown || "--"}</span>
            </div>
            <div className={styles.type}>{TypeMap[hoverItem.type]}</div>
          </div>
          <BgMix className={styles.desc}>
            <div>{hoverItem.description}</div>
          </BgMix>
        </div>
      )}
    </div>
  );
}

export default SpellsComp;
