import { useEffect, useRef } from "react";

export default function useInterval(fn, delay = 1000) {
  const intervalRef = useRef();
  useEffect(() => {
    intervalRef.current = fn;
  }, [fn]);
  useEffect(() => {
    let timer = setInterval(() => {
      intervalRef.current();
    }, delay);
    return () => clearInterval(timer);
  }, []);
}
