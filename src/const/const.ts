import {
  BasicAttribute,
  DisasterDefense,
  Attribute,
  EquipmentLevelEnum,
  CoreAttribute,
} from "./type";

export const EquipmentLevelLabelMap = {
  [EquipmentLevelEnum.Specials]: "特品",
  [EquipmentLevelEnum.Top]: "上品",
  [EquipmentLevelEnum.Good]: "良品",
};

export const EquipmentLevelColorMap = {
  [EquipmentLevelEnum.Specials]: "#201154",
  [EquipmentLevelEnum.Top]: "#144471",
  [EquipmentLevelEnum.Good]: "rgb(61 116 85)",
};

export const AttributeLabelMap: Record<
  keyof BasicAttribute | keyof DisasterDefense | keyof CoreAttribute,
  string
> = {
  defense: "防御",
  attack: "攻击",
  health: "生命",
  mana: "法力",
  energy: "气力",
  criticalStrikeRate: "暴击率",
  criticalMultiplier: "暴击倍率",
  damageBonus: "伤害加成",
  damageReduction: "伤害减免",
  chillDefense: "辟寒",
  fireDefense: "辟火",
  poisonDefense: "辟毒",
  thunderDefense: "辟雷",
};

export const MaterialLevelLabelMap = {
  [EquipmentLevelEnum.Specials]: "稀有",
  [EquipmentLevelEnum.Top]: "精良",
  [EquipmentLevelEnum.Good]: "寻常",
};
