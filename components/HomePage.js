import BaseComponent from "./BaseComponent";
import URLs from "../data/urls";

class HomePage extends BaseComponent {
  constructor() {
    super();
    this.pathToCSS = URLs.cssURLs.Home;
    this.elementId = '#rules-page-template';
    this.eventName = 'appendhomechange';
    this.initialSetup(this.pathToCSS, this.elementId, this.eventName);
  }
  render() {
    this.root.querySelector('#home-page-container').innerHTML = '';
  }
}