import useDesktop from "../hooks/useDesktop";

import Taskbar from "./Taskbar";
import RightClickMenu from "./RightClickMenu";
import AppIconsCollection from "./AppIconsCollection";
import WindowsCollection from "./WindowsCollection";

import { Wrapper } from "../styles/Desktop.styles";

export default function Desktop() {
  const { rightClickHandler, etherClick } = useDesktop();

  // console.log("Desktop");

  return (
    <Wrapper onClick={etherClick} onContextMenu={rightClickHandler} id="Ether">
      <div id="Ether" className="above-taskbar">
        <img src="/images/bg/naruto.png" className="bg" alt="Background" />
        <RightClickMenu />
        <AppIconsCollection />
        <WindowsCollection />
      </div>
      <Taskbar />
    </Wrapper>
  );
}
