import addClass from "../util/DOMUtils/addClass";
import removeClass from "../util/DOMUtils/removeClass";

export default class HeaderNavHandler {
  constructor(elementList, attributes) {
    this.attributes = attributes;
    this.elementList = elementList
    
    this.styleHeaderAndBg();
    this.styleGameLink();
    this.styleArrow();
  }
  styleHeaderAndBg() {
    const header = this.elementList.header;
    /**
     * Clearing out previous classes is important because in the Game Page, 'display-header-nav' is added and if this class is kept,
     * when user will go in Home Page and then in other pages, it won't display header sliding (reducing margin) animation effect.
     */
    addClass(header, this.attributes.header, true);
    addClass(this.elementList.bgContainer, this.attributes.pageBg, true);

    if (this.attributes.HeaderNavHandler) {
      addClass(header, 'display-header-nav');
    } else if (header.classList.contains('display-header-nav')) {
      removeClass(header, 'display-header-nav');
    }
  }
  styleGameLink() {
    const gameLinkRef = this.elementList.gameLink;
    const gameBtnStyleClass = 'game-link-design';
  
    const gameListItem = this.elementList.gameListItem;
    const gameListStyleClass = 'game-list-item';
  
  
    if (this.attributes.gameLinkDesign) {
        addClass(gameLinkRef, gameBtnStyleClass);
        addClass(gameListItem, gameListStyleClass);
        
    } else if (gameLinkRef.classList.contains(gameBtnStyleClass)) {
        removeClass(gameLinkRef, gameBtnStyleClass);
        removeClass(gameListItem, gameListStyleClass);
    }
  }
  styleArrow() {
    const displayNavBtn = this.elementList.displayNavBtn;

    if (this.attributes.dropDown) {
      addClass(displayNavBtn, 'display-drop-down', true);
    } else if (!(displayNavBtn.classList.contains('hidden'))) {
      addClass(displayNavBtn, 'hidden', true);
    }
  }
}
