import addClass from "../../util/DOMUtils/addClass";
import removeClass from "../../util/DOMUtils/removeClass";





export default function toggleInactiveBetSoptStyles(bettingSpotList, activeHandList, deactivate = true) {
  const inactiveSpotClass = 'inactive-spot';

  bettingSpotList.forEach(bettingSpot => {
    const id = bettingSpot.dataset.id;
    if (deactivate && !activeHandList[id]) {
      addClass(bettingSpot, inactiveSpotClass);
    } else {
      removeClass(bettingSpot, inactiveSpotClass);
    }
  })
}