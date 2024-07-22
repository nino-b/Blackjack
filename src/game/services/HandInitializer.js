import deckManager from "./DeckManager";
import showAttentionOnRules from "../UI/showAttentionOnRules";



class HandInitializer {
  constructor(app) {
    this.app = app;
    this.handCoordinator = app.handCoordinator;
    this.initialHandManager = app.initialHandManager;
  }
  setUpHands() {
    if (!this.initialHandManager.canStartTheGame()) {
      showAttentionOnRules(this.app.pageContext.elementReferences.bettingInstruction);
      return false;
    }
    this.handCoordinator.initializeHands();
    this.handCoordinator.setGameStartingHand();
    return true;
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


const handInitializer = new HandInitializer(app);

export default handInitializer;