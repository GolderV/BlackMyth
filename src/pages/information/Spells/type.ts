export enum SpellsTypeEnum {
  /** 主动法术 */
  Active,
  /** 被动法术 */
  Passive,
}

export interface Spells {
  /** 法术名 */
  name: string;
  key: string;
  /** 法力消耗 */
  cost?: number;
  /** 冷却时间 */
  coolDown?: number;
  /** 法术类型 */
  type: SpellsTypeEnum;
  /** 技能描述 */
  description: string;
  icon: string;
  iconType?: "light" | "dark";
  video: string;
}

export interface SpellsTreeNode {
  label: string;
  children: Spells[];
}
