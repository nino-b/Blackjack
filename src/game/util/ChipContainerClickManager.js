import bettingUIManager from "../UI/BettingUIManager";

/**
 * Handles chip container events to update the active hand's bet and chip list, and updates the UI accordingly.
 * 
 * Value of 'activeHand' property is reassigned values on some conditions. 
 * To keep track of correct references to those elements, we directly access them from the methods.
 * 
 */
function chipContainerClickHandlerCreator({ updateChipsAndBet, getActiveHand }, { setLastChipImgAndOutput, updateOutput }, { updateBank }, pageContext) {

  return function chipContainerClickHandler(event) {
    const activeHand = getActiveHand();
    const betContainer = activeHand.betSpotContainerNode.firstElementChild;
  
    const value = Number(event.target.parentNode.dataset.value);
    if (!value) {
      console.warn(`Missing 'value' argument: Could not get the value of 'data-value' or the user clicked outside the button area. For event delegation purposes, an event listener is attached to a '.chip-container' (a parent node)`);
      return;
    }

    updateChipsAndBet(value, activeHand);
    setLastChipImgAndOutput(betContainer, activeHand.bet, value);

    const amount = updateBank(value, false);
    const bank = pageContext.elementReferences.bankUI;
    updateOutput(bank, amount);
  }
}

const { initialHandManager, bankManager, pageContext } = app;
  
const chipContainerClickHandler = chipContainerClickHandlerCreator(initialHandManager, bettingUIManager, bankManager, pageContext);
export default chipContainerClickHandler;