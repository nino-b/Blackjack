import startGame from "../gameUtils/startGame";
import setupGameUI from "../gameUI/setupGameUI";
import addClass from "../../util/DOMUtils/addClass";
import removeClass from "../../util/DOMUtils/removeClass";
import app from "../../data/appState";



function constructGameSetupHandler(app) {
  return function() {
    if (!startGame(app)) {
      const attentionClass = 'attention';
      addClass(this.bettingInstruction, attentionClass);
      setTimeout(() => removeClass(this.bettingInstruction, attentionClass), 900);
      return;
    }
    console.log(this.preGameElements);
    setupGameUI(this);
    // TO DO
    // SET UP GAME INITIALIZER
  }
}


const setupGame = constructGameSetupHandler(app);

export default setupGame;