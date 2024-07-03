



export default function startGame(app) {
  for (const handObj in app.initialHands) {
    if (app.initialHands[handObj].hand.bet > 0) {
      return true;
    }
  }
}