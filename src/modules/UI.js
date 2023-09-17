import game from './Game';

class UI {
  static displayInHtml(player1, player2) {
    const player = player1;
    const computer = player2;

    // display boards in html/DOM
    const playerBoard = player.gameboard.grid;
    const computerBoard = computer.gameboard.grid;

    UI.displayPlayerGrid(playerBoard);
    UI.displayComputerGrid(computerBoard);
  }

  // take loop into separate function DRY
  static displayPlayerGrid(playerBoard) {
    const playerGrid = document.getElementById('playerGrid');

    for (let i = 0; i < 10; i += 1) {
      // create rows
      const row = document.createElement('tr');
      for (let j = 0; j < 10; j += 1) {
        // create cells
        const cell = document.createElement('td');
        cell.setAttribute('id', `${i}${j}`);

        // if playerBoard[index][index] is !0, set innerHTML to .value of object
        if (playerBoard[i][j] !== 0) {
          cell.innerHTML = playerBoard[i][j].value;
        }
        // if playerBoard[index][index] is 0, set innerHtml to 0
        if (playerBoard[i][j] === 0) {
          cell.innerHTML = playerBoard[i][j];
        }

        console.log(playerBoard[i][j]);

        row.append(cell);
      }
      playerGrid.append(row);
    }
  }

  static displayComputerGrid(computerBoard) {
    const computerGrid = document.getElementById('computerGrid');

    for (let i = 0; i < 10; i += 1) {
      // create rows
      const row = document.createElement('tr');
      for (let j = 0; j < 10; j += 1) {
        // create cells
        const cell = document.createElement('td');
        cell.setAttribute('id', `${i}${j}`);

        // if board[index][index] is !0, set innerHTML to .value of object
        if (computerBoard[i][j] !== 0) {
          cell.innerHTML = computerBoard[i][j].value;
        }
        // if board[index][index] is 0, set innerHtml to 0
        if (computerBoard[i][j] === 0) {
          cell.innerHTML = computerBoard[i][j];
        }

        console.log(computerBoard[i][j]);

        row.append(cell);
      }
      computerGrid.append(row);
    }
  }
}

export default UI;
