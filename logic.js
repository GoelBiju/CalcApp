function flipCoin() {
  /**
   * Return true for heads, false for tails.
   */
  return Math.random() > 0.5;
}

function addNumber(a, b) {
  /**
   * Return result of variable a added with variable b.
   */
  return a + b;
}

module.exports.flipCoin = flipCoin;
module.exports.addNumber = addNumber;
