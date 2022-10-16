// Define a card suit

// You get any card as an argument. Your task is to return the suit of this card (in lowercase).

// ('3♣') -> return 'clubs'
// ('3♦') -> return 'diamonds'
// ('3♥') -> return 'hearts'
// ('3♠') -> return 'spades'

// describe("Basic tests",() => {
//   it('Testing №1 for "3♣"', () => {
//     let actualClubs = defineSuit('3♣');
//     assertNotPrinting(actualClubs);
//     assert.strictEqual(actualClubs, 'clubs');
//   });
//   it('Testing №2 for "Q♠"', () => assert.strictEqual(defineSuit('Q♠'), 'spades'));
//   it('Testing №3 for "9♦"', () => assert.strictEqual(defineSuit('9♦'), 'diamonds'));
//   it('Testing №4 for "J♥"', () => assert.strictEqual(defineSuit('J♥'), 'hearts'));
  


//parameter: a string with two character, the second of which is the symbolic representation of a card suit

//return: a string of the name of the suit ONLY, in all lowercase letters and plural

// ('Q♠'), 'spades')
// ('9♦'), 'diamonds')
// ('J♥'), 'hearts')

function defineSuit(card) {
    if (card.includes('♠')) console.log('spades')
    if (card.includes('♦')) console.log('diamonds')
    if (card.includes('♥')) console.log('hearts')
    if (card.includes('♣')) console.log('clubs')
  }

  defineSuit('Q♠')
  defineSuit('9♦')
  defineSuit('J♥')
  defineSuit('3♣')