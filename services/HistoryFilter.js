import addClass from "../util/DOMUtils/addClass";
import removeClass from "../util/DOMUtils/removeClass";


export default class HistoryFilter {
  constructor(root) {
    this.root = root;
    this.trList = null;
    this.handleFiltering = this.handleFiltering.bind(this);
  }
  convertToDate(dateStr) {
    const [day, month, year] = dateStr.split('/').map(Number);
    return new Date(year, month - 1, day);
  }
  isDateInRange(checkDateStr, startDateStr, endDateStr) {   
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
  handleFiltering(data) {
    if (!this.trList) {
      this.#getTrList();
    }
  
    return this.trList.filter(tr => {
      if (!tr.dataset.date) {
        return false;
      }
      if (tr.classList.contains('hidden')) {
        removeClass(tr, 'hidden');
      }
  
      const filters = [
        { key: 'date', startKey: 'start-date', endKey: 'end-date', check: this.isDateInRange.bind(this) },
        { key: 'outcome', startKey: 'game-outcome' },
        { key: 'insurance', startKey: 'insurance-taken' },
        { key: 'evenMoney', startKey: 'even-money-taken' },
        { key: 'splitHands', startKey: 'split-hands' }
      ];
  
      return filters.forEach(filter => {
        const { key, startKey, endKey, check } = filter;
  
        if (endKey && (data[startKey] || data[endKey])) {
          if (!(check(tr.dataset[key], data[startKey], data[endKey]))) {
/*             console.log('filter', filter)
            console.log('data', data);
            console.log('data[startKey]', data[startKey]);
            console.log('tr.dataset[key]', tr.dataset[key]); */
            addClass(tr, 'hidden');
          }
        }


        if (data[startKey] && data[startKey] !== tr.dataset[key]) {
/*           console.log('check') */
          addClass(tr, 'hidden');
        }
        });
    });
  }
  #getTrList() {
    this.trList = Array.from(this.root.querySelectorAll('tr'));
  }
}