import { createStore } from "../../util/jsUtils/IndexedDBLibrary";

/**
 * Create a database for Blackjack history.
 * @param {string} dbName - The name of the IndexedDB database.
 * @param {string} storeName - The name of the object store to create.
 * @returns {function} A function that takes a transaction mode and a callback,
 *                     and returns a promise that resolves with the result of the callback.
 */

const BlackjackDBAccessor = createStore('BlackjackDB', 'GameHistory');

export default BlackjackDBAccessor;