import addClass from "../../util/DOMUtils/addClass";
import removeClass from "../../util/DOMUtils/removeClass";



/**
 * This function temporarily adds white box shadow around betting rules on game page, 
 * so the user can understand that you can't start the game without placing a bet.
 */
export default function showAttentionOnRules(bettingInstruction) {
  const attentionClass = 'attention';
  addClass(bettingInstruction, attentionClass);
  setTimeout(() => removeClass(bettingInstruction, attentionClass), 900);
}