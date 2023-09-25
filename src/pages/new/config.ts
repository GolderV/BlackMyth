export interface BossData {
  label: string;
  key: string;
  poetry: string;
  duration: "短" | "中" | "长";
  isClear: boolean;
  img: string;
  href: string;
}
export const BOSS_ITEMS: BossData[] = [
  {
    label: "头目·百足虫",
    key: "baizuchong",
    poetry:
      "蜷身一滚无首尾，展足扑腾爪似雉。\n螯牙狠毒喷邪风，狭处相逢命无归。",
    duration: "短",
    isClear: true,
    img: "baizuchong.jpg",
    href: "https://www.bilibili.com/video/BV1kz4y1u7rG",
  },
  {
    label: "妖王·虎先锋",
    key: "huxianfeng",
    poetry:
      "血津津的赤剥身躯，红褭褭的弯环腿足。\n火焰焰的两鬓蓬松，硬搠搠的双眉直竖。",
    duration: "中",
    isClear: false,
    img: "huxianfeng.jpg",
    href: "https://www.bilibili.com/video/BV1F14y117CN",
  },
  {
    label: "头目·赤尻马猴",
    key: "chikaomahou",
    poetry: "晓阴阳，会人事，善出入，避死延生。",
    duration: "中",
    isClear: false,
    img: "chikaomahou.jpg",
    href: "https://www.bilibili.com/video/BV1vN411B76H",
  },
  {
    label: "关卡·紫云山",
    key: "huiyuemojun",
    poetry:
      "冠簪五岳金光彩，笏执山河玉色琼。\n袍挂七星云叆叇，腰围八极宝环明。",
    duration: "长",
    isClear: false,
    img: "huiyuemojun.jpg",
    href: "https://www.bilibili.com/video/BV1gu4y1X7Ay",
  },
];
