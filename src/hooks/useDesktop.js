import { useEffect } from "react";
import useStateActions from "./useStateActions";

const useDesktop = () => {
  const {
    window: { focus },
    icon,
    rcm,
    allApps,
  } = useStateActions();

  const messageHandler = function (event) {
    const validMessages = allApps;
    if (validMessages.includes(event.data)) focus(event.data);
  };

  const rightClickHandler = (e) => {
    e.preventDefault();
    const [x, y, w, h] = [e.pageX, e.pageY, e.view.innerWidth, e.view.innerHeight];
    if (e.target.id === "Ether") {
      rcm.show();
      rcm.setPos(x, y, w, h);
    }
  };

  useEffect(() => {
    window.addEventListener("message", messageHandler);

    return () => {
      window.removeEventListener("message", messageHandler);
    };
  }, []);

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
  };
};

export default useDesktop;
