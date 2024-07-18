

/**
 * Toggles a boolean property of an element.
 *
 * @param {HTMLElement} element - The HTML element whose property will be toggled.
 * @param {string} property - The name of the property to toggle.
 */

export default function toggleProperty(element, property) {
  element[property] = !element[property]
}