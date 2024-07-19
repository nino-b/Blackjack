import HandManager from "./HandManager";
import setActiveHandShadow from "../UI/setActiveHandShadow";


/**
 * HandCoordinator class to manage player hands and active hand state.
 */
export default class HandCoordinator {
  /**
   * Private static method to create a hand template.
   * 
   * @param {string} id - The hand ID.
   * @param {HTMLElement} betSpotContainerNode - The betting spot container node.
   * @returns {Object} - The hand template object.
   */
  static #createHandTemplate(id, betSpotContainerNode) {
    return {
      hand: new HandManager(),
      chipValueList: [],
      id: id,
      betSpotContainerNode: betSpotContainerNode,
    }
  }
  /**
   * Constructor for the HandCoordinator class.
   * 
   * 
   * @param {Object} app - The application context.
   * 'app' is directly passed because we need live reference to the 'app.pageContext', because it's values are reassigned, and to always have correct reference, we need to pass the whole object.
   */
  constructor(app) {
    this.playerHandList = {};
    this.activeHand = null;
    this.app = app;
  }
  /**
   * Sets up the initial hand for a betting container.
   * 
   * @param {HTMLElement} bettingContainer - The betting container element.
   */
  setUpInitialHand(bettingContainer) {
    const id = bettingContainer.dataset.id;
  
    if (!this.playerHandList[id]) {
      this.playerHandList[id] = HandCoordinator.#createHandTemplate(id, bettingContainer);
    } 
    this.activeHand = this.playerHandList[id];
  }
  /**
   * Sets the game starting hand by finding the first hand with a bet.
   */
  setGameStartingHand() {
    if (this.activeHand.bet === 0) {
      for (const initialHand in this.playerHandList) {
        if (initialHand.bet > 0) {
          this.activeHand = initialHand;
          break;
        }
      }
    }
    const { bettingSpotList } = this.app.pageContext.elementReferences;
    if (!bettingSpotList) {
      throw new Error('Betting spot list not available in page context.');
    }
    setActiveHandShadow(bettingSpotList, this.activeHand.betSpotContainerNode);
  }
}








