import pageState from "../data/pageState.js";
import { DOMStore } from "../data/domStore.js";
import { addClass, removeClass, updateElementClass } from "../util/domUtils.js";

/**
 * A class to handle client-side routing in a single-page application.
 */
class Router {
    /**
    * Creates an instance of the Router and initializes event listeners.
    * @param {array} pageState - An array that holds page state objects.
    * @param {object} DOMStore - An object that holds DOM references that are immidiately necessary 
    * and don't require lazy loading.
    */
    constructor(pageState, DOMStore) {
        this.pageState = pageState;
        this.DOMStore = DOMStore;

        this.setupLinkListeners();
        this.setupPopStateListener();
        this.processInitialUrl();
    }
    /**
     * Set up event listeners for navigation links to prevent default behavior and route internally.
     * 
     * Using bind in this context is necessary to ensure that 
     * the this context inside the handleClick method refers to the instance of the Router class, 
     * not the element that triggered the event. 
     * In JavaScript, event handlers are called with 'this' set to the element that triggered the event. 
     * By using bind(this), we explicitly set the this context of the handleClick method to the instance of the Router class.
    */
    setupLinkListeners() {
        this.DOMStore.navItems.forEach(a => {
            a.addEventListener('click', this.handleClick.bind(this));
        });
    }
    /**
     * Event handler for link clicks to prevent page reload and navigate internally.
     * @param {Event} event - The click event from the navigation link.
    */
    handleClick(event) {
        event.preventDefault();
        const href = event.target.getAttribute('href');
        this.go(href);
    }
    /**
     * Set up event listener for `popstate` event to handle back/forward navigation.
    */
    setupPopStateListener() {
        window.addEventListener('popstate', event => {
            this.go(event.state.route, false)
        });
    }
    /**
     * Process the initial URL to handle direct link access without reloading.
    */
    processInitialUrl() {
        this.go(location.pathname);
    }
    /**
     * Processes the URL, 
     * retrieves a state object for this specific route,
     * updates the history, and updates the page content.
     * 
     * @param {string} route - The path to navigate to within the application.
     * @param {boolean} [addToHistory=true] - Flag to determine whether to add the navigation event to the browser's history stack.
     * @throws {Error} If the route is invalid.
     */
    go(route, addToHistory = true) {
        const stateObj = this.pageState[route];
        if (!stateObj) {
            throw new Error(`Invalid route. Unable to create a page because of invalid route.`)
        }

        if (addToHistory) {
            this.updateHistory(stateObj);
        }
        const pageElement = this.createPageElement(stateObj);
        this.updatePageContent(pageElement);
    }
    /**
    * Updates the browser's history with the given route.
    * 
    * @param {object} state - The object that holds page state values: route, attributes, custom DOM element name.
    */
    updateHistory(state) {
        history.pushState(state, '', state.route);
    }
    /**
    * Updates the page content with the provided element.
    * 
    * @param {HTMLElement} pageElement - The page element to display.
    */
    updatePageContent(pageElement) {
        const mainEl = DOMStore.main;
        if (pageElement) {
            mainEl.innerHTML = '';
            mainEl.appendChild(pageElement);
            window.scrollTo(0, 0);
        } else {
            mainEl.textContent = 'Oops, 404!';
        }
    }
    /**
    * Creates a page element based on the given route.
    * Gives page-specific styles to a newly created page.
    * 
    * @param {object} stateObj - An object that holds state specific parameters.
    * @returns {HTMLElement} The newly created page element.
    * @throws {Error} If the route is invalid.
    */
    createPageElement(stateObj) {
        const pageElement = document.createElement(stateObj.customDOMEl);

        const header = this.DOMStore.header;
        const headerClassAttr = stateObj.attributes.header;

        const bgContainer = this.DOMStore.bgContainer;
        const bgContainerClassAttr = stateObj.attributes.pageBg;

        const gameLinkRef = this.DOMStore.gameLink;
        const gameBtnStyleClass = 'game-link-design';

        const gameListItem = this.DOMStore.gameListItem;
        const gameListStyleClass = 'game-list-item';

        updateElementClass(header, headerClassAttr);
        updateElementClass(bgContainer, bgContainerClassAttr);

        if (stateObj.attributes.gameLinkDesign) {
            addClass(gameLinkRef, gameBtnStyleClass);
            addClass(gameListItem, gameListStyleClass);
            
        } else if (gameLinkRef.classList.contains(gameBtnStyleClass)) {
            removeClass(gameLinkRef, gameBtnStyleClass);
            removeClass(gameListItem, gameListStyleClass);
        }

        return pageElement;
    }
}

const router = new Router(pageState, DOMStore);

export default router;