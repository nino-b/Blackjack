


export default function createScrollHistoryLoader(loadCallback, db, callback) {
  return function() {
    const scrollPosition = window.scrollY;
    const windowHeight = window.innerHeight;
    const documentHeight = document.body.clientHeight;

    if (!loadingEntries && scrollPosition + windowHeight >= documentHeight) {
      loadCallback(db, callback);
    }
  }
}