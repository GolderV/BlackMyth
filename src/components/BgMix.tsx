import classnames from "classnames";
import { ComponentProps } from "react";
import styles from "./styles.module.scss";

interface Props extends ComponentProps<any> {}

function BgMix(props: Props) {
  const { className, children, ...rest } = props;

  return (
    <div className={classnames(className, styles.bgmix)} {...rest}>
      {children}
    </div>
  );
}

export default BgMix;
