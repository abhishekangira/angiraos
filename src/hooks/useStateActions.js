import { useState, none } from "@hookstate/core";
// import { Persistence } from '@hookstate/persistence';
import * as states from "../states";

export default function useStateActions(ID) {
  const { desktopState, appsState, rcmState } = states;
  const desktop = useState(desktopState);
  // desktop.attach(Persistence('desktopState'))
  const apps = useState(appsState);
  // apps.attach(Persistence('appsState'))
  const rcm = useState(rcmState);

  const actions = {
    window: {
      focus(id = ID) {
        console.log("focus", id);
        desktop.zStack[desktop.zStack.get().indexOf(id)].set(none);
        desktop.zStack[desktop.zStack.length].set(id);
        // desktop.zStack.set([...desktop.zStack.get().filter(app => app !== id), id]);
        console.log(desktop.zStack.get());
      },
      isFocused(id = ID) {
        return desktop.zStack[desktop.zStack.length - 1].get() === id;
      },
      open(id = ID) {
        if (apps[id].isOpen.get()) {
          // desktop.zStack[desktop.zStack.indexOf(id)].set(none);
          // desktop.zStack[desktop.zStack.length].set(id);
          actions.window.focus(id);
        } else {
          desktop.zStack[desktop.zStack.length].set(id);
          apps[id].isOpen.set(true);
        }
      },
      close(id = ID) {
        apps[id].isOpen.set(false);
        desktop.zStack[desktop.zStack.get().indexOf(id)].set(none);
      },
      minimize(id = ID) {
        desktop.zStack[desktop.zStack.get().indexOf(id)].set(none);
        desktop.zStack.set((p) => {
          p.unshift(id);
          return p;
        });
        apps[id].isMinimized.set(true);
        console.log("After Minimize", desktop.zStack.get());
      },
      isMinimized(id = ID) {
        return apps[id].isMinimized.get();
      },
      unminimize(id = ID) {
        apps[id].isMinimized.set(false);
      },
      get zStack() {
        return desktop.zStack.get();
      },
      zIndex(id = ID) {
        return desktop.zStack.get().indexOf(id);
      },
    },
    icon: {
      select(id = ID) {
        desktop.selectedIcons[desktop.selectedIcons.length].set(id);
      },
      changeTitle(id = ID, title) {
        apps[id].title.set(title);
      },
      isSelected(id = ID) {
        return desktop.selectedIcons.get().includes(id);
      },
      unselect(id = ID) {
        desktop.selectedIcons[desktop.selectedIcons.indexOf(id)].set(none);
      },
      clearSelect() {
        desktop.selectedIcons.set([]);
      },
    },
    rcm: {
      get isHidden() {
        return rcm.isHidden.get();
      },
      get type() {
        return rcm.type.get();
      },
      hide() {
        rcm.isHidden.set(true);
      },
      show(type) {
        rcm.type.set(type);
        rcm.isHidden.set(false);
      },
      get pos() {
        return rcm.pos.get();
      },
      setPos(x, y) {
        rcm.pos.set([x, y]);
      },
    },
    get allApps() {
      return apps.keys;
    },
    app(id = ID) {
      return apps[id].get();
    },
    get apps() {
      return apps.get();
    },
    get wallpaper() {
      return desktop.wallpaper.get();
    },
  };
  return actions;
}
