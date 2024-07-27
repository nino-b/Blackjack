import addClass from "../../util/DOMUtils/addClass";
import removeClass from "../../util/DOMUtils/removeClass";
import switchClasses from "../../util/DOMUtils/switchClasses";
import toggleClass from "../../util/DOMUtils/toggleClass";
import toggleProperty from "../../util/DOMUtils/toggleProperty";





class GameUISetupManager {
  constructor(getPageContext, { handCoordinator }) {
    this.getPageContext = getPageContext;
    this.handCoordinator = handCoordinator;
  }
  setUpPageElements = () => {
    const { preGameElements, gameActionsContainer, bankContainer, gameInterfaceContainer, bettingSpotList } = this.getPageContext().elementReferences;

    this.toggleVisibility(preGameElements, gameActionsContainer);
    this.toggleGamePageView(bankContainer, gameInterfaceContainer);
    this.toggleBetSoptStyles(bettingSpotList, this.handCoordinator.handList);
  }
  toggleVisibility(preGameElements, gameActionsContainer) {
    preGameElements.forEach(el => toggleProperty(el, 'hidden'));
    toggleProperty(gameActionsContainer, 'hidden');
  }
  toggleGamePageView(bankContainer, gameInterfaceContainer) {
    toggleClass(bankContainer, 'bank-container-game-view');
    switchClasses(gameInterfaceContainer, 'pre-game-view', 'container-game-view');
  }
  toggleBetSoptStyles(bettingSpotList, handList, deactivate = true) {
    const inactiveSpotClass = 'inactive-spot';
  
    bettingSpotList.forEach(bettingSpot => {
      const id = bettingSpot.dataset.id;

      if (deactivate && !handList[id]) {
        addClass(bettingSpot, inactiveSpotClass);
      } else {
        removeClass(bettingSpot, inactiveSpotClass);
      }
      toggleClass(bettingSpot, 'betting-spot-container-game-view');
    });
  }
}

const { getPageContext, gameSessionManager } = app;

const gameUISetupManager = new GameUISetupManager(getPageContext, gameSessionManager);

export default gameUISetupManager;




