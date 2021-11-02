import { put, call, takeEvery } from "redux-saga/effects";
import api from "../api/api";

const GET_DDRAGON = "GET_DDRAGON";

const GET_DDRAGON_SUCCESS = "GET_DDRAGON_SUCCESS";

const GET_VERSION = "GET_VERSION";

const GET_VERSION_SUCCESS = "GET_VERSION_SUCCESS";

export const getDdragon = () => ({ type: GET_DDRAGON });

const getDdragonSuccess = (data) => ({ type: GET_DDRAGON_SUCCESS, data });

export const getVersion = () => ({ type: GET_VERSION });

const getVersionSuccess = (data) => ({ type: GET_VERSION_SUCCESS, data });

function* getDdragonSaga() {
  const data = yield call(api.getDdragon);
  yield put(getDdragonSuccess(data));
}

function* getVersionSaga() {
  const data = yield call(api.getVersion);
  yield put(getVersionSuccess(data));
}

export function* ddragonSaga() {
  yield takeEvery(GET_DDRAGON, getDdragonSaga);
  yield takeEvery(GET_VERSION, getVersionSaga);
}


const initialState = {
  ddragon: {
    version: "",
    isSearched: false,
    data: {
      champions: null,
      spells: null,
    },
  },
};

export default function ddragonReducer(state = initialState, action) {
  switch (action.type) {
    case GET_DDRAGON:
      return initialState;
    case GET_DDRAGON_SUCCESS:
      return {
        ...state,
        ddragon: {
          isSearched: true,
          data: {
            champions: action.data.champions,
            spells: action.data.spells,
          },
        },
      };
    case GET_VERSION:
      return {
        ...state
      };
    case GET_VERSION_SUCCESS:
      return {
        ...state,
        version: action.data,
      };
    default:
      return state;
  }
}
