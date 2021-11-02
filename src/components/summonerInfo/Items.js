import React, { memo } from "react";
import { useSelector } from "react-redux";
//style
import styles from "../../styles/summonerInfo/Items.module.scss";

const NULL_ITEM_URL ="https://cdn3.iconfinder.com/data/icons/game-3-fill/512/close-512.png";

const NULL_ITEM_ALT ="null_item";

function Items({ item0, item1, item2, item3, item4, item5 }) {
  
  const version = useSelector(root=>root.ddragonReducer.version);

  return (
    <div className={styles.Items}>
      {item0 ? <img src={`http://ddragon.leagueoflegends.com/cdn/${version}/img/item/${item0}.png`} alt={item0}/> : <img src={NULL_ITEM_URL} alt={NULL_ITEM_ALT}/>}
      {item1 ? <img src={`http://ddragon.leagueoflegends.com/cdn/${version}/img/item/${item1}.png`} alt={item1}/> : <img src={NULL_ITEM_URL} alt={NULL_ITEM_ALT}/>}
      {item2 ? <img src={`http://ddragon.leagueoflegends.com/cdn/${version}/img/item/${item2}.png`} alt={item2}/> : <img src={NULL_ITEM_URL} alt={NULL_ITEM_ALT}/>}
      {item3 ? <img src={`http://ddragon.leagueoflegends.com/cdn/${version}/img/item/${item3}.png`} alt={item3}/> : <img src={NULL_ITEM_URL} alt={NULL_ITEM_ALT}/>}
      {item4 ? <img src={`http://ddragon.leagueoflegends.com/cdn/${version}/img/item/${item4}.png`} alt={item4}/> : <img src={NULL_ITEM_URL} alt={NULL_ITEM_ALT}/>}
      {item5 ? <img src={`http://ddragon.leagueoflegends.com/cdn/${version}/img/item/${item5}.png`} alt={item5}/> : <img src={NULL_ITEM_URL} alt={NULL_ITEM_ALT}/>}
    </div>
  );
}

export default memo(Items);
