
/**
 * This class handles submission event of history table's filter button.
 * 
 * @param {ShadowRoot} root - Shadow root for history page.
 */
export default class HistoryFormSubmitHandler {
  constructor(root, callback) {
    this.root = root;
    this.form = null;

    this.setupSubmitListener(callback);
  }
  /**
   * Sets up event listener for history table's filter button.
   * At first it checks whether <form> is retrieved from the Shadow DOM.
   * If there is no <form> element, then it loads it.
   * This lazy loading technique allows us to get <form> element only when it will be necessary.
   * And if the user won't use filtering function at all, DOM element won't be queried for no reason.
   * 
   * If getting <form> element was successful, it sets up an event listener, 
   * processes data to shape it into the form we want to work with, 
   * and executes a callback function. 
   * If getting the <form> element was not successful, it logs an error message.
   * 
   * @param {Function} callback - A callback function that will be executed after 'submit' event.
   */
  setupSubmitListener(callback) {
    if (!this.form) {
      this.#getForm();
    }

    if (this.form) {
      this.form.addEventListener('submit', event => {
        event.preventDefault();
  
        const data = this.#processData();
  
        callback(data);
      });
    } else {
      console.error(`Getting Form element from the Shadow DOM was not successful!`);
    }
  }
  /**
   * A private method that gets <form> element from the Shadow DOM.
   * @private
   */
  #getForm() {
    this.form = this.root.getElementById('filter-form');
  }
  /**
   * A private method that processes the submitted form data.
   * At first it creates a new FormData object that helps to 
   * construct a set of key/value pairs, representing form fields and their values. 
   * 
   * To easily process the data, we turn this key/value pairs into an object with one change:
   * originally, the data is in this format: '04-25-2024' 
   * and for our purposes, we use '25/04/2024' format.
   * Specifically, in the history object we save data and then display it in this format: '25/04/2024' (in <td>).
   * And to filter exact match or a range of time, 
   * we need to compare each value in <td> with submitted data.
   * 
   * @returns {Object} a process data. Keys will match <tr> 'data-' attributes and <tr>s will be filtered by matching 'data-' and this returned object's values.
   */
  #processData() {
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
}