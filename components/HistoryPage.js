import historyPage from "bundle-text:../styles/HistoryPage.css";

import BaseComponent from "./BaseComponent.js";
import history from "../data/history.js";
import HistoryFilter from "../services/HistoryFilter.js";
import HistoryFormSubmitHandler from "../services/HistoryFormSubmitHandler.js";
import HistoryRenderer from "../UI/HistoryRender.js";
import { DialogManager } from "../UI/dialogManager.js";
import { dialogSelectors, dialogAttributes } from "../data/domStore.js";
import queryMultipleEl from "../util/DOMUtils/queryMultipleEl.js";
import queryElement from "../util/DOMUtils/queryElement.js";


/**
 * Creates a History page.
 */
export default class HistoryPage extends BaseComponent {
  constructor() {
    super();
    /** 
    * @type {string | null} - An ID of HTML template tag, which contains template for specific page.
    */
    this.templateID = 'history-page-template';
    /**
    * @type {string | null} - A string that contains page specific styles.
    */
    this.pageStyles = historyPage;

    /**
     * @type {Array} - History Array that has entries from each game.
     */
    this.history = history;
    this.table = null;
    this.form = null
  }
  /**
   * Queries page-specific dialog elements and adds dialog manager functions to the page-specific elements.
   */
  addDialogManager() {
    const dialogDOMRef = queryMultipleEl(dialogSelectors, this.root);
    this.dialogManager = new DialogManager(dialogDOMRef, dialogAttributes);
  }
  /**
   * A function that will be executed when the page is created.
   * At first it executes functions from original 'connectedCallback' and then adds some other functionalities.
   * 
   * Queries table element from the newly created element. 
   * It queries from here because this is the function where a 'history-page' is definitely created and it is possible to query elements from its Shadow DOM.
   * Adds dialog manager functionalities to a page-specific dialog boxes and buttons.
   * 
   * Adds filtering functionalities and submit listener to the filter form.
   */
  connectedCallback() {
    super.connectedCallback();

    this.table = queryElement('#history-table', this.root);
    this.form = queryElement('#filter-form', this.root)
    this.historyTable = new HistoryRenderer(this.root, this.table, this.history);
    this.addDialogManager();

    this.historyFilter = new HistoryFilter(this.root, this.form);
    this.historyFormSubmitHandler = new HistoryFormSubmitHandler(this.form, this.historyFilter.handleFiltering);
  }
  /**
   * Removes page-specific event listeners to avoid memory leaks.
   */
  disconnectedCallback() {
    this.dialogManager.removeListeners();
    this.historyFilter.TrDisplayReset.removeListener();
    this.historyFormSubmitHandler.removeFormListener()
  }
}

customElements.define('history-page', HistoryPage);