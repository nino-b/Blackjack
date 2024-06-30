import queryElement from "../../util/DOMUtils/queryElement";



const handsContainer = queryElement('hands-container', app.pageContext);

handsContainer.addEventListener('click', (event) => {
  const action = event.target.dataset.action;
  
  switch (action) {
    case 'activate-hand':
      setupActiveHand(event.target);
    break;
    case 'remove-last-bet':
      removeLastBet(event.target);
    break;
  }
});


function setupActiveHand(target) {
  const id = output.dataset.id;
}



const chipContainer = queryElement('chip-container', app.pageContext);

chipContainer.addEventListener('click', (event) => {});