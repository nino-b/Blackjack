import queryElement from "../util/DOMUtils/queryElement"


/**
 * Class representing game settings management.
 */
export default class Settings {
  constructor() {
    this.settingsDialog = queryElement('.settings-dialog');
    this.gameSettings = {
      "deck-count": 2,
      "soft-17-opt": true,
      "insurance-opt": true,
      "even-money-opt": true,
      "auto-advice-opt": false,
      "repeat-last-bet-opt": true,
     };

    this.addSettingsListener();
  }
  /**
   * Adds event listener to the settings dialog for change events.
   */
  addSettingsListener() {
    this.settingsDialog.addEventListener('change', this.settingsCallback.bind(this));
  }
  /**
   * Handles change events on the settings dialog.
   * @param {Event} event - The change event object.
   */
  settingsCallback(event) {
    const target = event.target;

    if (target.name === 'toggle-sound') {
      console.log('Sound Toggled');

      // TO DO
      // Implement sound toggling functionality

    } else if (target.name === 'toggle-music') {
      console.log('Music Toggled');

      // TO DO
      // Implement music toggling functionality
      
    } else {
      if (target.type === 'checkbox') {
        this.gameSettings[targetName] = target.checked;
      } else {
        this.gameSettings[targetName] = target.value;
      }
    }
  }
}