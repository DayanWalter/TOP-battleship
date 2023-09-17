import Player from './Player';
import UI from './UI';

function game() {
  // initialize player
  const player = new Player('Player');
  const computer = new Player('Computer');

  // set opponents
  player.setOpponent(computer);
  computer.setOpponent(player);

  // let the player place the ships(static at first)
  // player
  player.placeStatic();

  // computer
  computer.placeStaticRandom();

  // display boards in html
  UI.displayInHtml(player, computer);

  // player.attack(0, 0);
  // // render board with Gameboard class
  // UI.displayInHtml(player, computer);

  // UI.renderBoard(player, computer);

  // while(player1.hitShots <= 30 && player2.hitShots <= 30){
  // player1.attacks(0,0)
  // UI.renderboards()
  // if (  player1.opponent.gameboard.grid[0][0] === )
  // hit, player1 shots again
  // UI.renderboards()
  // else
  // player2 shots
  // UI.renderboards()
  // if hit, player2 shots again
  // UI.renderboards()

  // }

  // if(player1.hitShots >= 30){
  // player2 won
  // }
  // if(player2.hitShots >= 30){
  // player1 won
  // }
}

export default game;
