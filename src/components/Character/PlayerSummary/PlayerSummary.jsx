import React from "react";
import { HealthBar } from "../HealthBar";
import styles from "./styles.module.css";

const red = "#821200";
const blue = "#1953cb";

export const PlayerSummary = ({
  player = false,
  name,
  level,
  maxHealth,
  health,
}) => {
  return (
    <div
      className={styles.main}
      style={{ backgroundColor: player ? red : blue }}
    >
      <div className={styles.info}>
        <div className={styles.name}>{name}</div>
        <div className={styles.level}>Lvl: {level}</div>
      </div>
      <div className={styles.health}>
        <HealthBar label="HP" value={health} maxValue={maxHealth} />
      </div>
    </div>
  );
};
