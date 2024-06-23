

/**
 * Queries an element from a specified context.
 * 
 * @param {String} identifier - identifier string for an element (class, ID, tag name...).
 * @param {ParentNode} [context=document] - An optional parameter specifying the context in which to search for the elements. Defaults to the entire document.
 * @returns {Element} An element that matched the provided identifier within the specified context. 
 */
export default function queryElement(identifier, context = document) {
  const element = context.querySelector(identifier);
  return element
}