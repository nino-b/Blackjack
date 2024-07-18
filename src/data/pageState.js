
const pageState = {
  "/": {
    route: "/",
    attributes: {
      header: "align-bottom",
      pageBg: "table-page-bg",
      gameLinkDesign:"game-link-design"
    },
    customDOMEl: "home-page",
  },
  "/game": {
    route: "/game",
    attributes: {
      header: "align-top",
      displayHeaderNav:  "display-header-nav",
      dropDown: 'display',
      pageBg: "table-page-bg"
    },
    customDOMEl: "game-page",
  },
  "/history": {
    route: "/history",
    attributes: {
      header: "align-top",
      pageBg: "gradient-page-bg"
    },
    customDOMEl: "history-page",
  },
  "/rules": {
    route: "/rules",
    attributes: {
      header: "align-top",
      pageBg: "gradient-page-bg"
    },
    customDOMEl: "rules-page",
  },
  "/about": {
    route: "/about",
    attributes: {
      header: "align-top",
      pageBg: "gradient-page-bg"
    },
    customDOMEl: "about-page",
  },
  "/account": {
    route: "/account",
    attributes: {
      header: "align-top",
      pageBg: "gradient-page-bg"
    },
    customDOMEl: "account-page",
  },
};

export default pageState;