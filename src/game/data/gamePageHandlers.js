import handContainerClickManager from "../util/HandContainerClickManager";
import chipContainerClickHandler from "../util/ChipContainerClickManager";
import dealBtnClickHandler from "../util/DealBtnClickManager";
import gameActionsContainerHandler from "../util/gameActionsContainerHandler";



const gamePageHandlers = {
  handContainer: handContainerClickManager.handContainerClickHandler,
  chipContainer: chipContainerClickHandler,
  dealBtn: dealBtnClickHandler,
  gameActionsContainer: gameActionsContainerHandler,
 }

 export default gamePageHandlers;