
export default class HistoryActionManager {
  constructor(root, history) {
    this.root = root;
    this.history = history;

    this.table = this.root.getElementById('history-table');

    this.form = null;
    this.trList = null;
    this.buttonList = null; // Array.from(this.table.querySelectorAll('button'))

    this.handleSubmit();
  }
  handleSubmit() {
    if (!this.trList) {
      this.trList = Array.from(this.root.querySelectorAll('tr'));
    }
    if (!this.form) {
      this.form = this.root.getElementById('filter-form');
    }

    this.form.addEventListener('submit', event => {
      event.preventDefault();
      const data = this.processData();

      const result = this.handleFiltering(data);
      console.log('result', result);
    });
  }
  processData() {
    const formData = new FormData(this.form);
    const data = {};

    formData.forEach((value, key) => {
      if (key === 'start-date' || key === 'end-date') {
        value = value.split('-').reverse().join('/');
      }
      data[key] = value;
    });
    return data;
  }
  convertToDate(dateStr) {
    const [day, month, year] = dateStr.split('/').map(Number);
    return new Date(year, month - 1, day);
  }
  isDateInRange(checkDateStr, startDateStr, endDateStr) {
    if (!startDateStr && !endDateStr) return false;
      
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
    return this.trList.filter(tr => {
      if (tr.dataset.date) {
        const isDataInRange = this.isDateInRange(tr.dataset.date, data["start-date"], data["end-date"]);

        if (data["game-outcome"]) {
          if (data["game-outcome"] !== tr.dataset.outcome) return false;
        }
        if (data["insurance-taken"]) {
          if (data["insurance-taken"] !== tr.dataset.insurance) return false;
        }
        if (data["even-money-taken"]) {
          if (data["even-money-taken"] !== tr.dataset.evenMoney) return false;
        }
        if (data["split-hands"]) {
          if (data["split-hands"] !== tr.dataset.splitHands) return false;
        }
        return true;
      }
      return false;
    });
  }
}

/* 

<tr data-date=""
    data-outcome=""
    data-insurance=""
    data-even-money=""
><tr>


*/

/* 

export default class HistoryActionManager {
  constructor(root, history) {
    this.root = root;
    this.history = history;

    this.table = this.root.getElementById('history-table');
    this.buttonList = Array.from(this.table.querySelectorAll('button'));

    this.trList = null;

    this.handleSubmit();
  }
  handleSubmit() {
    if (!this.trList) {
      this.trList = Array.from(this.root.querySelectorAll('tr'));
    }
    const form = this.root.getElementById('filter-form');

    form.addEventListener('submit', event => {
      event.preventDefault();
      const data = this.processData(form);

      const result = this.handleFiltering(data);
      //console.log('result', result);
    });
  }
  processData(form) {
    const formData = new FormData(form);
    const data = {};

    formData.forEach((value, key) => {
      if (key === 'start-date' || key === 'end-date') {
        value = value.split('-').reverse().join('/');
      }
      data[key] = value;
    });
    return data;
  }
  convertToDate(dateStr) {
    const [day, month, year] = dateStr.split('/').map(Number);
    return new Date(year, month - 1, day);
  }
  isDateInRange(checkDateStr, startDateStr, endDateStr) {
    if (!startDateStr && !endDateStr) return false;
      
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
    return this.trList.filter(tr => {
      if (tr.dataset.date) {
        const isDataInRange = this.isDateInRange(tr.dataset.date, data["start-date"], data["end-date"]);

        if (data["game-outcome"]) {
          if (data["game-outcome"] !== tr.dataset.outcome) return false;
        }
        if (data["insurance-taken"]) {
          if (data["insurance-taken"] !== tr.dataset.insurance) return false;
        }
        if (data["even-money-taken"]) {
          if (data["even-money-taken"] !== tr.dataset.evenMoney) return false;
        }
        if (data["split-hands"]) {
          if (data["split-hands"] !== tr.dataset.splitHands) return false;
        }
        return true;
      }
      return false;
    });
  }
}


*/
/* 
[
  {
    tr: <tr><.tr>
    _children: [
      {
        td: <td></td>,
        _children: <div></div>
      },
      {
        td: <td></td>,
        _children: <div></div>
      },
    ]
  },
]


*/



/* 
  processData(form) {
    const formData = new FormData(form);
    const data = {
      dateFilter: {},
      contentFilter: {}
    };

    formData.forEach((value, key) => {
        if (key === 'start-date' || key === 'end-date') {
          value = value.split('-').reverse().join('/');
          data.dateFilter[key] = value;
        } else {
          if (key === 'insurance-taken') {
            value = 'Insurance';
          }
          if (key === 'even-money-taken') {
            value = 'Even Money';
          }
          data.contentFilter[key] = value;
        }
    });

    return data;
  }
  convertToDate(dateStr) {
    const [day, month, year] = dateStr.split('/').map(Number);
    return new Date(year, month - 1, day);
  }
  isDateInRange(checkDateStr, startDateStr, endDateStr) {
    if (startDateStr || endDateStr) {
      
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
  }
  filterByContent(contentTypeParams, el) {  
    const values = Object.values(contentTypeParams).map(param => new RegExp(param, 'i'));
    return values.every(regex => regex.test(el.textContent))
  }

  handleFiltering({dateFilter, contentFilter}) {
    this.trList.filter(tr => {
      
    })
  }
  getTdList(trow) {
    if (trow.tr.children && !trow._children) {
      trow._children = Array.from(trow.tr.children).map(element => ({td: element}));
    }
    return trow._children;
  }
  getDivs(trow) {
    const tdList = this.getTdList(trow);
    tdList.forEach(tdata => {
      if (tdata.td.children && !tdata._children) {
        tdata._children = Array.from(tdata.td.children).map(element => ({div: element}));
      }
    });
  }
  handleFiltering({dateFilter, contentFilter}) {
    const result = this.trList.filter(tr => {
      const divList = this.getDivs(tr);

      if (dateFilter['start-date'] || dateFilter['end-date']) {
        console.log(tr._children)
        this.isDateInRange(tr._children[1]._children[0].textContent, dateFilter['start-date'], dateFilter['end-date'])
      }
      tr._children.forEach(tdata => {
        if (tdata._children) {
          this.filterByContent(contentFilter, tdata._children);
        }
        this.filterByContent(contentFilter, tdata);
      });
      return tr;
    });

    console.log('result', result)
  }

*/

/* 

  filterByDate(trow) {
    return this.isDateInRange(trow._children[1]._children[0].textContent);
  }
  
  */
/* this.divs.forEach(div => {
  if (this.filterByDate(filterByDate['start-date'], filterByDate['end-date'], div.textContent)) {
    console.log('date div', div);
  }
  if (this.filterByContent(filterByContent, div)) {
    console.log('content div', div);
  }
});
this.tds.forEach(td => {
  if (this.filterByContent(filterByContent, td)) {
    console.log('content td', td);
  }
}); */
/* ********************************************************** */