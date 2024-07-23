import showAttentionOnRules from "../UI/showAttentionOnRules";
import gameUISetupManager from "../UI/GameUISetupManager";


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
    const { bettingInstruction, bettingSpotList } = elementReferences;

    const canStart = app.initialHandManager.canStartTheGame();
    if (!canStart) {
      showAttentionOnRules(bettingInstruction);
      return;
    }
    const activeHandList = app.handCoordinator.handList;
    app.handCoordinator.setUpHands(bettingSpotList);
    gameUISetupManager.setUpPageElements(elementReferences, activeHandList);
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