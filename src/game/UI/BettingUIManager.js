import { REMOVE_LAST_BET } from '../../data/constants';

import chip5 from '../../assets/svg-chips/chip 5.svg';
import chip25 from '../../assets/svg-chips/chip 25.svg';
import chip100 from '../../assets/svg-chips/chip 100.svg';
import chip500 from '../../assets/svg-chips/chip 500.svg';
import chip1000 from '../../assets/svg-chips/chip 1000.svg';
/**
 * I am using Parcel as a bundler. 
 * Because Parcel bundles everything together, file locations change and dynamic relative paths isn't be useful in this case.
 * That is why I have to import every svg in this file.
 * 
 * NEEDS IMPROVEMENT!
 */

/**
 * A collection of background images for different chip values.
 * @type {Object.<number, string>}
 * @property {string} noBet - Linear gradient background for no bet.
 */
const bgImages = {
  5: chip5,
  25: chip25,
  100: chip100,
  500: chip500,
  1000: chip1000,
  noBet: 'linear-gradient(rgb(167, 156, 99), rgb(157, 150, 150), rgb(131, 127, 127))'
};



class BettingUIManager {
  constructor(bgImageList) {
    this.bgImageList = bgImageList;
  }
  /**
   * Adds a background image to a DOM node based on the chip value.
   *
   * @param {HTMLElement} node - The DOM node to which the background image will be added.
   * @param {number} [chipValue=null] - An optional parameter - the value of the chip which determines the background image.
   */
  changeBgImg(node, chipValue = null) {
    if (chipValue) {
      const imageUrl = this.bgImageList[chipValue];
      node.style.backgroundImage = `url('${imageUrl}')`; 
    } else {
      node.style.backgroundImage = this.bgImageList.noBet;
    }
  }
  /**
   * Updates the text content of the specified output element with the bet value from the active hand.
   *
   * @param {HTMLElement} outputEl - The output element whose text content will be updated.
   * @param {number} bet - The bet value of the active hand.
   */
  updateOutput(outputEl, amount) {
    outputEl.textContent = amount;
  }
  /**
   * Updates the UI to reflect the current bet and chip list.
   * 
   * Adds chip image as a background to the 'data-action="remove-last-bet"' 
   * (which is a button that has chip images as a background to display what chip was last placed 
   * (and if the user clicks that button, last bet will be removed)).
   * 
   *  Note: Tree traversal is not the best way to create reusable code.
   * For clarity, this is designed for thid DOM structure:
   * 
   *  <div class="betting-spot-container" data-id="hand-1" data-hand-selector="true">
          <div class="bet-container"  data-hand-selector="true">
              <button data-id="hand-1" data-hand-selector="true" data-action="remove-last-bet"></button>
              <output data-id="hand-1" data-hand-selector="true"></output>
          </div>
      </div>
   *
   * @param {Object} activeHand - The active hand object.
   * @param {number} bet - The amount of total bet.
   * @param {number} chipValue - The value of the chip to add.
   */
  setLastChipImgAndOutput(betContainer, bet, chipValue) {
    const betContainerChildren = Array.from(betContainer.children);
  
    betContainerChildren.forEach(node => {
      if (node.dataset.action === REMOVE_LAST_BET) {
        this.changeBgImg(node, chipValue);
      }
      else {
        this.updateOutput(node, bet)
      }
    });
  }
  removeChip(target, chipList) {
    if (chipList.length > 0) {
      this.changeBgImg(target, chipList[chipList.length - 1]);
    } else {
      this.changeBgImg(target);
    }
  }
}



const bettingUIManager = new BettingUIManager(bgImages);


export default bettingUIManager;