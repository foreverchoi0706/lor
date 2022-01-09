import { all } from "redux-saga/effects";

import lol from "./lol";
import lor from "./lor";
import tft from "./tft";

function* _root() {
  yield all([lol(), lor(), tft()]);
}

export default _root;
