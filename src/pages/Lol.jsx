import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";

import { getChampionRotations } from "../reducers/lol";

const Lol = () => {
  const { championRotations } = useSelector((_root) => _root.lol);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getChampionRotations());
  }, []);

  return <div>{JSON.stringify(championRotations)}</div>;
};

Lol.prototype = {};

export default Lol;
