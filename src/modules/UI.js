import game from './Game';

class UI {
  static displayInHtml(player1, player2) {
    const player = player1;
    const computer = player2;

    // display boards in html/DOM
    const humanBoard = player.gameboard.grid;
    const computerBoard = computer.gameboard.grid;

    const grid = document.getElementById('grid');

    for (let i = 0; i < 10; i += 1) {
      // create rows
      // console.log(humanBoard[i]);
      const row = document.createElement('tr');
      for (let j = 0; j < 10; j += 1) {
        // create cells
        const cell = document.createElement('td');
        cell.setAttribute('id', `${i}${j}`);
        cell.innerHTML = humanBoard[i][j];
        console.log(humanBoard[i][j]);

        row.append(cell);
      }
      grid.append(row);
    }
    // console.log(humanBoard[0]);
  }
  //
}

export default UI;
