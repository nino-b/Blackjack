import BaseComponent from "./BaseComponent";
import URLs from "../data/urls";

class HomePage extends BaseComponent {
  constructor() {
    super();
    this.pathToCSS = URLs.cssURLs.Home;
    this.elementId = '#rules-page-template';
    this.eventName = 'appendhomechange';
  }
  render() {
    const bgContainer = this.root.querySelector('#home-page-container');
    bgContainer.innerHTML = '';
    /** 
     * This code clears out every other class and 
     * assigns only this current one.
    */
    bgContainer.classList = 'align-bottom';
  }
}