import { Tabs } from "antd";
import { FC, useEffect, useState } from "react";
import { SYSTEM_TABS_ITEMS } from "./config";
import "./index.scss";
import classnames from "classnames";
import ReactGA from "react-ga4";

export const InformationPage: FC = () => {
  const [currentSelect, setCurrentSelect] = useState<string>("Equipment");

  useEffect(() => {
    ReactGA.send({
      hitType: "pageview",
      page: "/information",
      title: "information",
    });
  }, []);

  useEffect(() => {
    ReactGA.event({
      category: "infoPage",
      action: "changeTabs",
      label: currentSelect, // optional
    });
  }, [currentSelect]);

  return (
    <div className={classnames("wrapper", "infopage", currentSelect)}>
      <div className="left-label">
        {SYSTEM_TABS_ITEMS?.find((e) => e.key === currentSelect)?.label}
      </div>
      <Tabs
        className="system-tabs"
        items={SYSTEM_TABS_ITEMS}
        indicatorSize={0}
        animated
        defaultActiveKey="Equipment"
        onChange={(e) => setCurrentSelect(e)}
      ></Tabs>
    </div>
  );
};
