import historyPage from "bundle-text:../styles/HistoryPage.css";

import BaseComponent from "./BaseComponent.js";
import HistoryRenderer from "../UI/HistoryRender.js";
import HistoryFilter from "../services/HistoryFilter.js";
import HistoryFormSubmitHandler from "../services/HistoryFormSubmitHandler.js";
import { DialogManager } from "../UI/dialogManager.js";
import { dialogSelectors, dialogAttributes } from "../data/domStore.js";
import queryMultipleEl from "../util/DOMUtils/queryMultipleEl.js";
import queryElement from "../util/DOMUtils/queryElement.js";


import BlackjackDBAccessor from "../game/data/openIndexedDB.js";
import { fetchBatch } from "../util/jsUtils/IndexedDBLibrary.js";
import scrollHistoryLoader from "../UI/scrollHistoryLoader.js";




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
    this.BlackjackDBAccessor = BlackjackDBAccessor;
    this.table = null;
    this.form = null
  }
  /**
  * Queries page-specific dialog elements and adds dialog manager functions to the page-specific elements.
  */
  async addDialogManager() {
    const dialogDOMRef = queryMultipleEl(dialogSelectors, this.root);
    this.dialogManager = new DialogManager(dialogDOMRef, dialogAttributes);
  }

  queryElements() {
    this.table = queryElement('#history-table', this.root);
    this.form = queryElement('#filter-form', this.root);
  }
  setupPageListeners() {
    this.scrollHistoryLoader = scrollHistoryLoader(this.BlackjackDBAccessor, this.historyRenderer.renderEntry);
    window.addEventListener('scroll', this.scrollHistoryLoader.bind(this));
  }
  /**
   * Removes page-specific event listeners to avoid memory leaks.
  */
  removePageListeners() {
    window.removeEventListener('scroll', this.scrollHistoryLoader);
    this.dialogManager.removeListeners();
    this.historyFilter.TrDisplayReset.removeListener();
    this.historyFormSubmitHandler.removeFormListener()
  }

  async render() {
    this.historyRenderer = new HistoryRenderer(this.root, this.table); // +
    await fetchBatch(this.BlackjackDBAccessor, this.historyRenderer.renderEntry);  
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

    this.queryElements();

    // Open the IndexedDB asynchronously
    try {
      this.render();
      this.setupPageListeners();
      this.addDialogManager();
      this.historyFilter = new HistoryFilter(this.root, this.form);
      this.historyFormSubmitHandler = new HistoryFormSubmitHandler(this.form, this.historyFilter.handleFiltering);
    } catch (error) {
      console.error('Error opening IndexedDB:', error);
    }
  }
/*   disconnectedCallback() {
    this.removePageListeners();
  } */
}

customElements.define('history-page', HistoryPage);