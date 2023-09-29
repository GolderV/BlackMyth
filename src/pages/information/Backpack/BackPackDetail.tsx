import Hexagon from "../../../components/Hexagon";
import styles from "./index.module.scss";
import { MaterialData } from "../CommonTable/type";
import { MaterialLevelLabelMap } from "../../../const/const";
import { MaterialLevelEnum } from "../../../const/type";

interface Props {
  data?: MaterialData;
  isSelected: boolean;
}

function BackPackDetail(props: Props) {
  const { data, isSelected } = props;

  return (
    <div>
      {isSelected && (
        <div className={styles["select-bar"]}>
          <Hexagon />
          {/* <BgMix className={styles.title}> */}
          <div className={styles.title}>
            <span>一</span>
            <span>随身之物</span>
          </div>
          {/* </BgMix> */}
        </div>
      )}
      <div className={styles.content}>
        <div className={styles.count}>
          <div>
            持有：
            <span style={{ color: !data?.hold ? "#a83d32" : "#ccc" }}>
              {data?.hold || 0}
            </span>
            <span>/5</span>
          </div>
          <div>
            库存：
            <span style={{ color: !data?.inStorage ? "#a83d32" : "#ccc" }}>
              {data?.inStorage || 0}
            </span>
            <span>/99</span>
          </div>
        </div>
        <div className={styles.info}>
          <div className={styles.label}>{data?.label}</div>
          <div className={styles.level}>
            {MaterialLevelLabelMap[data?.level ?? MaterialLevelEnum.Good]}
          </div>
          <div className={styles.effect}>{data?.effect}</div>
          <div className={styles.comments}>{data?.comments}</div>
        </div>
      </div>
    </div>
  );
}

export default BackPackDetail;
