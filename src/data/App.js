import HandCoordinator from "../game/services/HandCoordinator";
import InitialHandManager from "../game/services/InitialHandManager";
import { BettingUIManager, bgImages } from "../game/UI/BettingUIManager";


class App {
  constructor() {
    this.pageContext = null;
    this.initialHandManager = new InitialHandManager();
    this.handCoordinator = new HandCoordinator(this.initialHandManager);
    this.bettingUIManager = new BettingUIManager(this, bgImages);
  }
}

const app = new App();
window.app = app;

export default app;


























// /**
//  * Central storage for the app's state.
//  */
// class App {
//   constructor(rules) {
//     this.rules = rules;
// 
//     /**
//      * Saves 'this' context of newly created page in the global property, so other functions can interact with a page Shadow DOM.
//      * Otherwise it is harder to interact with a newly created page's Shadow DOM.
//      * E.g. we can turn on and off animations for that page.
//      */
//     this.pageContext = null;
//     /**
//     * Saves settings parameter values. This way specific settings are globally accessable 
//     * (e.g. we save animation settings in event listener callback and use newest values in a page Component).
//     */
//     this.settings = {
//       gameSettings: {
//         "deck-count": 2,
//         "soft-17-opt": true,
//         "insurance-opt": true,
//         "even-money-opt": true,
//         "auto-advice-opt": false,
//         "repeat-last-bet-opt": true,
//       }
//     }
// 
//     this.initialHands = {};
//     this.activeHand = null;
// 
//     this.deckStore = [];
//   }
// }
// 
// const app = new App(RULES);
// window.app = app;
// 
// 
// 
// 
// 
// 
// 
// export default app;