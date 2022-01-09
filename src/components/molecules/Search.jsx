import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { getSummoner } from "../../reducers/lol";
/**@components */
import Input from "../atoms/Input.jsx";

const Search = () => {
  const { summoner } = useSelector((_root) => _root.lol);

  const dispatch = useDispatch();

  const [keyword, setKeyword] = useState();

  useEffect(() => {
    if (keyword) {
      dispatch(getSummoner(keyword));
    }
  }, [keyword]);

  const handleChage = (e) => {
    setKeyword(e.target.value);
  };

  return (
    <SearchWrap>
      <Input value={keyword} onChange={handleChage} />
      {keyword && (
        <div>{summoner ? JSON.stringify(summoner) : <div>LOADING...</div>}</div>
      )}
      <SearchResult></SearchResult>
    </SearchWrap>
  );
};

const SearchWrap = styled.section`
  position: relative;
  input {
    width: 100%;
  }
`;

const SearchResult = styled.ul``;

export default Search;
