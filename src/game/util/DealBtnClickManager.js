import showAttentionOnRules from "../UI/showAttentionOnRules";
import gameUISetupManager from "../UI/GameUISetupManager";
import cardDealManager from "../services/CardDealManager";


function dealBtnClickHandlerCreator({getElementReferences, getHandCoordinator, canStartTheGame, setUpHands }) {

  return function dealBtnClickHandler() {
    const elementReferences = getElementReferences();
    const { bettingInstruction, bettingSpotList } = elementReferences;

    const { handList } = getHandCoordinator();

    // Check whether user has chosen hands and placed bets.
    if (!canStartTheGame()) {
      // If user hasn't made a bet, display attention sign.
      showAttentionOnRules(bettingInstruction);
      return;
    }

    // If user has placed a bet, game can be started.
    setUpHands(bettingSpotList);
    gameUISetupManager.setUpPageElements(elementReferences, handList);
    cardDealManager.initialDeal();
  };
}


const { getPageContext, gameSessionManager } = app;

// Extract necessary methods and properties
const getElementReferences = () => getPageContext().elementReferences;
const getHandCoordinator = () => gameSessionManager.handCoordinator;
const canStartTheGame = () => gameSessionManager.initialHandManager.canStartTheGame;
const setUpHands = bettingSpotList => gameSessionManager.handCoordinator.setUpHands(bettingSpotList);

// Create the deal button click handler
const dealBtnClickHandler = dealBtnClickHandlerCreator({
  getElementReferences,
  getHandCoordinator,
  canStartTheGame,
  setUpHands
});



export default dealBtnClickHandler;






















/* 
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


*/