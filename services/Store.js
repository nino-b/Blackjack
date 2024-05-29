import RULES from "../data/rules.js";

const Store = {
  rules: RULES,
  store: {
    openDialogBtns: document.querySelectorAll('.open-dialog-btn'),
    dialogBoxes: document.querySelectorAll('.dialog-box'),
    closeDialogBtns: document.querySelectorAll('.close-dialog-btn')
  }
}

const proxiedStore = new Proxy(Store, {
  /** 
   * The 'set' function intercepts assignments to the properties of the 'Store'.
   * Assigns new value to the specified property on the target object.
   * Dispatches custom event when wither 'menu' or 'cart' is changed.
   * Always returns 'true' to indicate that the property set was successful.
  */
  set(target, property, value) {
    target[property] = value;
    if (property === 'rules') {
      window.dispatchEvent(new Event('append_rules_change'));
    }
    return true;
  }
});

export default proxiedStore;
