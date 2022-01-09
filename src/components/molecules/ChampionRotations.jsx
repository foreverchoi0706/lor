import React, { useState } from "react";
import { useSelector } from "react-redux";
import styled, { css } from "styled-components";

const ChampionRotations = () => {
  const [clicked, setClicked] = useState(null);

  const { version, championRotations } = useSelector((_root) => _root.lol);

  return (
    <ChampionRotationsWarp>
      {championRotations?.map((championRotation) => (
        <li key={championRotation.key}>
          <ChampionSplash
            onClick={() => setClicked(championRotation.key)}
            alt={championRotation.name}
            src={`http://ddragon.leagueoflegends.com/cdn/${version}/img/champion/${championRotation.id}.png`}
          />
        </li>
      ))}
      {clicked}
    </ChampionRotationsWarp>
  );
};

const ChampionRotationsWarp = styled.ul(
  () => css`
    display: grid;
    grid-template-columns: repeat(auto-fill, 60px);
    justify-content: space-between;
    gap: 10px;
  `
);

const ChampionSplash = styled.img(
  () => css`
    cursor: pointer;
    width: 60px;
    height: 60px;
  `
);

export default ChampionRotations;
