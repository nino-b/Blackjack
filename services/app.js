import proxiedStore from "./Store.js";
import router from "./Router.js";


/** 
 * Create an application state manager object.
 * This object is a centralized store for state manager objects.
*/
window.app = {};

/** 
 * Add Router to the application state manager object
*/
app.router = router;
app.store = proxiedStore;

export default app;