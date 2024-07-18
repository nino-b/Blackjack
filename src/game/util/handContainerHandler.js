import removeBet from "./removeBet";
import removeChip from "../UI/removeChip";
import updateOutput from "../UI/updateOutput";
import setActiveHandShadow from "../UI/setActiveHandShadow";


/**
 * Handles events within the hand container, such as activating a hand or removing the last bet.
 * For game page event handlers, 'this' context is set to 'app'.
 *
 * @param {Event} event - The event triggered within the hand container.
 */

export default function handContainerHandler(event) {
  const action = event.target.dataset.action;
  const activateHand = 'activate-hand';
  const removeLastBet = 'remove-last-bet';

  /**
   * Handles events within the hand container, such as activating a hand or removing the last bet.
   * 
   * 1. HTML "betting-spot-container" has a nested structure, a betting spot that contains a bet removing button. 
   * If the hand is not selected and the user clicks on either a betting spot container or bet removing button, it selects the hand.
   * Because user might just click in the center of betting spot container (where bet removing button is located) to just select a hand.
   * It sets up an initial hand and associates that hand with that specific DOM node (a betting sport container).
   * 
   * 2. If the hand is already selected, clicking on the bet removing button triggers the bet removal functionalities.
   * 
   * @param {Event} event - The event triggered within the hand container.
   */
  if (action === activateHand ||
      (action === removeLastBet && (!this.activeHand || this.activeHand.id !== event.target.dataset.id))
  ) {
    const bettingContainer = event.target.closest('.betting-spot-container');  
    const bettingSpotList =  this.pageContext.elementReferences.bettingSpotList;

    this.setUpInitialHand(bettingContainer);
    setActiveHandShadow(bettingSpotList, bettingContainer);

  } else if (action === removeLastBet) {
    removeBet(this);
    removeChip(event.target, this.activeHand.chipList);
    updateOutput(event.target.nextElementSibling, this)
  }
}