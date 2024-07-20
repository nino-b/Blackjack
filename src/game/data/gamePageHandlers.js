import handContainerClickHandler from "../util/handContainerClickHandler";
import chipContainerClickHandler from "../util/chipContainerClickHandler";
import dealBtnClickHandler from "../util/dealBtnClickHandler";
import gameActionsContainerHandler from "../util/gameActionsContainerHandler";



const gamePageHandlers = {
  handContainer: handContainerClickHandler,
  chipContainer: chipContainerClickHandler,
  dealBtn: dealBtnClickHandler,
  gameActionsContainer: gameActionsContainerHandler,
 }

 export default gamePageHandlers;