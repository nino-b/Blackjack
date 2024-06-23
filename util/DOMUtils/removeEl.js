
/**
 * Removes the specified element from the DOM.
 * @param {Element} el - The DOM element to be removed.
 */
export default function removeEl(el) {
  if (el && el.parentNode) {
    el.parentNode.removeChild(el);
  }
}