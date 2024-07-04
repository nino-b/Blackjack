import addBgImg from "./addBgImg";




export default function removeChip(target, chipList) {
  const value = chipList[chipList.length - 1];
  
  if (value)  addBgImg(target, value);
  else addBgImg(target);
}