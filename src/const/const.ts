import { EquipmentAttribute, EquipmentLevelEnum } from "./type";

export const EquipmentLevelLabelMap = {
  [EquipmentLevelEnum.Specials]: "特品",
  [EquipmentLevelEnum.Top]: "上品",
  [EquipmentLevelEnum.Good]: "良品",
};

export const EquipmentLevelColorMap = {
  [EquipmentLevelEnum.Specials]: "#201154",
  [EquipmentLevelEnum.Top]: "#144471",
  [EquipmentLevelEnum.Good]: "#0c4339",
};

export const AttributeLabelMap: Record<keyof EquipmentAttribute, string> = {
  defense: "防御力",
  attack: "攻击力",
  health: "生命值",
  speed: "速度",
};

export const MaterialLevelLabelMap = {
  [EquipmentLevelEnum.Specials]: "稀有",
  [EquipmentLevelEnum.Top]: "精良",
  [EquipmentLevelEnum.Good]: "寻常",
};
