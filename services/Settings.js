import queryElement from "../util/DOMUtils/queryElement"



export default class Settings {
  constructor(gameSettings) {
    this.settingsDialog = queryElement('.settings-dialog');
    this.gameSettings = gameSettings;

    this.addSettingsListener();
  }
  addSettingsListener() {
    this.settingsDialog.addEventListener('change', this.settingsCallback.bind(this));
  }
  settingsCallback(event) {
    const target = event.target;

    if (target.name === 'toggle-sound') {
      console.log('Sound Toggled');

      // TO DO
    } else if (target.name === 'toggle-music') {
      console.log('Music Toggled');

      // TO DO
    } else {
      if (target.type === 'checkbox') {
        this.gameSettings[targetName] = target.checked;
      } else {
        this.gameSettings[targetName] = target.value;
      }
    }
  }
}