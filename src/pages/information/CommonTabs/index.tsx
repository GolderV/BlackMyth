import { Tabs } from "antd";
import React from "react";
import CommonTable from "../CommonTable";
import { ARMOR_ITEM } from "../Equipment/config";
import "./index.scss";

interface Props {
  DetailComp: React.ComponentType<any>;
}

function CommonTabs(props: Props) {
  const { DetailComp } = props;

  return (
    <Tabs
      className="common-tabs"
      indicatorSize={0}
      defaultActiveKey="Equipment"
      animated
    >
      {ARMOR_ITEM?.map((e) => {
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
