import BaseComponent from "./BaseComponent.js";
import URLs from "../data/urls.js";


export default class HistoryPage extends BaseComponent {
  constructor() {
    super();
    this.pathToCSS = URLs.cssURLs.History;
    this.templateID = 'history-page-template';
    this.eventName = 'append_history_change';
  }
  /* 
  History JSON Template
  */
  /* 
  <th scope="row">...Date + Time...</th>
  <td>...Your Cards...</td>
  <td>...Dealer Cards...</td>
  <td>...Bet...</td>
  <td>...Payout...</td>
  <td>...Bank...</td>
  <td>...Replay the Game Button...</td>
  */
  /* 
  <th scope="row" rowSpan="2">...Date + Time...</th>
  <td>...Your Cards...</td>
  <td>...Dealer Cards...</td>
  <td>...Bet...</td>
  <td>...Payout...</td>
  <td rowSpan="2">...Bank...</td>
  <td rowSpan="2">...Replay the Game Button...</td>
  */
  render() {}
  connectedCallback() {
    super.connectedCallback();
    this.render();
  }
  disconnectedCallback() {}
}

customElements.define('history-page', HistoryPage);