import { createState } from "@hookstate/core";

const istate = {
  ecom: {
    id: "ecom",
    url: "https://angira-react-ecommerce.web.app/",
    // url: "http://localhost:3006/",
    title: "The Soul Store",
    icon: "/images/icons/ecom.svg",
    isOpen: false,
    isMinimized: false,
  },
  myflix: {
    id: "myflix",
    url: "https://myflix-angira.vercel.app/",
    title: "MyFlix",
    icon: "/images/icons/myflix.png",
    isOpen: false,
    isMinimized: false,
  },
  settings: {
    id: "settings",
    url: null,
    title: "Settings",
    icon: "/images/icons/settings.svg",
    isOpen: false,
    isMinimized: false,
  },
};

export const appsState = createState(istate);
