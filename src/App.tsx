import React from "react";
import logo from "./logo.svg";
import "./App.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { MainPage } from "./pages/main";
import { MENU } from "./pages/main/config";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<MainPage />} />
          {MENU.map((item) => (
            <Route
              key={item.key}
              path={item.path}
              element={<item.component />}
            />
          ))}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
