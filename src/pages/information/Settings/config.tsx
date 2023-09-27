import ControllerComp from "./ControllerComp";
import KeyboardAndMouseComp from "./KeyboardAndMouseComp";
import SettingsItemComp from "./SettingsItemComp";
import { SettingsTypeEnum, SettingsItem, SwitchType, SliderType } from "./type";

const ON_OF_RADIO: SwitchType = {
  type: SettingsTypeEnum.switch,
  optionsList: ["开启", "关闭"],
};

const SLIDER_VALUE: SliderType = {
  type: SettingsTypeEnum.slider as const,
  min: 0,
  max: 100,
  value: 100,
};

const INVERSION_VALUE: SwitchType = {
  type: SettingsTypeEnum.switch,
  optionsList: ["标准", "反转"],
};

const GAMES_ITEMS: SettingsItem[] = [
  { key: "damage-display", label: "伤害显示", ...ON_OF_RADIO },
  { key: "status-info-display", label: "状态信息显示", ...ON_OF_RADIO },
  { key: "manually-close-loading", label: "手动关闭加载界面", ...ON_OF_RADIO },
];

const CAMERA_ITEMS: SettingsItem[] = [
  {
    key: "horizontal-viewing-angle-sensitivity",
    label: "水平视角灵敏度",
    ...SLIDER_VALUE,
  },
  {
    key: "vertical-viewing-angle-sensitivity",
    label: "垂直视角灵敏度",
    ...SLIDER_VALUE,
  },
  {
    key: "horizontal-viewing-angle-inversion",
    label: "水平视角反转",
    ...INVERSION_VALUE,
  },
  {
    key: "vertical-viewing-angle-inversion",
    label: "垂直视角反转",
    ...INVERSION_VALUE,
  },
];

const SOUNDS_ITEMS: SettingsItem[] = [
  {
    key: "total-volume",
    label: "总音量",
    ...SLIDER_VALUE,
  },
  {
    key: "music-volume",
    label: "音乐音量",
    ...SLIDER_VALUE,
  },
  {
    key: "effect-volume",
    label: "音效音量",
    ...SLIDER_VALUE,
  },
  {
    key: "voice-volume",
    label: "语音音量",
    ...SLIDER_VALUE,
  },
];

export const SETTINGS_ITEMS = [
  {
    label: "控制器",
    key: "Controller",
    children: <ControllerComp />,
  },
  {
    label: "键盘/鼠标",
    key: "Keyboard/Mouse",
    children: <KeyboardAndMouseComp />,
  },
  {
    label: "游戏",
    key: "Games",
    children: <SettingsItemComp items={GAMES_ITEMS} />,
  },
  {
    label: "镜头",
    key: "Camera",
    children: <SettingsItemComp items={CAMERA_ITEMS} />,
  },
  {
    label: "声音",
    key: "Sound",
    children: <SettingsItemComp items={SOUNDS_ITEMS} />,
  },
  {
    label: "退出当前关卡",
    key: "Exit",
  },
];
