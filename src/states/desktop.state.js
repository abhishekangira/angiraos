import { createState } from "@hookstate/core";

const istate = { zStack: [], selectedIcons: [], wallpaper: "/images/bg/room.jpg" };

export const desktopState = createState(istate);
