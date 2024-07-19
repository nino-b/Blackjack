

/**
 * Removes the last bet from the active hand's chip list and updates the hand's bet value accordingly.
 *
 * @param {Object} handCoordinator - The hand coordinator object, containing hand states.
 * @param {Object} handCoordinator.activeHand - The active hand object within the hand coordinator.
 * @param {Object} handCoordinator.activeHand.chipList - The array containing chip values for the active hand.
 * @param {Object} handCoordinator.activeHand.hand - The hand object within the active hand.
 * @param {Function} handCoordinator.activeHand.hand.updateBet - The function to update the bet value of the hand.
 */

export default function removeBet(handCoordinator) {
  if (handCoordinator.activeHand.chipList.length > 0) {
    const lastChipValue = handCoordinator.activeHand.chipList.pop();
    handCoordinator.activeHand.hand.updateBet(lastChipValue, false);
  }
}