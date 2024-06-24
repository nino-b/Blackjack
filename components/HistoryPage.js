import historyPage from "bundle-text:../styles/HistoryPage.css";

import BaseComponent from "./BaseComponent.js";
import history from "../data/history.js";
import HistoryFilter from "../services/HistoryFilter.js";
import HistoryFormSubmitHandler from "../services/HistoryFormSubmitHandler.js";
import HistoryRenderer from "../UI/HistoryRender.js";
import { DialogManager } from "../UI/dialogManager.js";
import { dialogSelectors, dialogAttributes } from "../data/domStore.js";
import queryMultipleEl from "../util/DOMUtils/queryMultipleEl.js";



export default class HistoryPage extends BaseComponent {
  constructor() {
    super();
    this.pageStyles = historyPage;
    this.templateID = 'history-page-template';

    this.history = history;
  }
  addDialogManager() {
    const dialogDOMRef = queryMultipleEl(dialogSelectors, this.root);
    this.dialogManager = new DialogManager(dialogDOMRef, dialogAttributes);
  }
  connectedCallback() {
    super.connectedCallback();
    const table = new HistoryRenderer(this.root, this.history);
    this.addDialogManager();
    const historyFilter = new HistoryFilter(this.root);
    this.historyFormSubmitHandler = new HistoryFormSubmitHandler(this.root, historyFilter.handleFiltering, this.dialogManager);
  }
  disconnectedCallback() {
    // remove event listeners from dialog elements. this dialog is created just for this page instance.
    this.dialogManager.removeListeners();
    this.historyFormSubmitHandler.removeFormListener()
  }
}

customElements.define('history-page', HistoryPage);