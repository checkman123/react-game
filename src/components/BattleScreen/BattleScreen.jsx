import React, { useState, useContext, useEffect } from "react";
import { BattleMenu } from "./BattleMenu";
import { PlayerSummary } from "../Character";
import styles from "./styles.module.css";
import { BattleAnnouncer } from "./BattleAnnouncer";
import { CharacterContext } from "../../Contexts";
import { useAIOpponents, useBattleSequence } from "../../hooks";

export const BattleScreen = () => {
  //grab the character from the context store
  const { characters, setCharacters } = useContext(CharacterContext);

  const [sequence, setSequence] = useState({});

  const {
    turn,
    inSequence,
    playerAnimation,
    opponentAnimation,
    announcerMessage,
  } = useBattleSequence(sequence);

  const aiChoice = useAIOpponents(turn);

  useEffect(() => {
    if (aiChoice && turn === 1 && !inSequence) {
      setSequence({ turn, mode: aiChoice });
    }
  }, [turn, aiChoice, inSequence]);

  let player = characters.player;
  let opponent = characters.opponent;

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
            className={`${styles.images} ${styles[opponentAnimation]}`}
          />
        </div>

        <div className={styles.playerSprite}>
          <img
            alt={player.name}
            src={player.img}
            className={`${styles.images} ${styles[playerAnimation]}`}
          />
        </div>
      </div>

      <div className={styles.player}>
        <div className={styles.summary}>
          <PlayerSummary player={true} character={player} />
        </div>
        <div className={styles.hud}>
          <div className={styles.hudChild}>
            <BattleAnnouncer
              message={announcerMessage || `What will ${player.name} do?`}
            />
          </div>
          <div className={styles.hudChild}>
            <BattleMenu
              onAttack={() => {
                setSequence({ turn, mode: "attack" });
              }}
              onMagic={() => {
                setSequence({ turn, mode: "magic" });
              }}
              onHeal={() => {
                setSequence({ turn, mode: "heal" });
              }}
              onRun={() => {
                setSequence({ turn, mode: "run" });
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
