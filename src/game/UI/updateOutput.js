

/**
 * Updates the text content of the specified output element with the bet value from the active hand.
 *
 * @param {HTMLElement} outputEl - The output element whose text content will be updated.
 * @param {Object} app - The application object containing the game state.
 * @param {Object} app.activeHand - The active hand object within the application.
 * @param {Object} app.activeHand.hand - The hand object within the active hand.
 * @param {number} app.activeHand.hand.bet - The bet value of the active hand.
 */

export default function updateOutput(outputEl, app) {
  outputEl.textContent = app.activeHand.hand.bet;
}