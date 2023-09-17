import React, { useMemo, useState } from "react";
import type { MenuProps } from "antd";
import { Menu } from "antd";
import { DATA } from "./data";
import "./index.scss";
import { MonsterData } from "./type";

function getData(key?: string) {
  if (!key) return;
  let res: MonsterData | undefined;
  DATA.forEach((e) => {
    e.children.forEach((child) => {
      if (child.key === key) {
        res = child;
      }
    });
  });
  return res;
}

export const Journal: React.FC = () => {
  const [selectedKey, setSelectedKey] = useState<string>();
  const currentSelected = useMemo(() => getData(selectedKey), [selectedKey]);
  console.log(currentSelected);

  return (
    <div className="journal">
      <div className="title">影神图</div>
      <div className="content">
        <div className="left">
          <Menu
            style={{ width: 256 }}
            defaultSelectedKeys={["1"]}
            defaultOpenKeys={["sub1"]}
            mode="inline"
            items={DATA}
            onSelect={(e) => setSelectedKey(e.key)}
          />
        </div>
        <div className="right">
          <div className="label">{currentSelected?.label}</div>
          <div className="poetry">{currentSelected?.info?.poetry}</div>
          <div className="desc">{currentSelected?.info?.desc}</div>
        </div>
        <img
          src={currentSelected?.info?.img}
          alt={currentSelected?.label}
          height="100%"
        />
      </div>
    </div>
  );
};

export default Journal;
