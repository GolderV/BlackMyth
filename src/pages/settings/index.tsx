import { FC, useEffect } from "react";
import ReactGA from "react-ga4";
import Settings from "../information/Settings";

export const SettingsPage: FC = () => {
  useEffect(() => {
    ReactGA.send({ hitType: "pageview", page: "/settings", title: "settings" });
  }, []);
  return (
    <div className="wrapper">
      <Settings />
    </div>
  );
};
