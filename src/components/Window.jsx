import { FullScreen, useFullScreenHandle } from "react-full-screen";
import { Rnd } from "react-rnd";

import { AiOutlineClose } from "react-icons/ai";
import { BiWindow, BiWindows, BiFullscreen } from "react-icons/bi";
import { FaRegWindowMinimize } from "react-icons/fa";
import { TiInfoLarge } from "react-icons/ti";

import { Content, Titlebar, Buttons, Markdown, Animated } from "../styles/Window.styles";
import useWindow from "../hooks/useWindow";
import useAnimation from "../hooks/useAnimation";
import marked from "marked";

export default function Window({ id }) {
  const {
    rndRef,
    zIndex,
    isMaximized,
    maximize,
    isMinimized,
    minimize,
    close,
    showInfo,
    focus,
    toggleShowInfo,
    title,
    url,
  } = useWindow(id);

  const fullscreenHandler = useFullScreenHandle();
  const fade = useAnimation("fade");

  return (
    <Animated style={fade}>
      <Rnd
        ref={rndRef}
        default={{
          x: window.innerWidth / 2 - 250,
          y: 0,
          width: 500,
          height: 400,
        }}
        style={{
          border: "1px solid #777",
          display: isMinimized ? "none" : "block",
          background: "white",
          zIndex,
        }}
        onDragStart={() => {
          focus();
          document.getElementById("frame").style.pointerEvents = "none";
        }}
        onDragStop={() => {
          document.getElementById("frame").style.pointerEvents = "auto";
        }}
        onResizeStart={() => {
          focus();
          document.getElementById("frame").style.pointerEvents = "none";
        }}
        onResizeStop={() => {
          document.getElementById("frame").style.pointerEvents = "auto";
        }}
        disableDragging={isMaximized}
        enableResizing={!isMaximized}
        bounds="#boundary"
        minWidth={300}
        cancel="#frame, .window-menu-btn"
      >
        <Content showInfo={showInfo}>
          {!fullscreenHandler.active && (
            <Titlebar>
              <span title={title}>{title}</span>
              <Buttons>
                <button
                  title="How This Was Made"
                  id="info"
                  className="window-menu-btn"
                  onClick={toggleShowInfo}
                >
                  <TiInfoLarge />
                </button>
                <button
                  title="Fullscreen"
                  className="window-menu-btn"
                  onClick={() => {
                    focus();
                    fullscreenHandler.enter();
                  }}
                >
                  <BiFullscreen />
                </button>
                <button title="Minimize" className="window-menu-btn" onClick={minimize}>
                  <FaRegWindowMinimize />
                </button>
                <button title="Maximize" className="window-menu-btn" onClick={maximize}>
                  {isMaximized ? <BiWindows /> : <BiWindow />}
                </button>
                <button title="Close" className="window-menu-btn" onClick={close}>
                  <AiOutlineClose />
                </button>
              </Buttons>
            </Titlebar>
          )}
          <FullScreen handle={fullscreenHandler}>
            <Markdown
              showInfo={showInfo}
              dangerouslySetInnerHTML={{ __html: marked("# THE WORLD SHALL KNOW *PAIN* !") }}
            />
            {url ? (
              <iframe id="frame" title={id} src={url} frameBorder="0" allowFullScreen></iframe>
            ) : (
              <div id="frame" onClick={focus}>
                <h1>Native App</h1>
              </div>
            )}
          </FullScreen>
        </Content>
      </Rnd>
    </Animated>
  );
}
