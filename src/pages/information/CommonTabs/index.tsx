import { Tabs } from "antd";
import React from "react";
import CommonTable from "../CommonTable";
import "./index.scss";
import { TabItems } from "../type";

interface Props {
  DetailComp: React.ComponentType<any>;
  tabItems: TabItems[];
}

function CommonTabs(props: Props) {
  const { tabItems, DetailComp } = props;

  return (
    <Tabs
      className="common-tabs"
      indicatorSize={0}
      defaultActiveKey="Equipment"
      animated
    >
      {tabItems?.map((e) => {
        return (
          <Tabs.TabPane tab={e.label} key={e.key}>
            <CommonTable
              title={e.label}
              data={e.data}
              DetailComp={DetailComp}
            />
          </Tabs.TabPane>
        );
      })}
    </Tabs>
  );
}

export default CommonTabs;
