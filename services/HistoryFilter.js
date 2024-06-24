import addClass from "../util/DOMUtils/addClass"; 
import queryElement from "../util/DOMUtils/queryElement";
import removeClass from "../util/DOMUtils/removeClass";


export default class HistoryFilter {
  constructor(root) {
    this.root = root;
    this.trList = null;
    this.handleFiltering = this.handleFiltering.bind(this);
    this.resetFilter = queryElement('#reset-filter', this.root);
  }
  listenToResetBtn() {
    this.resetFilter.addEventListener('click', this.resetRowDisplay.bind(this));
  }
  resetRowDisplay() {
    if (this.trList) {
      this.trList.forEach(tr => {
        removeClass(tr, 'hidden');
      });
    }
  }
  convertToDate(dateStr) {
    const [day, month, year] = dateStr.split('/').map(Number);
    return new Date(year, month - 1, day);
  }
  isDateInRange(checkDateStr, startDateStr, endDateStr) {  
  /**
   * '  if (!startDateStr && !endDateStr) return true;  '
   * Means that Every date entry is correct if user did not specify time range.
  */ 
    if (!startDateStr && !endDateStr) return true;   
    let startDate = null;
    let endDate = null;

    const checkDate = this.convertToDate(checkDateStr);

    if (startDateStr) {
      startDate = this.convertToDate(startDateStr);

      if (!endDateStr) {
        return checkDate >= startDate;
      }
    }
    if (endDateStr) {
      endDate = this.convertToDate(endDateStr);
      if (!startDateStr) {
        return checkDate <= endDate;
      }
    }
    return checkDate >= startDate && checkDate <= endDate;
  }
  filterRow(tr, formData) {
    let startDate = null;
    let endDate = null;
  
    for (const param in formData) {
      if (param === 'start-date') {
        startDate = formData['start-date'];
        continue;
      }
      if (param === 'end-date') {
        endDate = formData['end-date'];
        continue;
      }
      if ((tr.dataset[param] && tr.dataset[param] === formData[param]) || !tr.dataset[param]) {
        continue;
      }
      addClass(tr, 'hidden');
      return;
    }
    if (!(this.isDateInRange(tr.dataset.date, startDate, endDate))) {
      addClass(tr, 'hidden');
    }
  }
  handleFiltering(data) {
    if (!this.trList) {
      this.#getTrList();
    }
    this.trList.forEach(tr => {
      this.filterRow(tr, data);
    })
  }
  #getTrList() {
    this.trList = Array.from(this.root.querySelectorAll('tr'));
  }
}