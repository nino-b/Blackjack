import createEl from "../util/DOMUtils/createEl";
import addAttributes from "../util/DOMUtils/addAttributes";

/**
 * This class contains functionalities that are necessary to render the history table.
 * It renders table as soon as it is executed.
 * 
 * @param {ShadowRoot} root - A shadow root for history page.
 * @param {Array} history - A history array, that contains objects that describe player's status at the end of each game.
 */

export default class HistoryRenderer {
  constructor(root, history) {
    this.root = root;
    this.history = history;

    this.renderTable()
  }
/**
 * If thete should be multiple parameters in the same cell, for styling (layout) purposes, 
 * this function will keep them in separate <div>s.
 * 
 * @param {HTMLElement} parentCell - An HTML element, a parent cell that will hold children <div>s.
 * @param {Object} obj - An object that holds list of parameters and their corresponding values.
 */
  displayDiv(parentCell, obj) {
    for (const prop in obj) {
      if (obj[prop]) {
        createEl('div', parentCell, obj[prop]);
      }
    }
  }
/**
 * Creates <td> for each parameter and appends it to the parent element.
 * It checks whether property is an object (but not an array) or not, 
 * and if it is, this means that in the same cell there should be multiple values about same subject (like bet or payout).
 * I decided this way, instead of spreading everyhing as individual columns, because 
 * user chooses special options rarely, and keeping them as individual colums will keep user more distracted from main parameters.
 * If in the same cell should be multiple parameters, it calls 'this.displayDiv'.
 * 
 * @param {HTMLElement} parent - A parent element (<tr>) that newly created <td> will be appended to.
 * @param {Object} paramList - An object that contains list of parameters and corresponding values for each hand.
 */
  displayTd(parent, paramList) {
    for (const prop in paramList) {
      if (typeof paramList[prop] === 'object' && !Array.isArray(paramList[prop])) {
        const td = createEl('td', parent);
        this.displayDiv(td, paramList[prop]);
      } else {        
        createEl('td', parent, paramList[prop]);
      }
    }
  }
/**
 * Creates an object that stores 'data-' attributes and values for each <tr> entry.
 * This will be assigned to <tr> and then will be used to filter the table.
 * 
 * @param {Object} historyEntry - History object for each entry.
 * @returns {Object} - An object that contains 'data-' attributes and corresponding values.
 */
  addDataAttr(historyEntry) {
    const hand = historyEntry.hand;
    const splitHandsOn = hand.isSplit ? 'on' : null;
    const insuranceOn = hand.bet.insurance ? 'on' : null;
    const evenMoneyOn = hand.payout["even-money"] ? 'on' : null;

    const r = {
      datadate: historyEntry.dateTime.date,
      dataisSplit: splitHandsOn,
      dataoutcome: hand.outcome,
      datainsurance: insuranceOn,
      dataevenMoney: evenMoneyOn,
    }
    console.log('r', r);
    return r;
  }
/**
 * Renders history table. 
 * Uses 'history' object and creates new row for each entry.
 * Each entry contains data about player's status at that specific moment. 
 * 
 * If 'history' object contains some data, that has different keys in the object, 
 * but needs to be displayed in the same cell, 
 * each entry is contained in a <div>, for styling (layout) purposes.
 * Usually that is deeply nested object (object -> in object -> in object),
 * in case of date and time, three levels are not necessary (object -> in object), 
 * and that is why I check that specific case initially.
 */
  renderTable() {
    const table = this.root.getElementById('history-table');

    this.history.forEach(entry => {
      const row = createEl('tr', table, null);
      addAttributes(row, this.addDataAttr(entry));

      for (const paramList in entry) {
        if (paramList === 'dateTime') {
          const td = createEl('td', row);
          this.displayDiv(td, entry[paramList]);
        } else {
          this.displayTd(row, entry[paramList]);
        }
      }
    });
  }
}
