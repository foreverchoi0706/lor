import React, { useState } from "react";
import styled from "styled-components";
/**@hooks */
import useInput from "../../hooks/useInput";
/**@components */
import Input from "../atoms/Input.jsx";
/**@actions */
import ResultList from "./ResultList.jsx";

const StyledDiv = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
`;

const Search = () => {
  const [keyword, handleInput] = useInput();

  return (
    <StyledDiv>
      <Input value={keyword} onChange={handleInput} />
      {keyword && <ResultList keyword={keyword} />}
    </StyledDiv>
  );
};

export default Search;
