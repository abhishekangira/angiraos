import useDesktop from "../hooks/useDesktop";

import Taskbar from "./Taskbar";
import RightClickMenu from "./RightClickMenu";
import AppIconsCollection from "./AppIconsCollection";
import WindowsCollection from "./WindowsCollection";

import { Wrapper } from "../styles/Desktop.styles";

export default function Desktop() {
  const { rightClickHandler, etherClick, wallpaper } = useDesktop();

  // console.log("Desktop");

  return (
    <Wrapper onClick={etherClick} onContextMenu={rightClickHandler}>
      <img src={wallpaper} className="bg" alt="Background" />
      <div id="ether" className="above-taskbar">
        <WindowsCollection />
        <RightClickMenu />
        <AppIconsCollection />
      </div>
      <Taskbar />
    </Wrapper>
  );
}
