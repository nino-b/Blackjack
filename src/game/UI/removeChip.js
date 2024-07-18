import addBgImg from "./addBgImg";


/**
 * Updates the background image of a target DOM node based on the last chip value in the chip list.
 * If the chip list is empty, it sets the background to the 'noBet' gradient.
 *
 * @param {HTMLElement} target - The DOM node to update.
 * @param {number[]} chipList - The list of chip values.
 */

export default function removeChip(target, chipList) {
  const value = chipList[chipList.length - 1];
  
  if (value)  addBgImg(target, value);
  else addBgImg(target);
}