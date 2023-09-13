class Ship {
  constructor(length) {
    this.length = length;
  }

  type = this.shipType();

  timesHit = 0;

  sank = false;

  hit() {
    this.timesHit += 1;
    if (this.timesHit === this.length) {
      this.isSunk();
    }
  }

  isSunk() {
    this.sank = true;
    console.log('Ship destroyed');
  }

  shipType() {
    const shipSizes = {
      1: 'Patrol Boat',
      2: 'Cruiser',
      3: 'Submarine',
      4: 'Battleship',
      5: 'Carrier',
    };

    if (this.length >= 1 && this.length <= 5) {
      console.log(`Ship size ${this.length}`);
      this.type = shipSizes[this.length];
    }

    if (this.length > 5) {
      console.log('Invalid ship size');
    }
  }
}

export default Ship;
