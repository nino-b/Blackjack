/** */
'use strict';


/** 
 * Create an application state manager object.
 * This object is a centralized store for state manager objects.
*/
window.app = {};

/** 
 * Add Router to the application state manager object
*/
app.router = Router;
app.store = proxiedStore;

import Router from "./services/Router.js";
import proxiedStore from "./services/Store.js";
import DialogManager from "./services/DialogManager.js";
import HomePage from "./components/HomePage.js";
import RulesPage from "./components/RulesPage.js";



/** 
 * Ensure that JS runs only after the HTML is loaded, 
 * without waiting for the other resources to be loaded.
 * This step is important because it ensures that 
 * DOM components will be manipulated only after they are fully loaded.
*/
window.addEventListener('DOMContentLoaded', () => {
  /** 
   * Let the router start working.
   */
  app.router.init();
});