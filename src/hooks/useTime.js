import { useEffect, useState } from "react";

const useTime = () => {
  const [time, setTime] = useState("");
  let id;
  useEffect(() => {
    id = setInterval(() => {
      setTime(new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }));
    }, 1000);
    return () => {
      clearInterval(id);
    };
  }, []);
  return time;
};

export default useTime;
