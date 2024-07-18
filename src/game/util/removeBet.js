

/**
 * Removes the last bet from the active hand's chip list and updates the hand's bet value accordingly.
 *
 * @param {Object} app - The application object containing the game state.
 * @param {Object} app.activeHand - The active hand object within the application.
 * @param {Object} app.activeHand.chipList - The array containing chip values for the active hand.
 * @param {Object} app.activeHand.hand - The hand object within the active hand.
 * @param {Function} app.activeHand.hand.updateBet - The function to update the bet value of the hand.
 */

export default function removeBet(app) {
  if (app.activeHand.chipList.length > 0) {
    const lastChipValue = app.activeHand.chipList.pop();
    app.activeHand.hand.updateBet(lastChipValue, false);
  }
}