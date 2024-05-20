/** */

const Router = {
    /** 
     * Listen to the clicks on the links.
     * Prevent from sending request to the server, thus avoid page reload.
     * Send user to the requested page.
    */
    init: () => {
        /** 
         * Retrieve every link from the nav list.
         * Result will be a static list of the DOM elements, meaning that
         * NodeList returned by the 'querySelectorAll' is not live, 
         * it does not get automatically updated if changes are made in DOM.
        */
        document.querySelectorAll('a.nav-item').forEach(a => {
            /** 
             * Add 'click' event listener to each link in the NodeList
            */
            a.addEventListener('click', event => {
                /** 
                 * Prevent from executing default behavior: 
                 * sending request to the server. 
                 * This will avoid page reloading.
                */
                event.preventDefault();
                /** 
                 * Get pathname from the 'href' tag.
                 * This pathname will be argument of 'go(pathName)' method 
                 * and it will update the page contents and browser history.
                 * 
                 * There are two ways of getting URL from HTML:
                 * 1. 'event.target.href' - will return the full URL
                 * 2. 'event.target.getAttribute('href') - will return the pathname.
                */
                const href = event.target.getAttribute('href');
                /** 
                 * Update the page content and browser history based on the route.
                */
               Router.go(href);
            });
        });
        /** 
         * Handle URL changes when user clicks 'back' or 'forward' button'.
         * Because in such cases user navigates through already
         * existing history states.
        */
        window.addEventListener('popstate', event => {
            Router.go(event.state.route, false)
        })

        /** 
         * Process the initial URL.
         * If the user opens copied link to the page, else than main page
         * program should open that page, not the initial page, without reloading the page.
         * The code retrueves the pathname where the user currently is.
         * 'location' is a JS object which represents the 
         * URL of the object it is linked to
        */
        Router.go(location.pathname);
    },
    /** 
     * Process the url, add route to the history, update the page.
     * 'addToHistory' is optional because 
     * we might not want to add route to the history for some reasons,
     * e.g. if user logs in and then clicks the back button, 
     * we don't want to sign the user out. 
     * 
     * @param { string } route - The path to navigate to within the application.
     * @param { boolean } [addToHistory = true] - Flag to determine whther to add the navigation event to the browser's history stack.
    */
    go: (route, addToHistory = true) => {

        /** 
         * If adding to the history option is true, 
         * using browser's 'history' API, we add current route to the history
         * and change the current URL without causing page reload.
         * It takes three arguments:
         * '{ route }' - an object associated with the 
         * new state history entry, created by 'pushState()'..
         * In this case, a string that represents current path.
         * " '' " - title of the new history entry -
         * usually set as null (empty string).
         * 'route' - new history url (optional).
        */
        if (addToHistory) {
            history.pushState({ route }, '', route);
        }
        
        let pageElement = null;

        switch (route) {
            case '/':
                pageElement = document.createElement('home-page');
            case '/rules':
                pageElement = document.createElement('rules-page');
                break;
        }
        const mainEl = document.querySelector('main');

        if (pageElement) {
            mainEl.innerHTML = '';
            mainEl.appendChild(pageElement);
            window.scrollX = 0;
            window.scrollY = 0;
        } else {
            mainEl.textContent = 'Oops, 404!'
        }
    }
}

export default Router;