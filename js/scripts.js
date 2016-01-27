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
  this.score = "pig out";
}
