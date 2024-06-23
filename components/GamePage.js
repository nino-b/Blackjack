import gamePage from "bundle-text:../styles/historyPage.css";
import BaseComponent from "./BaseComponent.js";

export default class RulesPage extends BaseComponent {
  constructor() {
    super();
    this.pageStyles = gamePage;
    this.templateID = 'game-page-template';
  }
}