import { createReducer, createAction } from "@reduxjs/toolkit";

const initialState = {
  version: null,
  championRotations: null,
  summoner: null,
};

export const GET_VERSION = "GET_VERSION";

export const GET_VERSION_SUCCESS = "GET_VERSION_SUCCESS";

export const GET_VERSION_FAILURE = "GET_VERSION_FAILURE";

export const GET_SUMMONER = "GET_SUMMONER";

export const GET_SUMMONER_SUCCESS = "GET_SUMMONER_SUCCESS";

export const GET_SUMMONER_FAILURE = "GET_SUMMONER_FAILURE";

export const GET_CHAMPION_ROTATIONS = "GET_CHAMPION_ROTATIONS";

export const GET_CHAMPION_ROTATIONS_SUCCESS = "GET_CHAMPION_ROTATIONS_SUCCESS";

export const GET_CHAMPION_ROTATIONS_FAILURE = "GET_CHAMPION_ROTATIONS_FAILURE";

export const getVersion = createAction(GET_VERSION);

export const getSummoner = createAction(GET_SUMMONER);

export const getChampionRotations = createAction(GET_CHAMPION_ROTATIONS);

const lol = createReducer(initialState, (builder) => {
  builder
    .addCase(GET_VERSION_SUCCESS, (state, { payload }) => {
      console.log(payload);
      state.version = payload;
    })
    .addCase(GET_VERSION_FAILURE, (_, { type }) => {
      alert(type);
    })
    .addCase(GET_SUMMONER_SUCCESS, (state, { payload }) => {
      console.log(payload);
      state.summoner = payload;
    })
    .addCase(GET_SUMMONER_FAILURE, (_, { type }) => {
      alert(type);
    })
    .addCase(GET_CHAMPION_ROTATIONS_SUCCESS, (state, { payload }) => {
      state.championRotations = payload;
    })
    .addCase(GET_CHAMPION_ROTATIONS_FAILURE, (_, { type }) => {
      alert(type);
    });
});

export default lol;
