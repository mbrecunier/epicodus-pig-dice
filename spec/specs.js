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
  })
});
