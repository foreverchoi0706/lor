import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledHeader = styled.header`
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  a {
    color: black;
  }
`;

const Header = () => {
  return (
    <StyledHeader>
      <Link to="/lol">lol</Link>
      <Link to="/lor">tft</Link>
      <Link to="/tft">tft</Link>
    </StyledHeader>
  );
};

export default Header;
