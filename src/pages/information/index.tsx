import { Tabs } from "antd";
import { FC } from "react";
import { SYSTEM_TABS_ITEMS } from "./config";
import "./index.scss";

export const InformationPage: FC = () => {
  return (
    <div className="wrapper">
      <Tabs
        className="system-tabs"
        items={SYSTEM_TABS_ITEMS}
        indicatorSize={0}
        defaultActiveKey="Equipment"
      ></Tabs>
    </div>
  );
};
