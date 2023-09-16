import game from './Game';

class UI {
  static displayInHtml(player1, player2) {
    const human = player1;
    const computer = player2;

    // display boards in html/DOM
    const humanBoard = human.gameboard.grid;
    const computerBoard = computer.gameboard.grid;

    console.log(humanBoard);
  }
  //
}

export default UI;
