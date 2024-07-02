import app from "../../data/appState";
import addBgImg from "./addBgImg";



function createBettingHandler (app) {
  return function (event) {
    const value = Number(event.target.parentNode.dataset.value);
    if (!value) {
      console.warn(`Missing 'value' argument: Could not get the value of 'data-value' or the user clicked outside the button area. For event delegation purposes, an event listener is attached to a '.chip-container' (a parent node)`);
      return;
    }
    app.activeHand.hand.updateBet(value);
    app.activeHand.chipList.push(value);

    /**
     * '.bet-container' is next sibling of '[data-action="activate-hand"]' button which is saved in an 'app' object.
     */
    const betContainer = app.activeHandNode.firstElementChild;
    const betContainerChildren = Array.from(betContainer.children);
    
    betContainerChildren.forEach(node => {
      if (node.dataset.action && node.dataset.action === 'remove-last-bet') {
        addBgImg(node, value);
      } else {
        node.textContent = app.activeHand.hand.bet;
      }
    });
  }
}


const bettingHandler = createBettingHandler(app);
export default bettingHandler;