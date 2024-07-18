/**
 * Adds attributes to a specified HTML element. If an attribute key starts with 'data', it will be added to the dataset of the element.
 *
 * @param {HTMLElement} el - The HTML element to which the attributes will be added.
 * @param {Object} attributes - An object where the keys are attribute names and the values are attribute values.
 * @throws {Error} Throws an error if the 'attributes' argument is not an object.
 */

export default function addAttributes(el, attributes) {
  if (typeof attributes !== "object" || Array.isArray(attributes)) {
    throw new Error (`Invalid parameter. 'attributes' argument must be an object!`)
  }
  for (const key in attributes) {
    if (key.startsWith('data')) {
      const dataKey = key.slice(4);
      el.dataset[dataKey] = attributes[key];
    } else {
      el.setAttribute(key, attributes[key]);
    }
  }
}