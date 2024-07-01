import setUpInitialHand from "./setUpInitialHand";
import app from "../../data/appState";


function createHandSetupHandler(app) {
  return function(event) {
    const action = event.target.dataset.action;

    if (action === 'activate-hand') {
      setUpInitialHand(event, app);
    } else if (action === 'remove-last-bet') {
      const lastChipValue = app.activeHand.chipList.pop();
      app.activeHand.hand.updateBet(lastChipValue, false);
    }
  }
}



const handSetupHandler = createHandSetupHandler(app);

export default handSetupHandler;