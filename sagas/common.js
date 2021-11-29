import { call, delay, put, takeLatest, } from "redux-saga/effects";

import common from "../api/common";
import { INPUT_NAME_SUCCESS, INPUT_NAME_FAILURE } from "../reducers/common";

function* inputName(e) {
    try {
        yield delay(500);
        const payload = yield call(common.getName, e.payload);
        yield put({
            type: INPUT_NAME_SUCCESS,
            payload
        })
    } catch (error) {
        yield put({
            type: INPUT_NAME_FAILURE
        })
    }
}


export default function* commonSaga() {
    yield takeLatest("INPUT_NAME", inputName);
}