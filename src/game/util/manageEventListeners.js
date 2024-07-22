


/**
 * Manages event listeners for elements based on provided handlers and context.
 * 
 * 'gamePageHandlers' entry keys match 'elementReferences' keys. This makes it easier to determine which element has an event handler.
 * Each event handler is bound to the specific context - in this case an 'app' context, because they manipulate values on the 'app' object.
 *
 * @param {Object} elementReferences - Object containing references to DOM elements.
 * @param {Object} gamePageHandlers - Object mapping element names to event handler functions.
 * @param {Object} context - Context object to bind to event handler functions.
 * @param {boolean} [addListener=true] - Flag indicating whether to add or remove event listeners.
 */

export default function manageEventListeners(elementReferences, gamePageHandlers, addListener = true) {
  if (addListener) {
    for (const element in gamePageHandlers) {
      elementReferences[element].addEventListener('click', gamePageHandlers[element]);
    }
  } else {
    for (const element in gamePageHandlers) {
      elementReferences[element].removeEventListener('click', gamePageHandlers[element]);
    }
  }
}