import { EquipmentLevelEnum } from "../../../const/type";
import { EquipmentData } from "../CommonTable/type";

// 套装数据
export const BAIXISUIT: Record<string, EquipmentData> = {
  baixinuomian: {
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
};
