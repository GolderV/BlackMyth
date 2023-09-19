import { LevelEnum } from "../../../const/type";
import { EquipmentData } from "../CommonTable/type";

// 套装数据
export const BAIXISUIT: Record<string, EquipmentData> = {
  baixinuomian: {
    key: "baixinuomian",
    label: "百戏傩面",
    image: "/suit/baixi/baixinuomian.png",
    level: LevelEnum.Top,
    attribute: {
      defense: 20,
    },
    extraInfo: "闹里挣钱，静处安身",
  },
};
