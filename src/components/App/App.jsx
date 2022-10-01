import React, { useState } from "react";
import { StartMenu, BattleScreen } from "../../components";
import styles from "./styles.module.css";

export const App = () => {
  const [mode, setMode] = useState("start");

  const OnClickHandler = (mode) => {
    switch (mode) {
      case "battle":
        setMode("battle");
        break;

      default:
        break;
    }
  };

  return (
    <div className={styles.container}>
      {mode === "start" && <StartMenu OnClickHandler={OnClickHandler} />}
      {mode === "battle" && <BattleScreen />}
      {mode === "gameOver" && <>Game Over</>}
    </div>
  );
};
