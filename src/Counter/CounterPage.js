import React from "react";
import CounterDisplay from "./CounterDisplay";
import useCounter, { context } from "../hooks/useCounter";
import ChildPage from "./ChildPage";

export default function CounterPage() {
  let counter = useCounter();
  return (
    <context.Provider value={counter}>
      <CounterDisplay />
      <CounterDisplay />
      <CounterDisplay />
      <ChildPage />
    </context.Provider>
  );
}
