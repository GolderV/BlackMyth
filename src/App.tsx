import "./App.scss";
import { RouterProvider, createHashRouter } from "react-router-dom";
import { MainPage } from "./pages/main";
import NewGamePage from "./pages/new";
import { GamePage } from "./pages/game";
import { InformationPage } from "./pages/information";
import { SettingsPage } from "./pages/settings";
import { TeamPage } from "./pages/team";

const router = createHashRouter([
  {
    path: "/",
    element: <MainPage />,
  },
  {
    path: "/game",
    element: <GamePage />,
  },
  {
    path: "/game/new",
    element: <NewGamePage />,
  },
  {
    path: "/information",
    element: <InformationPage />,
  },
  {
    path: "/settings",
    element: <SettingsPage />,
  },
  {
    path: "/team",
    element: <TeamPage />,
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
