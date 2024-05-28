import { fetchCSS } from "../util/cssUtils.js";

/**
 * Class responsible for handling the fetching and application of CSS styles.
 */
export default class CSSHandler {
  /**
   * Creates an instance of CSSHandler.
   * @param {ShadowRoot} root - The root element where the styles will be applied.
   * @param {string} pathToCSS - The path to the component-specific CSS file.
   * @param {string} pathToResetCSS - The path to the reset CSS file.
   */
  constructor(root, pathToCSS, pathToResetCSS) {
    this.root = root;
    this.pathToCSS = pathToCSS;
    this.pathToResetCSS = pathToResetCSS;
  }
  /**
   * Sets up the CSS for the component by creating a <style> element
   * and appending it to the shadow DOM, then applies the fetched styles.
   */
  setUpCSS() {
    this.styles = document.createElement('style');
    this.root.appendChild(this.styles);
    this.#applyStyles();
  }
  /** 
   * Asynchronously fetches and applies a CSS styles to the shadow DOM.
   * Fetches the reset CSS and component-specific CSS in parallel.
   * Logs an error if fetching or applying the styles fails.
   * @private
   * @async
  */
  async #applyStyles() {
    try {
      const [ resetCSS, stylesCSS ] = await Promise.all([
        fetchCSS(this.pathToResetCSS),
        fetchCSS(this.pathToCSS)
      ]);

      const styles = document.createElement('style');
      styles.textContent = `${resetCSS}\n${stylesCSS}`;
      this.root.appendChild(styles);
    } catch (error) {
      console.error('Failed to fetch CSS files and apply styles:', error);
    }
  }
}