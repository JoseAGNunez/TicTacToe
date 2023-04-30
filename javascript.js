/* eslint-disable no-plusplus */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable quotes */
/* eslint-disable prefer-const */

// function Players(player) {
//   return { player };
// }
// const player1 = Players();
// const player2 = Players();
const Players = (() => {
  const playersForm = document.querySelector(".playersForm");
  playersForm.addEventListener("submit", (e) => {
    e.preventDefault();
  });
  return { playersForm };
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
