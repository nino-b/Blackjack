import toggleProperty from "../../util/DOMUtils/toggleProperty";



export default function setupGameUI(preGameElements, gameElement) {
  preGameElements.forEach(el => toggleProperty(el, 'hidden'));
  toggleProperty(gameElement, 'hidden');
}