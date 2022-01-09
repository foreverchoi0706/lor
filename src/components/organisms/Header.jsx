import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Header = () => {
  return (
    <HeaderWrap>
      <Link to="/lol">lol</Link>
      <Link to="/lor">tft</Link>
      <Link to="/tft">tft</Link>
    </HeaderWrap>
  );
};

const HeaderWrap = styled.header`
  width: 100%;
  margin: 50px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  a {
    color: black;
  }
`;

export default Header;
