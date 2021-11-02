import React from "react";
import { shallowEqual, useSelector } from "react-redux";
//components
import Champion from "./Champion";
import Spell from "./Spell";
import Items from "./Items";
//styles
import styles from "../../styles/summonerInfo/Team.module.scss";
//util
import { laneDivision } from "../../util/division";

function Team({ mapId, division, win, team }) {
  const { data } = useSelector(
    (rootReducer) => rootReducer.ddragonReducer.ddragon,
    shallowEqual
  );

  return (
    <div className={styles.Team}>
      <div>
        <strong
          className="Team_title"
          style={{
            color: division === "BLUE" ? "blue" : "red",
          }}
        >
          {division} TEAM
        </strong>
        &nbsp;
        {win === "Win" ? <strong>승리</strong> : <strong>패배</strong>}
      </div>
      <div className={styles.Team_entries}>
        {team.map((participant) => (
          <div key={participant.participantId}>
            <div>
              <strong className="Team_summonerName">
                {participant.summonerName}
              </strong>
              <strong className="Team_kda">
                (
                {`${participant.kills}/${participant.deaths}/${participant.assists}`}
                )
              </strong>
              <strong className="Team_kda_avg">
                {`KDA ${(
                  (participant.kills + participant.assists) /
                  participant.deaths
                ).toFixed(1)}`}
              </strong>
            </div>
            <div className={styles.Team_under}>
              {mapId === 11 && (
                <img
                  className={styles.Team_lane}
                  src={laneDivision[participant.lane]}
                  alt={participant.lane}
                />
              )}
              <Champion
                champions={data.champions}
                championId={participant.championId}
              />
              <Spell
                spells={data.spells}
                spell1Id={participant.summoner1Id}
                spell2Id={participant.summoner2Id}
              />
              <Items item0={participant.item0} item1={participant.item1} item2={participant.item2} item3={participant.item3} item4={participant.item4} item5={participant.item5} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Team;
