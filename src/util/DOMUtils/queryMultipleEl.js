import queryElement from "./queryElement";
import queryElementGroup from "./queryElementGroup";



/**
 * Queries multiple elements based on a selector list within a specified context.
 * 
 * The selector list is required to be an object because 
 * with selector keys we can uniquely identify each DOM reference both in the 'selectorList'  and the returned object (it has a key role during adding event handlers).
 * 
 * I use only ID selectors when I need unique selectors, 
 * so even if class currently might be applied to only one element, it is expected to be applied to multiple elements in case the application grows. 
 * And this is why I use 'queryElementGroup' on every class and 'queryElement' only on IDs.
 * 
 * @param {Object} selectorList - An object where keys are selector types ('#id' or 'element') and values are selector strings.
 * @param {HTMLElement} [context=document] - Optional. The context element within which to perform the query (default is document).
 * @returns {Object} An object where keys are selector types and values are the queried elements.
 * @throws {Error} If selectorList is not an object or if it is an array.
 */

export default function queryMultipleEl(selectorList, context = document) {
  if (typeof selectorList !== 'object' || Array.isArray(selectorList)) {
    throw new Error (`To query multiple different elements, 'selectorList' must be an object!`);
  }
  const queriedElList = {};
  let el = null;
  for (const selector in selectorList) {
    if (selector.startsWith('#')) {
      el = queryElement(selectorList[selector], context);
    } else {
      el = queryElementGroup(selectorList[selector], context);
    }
    queriedElList[selector] = el;
  }
  return queriedElList;
}