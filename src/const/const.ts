import { Attribute, LevelEnum } from "./type";

export const LevelLabelMap = {
  [LevelEnum.Specials]: "特品",
  [LevelEnum.Top]: "上品",
  [LevelEnum.Good]: "良品",
};

export const LevelColorMap = {
  [LevelEnum.Specials]: "#201154",
  [LevelEnum.Top]: "#144471",
  [LevelEnum.Good]: "#0c4339",
};

export const AttributeLabelMap: Record<keyof Attribute, string> = {
  defense: "防御力",
  attack: "攻击力",
  health: "生命值",
  speed: "速度",
};
