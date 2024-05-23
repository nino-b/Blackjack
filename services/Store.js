import RULES from "../data/rules.js";

const Store = {
  rules: RULES,
  header: document.getElementsByTagName('header')[0],
  main: document.getElementsByTagName('main')[0],
  bgContainer: document.getElementById('bg-container'),
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
    if (property == 'rules') {
      window.dispatchEvent(new Event('appendruleschange'));
    }
    if (property == 'cart') {
      window.dispatchEvent(new Event('appcartchange'));
    }
    return true;
  }
});

export default proxiedStore;
