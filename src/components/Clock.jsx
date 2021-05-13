import { Time } from "../styles/Taskbar.styles";
import useTime from "../hooks/useTime";

export default function Clock() {
  const time = useTime();
  return <Time>{time}</Time>;
}
