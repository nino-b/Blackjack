import app from "../../data/appState";


class DeckManager {
  constructor(deckCount, deckStore) {
    this.deckCount = deckCount;
    this.deckStore = deckStore;
  }
  /**
   * Retrieves a card from a 'deckStore' (a deck of cards) by removing one card from an array of card objects.
   * @returns A card object, popped out of the deck of cards.
   */
  getCard() {
    return this.deckStore.pop();
  }
  createAndShuffleDecks() {
    for (let i = 0; i < this.deckCount; i++) {
      this.deckStore = [...this.deckStore, ...this.#createDeck()];
    }
    this.#shuffleDecks();
  }
  #createDeck() {
    const suits = ['hearts', 'diamonds', 'spades', 'clubs'];
    const ranks = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
  
    return ranks.map(rank => {
      return suits.map(suit => {
        return {
          suit: suit,
          rank: rank,
          // other parameters+ will be added as needed
        }
      });
    });
  }
  #shuffleDecks() {
    for (let i = this.deckStore.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [this.deckStore[i], this.deckStore[j]] = [this.deckStore[j], this.deckStore[i]];
    }
  }
}



const deckManager = new DeckManager(app.settings.gameSettings["deck-count"], app.deckStore);

export default deckManager;