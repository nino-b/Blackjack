import addBgImg from "../gameUI/addBgImg";





export default function chipContainerHandler(event) {
  const value = Number(event.target.parentNode.dataset.value);
  if (!value) {
    console.warn(`Missing 'value' argument: Could not get the value of 'data-value' or the user clicked outside the button area. For event delegation purposes, an event listener is attached to a '.chip-container' (a parent node)`);
    return;
  }
  this.activeHand.hand.updateBet(value);
  this.activeHand.chipList.push(value);

  /**
   * '.bet-container' is next sibling of '[data-action="activate-hand"]' button which is saved in an 'this' object.
   */
  const betContainer = this.activeHand.node.firstElementChild;
  const betContainerChildren = Array.from(betContainer.children);
  
  betContainerChildren.forEach(node => {
    if (node.dataset.action && node.dataset.action === 'remove-last-bet') {
      addBgImg(node, value);
    } else {
      node.textContent = this.activeHand.hand.bet;
    }
  });
}