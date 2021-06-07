import { useEffect, useCallback } from "react";
import useStateActions from "./useStateActions";

const useDesktop = () => {
  const {
    window: { focus },
    icon,
    rcm,
    allApps,
    wallpaper,
  } = useStateActions();

  const messageHandler = function (event) {
    const validMessages = allApps;
    if (validMessages.includes(event.data)) focus(event.data);
  };
  
  const memoisedMessageHandler = useCallback(messageHandler, [messageHandler]);
  
  const rightClickHandler = (e) => {
    e.preventDefault();
    e.stopPropagation();
    console.log(e);
    const [x, y] = [e.pageX, e.pageY];
    console.log(e.target.id);
    switch (e.target.id) {
      case "ether":
        rcm.show("ether");
        break;
      case "icon":
        rcm.show("icon");
        break;
      default:
        break;
    }
    rcm.setPos(x, y);
  };

  useEffect(() => {
    window.addEventListener("message", memoisedMessageHandler);

    return () => {
      window.removeEventListener("message", memoisedMessageHandler);
    };
  }, [memoisedMessageHandler]);

  const etherClick = (e) => {
    if (e.target.id === "ether") {
      icon.clearSelect();
      // console.log("Ether click");
    }
    if (e.target.id !== "right-click-menu") rcm.hide();
  };
  return {
    rightClickHandler,
    etherClick,
    wallpaper,
  };
};

export default useDesktop;
