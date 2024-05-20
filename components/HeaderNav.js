import BaseComponent from "./BaseComponent.js";

class HeaderNav extends BaseComponent {
  constructor () {
    super();
    this.pathToCSS = URLs.cssURLs.Rules;
    this.elementId = '#rules-page-template';
    this.eventName = 'appendruleschange';
    this.initialSetup(this.pathToCSS, this.elementId, this.eventName);
  }
}