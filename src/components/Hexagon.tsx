import React from "react";
import styles from "./styles.module.scss";

interface Props {
  children?: React.ReactNode;
  width?: number;
  backgroundColor?: string;
}

function Hexagon(props: Props) {
  const { children, width = 48, backgroundColor = "#ccc" } = props;

  // 正六边形边长
  const ta = Math.ceil(width / Math.sqrt(3));
  // 正三角形的高
  const th = Math.ceil(width / 2);
  // 上下两个三角形的高度
  const h1 = Math.ceil((2 * ta - ta) / 2);

  return (
    <div className={styles.hexagon}>
      <div className={styles.wrapper}>
        <div
          className={styles.top}
          style={{
            borderLeft: `${th}px solid transparent`,
            borderRight: `${th}px solid transparent`,
            borderBottom: `${h1}px solid ${backgroundColor}`,
          }}
        />
        <div style={{ backgroundColor, width, height: ta }} />
        <div
          className={styles.bottom}
          style={{
            borderLeft: `${th}px solid transparent`,
            borderRight: `${th}px solid transparent`,
            borderTop: `${h1}px solid ${backgroundColor}`,
          }}
        />
      </div>
      <div className={styles.children}>{children}</div>
    </div>
  );
}

export default Hexagon;
