import HandManager from "./HandManager";
import setActiveHandShadow from "../UI/setActiveHandShadow";
import showAttentionOnRules from "../UI/showAttentionOnRules";


export default class HandCoordinator {
  constructor(initialHandManager) {
    this.initialHandManager = initialHandManager;
    this.handList = {};
    this.activeHand = null;
    this.activeHandNode = null;
    this.keys = null;
    this.keyIndex = 0;
  }
  setUpHands(bettingSpotList) {
    if (!this.initialHandManager.canStartTheGame()) {
      showAttentionOnRules(this.app.pageContext.elementReferences.bettingInstruction);
      return false;
    }
    this.initializeHands();
    this.switchActiveHands();
    setActiveHandShadow(bettingSpotList, this.activeHandNode);
  }
  initializeHands() {
    const handCount = Object.keys(this.initialHandManager.initialHands).length;
    if (handCount === 0) {
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
      const initialHand = this.initialHandManager.initialHands[i];
      if (initialHand && initialHand.bet > 0) {
        this.handList[initialHand.id] = this.#initializeHand(initialHand.bet);
      }
    }
  }
  #initializeHand(bet = null) {
    const hand = new HandManager();

    if (bet) {
      hand.updateBet(bet);
    }
    return hand;
  }
  switchActiveHands() {
    /**
     * I want active hand to be set to the leftmost hand,
     * which will be in the 'this.handList' as the second element,
     * because the first one is always the dealer's hand.
     * 
     * This is why keyIndex = 0 initially.
     * 
     * Note: In JS objects numeric keysare stored at the top (before string keys) in ascending order.
     */
    const keys = Object.keys(this.handList);

    this.activeHand = this.handList[keys[this.keyIndex]];
    this.activeHandNode = this.initialHandManager.initialHands[keys[this.keyIndex]].betSpotContainerNode;
    this.keyIndex++;
  }
}

