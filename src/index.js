// import 'normalize.css';
// import '@fortawesome/fontawesome-free/css/all.css';
// import './style.css';
import Ship from './modules/Ship';
import Gameboard from './modules/Gameboard';

const testBoard = new Gameboard();

testBoard.placeShip(0, 0, 2);
console.log(testBoard.grid);
