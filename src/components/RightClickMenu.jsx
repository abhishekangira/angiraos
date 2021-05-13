import useStateActions from "../hooks/useStateActions";
import { Wrapper } from "../styles/RightClickMenu.styles";

export default function RightClickMenu() {
  const { rcm } = useStateActions();
  const [x, y, w, h] = rcm.pos;
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
  return (
    <Wrapper
      id="right-click-menu"
      hidden={rcm.isHidden}
      top={top}
      left={left}
      right={right}
      bottom={bottom}
    >
      Hello
    </Wrapper>
  );
}
