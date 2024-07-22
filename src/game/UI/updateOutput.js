

/**
 * Updates the text content of the specified output element with the bet value from the active hand.
 *
 * @param {HTMLElement} outputEl - The output element whose text content will be updated.
 * @param {number} bet - The bet value of the active hand.
 */

export default function updateOutput(outputEl, bet) {
  outputEl.textContent = bet;
}