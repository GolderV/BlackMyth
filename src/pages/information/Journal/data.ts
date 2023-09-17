import { MonsterData } from "./type";

/** 妖王数据 */
export const KING_DATA = [];

/** 首领数据 */
export const LEADER_DATA = [];

/** 先锋数据 */
export const VANGUARD_DATA = [];

/** 小妖数据 */
export const GOBLIN_DATA: MonsterData[] = [
  {
    label: "小人参精",
    key: "xrsj",
  },
  {
    label: "骨灵精",
    key: "glj",
  },
  {
    label: "骨悚然",
    key: "gusongran",
    info: {
      poetry: "人情无寒暑，世道不识途。\n枪头凝盛气，盾后冷傲骨。",
      desc: `定风庄的大巫们，都是骄傲的战士。他们总爱拿着画有虎神的盾牌，舞着月牙形的长枪，呼呼喝喝，吓退鬼怪。尤其在送葬时，他们敲击着盾牌，走在最前方，自称开路将军`,
      img: "/journal/gusongran.png",
    },
  },
  {
    label: "石磷磷",
    key: "sll",
  },
  {
    label: "石双双",
    key: "sss",
  },
  {
    label: "石苍苍",
    key: "scc",
  },
];

export const DATA = [
  {
    label: "妖王",
    key: "King",
    children: KING_DATA,
    disabled: true,
  },
  {
    label: "首领",
    key: "Leader",
    children: LEADER_DATA,
    disabled: true,
  },
  {
    label: "先锋",
    key: "Vanguard",
    children: VANGUARD_DATA,
    disabled: true,
  },
  {
    label: "小妖",
    key: "Goblin",
    children: GOBLIN_DATA,
  },
];
