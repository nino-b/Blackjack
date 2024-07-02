import addBgImg from "./addBgImg";




export default function removeChip(target, app) {
  const chipList = app.activeHand.chipList;
  const value = chipList[chipList.length - 1];
  if (value)  addBgImg(target, value);
  else addBgImg(target);
}