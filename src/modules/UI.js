class UI {
  static displayInHtml(player1, player2) {
    const player = player1;
    const computer = player2;

    // get boards
    const playerBoard = player.gameboard.grid;
    const computerBoard = computer.gameboard.grid;

    // define ID from html
    const playerBoardID = 'playerBoard';
    const computerBoardID = 'computerBoard';

    // display boards in html/DOM
    UI.displayBoard(playerBoard, playerBoardID);
    UI.displayBoard(computerBoard, computerBoardID);
    UI.attackOnClick(player, computer);
    UI.placeShipOnDrop(player, computer);
  }

  static displayBoard(board, id) {
    const grid = document.getElementById(`${id}`);
    grid.innerHTML = '';

    for (let i = 0; i < 10; i += 1) {
      const row = document.createElement('div');
      row.setAttribute('class', 'row');

      for (let j = 0; j < 10; j += 1) {
        const cell = document.createElement('div');
        cell.setAttribute('id', `${id}${i}${j}`);

        if (id === 'playerBoard') {
          cell.setAttribute('class', 'empty');
        } else {
          cell.setAttribute('class', 'computerempty');
        }

        const target = board[i][j];

        // if (id === 'playerBoard') {
        if (
          typeof target === 'object' &&
          !Array.isArray(target) &&
          target !== null
        ) {
          if (target.length === 5) {
            cell.classList.add('aquamarine');
          }
          if (target.length === 4) {
            cell.classList.add('aqua');
          }
          if (target.length === 3) {
            cell.classList.add('blue');
          }
          if (target.length === 2) {
            cell.classList.add('blueviolet');
          }
          if (target.length === 1) {
            cell.classList.add('cadetblue');
          }

          // cell.innerHTML = target.length;
        }
        // }
        if (target === 'hit') {
          // console.log('hit');
          // cell.innerHTML = 'SH!';
          cell.style.backgroundColor = 'red';
        }

        if (target === 'missed') {
          // console.log('missed');
          // cell.innerHTML = 'M';
          cell.style.backgroundColor = 'yellow';
        }

        if (target.length === 0) {
          // console.log('empty');
          cell.innerHTML = '';
        }

        row.append(cell);
      }

      grid.append(row);
    }
  }

  static attackOnClick(player, computer) {
    const fields = document.querySelectorAll('.computerempty');
    fields.forEach((field) => {
      field.addEventListener('click', (e) => {
        const ID = e.target.id;
        const x = ID.slice(-2, -1);
        const y = ID.slice(-1);

        player.attack(x, y);
        // UI.displayInHtml(player, computer);

        // Timeout for later :)
        UI.displayInHtml(player, computer);
      });
    });
  }

  static placeShipOnDrop(player, computer) {
    const ships = document.querySelectorAll('.fill');
    const boxes = document.querySelectorAll('.empty');

    // Drag Functions

    // ship
    function dragStart(e) {
      e.dataTransfer.clearData();
      e.dataTransfer.setData('length', e.target.dataset.length);
      e.dataTransfer.setData('orientation', e.target.dataset.orientation);

      // this.className += ' hold';
      setTimeout(() => (this.className = 'invisible'), 0);
    }

    function dragEnd() {
      // this.className = 'fill ship';
      UI.displayInHtml(player, computer);
    }

    function dragOver(e) {
      e.preventDefault();
    }

    function dragEnter(e) {
      e.preventDefault();

      this.className += ' hovered';
    }

    function dragLeave() {
      // console.log('leave');
      this.className = 'empty';
    }

    function dragDrop(e) {
      const length = +e.dataTransfer.getData('length');
      const orientation = e.dataTransfer.getData('orientation');

      this.className = 'empty';
      const ID = this.id;
      const x = +ID.slice(-2, -1);
      const y = +ID.slice(-1);

      player.placeShip(x, y, length, orientation);
    }

    boxes.forEach((box) => {
      box.addEventListener('dragover', dragOver);
      box.addEventListener('dragenter', dragEnter);
      box.addEventListener('dragleave', dragLeave);
      box.addEventListener('drop', dragDrop);
    });

    ships.forEach((ship) => {
      if (!ship.hasEventlistener) {
        ship.addEventListener('dragstart', dragStart);
        ship.addEventListener('dragend', dragEnd);
        ship.hasEventlistener = true;
      }
    });
  }

  static changeDirection() {
    const button = document.querySelector('#changeDirection');
    button.addEventListener('click', () => {
      const ships = document.querySelectorAll('.ship');
      const shipContainer = document.getElementById('ships');

      ships.forEach((ship) => {
        if (ship.dataset.orientation === 'x') {
          button.innerText = 'Switch to X';
          shipContainer.className = 'rotate';

          ship.setAttribute('data-orientation', 'y');
          // add class with new direction
        } else {
          button.innerText = 'Switch to Y';
          shipContainer.className = 'ships';

          ship.setAttribute('data-orientation', 'x');
          // add class with new direction
        }

        console.log(ship.dataset.orientation);
      });
      // console.log(ships);
    });
  }

  static checkWinner(player, computer) {
    setInterval(() => {
      if (player.gameboard.checkGameover()) {
        alert('Computer won!');
      }
      if (computer.gameboard.checkGameover()) {
        alert('Player won!');
      }
    }, 1000);
  }
}

export default UI;
