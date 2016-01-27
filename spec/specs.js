describe('Dice', function() {
  // check the initial values
  it('creates a Dice object with the proper initial properties', function() {
    var testDice = new Dice();
    expect(testDice.dieOne).to.equal(1);
    expect(testDice.dieTwo).to.equal(1);
    expect(testDice.diceValue).to.equal(0);
  });

  // check roll method
  it('.roll() method assigns two new integer values to dieOne and dieTwo properties', function() {
    var testDice = new Dice();
    testDice.roll();
    expect(testDice.dieOne % 1).to.equal(0);
    expect(testDice.dieTwo % 1).to.equal(0);
    expect(testDice.dieOne > 0 && testDice.dieOne < 7).to.equal(true);
    expect(testDice.dieTwo > 0 && testDice.dieTwo < 7).to.equal(true);
  });


  it('method .roll() will also update this.diceValue', function() {
    var testDice = new Dice();
    testDice.roll();
    if (testDice.dieOne === 1 || testDice.dieTwo === 1) {
      expect(testDice.diceValue).to.equal(0);
    } else if (testDice.dieOne === 1 && testDice.dieTwo === 1) {
      expect(testDice.diceValue).to.equal('pig out');
    } else {
      expect(testDice.dieOne + testDice.dieTwo).to.equal(testDice.diceValue);
    }
  });
});

describe('Player', function() {
  it("will create a Player object with the following properties", function() {
    var testPlayer = new Player("Michelle");
    expect(testPlayer.name).to.equal("Michelle");
    expect(testPlayer.turnScore).to.equal(0);
    expect(testPlayer.totalScore).to.equal(0);
    expect(testPlayer.isTurn).to.equal(false);
    expect(testPlayer.dice).to.eql(new Dice);
  });

  it("has a method reactToDiceValue that updates player properties properly", function() {
    var testPlayer = new Player("Michelle");

    // check if method handles "pig out"
    testPlayer.dice.diceValue = "pig out";
    testPlayer.isTurn = true;
    testPlayer.turnScore = 25;
    testPlayer.totalScore = 102;
    testPlayer.reactToDiceValue();
    expect(testPlayer.isTurn).to.equal(false);
    expect(testPlayer.turnScore).to.equal(0);
    expect(testPlayer.totalScore).to.equal(0);

    // check if method handles 0
    testPlayer.dice.diceValue = 0;
    testPlayer.isTurn = true;
    testPlayer.turnScore = 25;
    testPlayer.totalScore = 102;
    testPlayer.reactToDiceValue();
    expect(testPlayer.isTurn).to.equal(false);
    expect(testPlayer.turnScore).to.equal(0);
    expect(testPlayer.totalScore).to.equal(102);

    // check if method handles 2 to 12
    testPlayer.dice.diceValue = 5;
    testPlayer.isTurn = true;
    testPlayer.turnScore = 25;
    testPlayer.totalScore = 102;
    testPlayer.reactToDiceValue();
    expect(testPlayer.isTurn).to.equal(true);
    expect(testPlayer.turnScore).to.equal(30);
    expect(testPlayer.totalScore).to.equal(102);
  });
  it('has a method chooseToEndTurn that will update scores and end turn', function() {
    var testPlayer = new Player("Michelle");
    testPlayer.turnScore = 20;
    testPlayer.totalScore = 60;
    testPlayer.isTurn = true;
    testPlayer.chooseToEndTurn();
    expect(testPlayer.turnScore).to.equal(0);
    expect(testPlayer.totalScore).to.equal(80);
    expect(testPlayer.isTurn).to.equal(false);
  });

});

describe('Game', function() {
  it('will create new Game object with the following properties', function() {
    var testGame = new Game();
    expect(testGame.playerArray).to.eql([]);
    expect(testGame.scoreToWin).to.equal(100);
    expect(testGame.activePlayer).to.equal(0);
  });
  it('will have a method to set a new winning score', function() {
    var testGame = new Game();
    testGame.setScoreToWin(300);
    expect(testGame.scoreToWin).to.equal(300);
  });
  it('will have a method to populate playerArray', function() {
    var testGame = new Game();
    testGame.addPlayer("Michelle");
    testGame.addPlayer("Joe");
    expect(testGame.playerArray[0].name).to.equal("Michelle");
    expect(testGame.playerArray[1].name).to.equal("Joe");
  });

  // it('will have a method to check for winner', function() {
  //   var testGame = new Game();
  //
  //   testGame.checkForWinner();
  //
  // });
});
