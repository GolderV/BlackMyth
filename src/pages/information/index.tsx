import { Tabs } from "antd";
import { FC } from "react";
import { System_TABS_ITEMS } from "./config";
import styles from "./index.module.scss"

export const InformationPage:FC=()=>{
    return(
        <div className="wrapper">
            <Tabs className={styles["system-tabs"]} items={System_TABS_ITEMS}>

            </Tabs>
        </div>
    )
}