
/**
 * Class responsible for handling the setup and removal of event listeners.
 */
export default class EventHandler {
  /**
   * Creates an instance of EventHandler.
   * @param {string} eventName - The name of the event to listen for.
   * @param {Function} renderCallback - The callback function to execute when the event is triggered.
   */
  constructor(eventName, renderCallback) {
    this.eventName = eventName;
    this.renderCallback = renderCallback;
  }
  /**
   * Sets up the event listener for the specified event.
  */
  setUpEventListener() {
    window.addEventListener(this.eventName, this.renderCallback);
  }
  /**
   * Removes the event listener for the specified event.
  */
  removeEventListener() {
    window.removeEventListener(this.eventName, this.renderCallback);
  }
}