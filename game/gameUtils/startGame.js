



export default function startGame(app) {
  for (const handObj in app.initialHands) {
    if (handObj.hand.bet > 0) {
      return true;
    }
  }
}