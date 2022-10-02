import React from "react";
import { Bar } from "../Bar";
import styles from "./styles.module.css";

const red = "#821200";
const blue = "#1953cb";

export const PlayerSummary = ({ player = false, character }) => {
  return (
    <div
      className={styles.main}
      style={{ backgroundColor: player ? red : blue }}
    >
      <div className={styles.info}>
        <div className={styles.name}>{character.name}</div>
        <div className={styles.level}>Lvl: {character.level}</div>
      </div>
      <div
        className={styles.health}
      >{`${character.health} / ${character.maxHealth}`}</div>
    </div>
  );
};
