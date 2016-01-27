// ======================
//    Business Logic
// ======================

// Object represents a pair of dice, each Player will have its own Dice object
function Dice() {
  this.dieOne = 1;
  this.dieTwo = 1;
  this.diceValue = 0;
    // diceValue may equal 4 through 12 (potential sums of a roll without 1 on either dice)
    // diceValue may equal 0, indicating one of the dice had a value of 1 (player's turn ends scenario)
    // diceValue may equal "pig out", indicating both dice had a value of 1 (player's turn ends and player loses total score)
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

// Object Player represents a player in the game
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

function Game() {
  this.playerArray = [];
  this.scoreToWin = 100;
  this.activePlayer = 0;
}




// ======================
//  User Interface Logic
// ======================
