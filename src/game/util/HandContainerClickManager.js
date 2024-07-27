import setActiveHandShadow from "../UI/setActiveHandShadow";
import bettingUIManager from "../UI/BettingUIManager";
import { BETTING_SPOT_CONTAINER, REMOVE_LAST_BET, INACTIVE_SPOT } from "../../data/constants";



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
  constructor(setActiveHandShadow, bettingUIManager, getPageContext, bankManager, { initialHandManager, handCoordinator}) {
    
    this.setActiveHandShadow = setActiveHandShadow;
    this.getPageContext = getPageContext;

    this.updateBank = bankManager.updateBank;

    this.removeChip = bettingUIManager.removeChip;
    this.updateOutput = bettingUIManager.updateOutput;

    this.getActiveHand = initialHandManager.getActiveHand;
    this.setUpInitialHand = initialHandManager.setUpInitialHand;
    this.removeLastChip = initialHandManager.removeLastChip;

    this.getHandList = handCoordinator.getHandList;
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
  handContainerClickHandler = (event) => {
    const target = event.target;
    if (!target || !target.dataset) {
      throw new Error('Event target or dataset is missing.');
    }


    // Means that HandManager() hands are already created and game has started.
    // And user is just clicking on the hands
    //
    // TO DO
    // Implement automatic hand switching when user finishes a hand.
    const createdHandList = Object.keys(this.getHandList());
    if (createdHandList.length > 0) return;



    // If a bet spot is inactive and user clicks on it, nothing will happen
    const bettingContainer = target.closest(BETTING_SPOT_CONTAINER);  
    if (bettingContainer.classList.contains(INACTIVE_SPOT)) return;

    
    const activeHand = this.getActiveHand();
    const { bankUI, bettingSpotList } = this.getPageContext().elementReferences;

    if (target.dataset.action === REMOVE_LAST_BET && ((activeHand && activeHand.id === target.dataset.id))) {
      const { chipList, bet } = activeHand;
      this.#handleRemoveLastBet(target, chipList, bankUI);
    }
    else if (target.dataset.handSelector) {
      this.#handleHandSelection(bettingContainer, bettingSpotList);
    }
  }
  /**
   * Handles the removal of the last bet associated with the active hand.
   *
   * @param {HTMLElement} target - The target element that triggered the action.
   * @param {Object} initialHandManager - The initial hand manager object containing the hand state and methods.
   * @throws {Error} Throws an error if the target element is not a valid HTMLElement or if context or active hand is missing.
   */
  #handleRemoveLastBet(target, chipList, bankUI) {
    if (!(target instanceof HTMLElement)) {
      throw new Error('Invalid target element provided.');
    }
    const lastChip = this.removeLastChip();
    this.removeChip(target, chipList);
    const bet = this.getActiveHand().bet;
    this.updateOutput(target.nextElementSibling, bet);

    const bank = this.updateBank(lastChip);
    this.updateOutput(bankUI, bank);
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
    this.setActiveHandShadow(bettingSpotList, bettingContainer);
  }
}


const { getPageContext, gameSessionManager, bankManager } = app;

const handContainerClickManager = new HandContainerClickManager(setActiveHandShadow, bettingUIManager, getPageContext, bankManager, gameSessionManager);

export default handContainerClickManager;


