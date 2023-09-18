// import 'normalize.css';
// import '@fortawesome/fontawesome-free/css/all.css';
import './style.css';
import game from './modules/Game';

game();
const fill = document.querySelector('.fill');
const empties = document.querySelectorAll('.empty');

// Drag Functions
function dragStart() {
  console.log('start');
  this.className += ' hold';
  setTimeout(() => (this.className = 'invisible'), 0);
}

function dragEnd() {
  console.log('end');
  this.className = 'fill ship';
}

function dragOver(e) {
  e.preventDefault();
  console.log('over');
}

function dragEnter(e) {
  e.preventDefault();
  console.log('enter');

  this.className += ' hovered';
}

function dragLeave() {
  console.log('leave');
  this.className = 'empty';
}

function dragDrop() {
  console.log('drop');
  this.className = 'empty';
  this.append(fill);
}
// Fill listeners
// fill.addEventListener('dragstart', dragStart);
// fill.addEventListener('dragend', dragEnd);

// Loop through empty boxes and add listeners
empties.forEach((empty) => {
  empty.addEventListener('dragover', dragOver);
  empty.addEventListener('dragenter', dragEnter);
  empty.addEventListener('dragleave', dragLeave);
  empty.addEventListener('drop', dragDrop);
});

// fill.forEach((ship) => {
//   ship.addEventListener('dragstart', dragStart);
//   ship.addEventListener('dragend', dragEnd);
// });
fill.addEventListener('dragstart', dragStart);
fill.addEventListener('dragend', dragEnd);
