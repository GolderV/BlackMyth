import React, { useMemo, useState } from "react";
import { EquipmentData, MaterialData } from "./type";
import "./index.scss";
import classnames from "classnames";

type Data = EquipmentData | MaterialData;
interface IProps {
  title: string;
  data: EquipmentData[] | MaterialData[];
  DetailComp: React.ComponentType<any>;
  isNeedCurrent?: boolean;
}

function CommonTable(props: IProps) {
  const { title, data, DetailComp, isNeedCurrent = false } = props;
  const [currentSelect, setCurrentSelect] = useState<Data>();

  const [hoveredItem, setHoveredItem] = useState<Data>();

  const length = data.length;
  const fillList = length < 12 ? new Array(12 - length).fill(1) : [];
  const hoveredSelected = hoveredItem?.key === currentSelect?.key;

  return (
    <div className="common-table">
      <div className="left">
        <div className="title">{title}</div>
        {currentSelect && isNeedCurrent && (
          <div className="current">
            <img src={currentSelect?.image} alt={currentSelect?.key} />
            <div>当前穿戴</div>
          </div>
        )}
        <div className="divider"></div>
        <div
          className="table"
          onMouseLeave={() => setHoveredItem(currentSelect)}
        >
          {data.map((e) => (
            <div
              key={e.key}
              className={classnames(
                "table-item",
                e.key === currentSelect?.key && "selected"
              )}
            >
              <img
                src={e.image}
                onClick={() => setCurrentSelect(e)}
                onMouseEnter={() => setHoveredItem(e)}
              />
            </div>
          ))}
          {fillList.map((_, i) => (
            <div className="fill" key={i} />
          ))}
        </div>
      </div>
      <div className={classnames("right", hoveredItem && "show")}>
        {<DetailComp data={hoveredItem} isSelected={hoveredSelected} />}
      </div>
    </div>
  );
}

export default CommonTable;
