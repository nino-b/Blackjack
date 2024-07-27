import InitialHandManager from "./InitialHandManager";
import HandCoordinator from "./HandCoordinator";



/**
 * When user navigates to the Game Page, it will create a new Game Session instance.
 * If the instance already exists, it will use the existing instance.
 */
export default class GameSessionManager {
  constructor() {
    this.initialHandManager = null;
    this.handCoordinator = null;

    this.initializeManagers();
  }

  initializeManagers() {
    this.initialHandManager = new InitialHandManager();
    this.handCoordinator = new HandCoordinator(this.initialHandManager);
  }
}
