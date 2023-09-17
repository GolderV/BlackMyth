import { TabsProps } from "antd";
import { SettingsPage } from "../settings";
import EquipmentComponent from "./Equipment";
import Journal from "./Journal";

export const SYSTEM_TABS_ITEMS: TabsProps["items"] = [
  {
    key: "Abilities",
    label: "本事",
    disabled: true,
  },
  {
    key: "Spells",
    label: "神通",
    disabled: true,
  },
  {
    key: "Equipment",
    label: "披挂",
    children: <EquipmentComponent />,
  },
  {
    key: "Backpack",
    label: "行囊",
    // children:BackpackComponent
  },
  {
    key: "Journal",
    label: "游记",
    children: <Journal />,
  },
  {
    key: "Settings",
    label: "设置",
    // children:SettingsPage
  },
];

// export const
