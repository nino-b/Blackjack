import BaseComponent from "./BaseComponent.js";
import URLs from "../data/urls.js";
import history from "../data/history.js";
import HistoryFilter from "../services/HistoryFilter.js";
import HistoryFormSubmitHandler from "../services/HistoryFormSubmitHandler.js";
import HistoryRenderer from "../services/HistoryRender.js";


export default class HistoryPage extends BaseComponent {
  constructor() {
    super();
    this.pathToCSS = URLs.cssURLs.History;
    this.templateID = 'history-page-template';
    this.eventName = 'append_history_change';
    this.history = history;
    
    this.table = this.root.getElementById('history-table');

  }
  render() {
    new HistoryRenderer(this.root, this.history);
  }
  connectedCallback() {
    super.connectedCallback();
    this.render();
    const historyFilter = new HistoryFilter(this.root);
    const historyFormSubmitHandler = new HistoryFormSubmitHandler(this.root, historyFilter.handleFiltering)
  }
}

customElements.define('history-page', HistoryPage);