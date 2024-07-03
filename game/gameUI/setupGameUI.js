import addClass from "../../util/DOMUtils/addClass";
import switchClasses from "../../util/DOMUtils/switchClasses";
import toggleClass from "../../util/DOMUtils/toggleClass";
import toggleProperty from "../../util/DOMUtils/toggleProperty";



export default function setupGameUI(elementReferences) {
  elementReferences.preGameElements.forEach(el => toggleProperty(el, 'hidden'));
  toggleProperty(elementReferences.gameActionsContainer, 'hidden');

  elementReferences.bankContainer.classList.toggle('bank-container-game-view');
  switchClasses(elementReferences.gameInterfaceContainer, 'pre-game-view', 'container-game-view');

  elementReferences.bettingSpotList.forEach(el => toggleClass(el, 'betting-spot-container-game-view'));
}