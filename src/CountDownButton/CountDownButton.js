import React, { useContext } from "react";
import { context } from "../hooks/useCountDown";

export default function CountDownButton() {
  let countDown = useContext(context);
  return (
    <button onClick={countDown.start} disabled={countDown.disabled}>
      {countDown.disabled?(countDown.show+1):'点击开始倒计时'}
    </button>
  );
}
