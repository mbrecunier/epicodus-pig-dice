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

function Player(name) {
  this.name = name;
  this.turnScore = 0;
  this.totalScore = 0;
  this.isTurn = false;
  this.dice = new Dice;
}

Player.prototype.reactToDiceValue = function() {
  if (this.dice.diceValue === "pig out") {
    this.turnScore = 0;
    this.totalScore = 0;
    this.isTurn = false;
  } else if (this.dice.diceValue === 0) {
    this.turnScore = 0;
    this.isTurn = false;
  } else {
    this.turnScore += this.dice.diceValue;
  }
}

Player.prototype.chooseToEndTurn = function() {
  this.totalScore += this.turnScore;
  this.turnScore = 0;
  this.isTurn = false;
}
