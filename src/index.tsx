import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import MyApp from "./App";
import reportWebVitals from "./reportWebVitals";
import ReactGA from "react-ga4";

// history.listen 的方式不能监听到反复跳转相同页面（因为history没变），所以手动在每个页面做监听
ReactGA.initialize("G-X7QHXMMWL7");

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <MyApp />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
