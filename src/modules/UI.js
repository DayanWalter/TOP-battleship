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
    UI.attackOnClick(player, computer);
  }

  static displayBoard(board, id) {
    const grid = document.getElementById(`${id}`);
    grid.innerHTML = '';

    for (let i = 0; i <= 9; i += 1) {
      const row = document.createElement('tr');
      for (let j = 0; j <= 9; j += 1) {
        const cell = document.createElement('td');
        cell.setAttribute('id', `${id}${i}${j}`);

        // if board[index][index] is !0, set innerHTML to .value of object
        if (board[i][j] !== 0) {
          cell.innerHTML = board[i][j].value;
        }
        // if board[index][index] is 0, set innerHtml to 0
        if (board[i][j] === 0) {
          cell.innerHTML = 0;
        }
        if (board[i][j] === 'x') {
          cell.innerHTML = 'XXX';
        }
        if (board[i][j] === 'hit') {
          cell.innerHTML = 'HIT';
        }

        row.append(cell);
      }

      grid.append(row);
    }

    // Add all eventlistener
  }

  static attackOnClick(player, computer) {
    // addeventlistener on click
    // attack on click
    const field = document.getElementById('computerBoard00');
    field.addEventListener('click', () => {
      console.log('Wokrs?');
      UI.displayInHtml(player, computer);
    });
  }

  // static renderBoard(player1, player2) {}
}

export default UI;
