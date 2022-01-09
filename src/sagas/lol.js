import { call, delay, put, takeEvery, takeLatest } from "redux-saga/effects";
/**@api */
import lol from "../../api/lol";
/**@reducers */
import {
  GET_VERSION,
  GET_VERSION_SUCCESS,
  GET_VERSION_FAILURE,
  GET_SUMMONER,
  GET_SUMMONER_SUCCESS,
  GET_SUMMONER_FAILURE,
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
    console.error(error);
    yield put({
      type: GET_VERSION_FAILURE,
    });
  }
}

function* getSummoner(action) {
  try {
    yield delay(800);
    const { data } = yield call(lol.getSummoner, action.payload);
    yield put({
      type: GET_SUMMONER_SUCCESS,
      payload: data,
    });
  } catch (error) {
    console.error(error);
    yield put({
      type: GET_SUMMONER_FAILURE,
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
    console.error(error);
    yield put({
      type: GET_CHAMPION_ROTATIONS_FAILURE,
    });
  }
}

export default function* lolSaga() {
  yield takeEvery(GET_VERSION, getVersion);
  yield takeLatest(GET_SUMMONER, getSummoner);
  yield takeEvery(GET_CHAMPION_ROTATIONS, getChampionRotations);
}
