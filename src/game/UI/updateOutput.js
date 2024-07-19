

/**
 * Updates the text content of the specified output element with the bet value from the active hand.
 *
 * @param {HTMLElement} outputEl - The output element whose text content will be updated.
 * @param {Object} handCoordinator - The hand coordinator object, containing hand states.
 * @param {Object} handCoordinator.activeHand - The active hand object within the application.
 * @param {Object} handCoordinator.activeHand.hand - The hand object within the active hand.
 * @param {number} handCoordinator.activeHand.hand.bet - The bet value of the active hand.
 */

export default function updateOutput(outputEl, handCoordinator) {
  outputEl.textContent = handCoordinator.activeHand.hand.bet;
}