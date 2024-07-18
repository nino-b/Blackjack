import queryElement from "../../util/DOMUtils/queryElement";
import queryElementGroup from "../../util/DOMUtils/queryElementGroup";






/**
 * Queries and organizes game page elements into a structured object.
 *
 * @returns {Object} An object containing references to various game page elements:
 *   - `gameInterfaceContainer` {HTMLElement}: The main game interface container element.
 *   - `preGameElements` {HTMLElement[]}: An array of pre-game elements.
 *   - `bettingInstruction` {HTMLElement|null}: The betting instruction element.
 *   - `dealBtn` {HTMLElement|null}: The deal button element.
 *   - `chipContainer` {HTMLElement|null}: The chip container element.
 *   - `bankContainer` {HTMLElement|null}: The bank container element.
 *   - `bankUI` {HTMLElement|null}: The bank UI element within the bank container.
 *   - `handContainer` {HTMLElement|null}: The hand container element.
 *   - `bettingSpotList` {HTMLElement[]|null}: An array of children elements within the hand container.
 *   - `gameActionsContainer` {HTMLElement|null}: The game actions container element.
 * @throws {Error} Throws an error if the game interface container element is not found.
 */

export default function queryGamePageElements() {
  const gameInterfaceContainer = getGameInterfaceContainer.call(this);
  const preGameElements = queryElementGroup('[data-view="pre-game"]', gameInterfaceContainer);

  const elementReferences = {
    gameInterfaceContainer,
    preGameElements,
    ...assignSpecificElements(preGameElements),
    bankContainer: queryElement('#bank-container', gameInterfaceContainer),
    bankUI: null,
    handContainer: queryElement('#hand-container', gameInterfaceContainer),
    bettingSpotList: null,
    gameActionsContainer: queryElement('#game-actions-container', gameInterfaceContainer),
  };

  if (elementReferences.bankContainer) {
    elementReferences.bankUI = queryElement('#bank', elementReferences.bankContainer);
  }

  /**
   * Populate betting spot list if handContainer is found.
   */
  if (elementReferences.handContainer) {
    elementReferences.bettingSpotList = Array.from(elementReferences.handContainer.children);
  }

  return elementReferences;
}



/* ****************************************************************************************************** */
/* Helper functions */


/**
 * Retrieves the game interface container element from the DOM.
 *
 * @returns {HTMLElement} The game interface container element.
 * @throws {Error} Throws an error if the element with the ID 'game-interface-container' is not found. 
 *                 All the other elements are queried from 'game-interface-container' scope, 
 *                 so if this element is not found, all the other elements won't be found either, 
 *                 and throwing an error at early stage prevents unnecessary queries. 
 */
function getGameInterfaceContainer() {
  const gameInterfaceContainer = queryElement('#game-interface-container', this.root);
  if (!gameInterfaceContainer) {
    throw new Error(`Error: Querying an element '#game-interface-container' was not successfull!`);
  }
  return gameInterfaceContainer;
}


/**
 * Assigns specific pre-game elements to their respective references based on element IDs.
 * Initially 'preGameElements' are queried as a group in the 'queryGamePageElements', because they share common CSS classes.
 * But they also have some individual functionalities too.
 * And to avoid multiple queries for the same element, this function retrieves them from the nodeList.
 *
 * @param {HTMLElement[]} preGameElements - The array of pre-game elements to be assigned.
 * @returns {Object} An object containing specific element references:
 *   - `bettingInstruction` {HTMLElement|null}: The betting instruction element.
 *   - `dealBtn` {HTMLElement|null}: The deal button element.
 *   - `chipContainer` {HTMLElement|null}: The chip container element.
 */
function assignSpecificElements(preGameElements) {
  const elementRefs = {
    bettingInstruction: null,
    dealBtn: null,
    chipContainer: null
  };

  preGameElements.forEach(element => {
    if (element.id === 'betting-instruction') elementRefs.bettingInstruction = element;
    if (element.id === 'deal') elementRefs.dealBtn = element;
    if (element.id === 'chip-container') elementRefs.chipContainer = element;
  });

  return elementRefs;
}