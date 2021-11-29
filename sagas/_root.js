import { all } from "redux-saga/effects";

import common from "./common";

function* _root() {
    yield all([common()]);
}


export default _root;