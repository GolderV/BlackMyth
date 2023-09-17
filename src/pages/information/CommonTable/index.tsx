import React, { useMemo, useState } from "react";
import { Level, Attribute } from "../../../const/type";
import { EquipmentData } from "./type";
import "./index.scss";

interface Props {
  title: string;
  data: EquipmentData[];
}

function CommonTable(props: Props) {
  const { title, data } = props;
  const [currentSelect, setCurrentSelect] = useState();
  const res = useMemo(
    () => data.find((e) => e.key === currentSelect),
    [currentSelect]
  );

  const length = data.length;
  const fillList = length < 12 ? new Array(12 - length).fill(1) : [];
  console.log(fillList);
  return (
    <div className="common-table">
      <div className="title">{title}</div>
      {currentSelect && (
        <div>
          <img src={res?.image} alt={res?.key} />
          <div>当前穿戴</div>
        </div>
      )}
      <div className="table">
        {data.map((e) => (
          <img
            src={e.image}
            className={e.key === currentSelect ? "selected" : ""}
          />
        ))}
        {fillList.map(() => (
          <div className="fill" />
        ))}
      </div>
    </div>
  );
}

export default CommonTable;
