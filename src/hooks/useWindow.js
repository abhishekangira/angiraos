import { useState } from "@hookstate/core";
import { Persistence } from "@hookstate/persistence";
import { useRef } from "react";
import useStateActions from "./useStateActions";

export default function useWindow(id) {
  const state = useState({
    showInfo: false,
    isMaximized: false,
    height: 400,
    width: 500,
    x: window.innerWidth / 2 - 250,
    y: window.innerHeight / 2 - 200,
    prevHeight: 0,
    prevWidth: 0,
    prevX: 0,
    prevY: 0,
  });
  // state.attach(Persistence(`${id}Window`));
  console.log(state.get());
  const {
    app,
    window: { focus, close, minimize, zIndex, isMinimized },
  } = useStateActions(id);

  const rndRef = useRef(null);
  const frameRef = useRef(null);

  const { isMaximized } = state.get();

  const maximize = () => {
    // const { x, y } = rndRef.current.draggable.state;
    // const { height, width } = rndRef.current.resizable.state;

    // let maximized = x === 0 && y === 0 && height === "100%" && width === "100%";
    if (state.isMaximized.get()) {
      state.isMaximized.set(false);
      state.width.set(state.prevWidth.get());
      state.height.set(state.prevHeight.get());
      state.x.set(state.prevX.get());
      state.y.set(state.prevY.get());
      // rndRef.current.updateSize({ width: prevWidth, height: prevHeight });
      // rndRef.current.updatePosition({ x: prevX, y: prevY });
    } else {
      state.isMaximized.set(true);
      state.prevX.set(state.x.get());
      state.prevY.set(state.y.get());
      state.prevHeight.set(state.height.get());
      state.prevWidth.set(state.width.get());
      state.width.set("100%");
      state.height.set("100%");
      state.x.set(0);
      state.y.set(0);
      // rndRef.current.updateSize({ width: "100%", height: "100%" });
      // rndRef.current.updatePosition({ x: 0, y: 0 });
    }
  };

  const toggleShowInfo = () => {
    state.showInfo.set(!state.showInfo.get());
  };

  const unmaximize = () => {
    state.isMaximized.set(false);
  };

  const rndStart = () => {
    focus();
    frameRef.current.style.pointerEvents = "none";
  };
  const dragStop = (e, d) => {
    frameRef.current.style.pointerEvents = "auto";
    state.x.set(d.x);
    state.y.set(d.y);
    // console.log(state.get());
  };
  const resizeStop = (e, direction, ref, delta, position) => {
    frameRef.current.style.pointerEvents = "auto";
    state.width.set(ref.style.width);
    state.height.set(ref.style.height);
    state.x.set(position.x);
    state.y.set(position.y);
    // console.log(state.get());
  };

  return {
    rndRef,
    rndStart,
    resizeStop,
    dragStop,
    height: state.height.get(),
    width: state.width.get(),
    x: state.x.get(),
    y: state.y.get(),
    frameRef,
    isMaximized,
    maximize: () => {
      focus();
      maximize();
    },
    unmaximize,
    toggleShowInfo: () => {
      focus();
      toggleShowInfo();
    },
    showInfo: state.showInfo.get(),
    isMinimized: isMinimized(),
    title: app().title,
    url: app().url,
    close: () => close(),
    minimize: () => minimize(),
    focus: () => focus(),
    zIndex: zIndex(),
  };
}
