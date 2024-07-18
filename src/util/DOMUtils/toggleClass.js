
/**
 * Toggles a CSS class on an HTML element.
 *
 * @param {HTMLElement} el - The HTML element on which to toggle the class.
 * @param {string} class_name - The name of the class to toggle.
 */

export default function toggleClass(el, class_name) {
  el.classList.toggle(class_name);
}