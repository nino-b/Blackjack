import showAttentionOnRules from "../gameUI/showAttentionOnRules";
import setupGameUI from "../gameUI/setupGameUI";

/**
 * PLAN:
 * 
 * #game-interface-container - remove (or toggle) .pre-game-view 
 * #game-interface-container add .container-game-view
 * [data-view="pre-game"] - toggle hidden attribute (add)
 * 
 * #game-actions-container - toggle hidden attr (remove)
 * #bank-container - add .bank-container-game-view 
 * .betting-spot-container - add .betting-spot-container-game-view
 */


export default function dealBtnHandler() {
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