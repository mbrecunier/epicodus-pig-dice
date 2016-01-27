describe('Dice', function() {
  // check the initial values
  it('creates a Dice object with the proper initial properties', function() {
    var testDice = new Dice();
    expect(testDice.dieOne).to.equal(1);
    expect(testDice.dieTwo).to.equal(1);
    expect(testDice.score).to.equal(0);
  });
});
