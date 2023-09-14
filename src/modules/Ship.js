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
    // console.log(`${this.type} destroyed!`);
  }

  shipType() {
    const shipSizes = {
      // 2
      1: 'Patrol Boat',
      // 3
      2: 'Cruiser',
      // 3
      3: 'Submarine',
      // 2
      4: 'Battleship',
      // 1
      5: 'Carrier',
      // 30 fields in total
    };

    if (this.length >= 1 && this.length <= 5) {
      this.type = shipSizes[this.length];
    }

    if (this.length > 5) {
      // console.log('Invalid ship size');
    }
  }
}

export default Ship;
