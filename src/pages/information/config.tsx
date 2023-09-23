import { TabsProps } from "antd";
import { SettingsPage } from "../settings";
import Equipment from "./Equipment";
import Journal from "./Journal";
import Backpack from "./Backpack";
import Settings from "./Settings";

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
    label: "披褂",
    children: <Equipment />,
  },
  {
    key: "Backpack",
    label: "行囊",
    children: <Backpack />,
  },
  {
    key: "Journal",
    label: "游记",
    children: <Journal />,
  },
  {
    key: "Settings",
    label: "设置",
    children: <Settings />,
  },
];

// export const
