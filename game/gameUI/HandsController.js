import addClass from "../../util/DOMUtils/addClass";
import ParticipantManager from "../gameServices/ParticipantManager";



class HandsController {
  constructor(handsContainer, playerHandList) {
    this.handsContainer = handsContainer;
    this.playerHandList = playerHandList;

    this.handsContainer.addEventListener('click', handleHandChoosing.bind(this));
  }
  handleHandChoosing(event) {
    /**
     * Add white box shadow class to an activated button.
     */
   addClass(event.target, 'activated-hand');
  }
  
}