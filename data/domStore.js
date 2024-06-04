
const DOMStore = {
  header: document.getElementsByTagName('header')[0],
  main: document.getElementsByTagName('main')[0],
  bgContainer: document.getElementById('bg-container'),
  navItems: document.querySelectorAll('a.nav-item'),
  gameListItem: document.querySelector('.game-li-item'),
  gameLink: document.querySelector('.game-link') 
};


const dialogSelectors = {
  openDialogBtns: '.open-dialog-btn',
  dialogBoxes: '.dialog-box',
  closeDialogBtns: '.close-dialog-btn',
};

const dialogAttributes = {
  datasetCloseAction: 'close-dialog',
  closingAnimation: 'dialog-closing',
};








export { DOMStore, dialogSelectors, dialogAttributes };