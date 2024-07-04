import addExclusiveClass from "../../util/DOMUtils/addExclusiveClass";




export default function setActiveHandShadow(node_list, target) {
  const shadowEffectClass =  'activated-hand';
  if (target.classList.contains(shadowEffectClass)) return;
  else {
    addExclusiveClass(node_list, target, shadowEffectClass);
  }
}