import deckManager from "../services/DeckManager";



class SetUpGame {
  constructor(handCoordinator) {
    this.handCoordinator = handCoordinator;
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