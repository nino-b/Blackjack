import deckManager from "./DeckManager";



class CardDealManager {
  constructor(app) {
    this.app = app;
    this.handCoordinator = app.handCoordinator;
    this.initialHandManager = app.initialHandManager;
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


const cardDealManager = new CardDealManager(app);

export default cardDealManager;