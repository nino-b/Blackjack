import reset from "bundle-text:../styles/reset.css";
import sharedStyles from "bundle-text:../styles/sharedStyles.css";
import setUpTemplate from "../util/jsUtils/setUpTemplate.js";
import setupCSS from "../util/DOMUtils/setupCSS.js";


/**
 * Contains common features for all components. 
 * Other components will extend from it.
 */
export default class BaseComponent extends HTMLElement {
  constructor() {
    super();
    /**
     * Sets up a shadow DOM, with mode: open (elements outside Shadow DOM can interact with it).
     */
    this.root = this.attachShadow({mode: 'open'});
    /** 
    * @type {string | null} - An ID of HTML template tag, which contains template for specific page.
    */
    this.templateID = null;
    /**
    * @type {string | null} - A string that contains page specific styles.
    */
    this.pageStyles = null;
  }
  /**
   * Saves 'this' context of newly created page in a global 'app' object.
   * This way other functions can interact with newly created page (a Shadow DOM) without overloading Components with other functionalities and adhering SRP.
   */
  savePageContext() {
    app.pageContext = this;
  }
  /** 
  * In each instance, it will be enhanced with specific functionalities.
  */
  render() {
    console.log('Base Component Rendered.');
  }
  queryElements() {}
  setupPageListeners() {}
  removePageListeners() {}
  /**
   * A callback function for a HTML Custom Element that will be executed when the element is rendered.
   * Appends HTML template to the Shadow DOM, adds styles and if there is dynamic data to be rendered, it renders that too.
   * Saves page context in a global 'app' object.
   */
  connectedCallback() {
    setUpTemplate(this.root, this.templateID);
    setupCSS([reset, sharedStyles, this.pageStyles], this.root);
    this.queryElements();
    this.savePageContext();
    this.render();
    this.setupPageListeners();
  }
  disconnectedCallback() {
    this.removePageListeners();
  }
}