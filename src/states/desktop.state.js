import { createState } from "@hookstate/core";

const istate = { zStack: [], selectedIcons: [] };

export const desktopState = createState(istate);
