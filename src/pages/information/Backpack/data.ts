import { MaterialLevelEnum } from "../../../const/type";
import { MaterialData } from "../CommonTable/type";

/** 草药 */
export const HERBS_DATA: MaterialData[] = [
  {
    label: "血杞子",
    key: "xueqizi",
    image: "/herbs/xueqizi.jpg",
    level: MaterialLevelEnum.Top,
    hold: 3,
    inStorage: 5,
    effect: "缓慢恢复【生命】",
    comments: "常用药材。药不执方，可合宜使用。壮筋骨，补精气。",
  },
  {
    label: "千年人参",
    key: "millennial-ginseng",
    image: "/herbs/millennial-ginseng.png",
    level: MaterialLevelEnum.Top,
    hold: 1,
    inStorage: 0,
    effect: "瞬间补充法力值",
    comments: "上好的块茎，温暖而有活力，补气良品",
  },
  {
    label: "树珍珠",
    key: "shuzhenzhu",
    image: "/herbs/shuzhenzhu.png",
    level: MaterialLevelEnum.Good,
    hold: 5,
    inStorage: 4,
    effect: "消解毒伤状态，若连续服食，还有辟毒之效",
    comments: "养阴熄风，解毒生肌",
  },
  {
    label: "灵芝",
    key: "lingzhi",
    image: "/herbs/lingzhi.png",
    level: MaterialLevelEnum.Good,
    hold: 2,
    inStorage: 0,
    effect: "一定时间内，大大减少气力消耗。",
    comments: "保神益气，坚筋骨，利关节。",
  },
];

/** 丹药 */
export const MEDICINES_DATA: MaterialData[] = [
  {
    label: "龙光倍力丸",
    key: "longguangbeiliwan",
    image: "/backpack/longguangbeiliwan.png",
    level: MaterialLevelEnum.Specials,
    hold: 1,
    inStorage: 0,
    effect: "服用后，长时间内增加攻击、暴击率和暴击伤害倍率。",
    comments: "急壮腰膝，擎天架海。",
  },
];

/** 材料 */
export const MATERIALS_DATA: MaterialData[] = [];

/** 细软 */
export const KEY_ITEMS_DATA: MaterialData[] = [
  {
    label: "藕雹",
    key: "oubao",
    image: "/backpack/oubao.png",
    level: MaterialLevelEnum.Top,
    hold: 1,
    inStorage: 0,
    comments: "落花庄内道士们死后残留之物，兴许正是那庄外糜道人所求的东西。",
  },
  {
    label: "佛目珠",
    key: "fomuzhu",
    image: "/backpack/fomuzhu.png",
    level: MaterialLevelEnum.Top,
    hold: 1,
    inStorage: 0,
    comments: "取自散落的佛头。当嵌入到其他地方时，可能会有用。",
  },
  {
    label: "石髓",
    key: "shisui",
    image: "/backpack/shisui.png",
    level: MaterialLevelEnum.Top,
    hold: 1,
    inStorage: 0,
    comments: "石母遗落之物，坚固而生动的天蓝色砂岩",
  },
];
