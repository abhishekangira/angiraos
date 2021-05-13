import Clock from "./Clock";

import { Wrapper, Left, StartIcon, Right} from "../styles/Taskbar.styles";
import AppIconsCollection from "./AppIconsCollection";

export default function Taskbar() {
  console.log("taskbar")
  return (
    <Wrapper id="Ether">
      <Left>
        <StartIcon>Open</StartIcon>
        <AppIconsCollection forTaskbar />
      </Left>
      <Right>
        <Clock/>
      </Right>
    </Wrapper>
  );
}
