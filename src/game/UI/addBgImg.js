import chip5 from '../../assets/svg-chips/chip 5.svg';
import chip25 from '../../assets/svg-chips/chip 25.svg';
import chip100 from '../../assets/svg-chips/chip 100.svg';
import chip500 from '../../assets/svg-chips/chip 500.svg';
import chip1000 from '../../assets/svg-chips/chip 1000.svg';

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


/**
 * I am using Parcel as a bundler. 
 * Because Parcel bundles everything together, file locations change and dynamic relative paths isn't be useful in this case.
 * That is why I have to import every svg in this file.
 * 
 * NEEDS IMPROVEMENT!
 */


/**
 * Adds a background image to a DOM node based on the chip value.
 *
 * @param {HTMLElement} node - The DOM node to which the background image will be added.
 * @param {number} [chipValue=null] - An optional parameter - the value of the chip which determines the background image.
 * @param {Object.<number, string>} [imageList=bgImages] - An optional object mapping chip values to image URLs.
 */
export default function addBgImg(node, chipValue = null, imageList = bgImages) {
  if (chipValue) {
    const imageUrl = imageList[chipValue];
    node.style.backgroundImage = `url('${imageUrl}')`; 
  } else {
    node.style.backgroundImage = imageList.noBet;
  }
}