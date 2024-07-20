import removeBet from "./removeBet";
import removeChip from "../UI/removeChip";
import updateOutput from "../UI/updateOutput";



class HandContainerClickManager {
  /**
   * Creates an instance of HandContainerClickManager.
   * Some of the parameters we access on the 'app' object are reassigned values on some conditions. 
   * To keep track of correct references to those elements, we directly access them from the methods.
   * 
   * @param {Object} app - The main application object containing the current state and references.
   */
  constructor(app) {
    this.app = app;
  }
  /**
   * Handles click events on a hand container element.
   * 'this' context will be set to 'app' when 'handleHandContainerClick' will be set as an event handler.
   * 
   * 'remove-last-bet' button has dual nature:
   *   - If the betting container is not active, it acts as a hand selector.
   *   - Otherwise, it acts as a bet remover button.
   * This dual nature prevents accidental bet removal when selecting a hand,
   * especially on small devices like phones where elements are closely packed.
   * 
   * Some properties (e.g. 'app.pageContext') is reassigned its value on some conditions.
   * To keep track of correct references to those elements, we directly access them from the methods.
   * 
   * @param {Event} event - The click event object.
   * @throws {Error} Throws an error if event target or dataset is missing.
   */
  handContainerClickHandler(event) {
    if (!event.target || !event.target.dataset) {
      throw new Error('Event target or dataset is missing.');
    }
  
    const targetDataset = event.target.dataset;
    const removeLastBet = 'remove-last-bet';
    const activeHand = app.handCoordinator.activeHand;
  
    if (targetDataset.action === removeLastBet && ((activeHand && activeHand.id === targetDataset.id))) {
      this.#handleRemoveLastBet(event.target, app.handCoordinator);
    }
    else if (targetDataset.handSelector) {
      const bettingContainer = event.target.closest('.betting-spot-container');  

      this.#handleHandSelection(bettingContainer, app.pageContext.elementReferences.bettingSpotList);
    }
  }
  /**
   * Handles the removal of the last bet associated with the active hand.
   *
   * @param {HTMLElement} target - The target element that triggered the action.
   * @param {Object} handCoordinator - The hand coordinator context object containing the hand state and methods.
   * @throws {Error} Throws an error if the target element is not a valid HTMLElement or if context or active hand is missing.
   */
  #handleRemoveLastBet(target, handCoordinator) {
    if (!(target instanceof HTMLElement)) {
      throw new Error('Invalid target element provided.');
    }
  
    if (!handCoordinator || !handCoordinator.activeHand) {
      throw new Error('Invalid context or missing active hand coordinator.');
    }
  
    const activeHand = handCoordinator.activeHand;
  
    removeBet(handCoordinator);
    removeChip(target, activeHand.chipList);
    updateOutput(target.nextElementSibling, handCoordinator);
  }
  /**
   * Handles the selection of a hand.
   *
   * @param {Element} bettingContainer - The betting container element to set up the initial hand.
   * @param {Array} bettingSpotList - List of betting spot elements to manage active hand shadow.
   * @throws {Error} Throws an error if bettingContainer is not a valid HTMLElement or if bettingSpotList is invalid or empty.
   */
  #handleHandSelection(bettingContainer, bettingSpotList) {
    if (!(bettingContainer instanceof HTMLElement)) {
      throw new Error('Invalid bettingContainer element provided.');
    }
  
    if (!bettingSpotList || !bettingSpotList.length) {
      throw new Error('Invalid or empty bettingSpotList provided.');
    }
  
    this.setUpInitialHand(bettingContainer);
    setActiveHandShadow(bettingSpotList, bettingContainer);
  }
}




const handContainerClickManager = new HandContainerClickManager(app);

export default handContainerClickManager;


