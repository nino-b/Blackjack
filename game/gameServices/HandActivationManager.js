

// queryElement('hands-container', app.pageContext);
// handsContainer.addEventListener('click', handActivationManager);

class HandActivationManager {
  constructor(target) {
    this.target = target; 
  }
  setActiveHandNode() {
    if (this.target.dataset.action === 'activate-hand') {
      app.activeHandNode = this.target;
    }
  }
}