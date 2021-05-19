import { useEffect, useCallback } from "react";
import useStateActions from "./useStateActions";

const useDesktop = () => {
  const {
    window: { focus },
    icon,
    rcm,
    allApps,
    wallpaper
  } = useStateActions();

  const messageHandler = function (event) {
    const validMessages = allApps;
    if (validMessages.includes(event.data)) focus(event.data);
  };

  const memoisedMessageHandler = useCallback(messageHandler, [messageHandler]);

  const rightClickHandler = (e) => {
    e.preventDefault();
    const [x, y, w, h] = [e.pageX, e.pageY, e.view.innerWidth, e.view.innerHeight];
    if (e.target.id === "Ether") {
      rcm.show();
      rcm.setPos(x, y, w, h);
    }
  };

  useEffect(() => {
    window.addEventListener("message", memoisedMessageHandler);

    return () => {
      window.removeEventListener("message", memoisedMessageHandler);
    };
  }, [memoisedMessageHandler]);

  const etherClick = (e) => {
    if (e.target.id === "Ether") {
      icon.clearSelect();
      console.log("Ether click");
    }
    if (e.target.id !== "right-click-menu") rcm.hide();
  };
  return {
    rightClickHandler,
    etherClick,
    wallpaper
  };
};

export default useDesktop;
