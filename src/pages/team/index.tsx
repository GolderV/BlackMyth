import ReactGA from "react-ga4";
import { FC, useEffect } from "react";

export const TeamPage: FC = () => {
  useEffect(() => {
    ReactGA.send({ hitType: "pageview", page: "/team", title: "team" });
  }, []);

  return <div>TeamPage</div>;
};
