import { combineReducers } from "redux";

import common from "./common";
import lol from "./lol";
import lor from "./lor";
import tft from "./tft";

const _root = combineReducers({
    common, lol, lor, tft
});


export default _root;