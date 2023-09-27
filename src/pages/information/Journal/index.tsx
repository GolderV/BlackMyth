import React, { useMemo, useState } from "react";
import { Input, Menu } from "antd";
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

function isIncludes(item: MonsterData, keys: string[]) {
  return keys.some((key) => JSON.stringify(item).includes(key));
}

export const Journal: React.FC = () => {
  const [selectedKey, setSelectedKey] = useState<string>();
  const currentSelected = useMemo(() => getData(selectedKey), [selectedKey]);
  const [searchKey, setSearchKey] = useState<string>();

  const filterData = useMemo(() => {
    if (!searchKey) return DATA;
    const keys = searchKey.trim().split(" ");
    return DATA.map((item) => {
      const children = item.children.filter((child) => {
        return isIncludes(child, keys);
      });
      // return { ...item, children };
      return children as any;
    })
      .filter((item) => item.length)
      .flat();
  }, [searchKey]);

  const onSearch: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setSearchKey(e.target.value);
  };

  return (
    <div className="journal">
      <div className="top">
        <span>搜神匣</span>
        <Input className="search" onChange={onSearch} value={searchKey} />
      </div>
      <div className="title">影神图</div>
      <div className="content">
        <div className="left">
          <Menu
            style={{ width: 256 }}
            mode="inline"
            items={filterData}
            onSelect={(e) => setSelectedKey(e.key)}
          />
        </div>
        <div className="right">
          {currentSelected?.label && (
            <div className="label">{currentSelected?.label}</div>
          )}
          <div className="info">
            <div className="poetry">{currentSelected?.info?.poetry}</div>
            <div className="desc">
              {currentSelected ? currentSelected.info?.desc || "未收录" : ""}
            </div>
          </div>
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
