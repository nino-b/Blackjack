



export default function removeBet(app) {
  if (app.activeHand.chipList.length > 0) {
    const lastChipValue = app.activeHand.chipList.pop();
    app.activeHand.hand.updateBet(lastChipValue, false);
  }
}