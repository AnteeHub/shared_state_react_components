import React, { useContext } from "react";
import CountDownButton from "./CountDownButton";
import useCountDown, { context } from "../hooks/useCountDown";
import CountDownChild from "./CountDownChild";

export default function CountDownBtnPage() {
  let countDown = useCountDown();
  return (
    <context.Provider value={countDown}>
      <CountDownButton />
      <CountDownButton />
      <CountDownChild />
    </context.Provider>
  );
}
