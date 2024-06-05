import HistoryFilter from "./HistoryFilter.js";
import HistoryFormSubmitHandler from "./HistoryFormSubmitHandler.js";
import HistoryRenderer from "./HistoryRender.js";

export default class HistoryActionManager {
  constructor(root, history) {
    this.root = root;
    this.history = history;

    this.table = this.root.getElementById('history-table');

    // this.buttonList = null; // Array.from(this.table.querySelectorAll('button'))
  }
  handleActio
}