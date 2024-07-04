import addClass from "../../util/DOMUtils/addClass";
import removeClass from "../../util/DOMUtils/removeClass";




export default function showAttentionOnRules(bettingInstruction) {
  const attentionClass = 'attention';
  addClass(bettingInstruction, attentionClass);
  setTimeout(() => removeClass(bettingInstruction, attentionClass), 900);
}