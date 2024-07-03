import queryElement from "../../util/DOMUtils/queryElement";
import queryElementGroup from "../../util/DOMUtils/queryElementGroup";






// Function to query and organize game page elements
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
    bettingSpotList: [],
    gameActionsContainer: queryElement('#game-actions-container', gameInterfaceContainer),
  };

  if (elementReferences.bankContainer) {
    elementReferences.bankUI = queryElement('#bank', elementReferences.bankContainer);
  }

  // Populate betting spot list if handContainer is found
  if (elementReferences.handContainer) {
    elementReferences.bettingSpotList = Array.from(elementReferences.handContainer.children);
  }

  return elementReferences;
}



/* ****************************************************************************************************** */
/* Helper functions */


function getGameInterfaceContainer() {
  const gameInterfaceContainer = queryElement('#game-interface-container', this.root);
  if (!gameInterfaceContainer) {
    throw new Error(`Error: Querying an element '#game-interface-container' was not successfull!`);
  }
  return gameInterfaceContainer;
}

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