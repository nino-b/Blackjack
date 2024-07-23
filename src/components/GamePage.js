import gamePage from "bundle-text:../styles/GamePage.css";
import BaseComponent from "./BaseComponent.js";
import queryGamePageElements from "../game/util/queryGamePageEl.js";
import manageEventListeners from "../game/util/manageEventListeners.js";
import gamePageHandlers from "../game/data/gamePageHandlers.js";
import app from "../data/App.js";


export default class GamePage extends BaseComponent {
  constructor() {
    super();
    this.pageStyles = gamePage;
    this.templateID = 'game-page-template';
    this.gamePageHandlers = gamePageHandlers;
    this.elementReferences = null;
    this.app = app;

    /**
     * gameInterfaceContainer - 
     * bettingInstruction - 
     * handContainer - 
     * bettingSpotList -  
     * dealBtn - 
     * bankUI - 
     * chipContainer - 
     * 
     * preGameElements - 
     * gameActionsContainer -
    */
  }
  render() {
    const amount = this.app.bankManager.getBank();
    if (this.elementReferences) {
      this.elementReferences.bankUI.textContent = amount;
    }
  }
  connectedCallback() {
    super.connectedCallback();
    this.elementReferences = queryGamePageElements.call(this);
    this.render();
    manageEventListeners(this.elementReferences, this.gamePageHandlers);

  }
  disconnectedCallback() {
    manageEventListeners(this.elementReferences, this.gamePageHandlers, false);
  }
}

customElements.define('game-page', GamePage);