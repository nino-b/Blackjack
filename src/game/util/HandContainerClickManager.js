import setActiveHandShadow from "../UI/setActiveHandShadow";



class HandContainerClickManager {
  /**
   * Creates an instance of HandContainerClickManager.
   * Some of the parameters we access on the 'app' object are reassigned values on some conditions. 
   * To keep track of correct references to those elements, we directly access them from the methods.
   * 
   * -------------------------------------------------------------------------------
   * -------------
   * -------------
   */
  constructor(app) {
    this.app = app;
    this.initialHandManager = app.initialHandManager;
    this.handCoordinator = app.handCoordinator;
    this.bettingUIManager = app.bettingUIManager;
    this.handContainerClickHandler = this.handContainerClickHandler.bind(this);
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
    const bettingContainer = event.target.closest('.betting-spot-container');  
    if (bettingContainer.classList.contains('inactive-spot')) {
      return;
    }
    
    const removeLastBet = 'remove-last-bet';  
    const targetDataset = event.target.dataset;
    const activeHand = this.initialHandManager.activeHand;
  
    if (targetDataset.action === removeLastBet && ((activeHand && activeHand.id === targetDataset.id))) {
      this.#handleRemoveLastBet(event.target, this.initialHandManager);
    }
    else if (targetDataset.handSelector) {
      this.#handleHandSelection(bettingContainer, app.pageContext.elementReferences.bettingSpotList);
    }
  }
  /**
   * Handles the removal of the last bet associated with the active hand.
   *
   * @param {HTMLElement} target - The target element that triggered the action.
   * @param {Object} initialHandManager - The initial hand manager object containing the hand state and methods.
   * @throws {Error} Throws an error if the target element is not a valid HTMLElement or if context or active hand is missing.
   */
  #handleRemoveLastBet(target, initialHandManager) {
    if (!(target instanceof HTMLElement)) {
      throw new Error('Invalid target element provided.');
    }
    if (!initialHandManager || !initialHandManager.activeHand) {
      throw new Error('Invalid context or missing active hand coordinator.');
    }

    const activeHand = initialHandManager.activeHand;
    const chipList = activeHand.chipList;
    initialHandManager.removeLastChip(activeHand);

    if (chipList.length > 0) {
      this.bettingUIManager.changeBgImg(target, chipList[chipList.length - 1]);
    } else {
      this.bettingUIManager.changeBgImg(target);
    }
    this.bettingUIManager.updateOutput(target.nextElementSibling, activeHand.bet);
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
  
    this.initialHandManager.setUpInitialHand(bettingContainer);
    setActiveHandShadow(bettingSpotList, bettingContainer);
  }
}



const handContainerClickManager = new HandContainerClickManager(app);

export default handContainerClickManager;


