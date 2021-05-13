import { useEffect, useState, useRef } from "react";

const useTime = () => {
  const [time, setTime] = useState("");
  const id = useRef(null);
  useEffect(() => {
    id.current = setInterval(() => {
      setTime(new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }));
    }, 1000);
    return () => {
      clearInterval(id.current);
    };
  }, []);
  return time;
};

export default useTime;
