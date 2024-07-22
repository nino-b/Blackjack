import showAttentionOnRules from "../UI/showAttentionOnRules";
import setUpGameLayout from "../UI/setupGameLayout";



/* class DealBtnClickManager {
  constructor(app) {
    this.app = app;
    this.initialHandManager = app.initialHandManager;
    this.handCoordinator = app.handCoordinator;
  }

} */


function dealBtnClickHandlerCreator(app) {
  return function() {
    const elementReferences = app.pageContext.elementReferences;
    const canStart = app.initialHandManager.canStartTheGame();
    if (!canStart) {
      showAttentionOnRules(elementReferences.bettingInstruction);
      return;
    }
    setUpGameLayout(elementReferences);
    // TO DO
    //setupGame(.);
  }
}


const dealBtnClickHandler = dealBtnClickHandlerCreator(app);
export default dealBtnClickHandler;



/**
 * A 'Deal' button click handler.
 * 
 * 'setGameStartingHand' - Calls the function that checks whether user place a bet (returns a boolean).
 * If user did not place a bet, 'setGameStartingHand' returns false and the function calls UI function to display attention sign on the rules that are on the game page.
 * Otherwise it sets up game view and logic.
 */