/**
 * Adds a class to the specified element.
 * If specified, clears all previous classes and then adds a new class.
 * @param {Element} el - The DOM element to which the class will be added.
 * @param {string} class_name - The class to be added.
 * @param {Boolean} [clearPreviousClasses=false] - A boolean that determines whether previous classes should be cleared or not.
 */
export default function addClass(el, class_name, clearPreviousClasses = false) {
  if (clearPreviousClasses) {
    el.classList = '';
  }
  el.classList.add(class_name);
}