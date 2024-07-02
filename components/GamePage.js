import gamePage from "bundle-text:../styles/GamePage.css";
import BaseComponent from "./BaseComponent.js";
import queryElement from "../util/DOMUtils/queryElement.js";
import queryElementGroup from "../util/DOMUtils/queryElementGroup.js";
import handSetupHandler from "../game/gameUtils/handSetupHandler.js";
import bettingHandler from "../game/gameUI/bettingHandler.js";

export default class GamePage extends BaseComponent {
  constructor() {
    super();
    this.pageStyles = gamePage;
    this.templateID = 'game-page-template';
  }
  queryElements() {
    /**
     * Toggle '.pre-game-view' class on this element.
     * Use it as context, so it is not necessary to query elements from 'this.root' (performance reasons).
     */
    this.gameInterfaceContainer = queryElement('#game-interface-container', this.root);
    /**
     * This elements are needed only on the pre-game page, not during the game.
     * Contains: '#betting-instruction', '#deal', '#chip-container'.
     */
    this.preGameElements = queryElementGroup('[data-view="pre-game"]', this.gameInterfaceContainer);
    this.preGameElements.forEach(element => {
      if (element.id === 'deal') this.deal = element;
      if (element.id === 'chip-container') this.chipContainer = element;
    });
    this.bank = queryElement('#bank', this.chipContainer);

    this.handContainer = queryElement('#hand-container', this.root);
    this.bettingSpotList = Array.from(this.handContainer.children);

    this.gameActionsContainer = queryElement('#game-actions-container', this.gameInterfaceContainer);
  }
  setupPageListeners() {
    this.handContainer.addEventListener('click', handSetupHandler);
    this.chipContainer.addEventListener('click', bettingHandler);
    this.dealBtn.addEventListener('click', );
  }
  removePageListeners() {
    this.handContainer.removeEventListener('click', handSetupHandler);
    this.chipContainer.removeEventListener('click', bettingHandler);
    this.dealBtn.removeEventListener('click', );
  }
}

customElements.define('game-page', GamePage);