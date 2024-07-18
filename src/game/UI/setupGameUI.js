import switchClasses from "../../util/DOMUtils/switchClasses";
import toggleClass from "../../util/DOMUtils/toggleClass";
import toggleProperty from "../../util/DOMUtils/toggleProperty";


/**
 * Sets up the game UI by toggling visibility and classes on specific elements.
 *
 * @param {Object} elementReferences - An object containing references to game UI elements.
 * @param {HTMLElement[]} elementReferences.preGameElements - Elements related to the pre-game view.
 * @param {HTMLElement} elementReferences.gameActionsContainer - The container for game actions.
 * @param {HTMLElement} elementReferences.bankContainer - The container for the bank UI.
 * @param {HTMLElement} elementReferences.gameInterfaceContainer - The main game interface container.
 * @param {HTMLElement[]} elementReferences.bettingSpotList - A list of betting spot elements.
 */

export default function setupGameUI(elementReferences) {
  const { preGameElements, gameActionsContainer, bankContainer, gameInterfaceContainer, bettingSpotList } = elementReferences;

  preGameElements.forEach(el => toggleProperty(el, 'hidden'));
  toggleProperty(gameActionsContainer, 'hidden');

  toggleClass(bankContainer, 'bank-container-game-view');
  switchClasses(gameInterfaceContainer, 'pre-game-view', 'container-game-view');

  bettingSpotList.forEach(el => toggleClass(el, 'betting-spot-container-game-view'));
}