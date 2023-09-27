import React from "react";
import BgMix from "../../../components/BgMix";
import classnames from "classnames";
import {
  AttributeLabelMap,
  EquipmentLevelColorMap,
  EquipmentLevelLabelMap,
} from "../../../const/const";
import { BasicAttribute, EquipmentLevelEnum } from "../../../const/type";
import { EquipmentData } from "../CommonTable/type";

interface Props {
  data?: EquipmentData;
  isSelected: boolean;
}

function EquipmentDetail(props: Props) {
  const { data, isSelected } = props;

  const attribute = Object.entries(data?.attribute?.basic || {}).map(
    ([key, value]) => {
      return (
        <div>
          <div className="attribute-label">
            <img
              src={process.env.PUBLIC_URL + "/attribute/" + key + ".svg"}
              alt={key}
              className="icon"
            />
            <span>{AttributeLabelMap[key as keyof BasicAttribute]}</span>
          </div>
          <div className="number">{value}</div>
        </div>
      );
    }
  );

  return (
    <>
      <BgMix
        className="info"
        style={{
          backgroundColor:
            EquipmentLevelColorMap[data?.level || EquipmentLevelEnum.Good],
        }}
      >
        <div className={classnames("level", isSelected && "selected")}>
          <span>
            {EquipmentLevelLabelMap[data?.level || EquipmentLevelEnum.Good]}
          </span>
          {isSelected && <span>当前穿戴</span>}
        </div>
        <div className="detail-label">{data?.label}</div>
        <div className="attribute">{attribute}</div>
      </BgMix>
      <BgMix className="extra-info">{data?.comments}</BgMix>
    </>
  );
}

export default EquipmentDetail;
