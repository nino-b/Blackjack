import deckManager from "./DeckManager";



class CardDealManager {
  constructor(handList, initialHandManager) {
    this.handList = handList;
    this.initialHandManager = initialHandManager;
  }
  initialDeal() {
    for (let i = 0; i < 2; i++) {
      for (const handObj in this.handList) {
        const card = deckManager.getCard();
        this.handList[handObj].hand.cards.push(card);
      }
    }
  }
}


const cardDealManager = new CardDealManager(app.handCoordinator.handList, app.initialHandManager);

export default cardDealManager;













