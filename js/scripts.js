function Dice() {
  this.dieOne = 1;
  this.dieTwo = 1;
  this.diceValue = 0;
}
Dice.prototype.roll = function() {
  this.dieOne = Math.floor((Math.random() * 6) + 1);
  this.dieTwo = Math.floor((Math.random() * 6) + 1);
  if (this.dieOne === 1 && this.dieTwo === 1) {
    this.diceValue = "pig out";
  } else if (this.dieOne === 1 || this.dieTwo === 1) {
    this.diceValue = 0;
  } else {
    this.diceValue = this.dieOne + this.dieTwo;
  }
}
