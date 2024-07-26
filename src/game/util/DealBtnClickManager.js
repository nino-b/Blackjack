import showAttentionOnRules from "../UI/showAttentionOnRules";
import gameUISetupManager from "../UI/GameUISetupManager";
import cardDealManager from "../services/CardDealManager";


function dealBtnClickHandlerCreator(app, activeHandList, setUpHands, canStartTheGame) {
  return function() {
    const elementReferences = app.pageContext.elementReferences;
    const { bettingInstruction, bettingSpotList } = elementReferences;

    const canStart = canStartTheGame();
    if (!canStart) {
      showAttentionOnRules(bettingInstruction);
      return;
    }
    setUpHands(bettingSpotList);
    gameUISetupManager.setUpPageElements(elementReferences, activeHandList);
    cardDealManager.initialDeal();

    console.log(activeHandList);
  }
}


const activeHandList = app.handCoordinator.handList;
const setUpHands = app.handCoordinator.setUpHands;
const canStartTheGame = app.initialHandManager.canStartTheGame;
const dealBtnClickHandler = dealBtnClickHandlerCreator(app, activeHandList, setUpHands, canStartTheGame);


export default dealBtnClickHandler;