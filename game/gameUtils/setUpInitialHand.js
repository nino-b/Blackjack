import HandManager from "../gameServices/HandManager";


/**
 * Sets up initial hands.
 */

function setUpInitialHand(event, app) { 
  const bettingContainer = event.target.closest('.betting-spot-container');   
  const id = bettingContainer.dataset.id;

  if (!app.initialHands[id]) {
    app.initialHands[id] = {
      hand: new HandManager(),
      chipList: [],
      id: id
    };
  } 
  app.activeHand = app.initialHands[id];
  app.activeHandNode = bettingContainer;
}


export default setUpInitialHand;

















/**
 * add click listener to a 'hands-container'. It will handle two button events: 
 *                                             - Hand activation button.
 *                                             - Last bet (chip) removing button.
 * 
 * Those buttons will be distinguished by 'data-action' attributes:
 *                                             - 'activate-hand' for Hand activation button:
 *                                               '<button class="activate-hand" data-id="hand-1" data-action="activate-hand"></button>'
 * 
 *                                             - 'remove-last-bet' for Last bet (chip) removing button.
 *                                               '<button data-id="hand-1" data-action="remove-last-bet"></button>'
 * 
 * 'activate-hand' will create 'new HandManager()' hand instance, add it to the list of initial hands ('app.initialHands = {};'), set 'app.activeHand' to the currently active hand: 
 * ------------------------------------------------------------------------------------------------------------------------------
 * Setting up an active hand is important because all the bets will be applied to this specific hand.
 * - Will check all elements with '[data-action="activate-hand"]' and add a class '.activated-hand' to the target element.  If other element has that class, it will remove the class.
 *      This will create white box shadow and change bg image for the button.
 * ------
 * Will be done by 'setExclusiveClass' funtion.
 * ------------------------------------------------------------------------------------------------------------------------------
 *      
 * - It will check if a property with the key '[data-id="hand-1"]' already exists in 'app.initialHands = {};' object.
 *      - If it does not exist, it will create the property with the key of '[data-id="hand-1"]' and the value of 'new HandManager()' object.
 *              'app.activeHand' will be set to this newly created object.
 *      - If an object with the key '[data-id="hand-1"]' already exists, 'app.activeHand' will be set to this already existing object.
 * 
 * 
 * 'remove-last-bet'
 */