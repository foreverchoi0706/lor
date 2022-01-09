import React from "react";
import styled from "styled-components";
import Search from "../molecules/Search.jsx";

const Banner = () => {
  return (
    <BannerWrap>
      <Search />
    </BannerWrap>
  );
};

const BannerWrap = styled.section`
  margin: 50px 0;
`;

export default Banner;
