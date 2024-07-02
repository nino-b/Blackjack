import addClass from "./addClass";
import removeClass from "./removeClass";


/**
 * Iterates through all elements, adds exclusive class to a single element and if other element has that class, it removes the class from that element.
 */

export default function addExclusiveClass(node_list, target, class_name) {
  node_list.forEach(node => {
    if (node === target && !(node.classList.contains(class_name))) {
      addClass(node, class_name);
    } else if (node.classList.contains(class_name)) {
      removeClass(node, class_name);
    }
  });
}