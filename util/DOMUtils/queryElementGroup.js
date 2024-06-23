
/**
 * Queries a group of elements from a specified context.
 * 
 * @param {String} identifier - identifier string for a group of elements (class, ID, tag name...).
 * @param {ParentNode} [context=document] - An optional parameter specifying the context in which to search for the elements. Defaults to the entire document.
 * @returns {Element[]} An array of elements that match the provided identifier within the specified context. 
 */
export default function queryElementGroup(identifier, context = document) {
  const group = Array.from(context.querySelectorAll(identifier));
  return group;
}