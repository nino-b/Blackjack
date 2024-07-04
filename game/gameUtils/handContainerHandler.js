import addExclusiveClass from "../../util/DOMUtils/addExclusiveClass";
import removeBet from "./removeBet";
import removeChip from "../gameUI/removeChip";
import updateOutput from "../gameUI/updateOutput";
import setActiveHandShadow from "../gameUI/setActiveHandShadow";



export default function handContainerHandler(event) {
  const action = event.target.dataset.action;
  const activateHand = 'activate-hand';
  const removeLastBet = 'remove-last-bet';

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