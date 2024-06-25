import queryElement from "../util/DOMUtils/queryElement";
import removeClass from "../util/DOMUtils/removeClass";

/**
 * Class responsible for resetting history table filter parameters and returning the table in its initial state.
 */
export default class TrDisplayReset {
  /**
   * Creates 'TrDisplayReset' instance.
   * @param {ShadowRoot} root - A Shadow DOM of the History page.
   * @param {Array|NodeList} trList - An array of Table Row elements.
   * @param {HTMLFormElement} form - The form element containing the inputs to be reset.
   */
  constructor(root, trList, form) {
    this.root = root;
    this.trList = trList;

    /**
    * Query the reset button element within the root element.
    * @type {HTMLElement}
    */
    this.resetBtn = queryElement('#reset-filter', this.root);
    /**
    * A collection of child nodes of the form element.
    * @type {NodeList}
    */
    this.formChildren = form.childNodes;
    /**
    * Bind the reset event callback to the current instance of the class.
    * @type {Function}
    */
    this.resetEventCallback = this.resetEventCallback.bind(this);
    /**
    * Set up the event listener for the reset button.
    */
    this.listenToResetBtn();
  }
  /**
   * Adds a click event listener to the reset button.
   */
  listenToResetBtn() {
    this.resetBtn.addEventListener('click', this.resetEventCallback);
  }
  /**
   * Removes an event listener from the reset button to avoid memory leaks.
   */
  removeListener() {
    this.resetBtn.removeEventListener('click', this.resetEventCallback);
  }
  resetEventCallback() {
    this.#resetRowDisplay();
    this.#resetFormElements();
  }
  /**
   * A private method that removes '.hidden' class from each row.
   * @private
   */
  #resetRowDisplay() {
    if (this.trList) {
      this.trList.forEach(tr => {
        removeClass(tr, 'hidden');
      });
    }
  }
  /**
   * Resets form element values to their initial values.
   */
  #resetFormElements() {
    this.formChildren.forEach(child => {
      if (child.type === 'checkbox' && child.checked) {
        child.checked = false;
      } else if (child.type === 'date' && child.value !== '') {
        child.value = '';
      } else if (child.tagName === 'SELECT' && child.selectedIndex !== null) {
        child.selectedIndex = 0;
      }
    });
  }
}