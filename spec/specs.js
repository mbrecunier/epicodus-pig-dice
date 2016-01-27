describe('Dice', function() {
  // check the initial values
  it('creates a Dice object with the proper initial properties', function() {
    var testDice = new Dice();
    expect(testDice.dieOne).to.equal(1);
    expect(testDice.dieTwo).to.equal(1);
    expect(testDice.score).to.equal(0);
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

  it('has .refreshScore() method that calculates dice.score score based on dieOne and dieTwo', function() {
    var testDice = new Dice();
    testDice.dieOne = 1;
    testDice.dieTwo = 1;
    testDice.refreshScore();
    expect(testDice.score).to.equal('pig out');
  });
});
