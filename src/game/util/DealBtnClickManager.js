import showAttentionOnRules from "../UI/showAttentionOnRules";
import setupGameUI from "../UI/setupGameUI";



class DealBtnClickManager {
  constructor(app) {
    this.app = app;
  }
  dealBtnClickHandler() {
    const elementReferences = this.pageContext.elementReferences;
    const canStart = this.setGameStartingHand();
    if (!canStart) {
      showAttentionOnRules(elementReferences.bettingInstruction);
      return;
    }
    setupGameUI(elementReferences);
    // TO DO
    //setupGame(.);
  }
}




/**
 * A 'Deal' button click handler.
 * 
 * 'setGameStartingHand' - Calls the function that checks whether user place a bet (returns a boolean).
 * If user did not place a bet, 'setGameStartingHand' returns false and the function calls UI function to display attention sign on the rules that are on the game page.
 * Otherwise it sets up game view and logic.
 */