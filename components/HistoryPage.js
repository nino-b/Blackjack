import BaseComponent from "./BaseComponent.js";
import URLs from "../data/urls.js";
import history from "../data/history.js";
import { createEl, lazyLoadEl } from "../util/domUtils.js";


export default class HistoryPage extends BaseComponent {
  constructor() {
    super();
    this.pathToCSS = URLs.cssURLs.History;
    this.templateID = 'history-page-template';
    this.eventName = 'append_history_change';
    this.history = history;
    this.table = null;
  }
  /**
  * Renders the history table by dynamically creating and appending rows and cells
  * with the relevant data. It uses lazy loading for the table element,
  * because if user doesn't use history page, 
  * so DOM element won't be retrieved if it won't be used to create a page.
  * 
  * 'history' is an array that holds history objects for each game.
  * Number of hands is necessary to know to span some of the cells for several rows, like date and bank, because these are common values for all on player hands.
  */
  render() {
    this.table = lazyLoadEl('#history-table', this.table, this.root);
    this.history.forEach(historyObj => {
      const numberOfHands = historyObj.hands.length;

      const firstRow = createEl('tr', this.table);
      createEl('td', firstRow, historyObj.date, {rowspan: numberOfHands});

      this.displayHandData(firstRow, historyObj.hands[0])

      for (let i = 1; i < numberOfHands; i++) {
        const handRow = createEl('tr', this.table);
        this.displayHandData(handRow, historyObj.hands[i]);
      }

      createEl('td', firstRow, historyObj.bank, {rowspan: numberOfHands});
    });
  }
  /**
 * Displays hand data in the given table row by creating and appending cells for each hand property.
 *
 * @param {HTMLElement} row - The table row element to append hand data cells to.
 * @param {Object} hand - An object representing the hand data with various properties.
 */
  displayHandData(row, hand) {
    for (const el in hand) {
      createEl('td', row, hand[el]);
    }
  }
  connectedCallback() {
    super.connectedCallback();
    this.render();
  }
}

customElements.define('history-page', HistoryPage);