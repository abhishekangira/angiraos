import { useState } from "@hookstate/core";
import { useRef } from "react";
import useStateActions from "./useStateActions";

export default function useWindow(id) {
  const state = useState({
    showInfo: false,
    isMaximized: false,
    prevHeight: 0,
    prevWidth: 0,
    prevX: 0,
    prevY: 0,
  });

  const {
    app,
    window: { focus, close, minimize, zIndex, isMinimized },
  } = useStateActions(id);

  const rndRef = useRef(null);

  const { prevHeight, prevWidth, prevX, prevY, isMaximized } = state.get();

  const maximize = () => {
    const { x, y } = rndRef.current.draggable.state;
    const { height, width } = rndRef.current.resizable.state;

    let maximized = x === 0 && y === 0 && height === "100%" && width === "100%";
    if (maximized) {
      state.isMaximized.set(false);
      rndRef.current.updateSize({ width: prevWidth, height: prevHeight });
      rndRef.current.updatePosition({ x: prevX, y: prevY });
    } else {
      state.isMaximized.set(true);
      state.prevX.set(x);
      state.prevY.set(y);
      state.prevHeight.set(height);
      state.prevWidth.set(width);
      rndRef.current.updateSize({ width: "100%", height: "100%" });
      rndRef.current.updatePosition({ x: 0, y: 0 });
    }
  };

  const toggleShowInfo = () => {
    state.showInfo.set(!state.showInfo.get());
  };

  const unmaximize = () => {
    state.isMaximized.set(false);
  };

  return {
    rndRef,
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
