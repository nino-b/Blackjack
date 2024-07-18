


export default class CardSumEvaluator {
  /**
   * Checks if the hand sum exceeds 21 (bust).
   *
   * @param {number} handSum - The sum of the cards in the hand.
   * @returns {boolean} True if the hand is bust, false otherwise.
   */
  static isBust(handSum) {
    return handSum > 21;
  }

  /**
   * Checks if the hand sum is exactly 21 (blackjack).
   *
   * @param {number} handSum - The sum of the cards in the hand.
   * @returns {boolean} True if the hand is blackjack, false otherwise.
   */
  static isBlackjack(handSum) {
    return handSum === 21;
  }

  /**
   * Compares the player's hand sum to the dealer's hand sum.
   *
   * @param {number} playerSum - The sum of the cards in the player's hand.
   * @param {number} dealerSum - The sum of the cards in the dealer's hand.
   * @returns {string} The result of the comparison: 'win', 'lose', 'tie'.
   */
  static compareHands(playerSum, dealerSum) {
    if (playerSum > 21) return 'lose';
    if (dealerSum > 21) return 'win';
    if (playerSum > dealerSum) return 'win';
    if (playerSum < dealerSum) return 'lose';
    return 'tie';
  }
}
