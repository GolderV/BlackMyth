export enum SettingsTypeEnum {
  switch,
  slider,
}

interface BaseSettingsItem {
  key: string;
  label: string;
}

export interface SwitchType {
  type: SettingsTypeEnum.switch;
  optionsList: [string, string];
}

export interface SliderType {
  type: SettingsTypeEnum.slider;
  min: number;
  max: number;
  value: number;
}

export type SettingsItem = BaseSettingsItem & (SwitchType | SliderType);
