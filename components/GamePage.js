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
    this.handsContainer = queryElement('#hands-container', this.root);
    this.chipContainer = queryElement('#chip-container', this.root);
  }
  setupPageListeners() {
    this.handsContainer.addEventListener('click', handSetupHandler);
    this.chipContainer.addEventListener('click', bettingHandler);
  }
  removePageListeners() {
    this.handsContainer.removeEventListener('click', handSetupHandler);
    this.chipContainer.removeEventListener('click', bettingHandler);
  }
}

customElements.define('game-page', GamePage);