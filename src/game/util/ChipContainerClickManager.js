import updateBettingUI from "../UI/updateBettingUI";


/**
 * Handles chip container events to update the active hand's bet and chip list, and updates the UI accordingly.
 * 
 * Value of 'activeHand' property is reassigned values on some conditions. 
 * To keep track of correct references to those elements, we directly access them from the methods.
 * 
 * @param {Object} initialHandManager - The manager responsible for handling initial hand operations.
 * @param {Object} initialHandManager.activeHand - The current active hand object.
 * @param {Function} initialHandManager.updateChipsAndBet - Method to update chips and bet.
 * @returns {Function} chipContainerClickHandler - The click handler for the chip container.
 */
function chipContainerClickHandlerCreator(initialHandManager) {
  /**
   * Handles click events on the chip container.
   *
   * @param {Event} event - The click event object.
   */
  return function chipContainerClickHandler(event) {
    const activeHand = initialHandManager.activeHand;
    const betContainer = activeHand.betSpotContainerNode.firstElementChild;
  
    const value = Number(event.target.parentNode.dataset.value);
    if (!value) {
      console.warn(`Missing 'value' argument: Could not get the value of 'data-value' or the user clicked outside the button area. For event delegation purposes, an event listener is attached to a '.chip-container' (a parent node)`);
      return;
    }

    initialHandManager.updateChipsAndBet(value, activeHand);
    updateBettingUI(betContainer, activeHand.bet, value);
  }
}

  
const chipContainerClickHandler = chipContainerClickHandlerCreator(app.initialHandManager);
export default chipContainerClickHandler;