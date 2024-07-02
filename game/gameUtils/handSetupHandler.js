import setUpInitialHand from "./setUpInitialHand";
import removeBet from "./removeBet";
import app from "../../data/appState";
import addExclusiveClass from "../../util/DOMUtils/addExclusiveClass";
import removeChip from "../gameUI/removeChip";
import updateOutput from "../gameUI/updateOutput";


function createHandSetupHandler(app) {
  return function(event) {
    const action = event.target.dataset.action;

    if (action === 'activate-hand' || 
       (action === 'remove-last-bet' && (!app.activeHand || app.activeHand.id !== event.target.dataset.id))) {
      setUpInitialHand(event, app);

      const bettingSpotList = app.pageContext.bettingSpotList;
      const targetSpot = event.target.closest('.betting-spot-container');
      const shadowEffectClass = 'activated-hand';

      addExclusiveClass(bettingSpotList, targetSpot, shadowEffectClass);

    } else if (action === 'remove-last-bet') {
      removeBet(app);
      removeChip(event.target, app);
      updateOutput(event.target.nextElementSibling, app);
    }
  }
}



const handSetupHandler = createHandSetupHandler(app);

export default handSetupHandler;