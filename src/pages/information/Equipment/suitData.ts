// 套装数据
import { EquipmentLevelEnum } from "../../../const/type";
import { EquipmentData, EquipmentSpecialEffect } from "../CommonTable/type";

type SuitData = Partial<
  Record<"face" | "cuirass" | "arm" | "leg", EquipmentData>
>;

/** 百戏套装 */
export const BAIXI_SUIT: SuitData = {
  face: {
    key: "baixinuomian",
    label: "百戏傩面",
    image: "/suit/baixi/baixinuomian.png",
    level: EquipmentLevelEnum.Top,
    attribute: {
      basic: {
        defense: 20,
      },
    },
    comments: "闹里挣钱，静处安身",
  },
  arm: {
    key: "baixizawan",
    label: "百戏扎腕",
    image: "/suit/baixi/baixizawan.png",
    level: EquipmentLevelEnum.Good,
    attribute: {
      basic: {
        defense: 15,
      },
    },
    comments: "闹里挣钱，静处安身",
  },
  cuirass: {
    key: "baixichenqianyi",
    label: "百戏衬钱衣",
    image: "/suit/baixi/baixichenqianyi.png",
    level: EquipmentLevelEnum.Specials,
    attribute: {
      basic: {
        defense: 53,
      },
    },
    comments: "闹里挣钱，静处安身",
  },
  leg: {
    key: "baixidiaotui",
    label: "百戏吊腿",
    image: "/suit/baixi/baixidiaotui.png",
    level: EquipmentLevelEnum.Specials,
    attribute: {
      basic: {
        defense: 32,
      },
    },
    comments: "闹里挣钱，静处安身",
  },
};

/** 昆岐套装效果 */
const kunqiEffect: EquipmentSpecialEffect = {
  title: "花下死",
  twoEffect: "打杀对手后，恢复些微生命",
  fourEffect: "处于毒伤状态时，攻击较大增加",
};
/** 昆岐套装 */
export const KUNQI_SUIT: SuitData = {
  cuirass: {
    key: "kunqiqiangjinjia",
    label: "昆岐戗金甲",
    image: "/suit/kunqi/kunqiqiangjinjia.png",
    level: EquipmentLevelEnum.Top,
    attribute: {
      basic: {
        defense: 43,
      },
    },
    specialEffect: kunqiEffect,
    comments: "只说经好取，西方路上，虫儿也欺负人哩！",
  },
  arm: {
    key: "kunqicigan",
    label: "昆岐刺釬",
    image: "/suit/kunqi/kunqicigan.png",
    level: EquipmentLevelEnum.Top,
    attribute: {
      basic: {
        defense: 24,
      },
    },
    specialEffect: kunqiEffect,
    comments: "只说经好取，西方路上，虫儿也欺负人哩！",
  },
  leg: {
    key: "kunqixiefu",
    label: "昆岐斜幅",
    image: "/suit/kunqi/kunqixiefu.png",
    level: EquipmentLevelEnum.Top,
    attribute: {
      basic: {
        defense: 26,
      },
    },
    specialEffect: kunqiEffect,
    comments: "只说经好取，西方路上，虫儿也欺负人哩！",
  },
};
