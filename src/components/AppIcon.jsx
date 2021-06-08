import { useState } from "@hookstate/core";
import useAppIcon from "../hooks/useAppIcon";
import { appsState } from "../states";
import { Icon, Rounded } from "../styles/AppIcon.styles";



export default function AppIcon(props) {
  const { forTaskbar, id } = props;
  const state = useState(appsState);
  const {
    isSelected,
    isFocused,
    isMinimized,
    onDoubleClick,
    onClick,
    rightClickHandler,
  } = useAppIcon(props);
  const { icon, title } = state[id].get();

  // console.log(NativeIcon);
  // if (forTaskbar) {
  //   console.log(id,{ isSelected, isFocused, isMinimized });
  // }

  return (
    <Icon
      onDoubleClick={onDoubleClick}
      onClick={onClick}
      onContextMenu={rightClickHandler}
      isSelected={isSelected}
      forTaskbar={forTaskbar}
      isFocused={isFocused}
      isMinimized={isMinimized}
    >
      <Rounded forTaskbar={forTaskbar} isFocused={isFocused} isMinimized={isMinimized}>
        <img src={icon} alt={icon} />
      </Rounded>

      {!forTaskbar && <span> {title}</span>}
    </Icon>
  );
}
