import { createState } from "@hookstate/core";

const istate = {
  isHidden: true,
  pos: [],
  type: "",
};

export const rcmState = createState(istate);
