import { Tabs } from "antd";
import { FC, useState } from "react";
import { SYSTEM_TABS_ITEMS } from "./config";
import "./index.scss";
import classnames from "classnames";

export const InformationPage: FC = () => {
  const [currentSelect, setCurrentSelect] = useState<string>();
  return (
    <div
      className={classnames(
        "wrapper",
        "infopage",
        currentSelect === "Equipment" && "equipment"
      )}
    >
      <Tabs
        className="system-tabs"
        items={SYSTEM_TABS_ITEMS}
        indicatorSize={0}
        defaultActiveKey="Equipment"
        onChange={(e) => setCurrentSelect(e)}
      ></Tabs>
    </div>
  );
};
