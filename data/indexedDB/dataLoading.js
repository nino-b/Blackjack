/**
 * This flag prevents multiple requests from being made if the user scrolls multiple times before the previous data fetch has completed.
 *  When loadingEntries is true, no additional requests will be made until the current fetch is finished.
 */
let loadingEntries = false;
/**
* Determines how many entries should be fetched in each request.
*/
const batchSize = 20;
/**
 * Keeps track of how many entries have been fetched so far. 
 * E.g. After the first 20 entries are fetched, offset will be 20, and the next batch will start from the 21st entry.
 */
let offset = 0;

export default async function loadEntriesFromIndexedDB(db, callback) {

  /**
    * Indicates that the request has been made and avoids multiple asynchronous operations.
   */
  loadingEntries = true;
  
  /**
   * Creates a new transaction, which ensures that all operations within it is completed successfully, otherwise changes are not applied.
   * Takes an array of object store names that will be accessed during transaction.
   * Sets mode and transaction will only read data from sthe object store(s).
   */
  const transaction = db.transaction(['GameHistory'], 'reaadonly');
    /**
     * Access specific object store in IndexedDB.
     * 'transaction' refers to the transaction object created by 'db.transaction(['GameHistory'], 'readonly');'.
     * A transaction provides a scope for a group of operations (like reading or writing a data) that will be performed together.
     * 
     * '.objectStore('GameHistory')' returns an object store instance representing the 'GameHistory' object store within the context of the transaction.
     */
    const historyStore = transaction.objectStore('GameHistory');
    /**
     * 'const index' stores the reference to the index object.
     * '.index('date')' returns an index object that allows to query store based on the 'date' field.
     * The 'date' parameter specifies the name of the index to be accessed.
     */
    const index = historyStore.index('date');

    return new Promise((resolve, reject) => {
          /**
     * Creates a cursor request to iterate over records using a specific index.
     * 'index' - a reference to an index object, obtained using 'historyStore.index('date');'.
     * Parameter 'null' indicates that it will iterate over all the records in index.
     * Parameter 'prev' specifies the direction of the cursor - cursor will iterate in reverse order (from the latest to the earliest record).
     */
    const cursorRequest = index.openCursor(null, 'prev');
  
    /**
     * Keeps track of how many records have been processed or fetched so far.
     */
    let count = 0;
  
    /**
     * If a successful result is returned from a cursor request, an event handler function is executed.
     */
    cursorRequest.onsuccess = function(event) {
      /**
       * For cursor-based operations ('openCursor()'), 'event.target.result' provides the current position of the cursor within the result set.
       * Assigns the current cursor position (or 'null' if there are no more records) to the 'cursor' constant.
       */
      const cursor = event.target.result;
  
      /**
       * Ensures to process only desired number of entries ('batchSize').
       * Cursor processes entries one by one. So this if statement checks for one entry and there are necessary only 20 entries ('batchSize');
       * 
       * If checked element count (excluding the one that is being currently checked) is equal or greater than offset, than this element will be processed by the callback function.
       * 
       * 'cursot' will be updated and next entry will be checked out.
       */
      if (cursor && count < batchSize + offset) {
        if (count >= offset) {
          callback(cursor.value);
        }
        count++;
        cursor.continue();
        } else {
          /**
           * There is no more elements to check out or batch size limit was reached. 
           * All the necessary data was retrieved and it displays that there is no asynchronous operation any more, so another request can be made.
           */
          loadingEntries = false;
          /**
           * Offset is updated for the next batch.
           */
          offset += batchSize;
          resolve();
        }
      }
      cursorRequest.onerror = function(event) {
        console.error("Error fetching entries:", event.target.error);
        loadingEntries = false;
        reject(event.target.error);
      };
    });
}
