/** 装备等级 */
export enum EquipmentLevelEnum {
  Specials,
  Top,
  Good,
}

/** 装备属性加成 */
export interface EquipmentAttribute {
  /** 防御力 */
  defense?: number;
  /** 攻击力 */
  attack?: number;
  /** 生命值 */
  health?: number;
  /** 速度 */
  speed?: number;
}

/** 物品等级 */
export enum MaterialLevelEnum {
  Specials,
  Top,
  Good,
}
