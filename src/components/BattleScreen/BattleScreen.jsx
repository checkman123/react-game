import React, { useState } from "react";
import { randomOpponent, playerStats } from "../../shared/characters";
import { PlayerSummary } from "../Character";
import styles from "./styles.module.css";

export const BattleScreen = () => {
  const opponent = randomOpponent();
  console.log(opponent);
  // const [opponentHealth, setOpponentHealth] = useState(opponentStats.maxHealth);
  // const [name, setName] = useState(playerStats.maxHealth);
  // const [playerHealth, setPlayerHealth] = useState(playerStats.maxHealth);

  return (
    <div className={styles.main}>
      <div className={styles.opponent}>
        <div className={styles.summary}>
          <PlayerSummary />
        </div>
      </div>
      <div className={styles.player}>
        <div className={styles.summary}>
          <PlayerSummary player={true} />
        </div>
      </div>
    </div>
  );
};
