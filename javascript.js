/* eslint-disable no-console */
/* eslint-disable no-plusplus */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable quotes */
/* eslint-disable prefer-const */

const Players = (() => {
  let i = 1;
  let player1Name;
  let player2Name;

  const getPlayerNames = document.querySelector(".playersForm");
  getPlayerNames.addEventListener("submit", (e) => {
    e.preventDefault();
    const getPlayerName = document.getElementById("playerName");
    const playerNameLabel = document.getElementById("playerNameLabel");

    if (i < 2) {
      player1Name = getPlayerName.value;
      i++;
      getPlayerName.value = "";
      playerNameLabel.textContent = "Player 2 Name";
    } else {
      player2Name = getPlayerName.value;
      getPlayerNames.remove();
    }
  });
  const player1 = () => player1Name;
  const player2 = () => player2Name;
  return { player1, player2 };
})();

const Gameboard = (() => {
  const renderGameboard = () => {
    for (let i = 0; i < 9; i++) {
      const gameboard = document.querySelector(".gameboard");
      const gameboardSquares = document.createElement("div");
      gameboardSquares.className = `gameboardSquare${i}`;
      gameboardSquares.textContent = "";
      gameboard.appendChild(gameboardSquares);
    }
  };

  const setSquare = () => {
    for (let i = 0; i < 9; i++) {
      const gameboardSquare = document.querySelector(`.gameboardSquare${i}`);
      if (gameboardSquare.textContent === "") {
        gameboardSquare.addEventListener("click", () => {
          gameboardSquare.textContent = "X";
        });
      }
    }
  };

  return { renderGameboard, setSquare };
})();
Gameboard.renderGameboard();
Gameboard.setSquare();
