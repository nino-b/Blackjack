/** 
 * A base class for all the components.
 * It sets up all common features.
 * 
 * 1. Creates a Shadow DOM for the individual component.
 * 2. Loads CSS floder, attaches to the Shadow DOM.
 * 3. Runs the 'connectedCallback' lifecycle method when 
 * the element is attached to the DOM.
*/

export default class BaseComponent extends HTMLElement {
  constructor() {
    super();
  }
  /** 
   * Attaches Shadow DOM to the Component.
   * @returns {void} - Does not return anything.
  */
  attachShadowDom() {
    this.root = this.attachShadow({mode: 'open'});
  }
  /** 
   * Sets up specific CSS file to respective Shadow DOM.
   * 1. Ensures that argument has correct type. 
   * Otherwise throws an error.
   * 2. Creates 'style' element for that Shadow DOM ('<style>').
   * 3. Appends it to the Shadow DOM.
   * 4. Loads CSS - executes CSS loading private method.
   * 
   * @param {string} pathToCSS - A path to a CSS file.
   * @returns {void} - Does not return anything.
  */
  setUpCSS(pathToCSS) {
    if (typeof pathToCSS !== 'string') {
      console.error(`Error: CSS path must be a string.`);
      throw new Error(`Problem with setting up the page.`)
    }

    this.styles = document.createElement('style');
    this.root.appendChild(this.styles);
    this.#loadCSS(pathToCSS);
  }
  /** 
   * Loads CSS file.
   * 1. Makes a 'fetch' request to fetch the CSS file.
   *  - If the request is not resolved, or there is some error, 
   *    'try ... catch' catches the error.
   * 2. Converts response to the text format.
   * '.text()' format is used when we are
   *  fetching CSS, HTML or any plain text file.
   * 
   * @private - A private method.
   * @param {string} pathToCSS - Path to the CSS file.
  */
  async #loadCSS(pathToCSS) {
    try {
      const request = await fetch(pathToCSS);
    if (!request.ok) {
      console.error(`HTTP Error: ${request.status}`);
      throw new Error(`HTTP error! Status: ${request.status}`);
    }
    const css = await request.text();
    this.styles.textContent = css;

    } catch (error) {
      console.error(`ERROR loading CSS: ${error} `);
    }
  }
  /** 
   * A web component lifecycle method that is executed after
   * element is attached to the DOM.
   * 1. Retrieves the template element from the DOM.
   * 2. If the element was retrieved successfully,
   * its contents are cloned and appended to the DOM. 
   * Otherwise, an error is logged.
   * 3. Attaches an event listener to the specified method and 
   * calls 'render()' method every time changes are made 
   * in this component and this event is fired, to reflect the changes.
   * 4. 'render()' method is also called to initialize 
   * the component's content.
   * 
   * @param {string} elementId - Element ID, to retrieve it from the DOM.
   * @param {string} eventName - Name of the event that will be executed.
  */
  connectedCallback(elementId, eventName) {
    const template = document.getElementById(elementId);
    if (template) {
      const content = template.content.cloneNode(true);
      this.root.appendChild(content);
    } else {
      console.error(`Template with ID ${elementId} not found.`);
    }

    window.addEventListener(eventName, () => {
      this.render();
    });
    this.render();
  }
  /** 
   * Base of 'render()' method.
   * It will be overriden in other classes.
  */
  render() {
    console.log('Base Class.')
  }
    /** 
   * Initializes the component setup.
   * 
   * @param {string} pathToCSS - Path to the CSS file.
   * @param {string} elementId - Element ID to retrieve it from the DOM.
   * @param {string} eventName - Name of the event to listen for.
   */
  initialSetup(pathToCSS, elementId, eventName) {
    if (typeof pathToCSS !== 'string' || 
        typeof elementId !== 'string' || 
        typeof eventName !== 'string') {
      console.error(`Error: CSS path, elementId, and eventName must be strings.`);
      throw new Error(`Problem with setting up the page.`)
    }
    this.attachShadowDom();
    this.setUpCSS(pathToCSS);
    this.connectedCallback(elementId, eventName);
  }
}


























export class BaseComponent extends HTMLElement {
  constructor() {
    super();
  }
/*   attachShadowDom() {
    this.root = this.attachShadow({mode: 'open'});
  } */

  setUpCSS(pathToCSS) {
    this.styles = document.createElement('style');
    this.root.appendChild(this.styles);
    this.#loadCSS(pathToCSS);
  }

  async #loadCSS(pathToCSS) {
    try {
      const request = await fetch(pathToCSS);
    if (!request.ok) {
      console.error(`HTTP Error: ${request.status}`);
      throw new Error(`HTTP error! Status: ${request.status}`);
    }
    const css = await request.text();
    this.styles.textContent = css;

    } catch (error) {
      console.error(`ERROR loading CSS: ${error} `);
    }
  }
  connectedCallback(elementId, eventName) {
    const template = document.getElementById(elementId);
    if (template) {
      const content = template.content.cloneNode(true);
      this.root.appendChild(content);
    }

    window.addEventListener(eventName, () => {
      this.render();
    });
    this.render();
  }
  render() {
    console.log('Base Class.')
  }
  initialSetup(pathToCSS, elementId, eventName) {
    this.attachShadowDom();
    this.setUpCSS(pathToCSS);
    this.connectedCallback(elementId, eventName);
  }
}