import { createState } from "@hookstate/core";

const istate = {
  isHidden: true,
  pos: [],
};

export const rcmState = createState(istate);
