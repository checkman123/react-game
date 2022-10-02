import React, { useState } from "react";
import { StartMenu, BattleScreen } from "../../components";
import { randomOpponent, playerStats } from "../../shared";
import styles from "./styles.module.css";
import { CharacterContext } from "../../Contexts";

export const App = () => {
  const [mode, setMode] = useState("start");
  const [characters, setCharacters] = useState({
    player: playerStats,
    opponent: {},
  });

  const OnClickHandler = (mode) => {
    switch (mode) {
      case "battle":
        setCharacters((prev) => ({ ...prev, opponent: randomOpponent() }));
        setMode("battle");
        break;

      default:
        break;
    }
  };
  console.log(characters);
  return (
    <div className={styles.container}>
      <CharacterContext.Provider
        value={{ characters, setCharacters, mode, setMode }}
      >
        {mode === "start" && <StartMenu OnClickHandler={OnClickHandler} />}
        {mode === "battle" && (
          <BattleScreen
            mode={mode}
            player={characters.player}
            opponent={characters.opponent}
          />
        )}
        {mode === "gameOver" && <>Game Over</>}
      </CharacterContext.Provider>
    </div>
  );
};
