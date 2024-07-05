import loadEntriesFromIndexedDB from "./dataLoading";


function createScrollHistoryLoader(db, callback) {
  return function() {
    const scrollPosition = window.scrollY;
    const windowHeight = window.innerHeight;
    const documentHeight = document.body.clientHeight;

    if (!loadingEntries && scrollPosition + windowHeight >= documentHeight) {
      loadEntriesFromIndexedDB(db, callback);
    }
  }
}


export default createScrollHistoryLoader;