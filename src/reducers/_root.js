import { combineReducers } from "redux";

import lol from "./lol";
import lor from "./lor";
import tft from "./tft";

const _root = combineReducers({
  lol,
  lor,
  tft,
});

export default _root;
