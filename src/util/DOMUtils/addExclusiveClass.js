import addClass from "./addClass";
import removeClass from "./removeClass";


/**
 * Adds an exclusive class to a target node in a list of nodes, ensuring only the target has the class.
 *
 * @param {HTMLElement[]} node_list - Array of HTML elements to manage classes.
 * @param {HTMLElement} target - The target node to which the exclusive class should be added.
 * @param {string} class_name - The name of the class to be added exclusively to the target node.
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