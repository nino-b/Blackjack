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
    this.pathToResetCSS = './reset.css';
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
    this.#applyStyles();
  }
  /** 
   * Asynchronously loads a CSS file.
  */
  async #applyStyles() {
    try {
      const [ resetCSS, stylesCSS ] = await Promise.all([
        this.#fetchCSS(this.pathToResetCSS),
        this.#fetchCSS(this.pathToCSS)
      ]);

      const styles = document.createElement('style');
      styles.textContent = `${resetCSS}\n${stylesCSS}`;
      this.root.appendChild(styles);
    } catch (error) {
      console.error('Failed to apply styles:', error);
    }
  }
  async #fetchCSS(url) {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Failed to fetch ${url}`);
    }
    return response.text();
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
  connectedCallback() {
    this.setUpCSS();
    this.setUpTemplate();
    this.setUpEventListener();
  }
  disconnectedCallback() {
    window.removeEventListener(this.eventName, this.render);
  }
}