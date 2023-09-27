import { Link } from "react-router-dom";
import { GamePage } from "../game";
import { InformationPage } from "../information";
import { SettingsPage } from "../settings";
import { TeamPage } from "../team";

export const MENU = [
  {
    label: <Link to="/game">新游戏</Link>,
    key: "game",
    path: "/game",
    component: GamePage,
  },
  {
    label: <Link to="/information">资料</Link>,
    key: "information",
    path: "/information",
    component: InformationPage,
  },
  {
    label: <Link to="/settings">设置</Link>,
    key: "settings",
    path: "/settings",
    component: SettingsPage,
  },
  {
    label: <Link to="/team">制作团队</Link>,
    key: "team",
    path: "/team",
    component: TeamPage,
  },
];
