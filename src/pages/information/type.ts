import { EquipmentData, MaterialData } from "./CommonTable/type";

export interface TabItems {
  key: string;
  label: string;
  data: EquipmentData[] | MaterialData[];
}
