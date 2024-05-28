
class Router {
    constructor() {
        this.setupLinkListeners();
        this.setupPopStateListener();
        this.processInitialUrl();
    }
    /**
     * Set up event listeners for navigation links to prevent default behavior and route internally.
    */
    setupLinkListeners() {
        document.querySelectorAll('a.nav-item').forEach(a => {
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
     * Process the URL, update the history, and update the page content.
     * @param {string} route - The path to navigate to within the application.
     * @param {boolean} [addToHistory=true] - Flag to determine whether to add the navigation event to the browser's history stack.
    */
    go(route, addToHistory = true) {
        if (addToHistory) {
            history.pushState({ route }, '', route);
        }

        const pageElement = this.createPageElement(route);

        const mainEl = document.querySelector('main');
        if (pageElement) {
            mainEl.innerHTML = '';
            mainEl.appendChild(pageElement);
            window.scrollTo(0, 0);
        } else {
            mainEl.textContent = 'Oops, 404!';
        }
    }
    
    /**
     * Create the appropriate page element based on the given route.
     * @param {string} route - The route to determine which page element to create.
     * @returns {HTMLElement} - The created page element.
     */
    createPageElement(route) {
        switch (route) {
            case '/':
                return document.createElement('home-page');
            case '/rules':
                return document.createElement('rules-page');
            case '/history':
                return document.createElement('history-page');
            /*   
            case '/game':
                return document.createElement('game-page');
            case '/about':
                return document.createElement('about-page');
            case '/account':
                return document.createElement('account-page');
            */
            default:
                const errorElement = document.createElement('h1');
                errorElement.textContent = 'Oops, 404!';
                return errorElement;
        }
    }
}

const router = new Router();

export default router;