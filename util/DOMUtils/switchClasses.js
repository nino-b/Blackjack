import addClass from "./addClass";
import removeClass from "./removeClass";



/**
 * Switches two classes - checks if one class exists ('classA'):
 * if it does, it removes that class ('classA') and adds new one ('classB') or vice versa.
 * 
 * @param {HTMLElement} element - Element we need to apply classes to.
 * @param {String} classA - Name of first class that we need to apply or remove.
 * @param {String} classB - Name of second class that we need to apply or remove.
 */

export default function switchClasses(element, classA, classB) {
  if (element.classList.contains(classA)) {
    removeClass(element, classA);
    addClass(element, classB);
  } else {
    removeClass(element, classB);
    addClass(element, classA);
  }
}