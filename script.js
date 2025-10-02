const gameBoard = document.querySelector(".board");
const startButton = document.querySelector('.board__button');
const input = document.querySelector('.board__input');

startButton.addEventListener("click", (event) => {
  event.preventDefault()
  let columns = input.value;
  let count;
  if (columns >= 2 && columns <= 6 && columns % 2 == 0) {
    count = columns * columns;
  } else {
    input.value = 4;
  }
  createBoard();
});

function createBoard() {
  gameBoard.textContent = "";
}