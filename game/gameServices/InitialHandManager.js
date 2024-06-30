import HandManager from "./HandManager";



/**
 * When the user clicks 'deal' button, it will check contents of each output, whether it has any bet, and if it does, this class will create a list of initial hanads.
 */



class InitialHandManager {
  constructor(betOutputList, dealBtn) {
    this.betOutputList = betOutputList;
    this.dealBtn = dealBtn;
    this.initialHandList = {};

    this.listenToDealBtn();
  }
  listenToDealBtn() {
    this.dealBtn.addEventListener('click', this.setUpInitialHands.bind(this));
  }
  setUpInitialHands() {
    this.betOutputList.forEach(output => {
      const value = output.textContent;
      const id = output.dataset.id;
      
      if (value) {
        this.initialHandList[id] = new HandManager(value);
      }
    });
  }
  removeListener() {
    this.dealBtn.removeEventListener('click', this.setUpInitialHands);
  }
}