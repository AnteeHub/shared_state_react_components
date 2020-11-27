import React from "react";
import "./styles.css";
import CounterPage from "./Counter/CounterPage";
import CountDownPage from "./CountDown/CountDownPage";
import CountDownBtnPage from "./CountDownButton/CountDownBtnPage";

export default function App() {
  return (
    <div className="App">
      <CounterPage />
      <CountDownPage />
      <CountDownBtnPage />
    </div>
  );
}
