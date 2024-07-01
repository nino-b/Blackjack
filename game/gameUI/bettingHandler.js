import app from "../../data/appState";
import createEl from "../../util/DOMUtils/createEl";

import chip5 from '../../assets/svg-chips/chip 5.svg';
import chip25 from '../../assets/svg-chips/chip 25.svg';
import chip100 from '../../assets/svg-chips/chip 100.svg';
import chip500 from '../../assets/svg-chips/chip 500.svg';
import chip1000 from '../../assets/svg-chips/chip 1000.svg';

const chipImages = {
  5: chip5,
  25: chip25,
  100: chip100,
  500: chip500,
  1000: chip1000,
};



function createBettingHandler (app, chipImgList) {
  return function (event) {
    const value = Number(event.target.parentNode.dataset.value);
    if (!value) {
      console.warn(`Missing 'value' argument: Could not get the value of 'data-value' or the user clicked outside the button area. For event delegation purposes, an event listener is attached to a '.chip-container' (a parent node)`);
      return;
    }
    app.activeHand.updateBet(value);

    /**
     * '.bet-container' is next sibling of '[data-action="activate-hand"]' button which is saved in an 'app' object.
     */
    const betContainer = app.activeHandNode.nextElementSibling;
    const betContainerChildren = Array.from(betContainer.children);
    
    betContainerChildren.forEach(node => {
      if (node.dataset.action && node.dataset.action === 'remove-last-bet') {
        /**
         * I am using Parcel as a bundler. 
         * Because Parcel bundles everything together, file locations change and dynamic relative paths isn't be useful in this case.
         * That is why I have to import every svg in this file.
         * NEEDS IMPROVEMENT!
         */
        const imageUrl = chipImgList[value];
        if (imageUrl) {
          node.style.backgroundImage = `url('${imageUrl}')`; 
        }
      } else {
        node.textContent = app.activeHand.bet;
      }
    });
    
  }
}


const bettingHandler = createBettingHandler(app, chipImages);
export default bettingHandler;