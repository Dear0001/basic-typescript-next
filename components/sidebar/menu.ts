import {
  HiArrowSmRight,
  HiChartPie,
  HiInbox,
  HiShoppingBag,
  HiTable,
  HiUser,
  HiViewBoards,
} from "react-icons/hi";

export const MenuList = [
  {
    name: "Dashboard",
    path: "/dashboard",
    icon: HiChartPie,
    active: true,
  },
  {
    name: "Setting",
    path: "/setting",
    icon: HiViewBoards,
  },
  {
    name: "Inbox",
    path: "/inbox",
    icon: HiInbox,
  },
  {
    name: "User",
    path: "/user",
    icon: HiUser,
  },
  {
    name: "Product",
    path: "/product",
    icon: HiShoppingBag,
  },
  {
    name: "Sign In",
    path: "/sign_in",
    icon: HiArrowSmRight,
  },
  {
    name: "Sign Up",
    path: "/sign_up",
    icon: HiTable,
  },
];