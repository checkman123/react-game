import React, { useState } from "react";
import { BattleMenu } from "../../components";
import { PlayerSummary } from "../Character";
import styles from "./styles.module.css";

export const BattleScreen = ({ label, player, opponent }) => {
  //get a random opponent
  //const opponent = randomOpponent();

  const [opponentHealth, setOpponentHealth] = useState(opponent.maxHealth);
  const [playerHealth, setPlayerHealth] = useState(player.maxHealth);

  return (
    <div className={styles.main}>
      <div className={styles.opponent}>
        <div className={styles.summary}>
          <PlayerSummary
            health={opponent.health}
            name={opponent.name}
            level={opponent.level}
            maxHealth={opponent.maxHealth}
          />
        </div>
      </div>
      <div className={styles.player}>
        <div className={styles.summary}>
          <PlayerSummary
            player={true}
            health={player.health}
            name={player.name}
            level={player.level}
            maxHealth={player.maxHealth}
          />
        </div>
      </div>

      <div className={styles.hudChild}>
        <BattleMenu
          onAttack={() => {
            console.log("atk");
          }}
          onMagic={() => {
            console.log("magic");
          }}
          onHeal={() => {
            console.log("heal");
          }}
        />
      </div>
    </div>
  );
};
