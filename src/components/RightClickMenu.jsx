import { useState, useEffect } from "react";
import useStateActions from "../hooks/useStateActions";
import { Wrapper } from "../styles/RightClickMenu.styles";
import { useSpring } from "@react-spring/web";

export default function RightClickMenu({ controls }) {
  const { rcm } = useStateActions();
  const [show, setShow] = useState(false);

  useEffect(() => {
    const mql = window.matchMedia("(max-width: 600px)");
    function handleMobilePhoneResize(e) {
      // Check if the media query is true
      setShow(e.matches);
      if (e.matches) {
        // Then log the following message to the console
        console.log("Media Query Matched!");
      }
    }

    // Set up event listener
    mql.addListener(handleMobilePhoneResize);
  }, []);
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

  const animate = useSpring({
    opacity: rcm.isHidden ? 0 : 1,
    height: rcm.isHidden ? "0rem" : "20rem",
    width: rcm.isHidden ? "0rem" : "16rem",
  });

  return (
    <Wrapper
      style={animate}
      id="right-click-menu"
      // hidden={rcm.isHidden}
      top={top}
      left={left}
      right={right}
      bottom={bottom}
    >
      {show ? "Smaller than 650" : "Larger than 650"}
    </Wrapper>
  );
}
