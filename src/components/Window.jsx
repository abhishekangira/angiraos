import { FullScreen, useFullScreenHandle } from "react-full-screen";
import { Rnd } from "react-rnd";

import { AiOutlineClose } from "react-icons/ai";
import { BiWindow, BiWindows, BiFullscreen } from "react-icons/bi";
import { FaRegWindowMinimize } from "react-icons/fa";
import { TiInfoLarge } from "react-icons/ti";

import { Content, Titlebar, Buttons, Markdown, Frame } from "../styles/Window.styles";
import useWindow from "../hooks/useWindow";
import marked from "marked";

export default function Window({ id }) {
  const {
    rndRef,
    rndStart,
    resizeStop,
    dragStop,
    height,
    width,
    x,
    y,
    frameRef,
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

  return (
    <Rnd
      ref={rndRef}
      size={{ width, height }}
      position={{ x, y }}
      style={{
        display: isMinimized ? "none" : "block",
        background: "linear-gradient(to right, #2c2c2c, var(--primary-dark))",
        zIndex,
      }}
      onDragStart={rndStart}
      onDragStop={dragStop}
      onResizeStart={rndStart}
      onResizeStop={resizeStop}
      disableDragging={isMaximized}
      enableResizing={!isMaximized}
      bounds="#boundary"
      minWidth={300}
      cancel="#frame, .window-menu-btn"
    >
      <Content>
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
          <Frame showInfo={showInfo} id="frame" ref={frameRef} onClick={focus}>
            {url ? (
              <iframe title={id} src={url} frameBorder="0" allowFullScreen></iframe>
            ) : (
              <h1>Native App</h1>
            )}
          </Frame>
        </FullScreen>
      </Content>
    </Rnd>
  );
}
