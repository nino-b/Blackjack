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
  setupGameUI(this.pageContext.elementReferences);
  // TO DO
  // SET UP GAME
}