// Build a Ship class with
// length
// number of times they've been hit
// sunk yes or no

class Ship {
  constructor(length) {
    this.length = length;
  }

  timesHit = 0;

  sank = false;

  hit() {
    this.timesHit += 1;
    this.isSunk();
  }

  isSunk() {
    if (this.timesHit === this.length) {
      this.sank = true;
    }
  }
}

export default Ship;
