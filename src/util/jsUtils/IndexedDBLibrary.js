
/**
 * IndexedDB uses an event-driven model for handling database operations, where we attach event listeners 
 * (such as 'onsuccess', 'onerror', etc.) to handle the outcome of an asynchronous request.
 * 
 * To handle async operations efficiently, we convert these operations into Promise-based operations.
 * This allows us to use modern JavaScript async patterns, making the code more readable and maintainable.
 * 
 * @param {IDBRequest} request - The IndexedDB request to be promisified.
 * @returns {Promise} A promise that resolves with the result of the request, or rejects with an error.
 */

export function promisifyRequest(request) {
  return new Promise((resolve, reject) => {
    /**
     * Resolve the promise on successful completion of the request.
     * @fires IDBRequest#onsuccess
     * @listens IDBRequest#onsuccess
     */
    request.oncomplete = request.onsuccess = () => resolve(request.result);
    /**
     * Reject the promise if the request is aborted or encounters an error.
     * @fires IDBRequest#onabort
     * @fires IDBRequest#onerror
     * @listens IDBRequest#onabort
     * @listens IDBRequest#onerror
     */
    request.onabort = request.onerror = () => reject(request.error);
  });
}



/**
 * Create a store in the specified IndexedDB database.
 *
 * @param {string} dbName - The name of the IndexedDB database.
 * @param {string} storeName - The name of the object store to create.
 * @param {object|null} [dbOptions=null] - Optional configuration options for the object store.
 * @param {function|null} [upgradeCallback=null] - Optional callback function for database upgrade actions.
 * @returns {function} A function that takes a transaction mode and a callback,
 *                     and returns a promise that resolves with the result of the callback.
 * @throws {Error} Throws an error if `dbOptions` is specified but not an object.
 */
export function createStore(dbName, storeName, dbOptions = null, upgradeCallback = null) {
  /**
   * Open a database.
   * @type {IDBOpenDBRequest}
   * @fires IDBOpenDBRequest#upgradeneeded
   * 
   * 
   * An asynchronous operation.
   * 'open' method returns an 'IDBOpenDBRequest' object (which will be assigned to the 'request' constant).
   * 
   * Events associated with 'IDBOpenDBRequest':
   * 'onsuccess': Fired when the database is successfully opened. The 'request.result' will be the 'IDBDatabase' instance.
   * 
   * 'onerror': Fired when there is an error opening the database.
   * 
   * 'onupgradeneeded': Fired when a new version of the database is creted or when an upgrade is needed. This is where are object stores typically created or modified.
   * This event is handled as part of the initial 'indexedDB.open' request.
   */
  const request = indexedDB.open(dbName);

  /**
   * Create an object store if it doesn't exist, or upgrade it.
   * @param {IDBVersionChangeEvent} event - The 'upgradeneeded' event object.
   * @throws {Error} Throws an error if `dbOptions` is specified but not an object.
   * 
   * 
   * This event is handled as part of the initial 'indexedDB.open' request.
   * It runs synchronously to ensure that any necessary schema updates are completed before database is opened.
   * Thus it runs before 'onsuccess'. 
   * The promise created by 'promisifyRequest' will only resolve once the database is fully opened and any necessary upgrades have been completed.
   * Once the upgrade process is complete, the 'onsuccess' event is fired, resolving the promise.
   */
  request.onupgradeneeded = (event) => {
    /**
     * Access the 'IDBDatabase' instance, representing the operend database.
     * @type {IDBDatabase}
     */
    const dataBase = event.target.result;

    /**
     * Check whether the specified object store exists.
     * If it doesn't exist, creates a new one with optional parameters.
     */
    if (!dataBase.objectStoreNames.contains(storeName)) {
      /**
       * If `dbOptions` is provided and is not an object, throw an error.
       */
      if (dbOptions && !Object.is(dbOptions)) {
        throw new Error(`Error during creating an object store in IndexedDB: Object store parameters must have an object format!`)
      }
      dataBase.createObjectStore(storeName, dbOptions);
    }

  /**
   * Invoke a custom upgrade callback function if provided.
   * @param {IDBDatabase} dataBase - The 'IDBDatabase' instance passed to the callback.
   */
    if (upgradeCallback && typeof upgradeCallback === 'function') {
      upgradeCallback(dataBase);
    }
  }

  /**
   * Convert IndexedDB request into a promise for easier async handling.
   * @type {Promise<IDBDatabase>}
   * 
   * 'indexedDB.open(dbName)' initiates asynchronous request to open a database. The 'request' object (which is an instance of 'IDBOpenDBRequest') is returned immediately, but the actual opening of the database happens asynchronously.
   */
  const dataBasePromise = promisifyRequest(request);


  /**
   * @param {IDBTransactionMode} transactionMode - The transaction mode ('readonly' or 'readwrite').
   * @param {function} callback - Callback function to perform operations on the object store.
   * @returns {Promise<any>} A promise that resolves with the result of the callback.
   * Returns an anonymous asynchronous function that provides a convinient way to interact with an IndexedDB database and its object stores in a structured manner.
   */
  return async (transactionMode, callback) => {
    /**
     * Waits for the IndexedDB database ('dataBasePromise') to open and become available.
     * @type {IDBDatabase}
     */
    const dataBase = await dataBasePromise;
    /**
     * A transaction is created on the database.
     * @type {IDBTransaction}
     * 
     * A transaction groups one or more operations into a single unit, ensuring that all operations either succeed or fail.
     * 
     * Transactions have modes such as '"readonly"' or '"readwrite"' which define the type of operations that can be performed within the transaction.
     * 
     * Transactions ensure that operations on the object store are isolated from other transactions. 
     * This means that no other transactions can interfere with the operations in the current transaction.
     */
    const transaction = dataBase.transaction(storeName, transactionMode);
    /**
     * Retrieve an object store by name ('storename').
     * @type {IDBObjectStore}
     * 
     * An object store holds the data records that we might want to work with.
     * 
     * An object store is where the data is actually stored in IndexedDB. Each object store can hold multiple records and each record has a key that uniquely identifies it.
     */
    const store = transaction.objectStore(storeName);
    /**
     * Call the provided 'callback' function and perform operations on an object store ('store') such as adding, updating, deleting or querying data within the object store.
     * 
     * Return the result of the callback. It might be useful to chain additional operations.
     * 
     * @type {any}
     */
    return callback(store);
  }
}



/**
 * Set a readable and writable value with a key.
 * 
 * Setting operation is promisified, because all IndexedDB methods are asynchronous and Promises help to work with them efficiently (e.g. better error handling - otherwise async functionality errors might be silent).
 * 
 * In case of 'put' method, the first argument is the value, and the second one is the key.
 * 
 * 
 * 'promisifyRequest(store.transaction)' ensures that the entire transaction completes successfully before resolving the promise.
 * Transaction itself is asynchronous.
 * 'store.transaction' refers to the 'IDBTransaction' object associated with the object store operations being performed.
 * When we do operations (like 'get', 'put', 'delete', etc.) on an 'IDBObjectStore', these operations are always done within the context of an 'IDBTransaction'. 
 * The 'transaction' property of an 'IDBObjectStore' provides a reference to this transaction.
 * The 'IDBTransaction' ensures that a series of operations within the transaction are treated as a single unit. Either all operations succeed, or none do. If any operation fails, the transaction is rolled back.
 * Promisifying the transaction is essential for ensuring that we are aware when the transaction as a whole is complete.
 *
 * @param {IDBValidKey} key - Key to set the value.
 * @param {any} value - Value to set.
 * @param {Function} customStore - A function that takes a mode ('readOnly' or 'readWrite') and a callback. The callback is executed with the store object.
 * @returns {Promise<void>} - Promise that resolves when the value is set.
 */
export function set(key, value, customStore) {
  return customStore('readwrite', store => {
    store.put(value, key);
    return promisifyRequest(store.transaction);
  })
}

export function fetchBatch(customStore, callback) {
  const fetchNextBatch = fetchBatchWrapper();
  return customStore('readonly', store => {
    fetchNextBatch(store, callback);
    return promisifyRequest(store.transaction);
  });
}

/**
 * Can't use getAll method to retrieve elements in reverse order.
 * Reverse order is needed because we need to display latest records at the top of a table. And new table rows are added at the bottom, so older records are displayed at the bottom.
 */
function fetchBatchWrapper() {
  let offset = 0;
  let loadingEntries = false;

  return function (store, callback, batchSize = 20) {
    if (loadingEntries) return;
    
    loadingEntries = true;
    let count = 0;
  
    const request = store.openCursor(null, 'prev');
    
    request.onsuccess = function() {
      const cursor = this.result;
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
      }
      
      request.onerror = () => {
        loadingEntries = false;
        console.error("Cursor request failed");
      };
    }
    return promisifyRequest(store.transaction);
  }
}
















