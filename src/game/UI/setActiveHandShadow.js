import addExclusiveClass from "../../util/DOMUtils/addExclusiveClass";


/**
 * Sets the active hand shadow effect on a target DOM node by adding a specified class.
 * Ensures the shadow effect is exclusive among a list of nodes.
 *
 * @param {HTMLElement[]} node_list - The list of DOM nodes to manage the shadow effect.
 * @param {HTMLElement} target - The target DOM node to receive the shadow effect.
 */

export default function setActiveHandShadow(node_list, target) {
  const shadowEffectClass =  'activated-hand';

  if (target.classList.contains(shadowEffectClass)) return;
  else {
    addExclusiveClass(node_list, target, shadowEffectClass);
  }
}