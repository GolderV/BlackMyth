import { Slider } from "antd";
import { FC, useState } from "react";
import { SettingsItem, SettingsTypeEnum } from "./type";
import styles from "./index.module.scss";
import BgMix from "../../../components/BgMix";

interface SwitchProps {
  optionsList: [string, string];
}
const SwitchComp: FC<SwitchProps> = ({ optionsList }) => {
  const [val1, val2] = optionsList;
  const [showFirst, setShowFirst] = useState(true);
  return (
    <div className={styles.switch} onClick={() => setShowFirst(!showFirst)}>
      {showFirst ? val1 : val2}
    </div>
  );
};

interface SliderProps {
  min: number;
  max: number;
  value: number;
}
const SliderComp: FC<SliderProps> = ({ min, max, value }) => {
  return (
    <div className={styles.slider}>
      <span>{min}</span>
      <Slider
        defaultValue={value}
        min={min}
        max={max}
        tooltip={{ open: false }}
      />
      <span>{max}</span>
    </div>
  );
};

type renderValueProps =
  | { type: SettingsTypeEnum.slider; props: SliderProps }
  | { type: SettingsTypeEnum.switch; props: SwitchProps }
  | { type: SettingsTypeEnum; props: any };
const ValueComp: FC<renderValueProps> = ({ type, props }) => {
  switch (type) {
    case SettingsTypeEnum.switch:
      return <SwitchComp optionsList={props.optionsList} />;
    case SettingsTypeEnum.slider:
      return <SliderComp min={props.min} max={props.max} value={props.value} />;
    default:
      return null;
  }
};

interface Props {
  items: SettingsItem[];
}

function SettingsItemComp(props: Props) {
  const { items } = props;

  return (
    <BgMix className={styles["settings-wrapper"]}>
      {items.map((item) => {
        return (
          <>
            <div className={styles["settings-item"]}>
              <div className={styles.label}>{item.label}</div>
              <div className={styles.value}>
                <ValueComp type={item.type} props={item} />
              </div>
            </div>
            <div className={styles.space}></div>
          </>
        );
      })}
    </BgMix>
  );
}

export default SettingsItemComp;
