import React, { useEffect } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";

const StyledResultList = styled.ul`
  position: absolute;
  top: 40px;
  border : 1px solid #e4e4e4;
`;

const ResultList = ({ keyword }) => {
  const { common } = useSelector((root) => root);

  useEffect(() => {
    console.log(common);
  }, []);

  return <StyledResultList>{keyword}</StyledResultList>;
};

ResultList.prototype = {
  keyword: PropTypes.string.isRequired,
};

export default ResultList;
