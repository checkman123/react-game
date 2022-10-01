import React from "react";
import styles from "./styles.module.css";

export const StartMenu = ({ OnClickHandler }) => {
  return (
    <div className={styles.container__menu}>
      <button
        className={styles.btn__start}
        onClick={() => OnClickHandler("battle")}
      >
        START
      </button>
    </div>
  );
};
