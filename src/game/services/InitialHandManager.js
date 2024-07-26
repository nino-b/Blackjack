



export default class InitialHandManager {
  static #createHandTemplate(id, betSpotContainerNode) {
    return {
      id: id,
      betSpotContainerNode: betSpotContainerNode,
      chipList: [],
      bet: 0,
    }
  }
  constructor() {
    this.initialHands = {};
    this.activeHand = null;
  }
  /**
   * Sets up the initial hand for a betting container.
   * 
   * @param {HTMLElement} bettingContainer - The betting container element.
   */
  setUpInitialHand(bettingContainer) {
    const id = bettingContainer.dataset.id;
  
    if (!this.initialHands[id]) {
      this.initialHands[id] = InitialHandManager.#createHandTemplate(id, bettingContainer);
    } 
    this.activeHand = this.initialHands[id];
  }
  updateChipsAndBet(value, hand) {
    if (!value) {
      throw new Error(`Missing argument: value. Can't update chip list and a bet.`);
    }
    if (!hand) {
      throw new Error(`Missing argument: !hand. Can't update chip list and a bet.`);
    }
    hand.chipList.push(value);
    hand.bet += value;
  }
  removeLastChip(hand) {
    if (!hand) {
      throw new Error(`Missing argument: !hand. Can't remove chip from unknown hand.`);
    }
    if (hand.chipList.length === 0) {
      console.warn(`No chips left to remove.`);
      return;
    }
    const chipVal = hand.chipList.pop();
    hand.bet -= chipVal;
    return chipVal;
  }
  canStartTheGame() {
    for (const handObj in this.initialHands) {
      if (this.initialHands[handObj].bet > 0) return true;
    }
    return false;
  }
  getActiveHand() {
    return this.activeHand;
  }
}


