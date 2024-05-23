/**
 * This class encapsulates all common features for Web Component classes.
 * It provides a base for creating custom elements with encapsulated CSS, templates, and event handling.
 */
export default class BaseComponent extends HTMLElement {
  constructor() {
    super();
    /** 
     * @type {ShadowRoot}
    */
    this.root = this.attachShadow({mode: "open"});
    /** 
     * @type {string | null} - A string that contains path to the CSS file.
    */
    this.pathToCSS = null;
    /** 
     * @type {string | null} - An ID of HTML template tag, which contains template for specific page.
    */
    this.templateID = null;
    /** 
     * @type {string | null} - The name of an event that will fire up specific page display actions.
    */
    this.eventName = null;
  }
  /** 
   * Adds styles to the HTML document.
  */
  setUpCSS() {
    this.styles = document.createElement('style');
    this.root.appendChild(this.styles);
    this.#loadCSS();
  }
  /** 
   * Asynchronously loads a CSS file.
  */
  async #loadCSS() {
    if (!this.pathToCSS) {
      console.error("CSS path is not defined.");
      return;
    }
    try {
      const response = await fetch(this.pathToCSS);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const css = await response.text();
    this.styles.textContent = css;
 
    } catch (error) {
      console.error(`ERROR loading CSS: ${error.message} `);
    }
  }
  /** 
   * Retrieves a template from HTML and appends it to the Shadow DOM.
  */
  setUpTemplate() {
    const template = document.getElementById(this.templateID);
    if (template) {
      const content = template.content.cloneNode(true);
      this.root.appendChild(content);
    }
  }
  /** 
   * Creates a global event listener that listens to fire up page rendering code.
  */
  setUpEventListener() {
    window.addEventListener(this.eventName, this.render)
  }
  /** 
   * In each instance, it will be enhanced with 
   * specific functionalities.
  */
  render() {
    console.log('Base Component Rendered.');
  }
  /**
   * It shows where the <header> should be displayed.
   */
  alignHeader() {
    const header = app.store.header;

    if (this.templateID === 'home-page-template') {
        /** 
         * This code clears out every other class and 
         * assigns only this current one.
        */
      header.classList = 'align-bottom';
    } else {
      if (header.classList.contains('align-bottom')) {
        /** 
         * This code clears out every other class and 
         * assigns only this current one.
        */
        header.classList = 'align-top';
      }
      return;
    }
  }
  connectedCallback() {
    this.setUpCSS();
    this.setUpTemplate();
    this.setUpEventListener();
    this.alignHeader();
  }
  disconnectedCallback() {
    window.removeEventListener(this.eventName, this.render);
  }
}