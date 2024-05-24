/* DOM ELEMENT CREATION, APPEND */
/**
 * Creates DOM element and appends to the parent element.
 * @param {Element} el - The DOM element that will be created.
 * @param {Element} parent Parent element that child will be appended to.
 * @param {String} content - Contents of that element
 * @returns {Element} Returns newly created element.
 */
function createEl(el, parent = null, content = null) {
  const element = document.createElement(el);
  if (content) {
    element.textContent = content;
  }
  if (parent) {
    parent.appendChild(element);
  }
  return element;
}
/**
 * Removes the specified element from the DOM.
 * @param {Element} el - The DOM element to be removed.
 */
function removeEl(el) {
  if (el && el.parentNode) {
    el.parentNode.removeChild(el);
  }
}

/* TOGGLING CLASSES */
/**
 * I have three separate functions for manipulating classes because 
 * it will be much easier to understand them in the code at first look.
 */
/**
 * Adds a class to the specified element.
 * @param {Element} el - The DOM element to which the class will be added.
 * @param {string} class_name - The class to be added.
 */
function addClass(el, class_name) {
  el.classList.add(class_name);
}
/**
 * Removes a class from the specified element.
 * @param {Element} el - The DOM element from which the class will be removed.
 * @param {string} class_name - The class to be removed.
 */
function removeClass(el, class_name) {
  el.classList.remove(class_name);
}
/**
 * Toggles a class on the specified element.
 * @param {Element} el - The DOM element on which the class will be toggled.
 * @param {string} class_name - The class to be toggled.
 */
function toggleClass(el, class_name) {
  el.classList.toggle(class_name);
}

export { 
  createEl, removeEl, 
  addClass, removeClass, toggleClass
 };