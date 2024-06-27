


class DeckManager {
  constructor(deckCount, deckStore) {
    this.deckCount = deckCount;
    this.deckStore = deckStore;
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
  dealCard() {
    return this.deckStore.pop();
  }
}



const deckManager = new DeckManager(app.settings.gameSettings["deck-count"], app.deckStore);

export default deckManager;