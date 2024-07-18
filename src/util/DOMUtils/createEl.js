/**
 * Creates a DOM element, adds content to it and appends to a parent element.
 * 
 * @param {String} el - Name of the element to be created.
 * @param {HTMLElement} parent - Parent element that newly created element will be appended to.
 * @param {String} [content=null] - The text content to be set for the new element. Defaults to null.
 * @returns {HTMLElement} Returns newly created element so other operations can be performed on it.
 */

export default function createEl(el, parent, content = null) {
  const element = document.createElement(el);
  element.textContent = content;
  parent.appendChild(element);

  return element;
}