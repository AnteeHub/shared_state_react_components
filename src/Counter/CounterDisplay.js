import React, { useContext } from "react";
import { context } from "../hooks/useCounter";

export default function CounterDisplay() {
  let counter = useContext(context);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <button onClick={counter.decrement}>-</button>
      <p
        style={{
          padding: "10px"
        }}
      >
        {" "}
        Now is : {counter.count}{" "}
      </p>
      <button onClick={counter.increment}>+</button>
    </div>
  );
}
