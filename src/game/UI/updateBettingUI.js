import changeBgImg from "./changeBgImg";



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
 * @param {number} bet - The amount of total bet.
 * @param {number} chipValue - The value of the chip to add.
 */
export default function updateBettingUI(betContainer, bet, chipValue) {
  const betContainerChildren = Array.from(betContainer.children);

  betContainerChildren.forEach(node => {
    if (node.dataset.action === 'remove-last-bet') {
      changeBgImg(node, chipValue);
    }
    else {
      node.textContent = bet;
    }
  });
}