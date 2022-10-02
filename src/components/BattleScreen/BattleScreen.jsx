import React, { useState } from "react";
import { BattleMenu } from "../../components";
import { playerStats } from "../../shared/characters";
import { PlayerSummary } from "../Character";
import styles from "./styles.module.css";

export const BattleScreen = ({ label, player, opponent }) => {
  //get a random opponent
  //const opponent = randomOpponent();

  return (
    <div className={styles.container__menu}>
      <div className={styles.opponent}>
        <div className={styles.summary}>
          <PlayerSummary character={opponent} />
        </div>
      </div>

      <div className={styles.gameImages}>
        <div className={styles.opponentSprite}>
          <img
            alt={opponent.name}
            src={opponent.img}
            className={styles.images}
          />
        </div>

        <div className={styles.playerSprite}>
          <img alt={player.name} src={player.img} className={styles.images} />
        </div>
      </div>

      <div className={styles.player}>
        <div className={styles.summary}>
          <PlayerSummary player={true} character={player} />
          <div className={styles.hud}>
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
        </div>
      </div>
    </div>
  );
};
