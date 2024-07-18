import addClass from "../util/DOMUtils/addClass"; 
import queryElementGroup from "../util/DOMUtils/queryElementGroup";
import removeClass from "../util/DOMUtils/removeClass";
import isDateInRange from "../util/jsUtils/isDateInRange";
import TrDisplayReset from "../UI/TrDisplayReset";


export default class HistoryFilter {
  constructor(root, form) {
    this.root = root;
    this.trList = queryElementGroup('tr', this.root);
    this.handleFiltering = this.handleFiltering.bind(this);
    
    this.TrDisplayReset = new TrDisplayReset(this.root, this.trList, form);
  }
  handleFiltering(data) {
    for (let i = 1; i < this.trList.length; i++) {
      this.#filterRow(this.trList[i], data);
    }
  }
  /**
   * A private method to hide (add '.hidden' attritbute) to elements that don't meet the criteria.
   * 
   * @param {HTMLElement} tr - Table row element that has 'data-' attributer that stores row filtering parameters.
   * @param {Object} formData - Submitted form values collected as an object.
   * 
   * Iterates through each submitted parameter.
   * If the parameter is date parameter, it saves in an respective variable then to be used to check whether this element's date value is in a specified date range or not.
   * Compares each parameter to a table row 'data-' attribute that has the same name as form element 
   * (e.g. '<input type="checkbox" name="isSplit">' the name for this parameter in 'formData' will be 'isSplit' and 
   * in for 'data-' attribute will be 'data-is-split' which is in js changed into 'dataset.siSplit' camel case datased property. So thise two names match.).
   * 
   * If any of those two criteria is met, it stops that iteration and moves to the next one.
   * If none of those are met, it adds '.hidden' class to the table row element and returns from the function.
   * If an element's date value is not in a specified date range, it adds '.hidden' class to the table row element and returns from the function.
   */
  #filterRow(tr, formData) {
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

      if (tr.dataset[param] && tr.dataset[param] === formData[param]) {
        continue;
      }
      addClass(tr, 'hidden');
      return;
    }
    if (!(isDateInRange(tr.dataset.date, startDate, endDate))) {
      addClass(tr, 'hidden');
      return;
    }
    if (tr.classList.contains('hidden')) removeClass(tr, 'hidden');
  }
}