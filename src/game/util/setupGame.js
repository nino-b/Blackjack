import deckManager from "../services/DeckManager";
import showAttentionOnRules from "../UI/showAttentionOnRules";



class SetUpGame {
  constructor(app) {
    this.app = app;
    this.handCoordinator = app.handCoordinator;
    this.initialHandManager = app.initialHandManager;
  }
  setUpHands() {
    if (!this.initialHandManager.canStartTheGame()) {
      showAttentionOnRules(this.app.pageContext.elementReferences.bettingInstruction);
    }
    this.handCoordinator.initializeHands();
    this.handCoordinator.setGameStartingHand();
  }
  initialDeal() {
    const handList = this.handCoordinator.playerHandList;

    for (let i = 0; i < 2; i++) {
      for (const handObj in handList) {
        const card = deckManager.getCard();
        handList[handObj].hand.cards.push(card);
      }
    }
  }
}


const setUpGame = new SetUpGame(app);

export default setUpGame;