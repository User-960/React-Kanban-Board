import { useContext } from "react";
import { LayoutContext } from "./layoutContext";

export const useLayout = () => {
  return useContext(LayoutContext);
};
