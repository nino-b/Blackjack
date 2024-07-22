import HandManager from "./HandManager";


export default class HandCoordinator {
  constructor(initialHandManager) {
    this.initialHandManager = initialHandManager;
    this.handList = {};
    this.activeHand = null;
  }
  initializeHands() {
    if (entryCount === 0) {
      console.warn(`To start the game, player should have at least one hand.`);
      return;
    }

    this.handList['dealer'] = this.#initializeHand();

    /**
     * The goal of this code is to initialize and save initial hands in ascending order of their 'data-id' values.
     * This way when I will work with them, I will always have the same sequence of hands: dealer, hand 1, hand 2, hand 3.
     * Doesn't matter if the user first bets on the hand 3 and then hand 1, or omits the hand 1. 
     * The sequence will always go in ascending order (after starting from dealer's hand). 
     */
    const maxNumberOfHands = 3;
    for (let i = 1; i <= maxNumberOfHands; i++) {
      const initialHand = this.initialHandManager[i];
      if (initialHand) {
        this.handList[initialHand.id] = this.#initializeHand(initialHand.bet);
      }
    }
  }
  #initializeHand(bet = null) {
    const hand = new HandManager();

    if (bet) {
      hand.updateBet(handObj.bet);
    }
    return hand;
  }
  setGameStartingHand() {
    /**
     * I want active hand to be set to the leftmost hand,
     * which will be in the 'this.handList' as the second element,
     * because the first one is always the dealer's hand.
     */
    let count = 0;

    for (const hand in this.handList) {
      count++;
      if (count === 2) {
        this.activeHand = this.handList[hand];
        return;
      }
    }
  }
}

