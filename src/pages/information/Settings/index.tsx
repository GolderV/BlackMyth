import { Tabs } from "antd";
import styles from "./index.module.scss";
import { SETTINGS_ITEMS } from "./config";

function Settings() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.left}>
        <Tabs
          tabPosition="left"
          items={SETTINGS_ITEMS}
          animated
          indicatorSize={0}
        ></Tabs>
      </div>
    </div>
  );
}

export default Settings;
