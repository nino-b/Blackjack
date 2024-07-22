


export default class HandManager {
  constructor() {
    this.cards = [];
    this.sum = 0;
    this.bet = 0;
  }
  /**
   * Updates a bet for this specific hand instance.
   */
  updateBet(amount) {
    if (!amount) {
      console.error("Error in 'updateBet(amount)': Missing 'amount' argument or user clicked outside the button area (event delegation - listener is attached on the parent). Cannot update the bet.");
    }
    this.bet += amount;
  }
  /**
   * Adds card object to the 'cards' array.
   * @param {Object} card - A card object.
   * @throws {Error} If the 'card' argument is missing.
   */
  addCardAndUpdateSum(card) {
    if (!card) {
      throw new Error("Error in 'addCard(card)': Missing 'card' argument. Cannot add to hand.");
    }
    this.cards.push(card);
    this.#updateSum(card.value);
  }
  /**
  * Updates the sum of the hand by adding the value of a card.
  *
  * @param {number} cardValue - The value of the card to be added to the hand's sum.
  * @throws {Error} If the 'cardValue' argument is missing.
  */
  #updateSum(cardValue) {
    if (!cardValue) {
      throw new Error("Error in 'updateSum(cardValue)': Missing 'cardValue' argument. Cannot update the sum.");
    }
    this.sum += cardValue;
  }
}
























/**
 * HandManager dependency managers:
 * 
 * CardManager - Manages player's cards in a hand: 
 *               - How does a player request for a card; 
 *               - How are cards added to the hand (hand array);
 *               - What is the sum of those cards;
 *               - Checks whether the sum is over 21. If so, stops the game.
 *               - How is that sum displayed to the UI.
 *
 * GameOutcomeEvaluator - checks the game outcome for a hand:
 *               - Checks a card sum and compares it to the dealer's hand. 
 *                 The result is saved in an object or a variable so then proper UI, history and bank actions can be taken.
 * 
 * HandGameOutcomeManager - Manages game outcome for a hand:
 *               - Resolves the bet (win, push, lose, even money) - either adds to the bank or not (money is already removed from the bank).
 *               - Calls hand clearing and bet recieving animations.
 *               - Clears out the hand instance from the 'hands' array.
 */