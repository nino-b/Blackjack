import gamePage from "bundle-text:../styles/GamePage.css";
import BaseComponent from "./BaseComponent.js";
import queryElement from "../util/DOMUtils/queryElement.js";
import handSetupHandler from "../game/gameUtils/handSetupHandler.js";
import bettingHandler from "../game/gameUI/bettingHandler.js";

export default class GamePage extends BaseComponent {
  constructor() {
    super();
    this.pageStyles = gamePage;
    this.templateID = 'game-page-template';
  }
  queryElements() {
    this.handContainer = queryElement('#hand-container', this.root);
    this.bettingSpotList = Array.from(this.handContainer.children);
    this.chipContainer = queryElement('#chip-container', this.root);
  }
  setupPageListeners() {
    this.handContainer.addEventListener('click', handSetupHandler);
    this.chipContainer.addEventListener('click', bettingHandler);
  }
  removePageListeners() {
    this.handContainer.removeEventListener('click', handSetupHandler);
    this.chipContainer.removeEventListener('click', bettingHandler);
  }
}

customElements.define('game-page', GamePage);