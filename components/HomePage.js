import BaseComponent from "./BaseComponent.js";
import URLs from "../data/urls.js";

/**
 * This class defines contents of the 'home-page' custom element.
 * 
 * It must be imported in the 'app.js' because 
 * I define as a custom element it in this module, 
 * and I don't use it in the 'app.js' for anything 
 * (although I could define it there),
 * and to execute defining process, 
 * that is why I imported it in the 'app.js'.
 */
export default class HomePage extends BaseComponent {
  constructor() {
    super();
    this.pathToCSS = URLs.cssURLs.Home;
    this.templateID = 'home-page-template';
    this.eventName = 'appendhomechange';
  }
  connectedCallback() {
    super.connectedCallback();
  }
}

customElements.define('home-page', HomePage);