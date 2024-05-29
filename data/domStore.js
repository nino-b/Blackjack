
const DOMStore = {
  header: document.getElementsByTagName('header')[0],
  main: document.getElementsByTagName('main')[0],
  bgContainer: document.getElementById('bg-container'),
  navItems: document.querySelectorAll('a.nav-item'),
  gameListItem: document.querySelector('.game-li-item'),
  gameLink: document.querySelector('.game-link') 
};

export { DOMStore };