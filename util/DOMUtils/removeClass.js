/**
 * Removes a class from the specified element.
 * @param {Element} el - The DOM element from which the class will be removed.
 * @param {string} class_name - The class to be removed.
 */
export default function removeClass(el, class_name) {
  el.classList.remove(class_name);
}