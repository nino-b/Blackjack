import queryElement from "./queryElement";
import queryElementGroup from "./queryElementGroup";





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