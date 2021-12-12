import { call, delay, put, takeLatest, } from "redux-saga/effects";

import common from "../api/common";
import { INPUT_KEYWORD, INPUT_KEYWORD_SUCCESS, INPUT_KEYWORD_FAILURE } from "../reducers/common";

function* inputName(action) {
    try {
        yield delay(500);
        const payload = yield call(common.getName, action.payload);
        yield put({
            type: INPUT_KEYWORD_SUCCESS,
            payload
        })
    } catch (error) {
        yield put({
            type: INPUT_KEYWORD_FAILURE
        })
    }
}


export default function* commonSaga() {
    yield takeLatest(INPUT_KEYWORD, inputName);
}