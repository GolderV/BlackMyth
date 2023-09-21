import { MaterialLevelEnum } from "../../../const/type";
import { MaterialData } from "../CommonTable/type";

const FILL: MaterialData[] = new Array(12).fill(0).map((_, i) => ({
  label: "未知",
  key: "unknown-" + i,
  image: "/herbs/herbs" + (i + 1) + ".jpg",
  level: MaterialLevelEnum.Good,
  hold: 0,
  inStorage: 0,
}));

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
  ...FILL,
];
