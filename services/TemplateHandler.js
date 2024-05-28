
/**
 * Class responsible for handling fetching and setting up of HTML templates.
 */
export default class TemplateHandler {
  /**
   * Creates an instance of TemplateHandler.
   * @param {ShadowRoot} root - The root element where the template will be applied.
   * @param {string} templateID - The ID of the HTML template element to fetch.
   */
  constructor(root, templateID) {
    this.root = root;
    this.templateID = templateID;
  }
  /** 
   * Sets up the template by fetching it from the DOM and appending it to the shadow DOM.
   * Logs an error if the template ID is not provided or if the template cannot be found.
  */
  setUpTemplate() {
    if (!this.templateID) {
      console.error(`Template ID is not provided or does not have a valid value`);
      return;
    }

    const template = document.getElementById(this.templateID);
    if (!template) {
      console.error(`Problem with fetching page template from DOM.`);
      return;
    }

    const content = template.content.cloneNode(true);
    this.root.appendChild(content);
  }
}