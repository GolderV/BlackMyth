import { EquipmentData } from "../CommonTable/type";
import * as SUIT_DATA from "./suitData";

const suitList = Object.values(SUIT_DATA);

/** 面甲数据 */
export const FACE_DATA: EquipmentData[] = suitList
  .map((e) => e.face!)
  .filter(Boolean);

/** 胸甲数据 */
export const CUIRASS_DATA: EquipmentData[] = suitList
  .map((e) => e.cuirass!)
  .filter(Boolean);

/** 臂甲数据 */
export const ARM_DATA: EquipmentData[] = suitList
  .map((e) => e.arm!)
  .filter(Boolean);

/** 腿甲数据 */
export const LEG_DATA: EquipmentData[] = suitList
  .map((e) => e.leg!)
  .filter(Boolean);
