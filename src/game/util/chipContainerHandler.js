import addBgImg from "../UI/addBgImg";



/**
 * Handles chip container events to update the active hand's bet and chip list, and updates the display accordingly.
 * This event handler function is bound to the 'app', and that's why we can access elements within the "app" element's "this" context.
 *
 * @param {Event} event - The event triggered by interacting with the chip container.
 * @throws {Error} Throws a warning if the `data-value` attribute is missing or if the user clicked outside the button area.
 */

export default function chipContainerHandler(event) {
  const activeHand = this.handCoordinator.activeHand;

  const value = Number(event.target.parentNode.dataset.value);
  if (!value) {
    console.warn(`Missing 'value' argument: Could not get the value of 'data-value' or the user clicked outside the button area. For event delegation purposes, an event listener is attached to a '.chip-container' (a parent node)`);
    return;
  }
  updateActiveHandBet(activeHand, value);
  updateBettingUI(activeHand, value);
}






/* ***************************************************** */
/* Helper Functions */


/**
 * Updates the active hand's bet and chip list.
 * If the user decides to remove a bet, 'activeHand.chipList' is from where we can access previous chip values, so we can display it.
 *
 * @param {Object} activeHand - The active hand object.
 * @param {number} value - The value of the bet to add.
 */
function updateActiveHandBet(activeHand, value) {
  activeHand.hand.updateBet(value);
  activeHand.chipList.push(value);
}



/**
 * Updates the UI to reflect the current bet and chip list.
 * 
 * Adds chip image as a background to the 'data-action="remove-last-bet"' 
 * (which is a button that has chip images as a background to display what chip was last placed 
 * (and if the user clicks that button, last bet will be removed)).
 * 
 *  Note: Tree traversal is not the best way to create reusable code.
 * For clarity, this is designed for thid DOM structure:
 * 
 *  <div class="betting-spot-container" data-id="hand-1" data-hand-selector="true">
        <div class="bet-container"  data-hand-selector="true">
            <button data-id="hand-1" data-hand-selector="true" data-action="remove-last-bet"></button>
            <output data-id="hand-1" data-hand-selector="true"></output>
        </div>
    </div>
 *
 * @param {Object} activeHand - The active hand object.
 * @param {number} value - The value of the chip to add.
 * @param {HandManager} activeHand.hand - The HandManager instance managing the hand's state.
 * @param {Array<number>} activeHand.chipList - The list of chip values for the active hand.
 * @param {HTMLElement} activeHand.betSpotContainerNode - The DOM node representing the betting spot container.
 */
function updateBettingUI(activeHand, value) {
  const betContainer = activeHand.betSpotContainerNode.firstElementChild;
  const betContainerChildren = Array.from(betContainer.children);

  betContainerChildren.forEach(node => {
    if (node.dataset.action === 'remove-last-bet') {
      addBgImg(node, value);
    }
    else {
      node.textContent = activeHand.hand.bet;
    }
  })
}