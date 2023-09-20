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
  // player.placeStatic();
  // computer
  // computer.placeStaticRandom();
  computer.placeShipRandom(5);
  computer.placeShipRandom(4);
  computer.placeShipRandom(4);
  computer.placeShipRandom(3);
  computer.placeShipRandom(3);
  computer.placeShipRandom(3);
  computer.placeShipRandom(2);
  computer.placeShipRandom(2);
  computer.placeShipRandom(2);
  computer.placeShipRandom(1);
  computer.placeShipRandom(1);

  // display boards in html
  UI.displayInHtml(player, computer);

  // UI.placeShipOnDrop(player, computer);
  // check for winner
  // UI.checkWinner(player, computer);
}

export default game;
