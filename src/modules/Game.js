import Player from './Player';

function game() {
  // initialize player
  const player1 = new Player('Human');
  const player2 = new Player('Computer');

  // set opponents
  player1.setOpponent(player2);
  player2.setOpponent(player1);

  // let the player place the ships(static at first)
  // Player1
  player1.placeShip(0, 0, 5);
  player1.placeShip(1, 0, 4);
  player1.placeShip(2, 0, 4);
  player1.placeShip(3, 0, 3);
  player1.placeShip(4, 0, 3);
  player1.placeShip(5, 0, 3);
  player1.placeShip(6, 0, 2);
  player1.placeShip(7, 0, 2);
  player1.placeShip(8, 0, 2);
  player1.placeShip(9, 0, 1);
  player1.placeShip(9, 1, 1);

  // console.log(player1.opponent.gameboard.grid);

  // Player2
  player2.placeShip(0, 0, 5);
  player2.placeShip(1, 0, 4);
  player2.placeShip(2, 0, 4);
  player2.placeShip(3, 0, 3);
  player2.placeShip(4, 0, 3);
  player2.placeShip(5, 0, 3);
  player2.placeShip(6, 0, 2);
  player2.placeShip(7, 0, 2);
  player2.placeShip(8, 0, 2);
  player2.placeShip(9, 0, 1);
  player2.placeShip(9, 1, 1);

  // display boards in html

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
  return { player1, player2 };
}

export default game;
