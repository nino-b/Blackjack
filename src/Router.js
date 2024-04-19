export default class Router {
    init() {
        document.querySelectorAll('nav-link').forEach(link => {
            link.addEventListener('click', event => {
                /* Stop browser from making new navigation */
                event.preventDefault();
                const url = event.target.getAttribute('href');
                Router.go(url);
            });
        });
        /* Event handler for URL changes */
        window.addEventListener('popstate', (event) => {
            Router.go(event.state.route, false)
        });

          /* Check the initial URL.
          If the user copied the link and this link is not on the main page, we need to land directly on that page. 
          */
         /* Be aware of the potential issue:
         What will happen if user copies /play link? 
         It should show initial state of the page. If the user is logged in, then it should show the user's statistics.
         */
          Router.go(location.pathname)
    }
    go(route, addToHistory = true) {
        if (addToHistory) {
            history.pushState({ route }, '', route)
        }
        let pageElement = null;
        switch (route) {
            case '/':
                pageElement = document.createElement('h1'); /* temp */
                break;
            case '/play':
                break;
            default:
                if (route.startsWith('product-')) {}
        }
        if (pageElement) {
            document.querySelector('main').children[0].remove();
            document.querySelector('main').appendChild(pageElement);
            window.scrollX = 0;
            window.scrollY = 0;
        }
    }
}