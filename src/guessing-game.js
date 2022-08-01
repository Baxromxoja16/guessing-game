class GuessingGame {
  constructor() {}

  setRange(min, max) {
    this.great = min;
    this.low = max;
  }

  guess() {
    this.answ = Math.round((this.great + this.low) / 2);
    return this.answ;
  }

  lower() {
    this.low = this.answ;
  }

  greater() {
    this.great = this.answ;
  }
}

module.exports = GuessingGame;
