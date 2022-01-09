import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import ChampionRotations from "../components/molecules/ChampionRotations.jsx";

/**@components */

import { getChampionRotations, getVersion } from "../reducers/lol";

const Lol = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getVersion());
    dispatch(getChampionRotations());
  }, []);

  return (
    <div>
      <ChampionRotations />
    </div>
  );
};

Lol.prototype = {};

export default Lol;
