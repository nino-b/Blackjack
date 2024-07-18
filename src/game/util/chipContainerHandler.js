import addBgImg from "../UI/addBgImg";



/**
 * Handles chip container events to update the active hand's bet and chip list, and updates the display accordingly.
 * This event handler function is bound to the 'app', and that's why we can access elements within "app" element's "this" context.
 *
 * @param {Event} event - The event triggered by interacting with the chip container.
 * @throws {Error} Throws a warning if the `data-value` attribute is missing or if the user clicked outside the button area.
 */

export default function chipContainerHandler(event) {
  const value = Number(event.target.parentNode.dataset.value);
  if (!value) {
    console.warn(`Missing 'value' argument: Could not get the value of 'data-value' or the user clicked outside the button area. For event delegation purposes, an event listener is attached to a '.chip-container' (a parent node)`);
    return;
  }
  /**
   * Update the bet for the active hand.
   * 
   * Add chip list another value. 
   * If the user decides to remove a bet, 'this.activeHand.chipList' is from where we can access previous chip values, so we can display it.
   */
  this.activeHand.hand.updateBet(value);
  this.activeHand.chipList.push(value);

  const betContainer = this.activeHand.node.firstElementChild;
  const betContainerChildren = Array.from(betContainer.children);
  
  /**
   * Handles betting UI:
   * 
   * Adds chip image as a background to the 'data-action="remove-last-bet"' (which is a button that has chip images as a background to display what chip was last placed (and if the user clicks that button, last bet will be removed)).
   * 
   * Updates output - a bet for the current hand.
   */
  betContainerChildren.forEach(node => {
    if (node.dataset.action && node.dataset.action === 'remove-last-bet') {
      addBgImg(node, value);
    } else {
      node.textContent = this.activeHand.hand.bet;
    }
  });
}