/** 装备等级 */
export enum EquipmentLevelEnum {
  Specials,
  Top,
  Good,
}

/** 核心属性 */
export interface CoreAttribute {
  /** 生命 */
  health?: number;
  /** 法力 */
  mana?: number;
  /** 气力 */
  energy?: number;
}

/** 基础属性 */
export interface BasicAttribute {
  /** 攻击 */
  attack?: number;
  /** 防御 */
  defense?: number;
  /** 暴击率 */
  criticalStrikeRate?: string;
  /** 暴击倍率 */
  criticalMultiplier?: string;
  /** 伤害加成 */
  damageBonus?: string;
  /** 伤害减免 */
  damageReduction?: string;
}

/** 四灾耐性 */
export interface DisasterDefense {
  /** 辟寒 */
  chillDefense?: number;
  /** 辟火 */
  fireDefense?: number;
  /** 辟毒 */
  poisonDefense?: number;
  /** 辟雷 */
  thunderDefense?: number;
}

/** 装备属性加成 */
export interface Attribute {
  /** 核心属性 */
  core?: CoreAttribute;
  /** 基础属性 */
  basic?: BasicAttribute;
  /** 四灾耐性 */
  disasterDefense?: DisasterDefense;
}

/** 物品等级 */
export enum MaterialLevelEnum {
  Specials,
  Top,
  Good,
}
