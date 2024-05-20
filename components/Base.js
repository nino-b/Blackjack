
export default class BaseComponent extends HTMLElement {
  constructor() {
    super();
    this.root = this.attachShadow({mode: "open"});
    this.pathToCSS = null;
    this.templateID = null;
    this.eventName = null;
    this.initialSetup();
  }
  setUpCSS() {
    this.styles = document.createElement('style');
    this.root.appendChild(this.styles);
    this.#loadCSS();
  }
  async #loadCSS() {
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

  setUpTemplate() {
    const template = document.getElementById(this.templateID);
    if (template) {
      const content = template.content.cloneNode(true);
      this.root.appendChild(content);
    }
  }
  setUpEventListener() {
    window.addEventListener(this.eventName, () => {
      this.render();
    });
  }
  render() {
    console.log('Base Component Rendered.');
  }
  initialSetup() {
    this.setUpCSS();
    this.setUpTemplate();
    this.setUpEventListener();
  }
}