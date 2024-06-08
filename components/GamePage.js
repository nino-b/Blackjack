import BaseComponent from "./BaseComponent.js";
import URLs from "../data/urls.js";
import { createEl, addClass } from "../util/domUtils.js";

export default class RulesPage extends BaseComponent {
  constructor() {
    super();
    this.pathToCSS = URLs.cssURLs.Game;
    this.templateID = 'game-page-template';
    this.eventName = 'append_game_change';
  }
  render() {}
  connectedCallback(){
    super.connectedCallback();
    this.render();
  }
}