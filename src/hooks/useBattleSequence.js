import React, { useState, useContext, useEffect } from "react";
import { CharacterContext } from "../Contexts";
import { attack, magic, heal, wait, run } from "../shared";

export const useBattleSequence = (sequence) => {
  const { characters, setCharacters } = useContext(CharacterContext);
  //turn determine who go first 0 = player, 1 = enemy
  const [turn, setTurn] = useState(0);
  const [inSequence, setInSequence] = useState(false);
  const [announcerMessage, setAnnouncerMessage] = useState("");
  const [playerAnimation, setPlayerAnimation] = useState("static");
  const [opponentAnimation, setOpponentAnimation] = useState("static");

  useEffect(() => {
    const { mode, turn } = sequence;
    let player = characters.player;
    let opponent = characters.opponent;

    if (mode) {
      const attacker = turn === 0 ? player : opponent;
      const receiver = turn === 0 ? opponent : player;

      switch (mode) {
        case "attack": {
          console.log("atk");
          console.log("enemy hp:", opponent.health);
          console.log("player hp: ", player.health);
          const damage = attack({ attacker, receiver });

          (async () => {
            setInSequence(true);
            setAnnouncerMessage(`${attacker.name} has chosen to attack!`);
            await wait(1000);

            turn === 0
              ? setPlayerAnimation("attack")
              : setOpponentAnimation("attack");
            await wait(100);

            turn === 0
              ? setPlayerAnimation("static")
              : setOpponentAnimation("static");
            await wait(500);

            turn === 0
              ? setOpponentAnimation("damage")
              : setPlayerAnimation("damage");
            await wait(750);

            turn === 0
              ? setOpponentAnimation("static")
              : setPlayerAnimation("static");
            setAnnouncerMessage(`${receiver.name} felt that!`);

            turn === 0
              ? setCharacters((prev) => ({
                  ...prev,
                  opponent: {
                    ...prev.opponent,
                    health:
                      opponent.health - damage > 0
                        ? opponent.health - damage
                        : 0,
                  },
                }))
              : setCharacters((prev) => ({
                  ...prev,
                  player: {
                    ...prev.player,
                    health:
                      player.health - damage > 0 ? player.health - damage : 0,
                  },
                })); // We don't want a negative HP.
            await wait(2000);

            setAnnouncerMessage(`Now it's ${receiver.name} turn!`);
            await wait(1500);

            setTurn(turn === 0 ? 1 : 0);
            setInSequence(false);
            console.log("after");
            console.log("enemy hp:", opponent.health);
            console.log("player hp: ", player.health);
          })();

          break;
        }

        case "magic": {
          console.log("magic");
          const damage = magic({ attacker, receiver });

          (async () => {
            setInSequence(true);
            setAnnouncerMessage(`${attacker.name} has cast a spell!`);
            await wait(1000);

            turn === 0
              ? setPlayerAnimation("magic")
              : setOpponentAnimation("magic");
            await wait(1000);

            turn === 0
              ? setPlayerAnimation("static")
              : setOpponentAnimation("static");
            await wait(500);

            turn === 0
              ? setOpponentAnimation("damage")
              : setPlayerAnimation("damage");
            await wait(750);

            turn === 0
              ? setOpponentAnimation("static")
              : setPlayerAnimation("static");
            setAnnouncerMessage(`${receiver.name} doesn't know what hit them!`);
            turn === 0
              ? setCharacters((prev) => ({
                  ...prev,
                  opponent: {
                    ...prev.opponent,
                    health:
                      opponent.health - damage > 0
                        ? opponent.health - damage
                        : 0,
                  },
                }))
              : setCharacters((prev) => ({
                  ...prev,
                  player: {
                    ...prev.player,
                    health:
                      player.health - damage > 0 ? player.health - damage : 0,
                  },
                })); // We don't want a negative HP.
            await wait(350);

            setAnnouncerMessage(`Now it's ${receiver.name}'s turn!`);
            await wait(150);

            setTurn(turn === 0 ? 1 : 0);
            setInSequence(false);
          })();

          break;
        }

        case "heal": {
          console.log("heal");
          const recovered = heal({ receiver: attacker });

          (async () => {
            setInSequence(true);
            setAnnouncerMessage(`${attacker.name} has chosen to heal!`);
            await wait(1000);

            turn === 0
              ? setPlayerAnimation("magic")
              : setOpponentAnimation("magic");
            await wait(1000);

            turn === 0
              ? setPlayerAnimation("static")
              : setOpponentAnimation("static");
            await wait(500);

            setAnnouncerMessage(`${attacker.name} has recovered health.`);
            turn === 0
              ? setCharacters((prev) => ({
                  ...prev,
                  player: {
                    ...prev.player,
                    health:
                      player.health + recovered <= attacker.maxHealth
                        ? player.health + recovered
                        : attacker.maxHealth,
                  },
                }))
              : setCharacters((prev) => ({
                  ...prev,
                  opponent: {
                    ...prev.opponent,
                    health:
                      opponent.health + recovered <= attacker.maxHealth
                        ? opponent.health + recovered
                        : attacker.maxHealth,
                  },
                })); // We don't want to set HP more than the max
            await wait(2500);

            setAnnouncerMessage(`Now it's ${receiver.name}'s turn!`);
            await wait(1500);

            setTurn(turn === 0 ? 1 : 0);
            setInSequence(false);
          })();

          break;
        }

        default:
          break;
      }
    }
  }, [sequence]);

  return {
    turn,
    inSequence,
    announcerMessage,
    playerAnimation,
    opponentAnimation,
  };
};
