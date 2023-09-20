import {
  EquipmentLevelEnum,
  EquipmentAttribute,
  MaterialLevelEnum,
} from "../../../const/type";

interface BaseData {
  key: string;
  label: string;
  image?: string;
  /** 评语 */
  comments?: string;
}

/** 装备数据 */
export interface EquipmentData extends BaseData {
  /** 装备等级 */
  level: EquipmentLevelEnum;
  /** 装备属性加成 */
  attribute?: EquipmentAttribute;
  /** 套装效果 */
  specialEffect?: EquipmentSpecialEffect;
}

/** 物品数据 */
export interface MaterialData extends BaseData {
  level: MaterialLevelEnum;
  /** 持有 */
  hold: number;
  /** 库存 */
  inventory: number;
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
