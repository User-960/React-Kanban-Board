import { createContext } from "react";
import { TLayoutContext } from "../../models/models";

const defaultValue: TLayoutContext = {
  mainContentHeight: 0
};

export const LayoutContext = createContext(defaultValue);