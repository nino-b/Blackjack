import switchClasses from "../util/DOMUtils/switchClasses";
import { elements } from "../data/domStore";


/**
 * Listens to the navigation display button ('#display-nav') that is hidden except on game page.
 * And toggles header visibility and button image (arrow) rotation degree, according to what action it will perform:
 * if it hides a navigation, arrow points upward, if it displays navigation - points downward.
 * 
 * For simplicity, I directly passed class names.
 * 
 * @param {HTMLElement} navDisplayBtn - navigation display button, that function will listen to.
 * @param {HTMLElement} arrowImg - An arrow image that will be rotated.
 * @param {HTMLElement} header - A header element that styles will be applied to.
 */

function _navDisplayBtnListener(navDisplayBtn, arrowImg, header) {
  navDisplayBtn.addEventListener('click', () => {
    switchClasses(header,'hide-header-nav', 'display-header-nav');
    switchClasses(arrowImg, 'rotate-face-up', 'rotate-face-down');
  });
}

const navDisplayBtnListener = _navDisplayBtnListener(elements.displayNavBtn, elements.arrowImage, elements.header);
export default navDisplayBtnListener;