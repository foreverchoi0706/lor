import React, { useEffect, useState, memo } from "react";
import { useSelector } from "react-redux";

function Champion({ champions, championId }) {

  const version = useSelector(root=>root.ddragonReducer.version);

  const [name, setName] = useState("");

  useEffect(() => {
    const temp = Object.values(champions.data);
    if (!name) {
      for (let i = 0; i < temp.length; i++) {
        if (parseInt(temp[i].key) === championId) {
          setName(temp[i].id);
          break;
        }
      }
    }
  });

  return (
    <img
      src={`https://ddragon.leagueoflegends.com/cdn/${version}/img/champion/${name}.png`}
      alt={name}
      style={{ width: "20px", height: "20px" }}
    />
  );
}

export default memo(Champion);
