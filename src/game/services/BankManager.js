


export default class BankManager {
  #bank = 10000;
  constructor() {}
  updateBank(amount, recieve = true) {
    if (!amount) {
      throw new Error(`Amount not specified. Can't update the bank.`);
    }
    if (recieve) {
      this.#bank += amount;
    } else {
      this.#bank -= amount;
    }
    return this.#bank;
  }
  getBank() {
    return this.#bank;
  }
}