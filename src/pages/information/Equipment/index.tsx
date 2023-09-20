import "./index.scss";
import EquipmentDetail from "./EquipmentDetail";
import CommonTabs from "../CommonTabs";
interface Props {}

function EquipmentComponent(props: Props) {
  const {} = props;
  return (
    <>
      <img
        className="wukong"
        src={process.env.PUBLIC_URL + "/wukong.png"}
        alt="wukong"
      />
      <div className="user-info">
        <div className="top">
          <div className="health">
            <img
              src={process.env.PUBLIC_URL + "/attribute/health.svg"}
              alt="health"
            />
            <span>480</span>
          </div>
          <div className="speed">
            <img
              src={process.env.PUBLIC_URL + "/attribute/speed.svg"}
              alt="speed"
            />
            <span>260</span>
          </div>
          <div className="lightning">
            <img
              src={process.env.PUBLIC_URL + "/attribute/lightning.svg"}
              alt="lightning"
            />
            <span>260</span>
          </div>
        </div>
        <div className="list">
          <div>攻击 85</div>
          <div>防御 110</div>
          <div>会心 15%</div>
          <div>攻速 0%</div>
          <div>法力 0%</div>
          <div>魔抗 0%</div>
        </div>
      </div>
      <CommonTabs DetailComp={EquipmentDetail} />
    </>
  );
}

export default EquipmentComponent;
