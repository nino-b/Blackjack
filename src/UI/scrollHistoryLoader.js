

/**
 * Handles scroll-based loading of history entries from a database.
 *
 * @param {Function} loadCallback - Callback function to load more entries from the database.
 * @param {Object} db - The database object or connection used to fetch history entries.
 * @param {Function} callback - Callback function to handle the loaded entries.
 */

export default function scrollHistoryLoader(loadCallback, db, callback) {
  const scrollPosition = window.scrollY;
  const windowHeight = window.innerHeight;
  const documentHeight = document.body.clientHeight;

  if (!loadingEntries && scrollPosition + windowHeight >= documentHeight) {
    loadCallback(db, callback);
  }
}