import useStateActions from "../hooks/useStateActions";
import { Wrapper } from "../styles/RightClickMenu.styles";
import { useSpring } from "@react-spring/web";

export default function RightClickMenu() {
  const { rcm } = useStateActions();
  const [x, y] = rcm.pos;
  const [w, h] = [window.innerWidth, window.innerHeight];
  const quadrant = x > w / 2 ? (y > h / 2 ? 3 : 2) : y > h / 2 ? 4 : 1;
  let top, left, right, bottom;
  switch (quadrant) {
    case 1:
      top = y;
      left = x;
      break;
    case 2:
      top = y;
      right = w - x;
      break;
    case 3:
      bottom = h - y;
      right = w - x;
      break;
    case 4:
      bottom = h - y;
      left = x;
      break;
    default:
      console.error("invalid quadrant");
  }
  const styles = useSpring({
    opacity: rcm.isHidden ? 0 : 1,
    height: rcm.isHidden ? "0rem" : "20rem",
    width: rcm.isHidden ? "0rem" : "16rem",
  });
  return (
    <Wrapper
      style={styles}
      id="right-click-menu"
      // hidden={rcm.isHidden}
      top={top}
      left={left}
      right={right}
      bottom={bottom}
    >
      {rcm.type === "ether" ? "Ether" : "Icon"}
    </Wrapper>
  );
}
