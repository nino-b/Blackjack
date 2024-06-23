/**
 * Appends a style tag with the combined CSS styles to a parent element.
 * 
 * @param {string[]} styleList - An array of CSS strings to be combined and applied.
 * @param {HTMLElement | ShadowRoot} parent - The parent element (or shadow root) to which the style tag will be appended.
 */
export default function setupCSS(styleList, parent) {
  const styleTag = document.createElement('style');
  const styles = styleList.reduce((acc, curr) =>  acc + `\n ${curr}`, ``);

  styleTag.textContent = styles
  parent.appendChild(styleTag);
  return styleTag;
}