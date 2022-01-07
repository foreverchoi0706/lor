import { call, put, takeEvery } from "redux-saga/effects";
/**@api */
import lol from "../../api/lol";
/**@reducers */
import {
  GET_VERSION,
  GET_VERSION_SUCCESS,
  GET_VERSION_FAILURE,
  GET_CHAMPION_ROTATIONS,
  GET_CHAMPION_ROTATIONS_SUCCESS,
  GET_CHAMPION_ROTATIONS_FAILURE,
} from "../reducers/lol";

function* getVersion() {
  try {
    const { data } = yield call(lol.getVersion);
    yield put({
      type: GET_VERSION_SUCCESS,
      payload: data,
    });
  } catch (error) {
    yield put({
      type: GET_VERSION_FAILURE,
      payload,
    });
  }
}

function* getChampionRotations() {
  try {
    const { data } = yield call(lol.getChampionRotations);
    yield put({
      type: GET_CHAMPION_ROTATIONS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    yield put({
      type: GET_CHAMPION_ROTATIONS_FAILURE,
      payload,
    });
  }
}

export default function* lolSaga() {
  yield takeEvery(GET_VERSION, getVersion);
  yield takeEvery(GET_CHAMPION_ROTATIONS, getChampionRotations);
}
