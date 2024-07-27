import deckManager from "./DeckManager";



class CardDealManager {
  constructor() {
  }
  initialDeal(handList) {
    for (let i = 0; i < 2; i++) {
      for (const handObj in handList) {
        const card = deckManager.getCard();
        handList[handObj].hand.cards.push(card);
      }
    }
  }
  dealCard(handObj) {
    const card = deckManager.getCard();
    handList[handObj].hand.cards.push(card);
  }
}


const cardDealManager = new CardDealManager();

export default cardDealManager;













