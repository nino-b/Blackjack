/**
 * Opens an IndexedDB database for storing game history entries for a Blackjack game.
 * If the user's browser does not support the standard `indexedDB` object, it checks for other vendor-prefixed versions.
 * Creates or upgrades the database and object store as needed.
 *
 * @returns {IDBOpenDBRequest} - The request object for opening the database.
 */

function openIndexedDB() {
  return new Promise((resolve, reject) => {
    /**
    * If the user is using older browser that is not supporting 'indexedDB', it checks other versions too.
    */
    const indexedDB = 
    window.indexedDB ||
    window.mozIndexedDB ||
    window.webkitIndexedDB ||
    window.msIndexedDB ||
    window.shimIndexedDB;
    
    const request = indexedDB.open('BlackjackDB', 3);
    /**
     * 'onupgradeneeded' event is triggered when the database is created or when we open the database with higher version number than the current one.
     * This is the place where the object stores and indexes are created and updated. 
     * It does not get triggered for normal read/write operations, like adding and updating entries.
     */
    request.onupgradeneeded = function(event) {
      /**
       * Get access to the database instance.
       */
      const db = event.target.result;
      console.log('db: ', db);
      /**
       * Check if the object store already exists.
       */
      if (!db.objectStoreNames.contains('GameHistory')) {
        /**
         * Create the object store if it doesn't exist
         */
        db.createObjectStore('GameHistory', { keyPath: 'id', autoIncrement: true});
        // Add indexes if needed
      }
    }
    request.onsuccess = function(event) {
      console.log('resolved');
      resolve(event.target.result);
    }
    request.onerror = function(event) {
      console.log('rejected');
      reject(event.target.error);
    }
  });
}




let blackjackDBPromise;

// Assuming blackjackDBPromise is used like this
async function loadData() {
  try {
      blackjackDB = await openIndexedDB(); // Ensure openIndexedDB() returns a promise
      console.log('IndexedDB opened successfully:', blackjackDB);
      // Use the opened database `db` here, e.g., load data or perform operations
  } catch (error) {
      console.error('Error opening IndexedDB:', error);
  }
}

// Call the async function
loadData();

export default blackjackDBPromise;
