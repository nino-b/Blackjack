import addClass from "../../util/DOMUtils/addClass";
import removeClass from "../../util/DOMUtils/removeClass";
import switchClasses from "../../util/DOMUtils/switchClasses";
import toggleClass from "../../util/DOMUtils/toggleClass";
import toggleProperty from "../../util/DOMUtils/toggleProperty";





class GameUISetupManager {
  constructor(app) {
    this.app = app;
    this.setUpPageElements = this.setUpPageElements.bind(this);
  }
  setUpPageElements() {
    const { preGameElements, gameActionsContainer, bankContainer, gameInterfaceContainer, bettingSpotList } = this.app.pageContext.elementReferences;

    this.toggleVisibility(preGameElements, gameActionsContainer);
    this.toggleGamePageView(bankContainer, gameInterfaceContainer);
    this.toggleBetSoptStyles(bettingSpotList, app.handCoordinator.handList);
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



const gameUISetupManager = new GameUISetupManager(app);

export default gameUISetupManager;




