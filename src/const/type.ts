/** 装备等级 */
export enum LevelEnum {
  Specials,
  Top,
  Good,
}

/** 属性加成 */
export interface Attribute {
  /** 防御力 */
  defense?: number;
  /** 攻击力 */
  attack?: number;
  /** 生命值 */
  health?: number;
  /** 速度 */
  speed?: number;
}
