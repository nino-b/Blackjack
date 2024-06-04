/* DOM ELEMENT CREATION, APPEND */
/**
 * Creates a new HTML element, optionally appends it to a parent, sets its content, and assigns attributes.
 *
 * @param {string} el - The type of HTML element to create (e.g., 'div', 'span', 'td').
 * @param {HTMLElement} [parent=null] - The parent element to which the new element will be appended. If null, the element is not appended.
 * @param {string|null} [content=null] - The text content to set for the new element. If null, no content is set.
 * @param {Object|null} [attributes=null] - An object containing attribute key-value pairs to set on the new element. If null, no attributes are set.
 * @returns {HTMLElement} The newly created HTML element.
 */
function createEl(el, parent = null, content = null, attributes = null) {
  const element = document.createElement(el);
  if (parent) {
    parent.appendChild(element);
  }
  if (content) {
    element.textContent = content;
  }
  if (attributes) {
    if (typeof attributes !== "object" || Array.isArray(attributes)) {
      throw new Error (`Invalid parameter. 'attributes' argument must be an object!`)
    }
    for (const key in attributes) {
      if (key.startsWith('data')) {
        const dataKey = key.slice(4);
        element.dataset[dataKey] = attributes[key];
      } else {
        element.setAttribute(key, attributes[key]);
      }
    }
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
/**
 * Updates the class of a DOM element by removing all existing classes and assigning a new one
 * if the element does not already contain the specified class.
 *
 * @param {Element} element - The DOM element to be updated.
 * @param {string} newClass - The new class to be assigned to the element.
 */
function updateElementClass(element, newClass) {
  if (!element.classList.contains(newClass)) {
      /**
       * Remove all previous classes and assign a new one
      */
      element.className = '';
      addClass(element, newClass);
  }
}


function getDOMElements(identifierList, context = document) {
  const result = {};
  for (const identifier in identifierList) {
    result[identifier] = context.querySelector(identifierList[identifier]);
  }
  return result;
}
function getAllDOMElements(identifierList, context = document) {
  const result = {};
  for (const identifier in identifierList) {
    result[identifier] = context.querySelectorAll(identifierList[identifier]);
  }
  return result;
}

export { 
  createEl, removeEl, 
  addClass, removeClass, toggleClass, updateElementClass,
  getDOMElements, getAllDOMElements
 };