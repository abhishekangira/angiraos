import Clock from "./Clock";

import { Wrapper, Left, Right, StartIcon } from "../styles/Taskbar.styles";
import AppIconsCollection from "./AppIconsCollection";

export default function Taskbar() {
  console.log("taskbar");
  return (
    <Wrapper id="Ether">
      <Left>
        <StartIcon>
          <img src="/images/icons/logo.svg" alt="Angira OS Logo" />
        </StartIcon>
        <AppIconsCollection forTaskbar />
      </Left>
      <Right>
        <Clock />
      </Right>
    </Wrapper>
  );
}
