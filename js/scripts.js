function Dice() {
  this.dieOne = 1;
  this.dieTwo = 1;
  this.score = 0;
}
Dice.prototype.roll = function() {
  this.dieOne = Math.floor((Math.random() * 6) + 1);
  this.dieTwo = Math.floor((Math.random() * 6) + 1);
}

Dice.prototype.refreshScore = function() {
  if (this.dieOne === 1 && this.dieTwo === 1) {
    this.score = "pig out";
  } else if (this.dieOne === 1 || this.dieTwo === 1) {
    this.score = 0;
  } else {
    this.score = this.dieOne + this.dieTwo;
  }
}
