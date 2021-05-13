import useStateActions from "./useStateActions";

const useAppIcon = ({ id, forTaskbar }) => {
  const {
    window: { open, unminimize, minimize, focus, isFocused, isMinimized },
    icon: { select, isSelected: selected, clearSelect },
  } = useStateActions(id);

  const onDoubleClick = () => {
    open();
    unminimize();
    clearSelect();
  };
  const isSelected = selected();

  const onClick = () => {
    if (forTaskbar) {
      if (isMinimized()) {
        focus();
        unminimize();
      }
      else {
        if (isFocused()) minimize();
        else focus();
      }
    } else {
      clearSelect();
      select();
    }
  };
  return { isSelected, isFocused: isFocused(), isMinimized: isMinimized(), onDoubleClick, onClick };
};

export default useAppIcon;
