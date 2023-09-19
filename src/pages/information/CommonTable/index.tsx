import React, { useMemo, useState } from "react";
import { LevelEnum, Attribute } from "../../../const/type";
import { EquipmentData } from "./type";
import "./index.scss";
import {
  AttributeLabelMap,
  LevelColorMap,
  LevelLabelMap,
} from "../../../const/const";
import classnames from "classnames";
import { Divider } from "antd";
import BgMix from "../../../components/BgMix";

interface Props {
  title: string;
  data: EquipmentData[];
}

function CommonTable(props: Props) {
  const { title, data } = props;
  const [currentSelect, setCurrentSelect] = useState<EquipmentData>();

  const [hoveredItem, setHoveredItem] = useState<EquipmentData>();

  const length = data.length;
  const fillList = length < 12 ? new Array(12 - length).fill(1) : [];

  const attribute = Object.entries(currentSelect?.attribute || {}).map(
    ([key, value]) => {
      return (
        <div>
          <div className="attribute-label">
            <img
              src={process.env.PUBLIC_URL + "/attribute/" + key + ".svg"}
              alt={key}
              className="icon"
            />
            <span>{AttributeLabelMap[key as keyof Attribute]}</span>
          </div>
          <div className="number">{value}</div>
        </div>
      );
    }
  );

  const hoveredSelected = hoveredItem?.key === currentSelect?.key;

  return (
    <div className="common-table">
      <div className="left">
        <div className="title">{title}</div>
        {currentSelect && (
          <div className="current">
            <img src={currentSelect?.image} alt={currentSelect?.key} />
            <div>当前穿戴</div>
          </div>
        )}
        <div className="divider"></div>
        <div className="table">
          {data.map((e) => (
            <div
              className={classnames(
                "table-item",
                e.key === currentSelect?.key && "selected"
              )}
            >
              <img
                key={e.key}
                src={e.image}
                onClick={() => setCurrentSelect(e)}
                onMouseEnter={() => setHoveredItem(e)}
                onMouseLeave={() => setHoveredItem(currentSelect)}
              />
            </div>
          ))}
          {fillList.map((_, i) => (
            <div className="fill" key={i} />
          ))}
        </div>
      </div>
      <div className={classnames("right", hoveredItem && "show")}>
        <BgMix
          className="info"
          style={{
            backgroundColor:
              LevelColorMap[hoveredItem?.level || LevelEnum.Good],
          }}
        >
          <div className={classnames("level", hoveredSelected && "selected")}>
            <span>{LevelLabelMap[hoveredItem?.level || LevelEnum.Good]}</span>
            {hoveredSelected && <span>当前穿戴</span>}
          </div>
          <div className="detail-label">{hoveredItem?.label}</div>
          <div className="attribute">{attribute}</div>
        </BgMix>
        <BgMix className="extra-info">{hoveredItem?.extraInfo}</BgMix>
      </div>
    </div>
  );
}

export default CommonTable;
