import { Level, Attribute } from "../../../const/type";

export interface EquipmentData {
  key: string;
  label: string;
  image?: string;
  level?: Level;
  attribute?: Attribute;
  specialEffect?: EquipmentSpecialEffect;
  extraInfo?: string;
}

/** 装备特殊效果 */
export interface EquipmentSpecialEffect {
  /** 效果名称 */
  title?: string;
  /** 一件套效果 */
  oneEffect?: string;
  /** 两件套效果 */
  twoEffect?: string;
  /** 四件套效果 */
  fourEffect?: string;
}
