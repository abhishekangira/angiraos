import useStateActions from "./useStateActions";

const useAppIcon = ({ id, forTaskbar }) => {
  const {
    window: { open, unminimize, minimize, focus, isFocused, isMinimized },
    icon: { select, isSelected: selected, clearSelect },
    rcm,
  } = useStateActions(id);

  const onDoubleClick = () => {
    open();
    unminimize();
    clearSelect();
  };
  const isSelected = selected();

  const rightClickHandler = (e) => {
    e.preventDefault();
    console.log({ e, id: e.target.id });
    const [x, y] = [e.pageX, e.pageY];
    rcm.setPos(x, y);
    rcm.show("icon");
  };

  const onClick = () => {
    if (forTaskbar) {
      if (isMinimized()) {
        focus();
        unminimize();
      } else {
        if (isFocused()) minimize();
        else focus();
      }
    } else {
      clearSelect();
      select();
    }
  };
  return { isSelected, isFocused: isFocused(), isMinimized: isMinimized(), onDoubleClick, onClick, rightClickHandler };
};

export default useAppIcon;
