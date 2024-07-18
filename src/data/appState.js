import RULES from "./rules";
import HandManager from "../game/services/HandManager";
import setActiveHandShadow from "../game/UI/setActiveHandShadow";

/**
 * Central storage for the app's state.
 */
class App {
  constructor(rules) {
    this.rules = rules;

    /**
     * Saves 'this' context of newly created page in the global property, so other functions can interact with a page Shadow DOM.
     * Otherwise it is harder to interact with a newly created page's Shadow DOM.
     * E.g. we can turn on and off animations for that page.
     */
    this.pageContext = null;
    /**
    * Saves settings parameter values. This way specific settings are globally accessable 
    * (e.g. we save animation settings in event listener callback and use newest values in a page Component).
    */
    this.settings = {
      gameSettings: {
        "deck-count": 2,
        "soft-17-opt": true,
        "insurance-opt": true,
        "even-money-opt": true,
        "auto-advice-opt": false,
        "repeat-last-bet-opt": true,
      }
    }

    this.initialHands = {};
    this.activeHand = null;

    this.deckStore = [];
  }
  setUpInitialHand(bettingContainer) {
    const id = bettingContainer.dataset.id;
  
    if (!this.initialHands[id]) {
      this.initialHands[id] = {
        hand: new HandManager(),
        chipList: [],
        id: id,
        node: bettingContainer,
      };
    } 
    this.activeHand = this.initialHands[id];
  }
  setGameStartingHand() {
    for (const initialHand in this.initialHands) {
      const currentHand = this.initialHands[initialHand];

      if (currentHand.hand.bet > 0) {
        this.activeHand = currentHand;
        setActiveHandShadow(this.pageContext.elementReferences.bettingSpotList, this.activeHand.node);
        return true;
      }
    }
  }
}

const app = new App(RULES);
window.app = app;







export default app;