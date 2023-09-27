import CommonTabs from "../CommonTabs";
import BackPackDetail from "./BackPackDetail";
import { BACKPACK_ITEMS } from "./config";

function Backpack() {
  return <CommonTabs tabItems={BACKPACK_ITEMS} DetailComp={BackPackDetail} />;
}

export default Backpack;
