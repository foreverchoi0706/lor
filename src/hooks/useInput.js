import { useState } from "react";
import { useDispatch } from "react-redux";
/**@reducers */
import { inputKeyword } from "../reducers/common";

const useInput = (initialState = "") => {
  const dispatch = useDispatch();

  const [state, setState] = useState(initialState);

  const handleInput = ({ target: { value } }) => {
    setState(value);
    dispatch(inputKeyword(value));
  };

  return [state, handleInput];
};

export default useInput;
