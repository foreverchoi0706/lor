import { all } from "redux-saga/effects";

import common from "./common";
import lol from "./lol";

function* _root() {
  yield all([common(), lol()]);
}

export default _root;
