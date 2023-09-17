import game from './Game';

class UI {
  static displayInHtml(player1, player2) {
    const player = player1;
    const computer = player2;

    // get boards
    const playerBoard = player.gameboard.grid;
    const computerBoard = computer.gameboard.grid;

    // define ID from html
    const playerID = 'playerBoard';
    const computerID = 'computerBoard';

    // display boards in html/DOM
    UI.displayBoard(playerBoard, playerID);
    UI.displayBoard(computerBoard, computerID);
  }

  // take loop into separate function DRY
  static displayBoard(board, id) {
    const grid = document.getElementById(`${id}`);

    for (let i = 0; i < 10; i += 1) {
      const row = document.createElement('tr');
      for (let j = 0; j < 10; j += 1) {
        const cell = document.createElement('td');

        // if board[index][index] is !0, set innerHTML to .value of object
        if (board[i][j] !== 0) {
          cell.innerHTML = board[i][j].value;
        }
        // if board[index][index] is 0, set innerHtml to 0
        if (board[i][j] === 0) {
          cell.innerHTML = board[i][j];
        }

        row.append(cell);
      }

      grid.append(row);
    }
  }
}

export default UI;
