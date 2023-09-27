import CommonTabs from "../CommonTabs";
import BackPackDetail from "./BackPackDetail";
import { BACKPACK_ITEMS } from "./config";

interface Props {}

function Backpack(props: Props) {
  const {} = props;

  return <CommonTabs tabItems={BACKPACK_ITEMS} DetailComp={BackPackDetail} />;
}

export default Backpack;
