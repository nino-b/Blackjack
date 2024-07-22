import bettingUIManager from "../UI/BettingUIManager";
import gameUISetupManager from "../UI/GameUISetupManager";
import handInitializer from "./HandInitializer";




class GameSetupManager {
  constructor(bettingUIManager, gameUISetupManager, handInitializer) {
    this.bettingUIManager = bettingUIManager;
    this.gameUISetupManager = gameUISetupManager;
    this.handInitializer = handInitializer;
  }
  gameSetup() {
    this.gameUISetupManager.setUpPageElements();
    if (this.handInitializer.setUpHands()) {
      this.handInitializer.initialDeal();
    }
  }
}