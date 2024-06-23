import RULES from "./rules";

/**
 * Central storage for the app's state.
 */

window.app = {};

app.rules = RULES;

/**
 * Saves 'this' context of newly created page in the global property, so other functions can interact with a page Shadow DOM.
 * Otherwise it is harder to interact with a newly created page's Shadow DOM.
 * E.g. we can turn on and off animations for that page.
 */
app.pageContext = null;

/**
 * Saves settings parameter values. This way specific settings are globally accessable (e.g. we save animation settings in event listener callback and use newest values in a page Component).
 */
app.settings = {};
app.settings.animations = null;

export default app;