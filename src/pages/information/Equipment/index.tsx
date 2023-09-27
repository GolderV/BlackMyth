import "./index.scss";
import EquipmentDetail from "./EquipmentDetail";
import CommonTabs from "../CommonTabs";
import { EQUIPMENT_ITEM } from "./config";
import {
  Attribute,
  BasicAttribute,
  DisasterDefense,
} from "../../../const/type";
import { AttributeLabelMap } from "../../../const/const";

const UserInfo: Attribute = {
  core: {
    health: 480,
    mana: 260,
    energy: 260,
  },
  basic: {
    attack: 85,
    defense: 129,
    criticalStrikeRate: "15%",
    criticalMultiplier: "0%",
    damageBonus: "0%",
    damageReduction: "0%",
  },
  disasterDefense: {
    chillDefense: 0,
    fireDefense: 0,
    poisonDefense: 0,
    thunderDefense: 0,
  },
};

function Equipment() {
  return (
    <>
      <img
        className="wukong"
        src={process.env.PUBLIC_URL + "/wukong.png"}
        alt="wukong"
      />
      <div className="user-info">
        <div className="top">
          {Object.entries(UserInfo.core ?? {}).map(([key, val]) => (
            <div className={key}>
              <img
                src={`${process.env.PUBLIC_URL}/attribute/${key}.svg`}
                alt={key}
              />
              <span>{val}</span>
            </div>
          ))}
        </div>
        <div className="divider" />
        <div className="tips">·· 基础属性 ··</div>
        <div className="base-list">
          {Object.entries(UserInfo.basic ?? {}).map(([key, val]) => (
            <div>
              <span>{AttributeLabelMap[key as keyof BasicAttribute]}</span>
              <span>{val}</span>
            </div>
          ))}
        </div>
        <div className="tips">·· 四灾耐性 ··</div>
        <div className="disaster-list">
          {Object.entries(UserInfo.disasterDefense ?? {}).map(([key, val]) => (
            <div>
              <span>{AttributeLabelMap[key as keyof DisasterDefense]}</span>
              <span>{val}</span>
            </div>
          ))}
        </div>
      </div>
      <CommonTabs tabItems={EQUIPMENT_ITEM} DetailComp={EquipmentDetail} />
    </>
  );
}

export default Equipment;
