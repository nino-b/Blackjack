import BaseComponent from "./BaseComponent.js";
import URLs from "../data/urls.js";
import history from "../data/history.js";
import { createEl } from "../util/domUtils.js";
import HistoryActionManager from "../services/History.js";


export default class HistoryPage extends BaseComponent {
  constructor() {
    super();
    this.pathToCSS = URLs.cssURLs.History;
    this.templateID = 'history-page-template';
    this.eventName = 'append_history_change';
    this.history = history;
  }
  handlePageActions() {
    new HistoryActionManager(this.root, this.history)
  }

  displayData(parentCell, obj) {
    for (const prop in obj) {
      if (obj[prop]) {
        const div = createEl('div', parentCell, obj[prop]);
      }
    }
  }
  addDataAttr(history, handIndex = 0) {
    const hand =  history.playerHands[handIndex];
    const splitHandsOn = history.playerHands.length > 1 ? 'on' : null;
    const insuranceOn = hand.bet.insurance ? 'on' : null;
    const evenMoneyOn = hand.payout["even-money"] ? 'on' : null;

    return {
      datadate: history.dateTime.date,
      datasplitHands: splitHandsOn,
      dataoutcome: hand.outcome,
      datainsurance: insuranceOn,
      dataevenMoney: evenMoneyOn,
    }
  }
  displayHandData(parent, handObj) {
    for (const prop in handObj) {
      if (typeof handObj[prop] === 'object' && !Array.isArray(handObj[prop])) {
        const td = createEl('td', parent);
        this.displayData(td, handObj[prop]);
      } else {
        createEl('td', parent, handObj[prop]);
      }
    }
  }
  render() {
    this.table = this.root.getElementById('history-table');

    this.history.forEach(entry => {
      const handCount = entry.playerHands.length;

      const firstRow = createEl('tr', this.table, null, this.addDataAttr(entry));
      const dateTimeCell = createEl('td', firstRow, null, {rowspan: handCount});
      this.displayData(dateTimeCell, entry.dateTime);

      const dealerHandCell = createEl('td', firstRow, entry.playerHands[0].cards, {rowspan: handCount});

      const firstHand = this.displayHandData(firstRow, entry.playerHands[0]);
      for (let i = 1; i < handCount; i++) {
        const handRow = createEl('tr', this.table, null, this.addDataAttr(entry, i));
        this.displayHandData(handRow, entry.playerHands[i]);
      }

      const bank = createEl('td', firstRow, entry.bank);
    });
  }
  connectedCallback() {
    super.connectedCallback();
    this.render();
    this.handlePageActions()
  }
}

customElements.define('history-page', HistoryPage);