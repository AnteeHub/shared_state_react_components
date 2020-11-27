import React, { useState } from "react";
import useInterval from "../hooks/useInterval";

export default function CounterDown(props) {
  let [count, setCount] = useState(props.count || 10);
  useInterval(() => {
    setCount(count - 1);
  }, 1000);
  return <p>{count}</p>;
}
