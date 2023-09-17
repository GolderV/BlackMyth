import { Tabs } from "antd";
import React from "react";
import "./index.scss";
import CommonTable from "../CommonTable";
import { ARMOR_ITEM } from "./config";

interface Props {}

function EquipmentComponent(props: Props) {
  const {} = props;

  return (
    <Tabs className="armor-tabs" indicatorSize={0} defaultActiveKey="Equipment">
      {ARMOR_ITEM?.map((e) => {
        return (
          <Tabs.TabPane tab={e.label} key={e.key}>
            <CommonTable title={e.label} data={e.data} />
          </Tabs.TabPane>
        );
      })}
    </Tabs>
  );
}

export default EquipmentComponent;
