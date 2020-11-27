import { useState, createContext } from "react";
// import useInterval from "../hooks/useInterval";
import { useInterval } from "ahooks";

export default function useCountDown(count = 10, delay = 1000) {
    const [show, setShow] = useState(count);
    const [interval, setInterval] = useState(null);
    const [disabled, setDisabled] = useState(false);

    const start = function() {
        console.log("start");
        setInterval(delay);
        setDisabled(true);
    };

    const counting = function() {
        if (show === 0) {
            setInterval(null);
            setShow(count);
            setDisabled(false);
        } else {
            setShow(show - 1);
        }
        console.log(show);
    };

    useInterval(
        () => {
            counting();
        },
        interval, {
            immediate: false
        }
    );

    return { show, start, disabled };
}

export let context = createContext(null);