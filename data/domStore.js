import queryElementGroup from "../util/DOMUtils/queryElementGroup";
import queryElement from "../util/DOMUtils/queryElement";

const elementGroups = {
  navItems: queryElementGroup('a.nav-item'),
}


const elements = {
  header: queryElement('header'),
  main: queryElement('main'),
  bgContainer: queryElement('#bg-container'),
  gameListItem: queryElement('.game-li-item'),
  gameLink: queryElement('.game-link'),
  displayNavBtn: queryElement('#display-nav'),
  arrowImage: queryElement('#display-nav img'),
}



const dialogRef = {
  openDialogBtns: queryElementGroup('.open-dialog-btn'),
  dialogBoxes: queryElementGroup('.dialog-box'),
  closeDialogBtns: queryElementGroup('.close-dialog-btn'),
}


const dialogSelectors = {
  openDialogBtns: '.open-dialog-btn',
  dialogBoxes: '.dialog-box',
  closeDialogBtns: '.close-dialog-btn'
}

const dialogAttributes = {
  datasetCloseAction: 'close-dialog', 
  closingAnimation: 'close-dialog-animation'
}










export { elementGroups, elements, dialogRef,
         dialogSelectors, dialogAttributes
 };