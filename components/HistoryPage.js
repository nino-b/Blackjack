import historyPage from "bundle-text:../styles/HistoryPage.css";

import BaseComponent from "./BaseComponent.js";
import history from "../data/history.js";
import HistoryFilter from "../services/HistoryFilter.js";
import HistoryFormSubmitHandler from "../services/HistoryFormSubmitHandler.js";
import HistoryRenderer from "../services/HistoryRender.js";
import { DialogManager } from "../UI/dialogManager.js";
import { dialogSelectors, dialogAttributes } from "../data/domStore.js";
import queryMultipleEl from "../util/DOMUtils/queryMultipleEl.js";



export default class HistoryPage extends BaseComponent {
  constructor() {
    super();
    this.pageStyles = historyPage;
    this.templateID = 'history-page-template';

    this.history = history;
    
/*     this.table = this.root.getElementById('history-table'); */


  }
  addDialogManager() {
    const dialogDOMRef = queryMultipleEl(dialogSelectors, this.root);
    new DialogManager(dialogDOMRef, dialogAttributes);
  }
  render() {
    new HistoryRenderer(this.root, this.history);
  }
  connectedCallback() {
    super.connectedCallback();
    this.render();
    this.addDialogManager();
    const historyFilter = new HistoryFilter(this.root);
    const historyFormSubmitHandler = new HistoryFormSubmitHandler(this.root, historyFilter.handleFiltering);
    console.log('ho ho ho');
  }
  disconnectedCallback() {
    // remove event listeners from dialog elements. this dialog is created just for this page instance.
  }
}

customElements.define('history-page', HistoryPage);