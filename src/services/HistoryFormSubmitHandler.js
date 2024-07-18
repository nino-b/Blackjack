import queryElement from "../util/DOMUtils/queryElement";

/**
 * This class handles submission event of history table's filter button.
 * 
 * @param {ShadowRoot} root - Shadow root for history page.
 */
export default class HistoryFormSubmitHandler {
  constructor(form, callback) {
    this.form = form;
    this.callback = callback;

    /**
     * Sets up an event listener for a 'submit' button.
     */
    this.setupSubmitListener();
  }
  /**
   * It sets up an event listener, processes data into an object format, and executes a callback function. 
   * If the <form> element does not exist, it logs an error message.
   * 
   */
  setupSubmitListener() {
    if (this.form) {
      this.form.addEventListener('submit', this.formSubmitCallback.bind(this));
    } else {
      console.error(`Getting Form element from the Shadow DOM was not successful!`);
    }
  }
  /**
   * Removes an event listener from the form element to avoid memory leaks.
   */
  removeFormListener() {
    this.form.removeEventListener('submit', this.formSubmitCallback);
  }
  /**
   * A callback function for a 'submit' event in a form.
   * Prevents default behavior of sending data to the server, turns data into an object format and changes values in a preferable format and calls the callback function.
   * @param {Event} event - The form submission event.
   */
  formSubmitCallback(event) {
    event.preventDefault();
    const data = this.processData();
    this.callback(data);
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
   * It adds parameters to a 'data' object only if the values exist and are not empty strings (it might be if user chooses 'game-outcome: any' or does not choose a date).
   * 
   * @returns {Object} a process data. Keys will match <tr> 'data-' attributes and <tr>s will be filtered by matching 'data-' and this returned object's values.
   */
  processData() {
    const formData = new FormData(this.form);
    const data = {};

    formData.forEach((value, key) => {
      if (key === 'start-date' || key === 'end-date') {
        value = value.split('-').reverse().join('/');
      }
      if (value) data[key] = value;
    });
    return data;
  }
}