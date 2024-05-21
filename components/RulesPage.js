import BaseComponent from "./BaseComponent.js";
import URLs from "../data/urls.js";

export default class RulesPage extends BaseComponent {
  constructor() {
    super();
    this.pathToCSS = URLs.cssURLs.Rules;
    this.elementId = '#rules-page-template';
    this.eventName = 'appendruleschange';
  }
  render() {
    const rules = app.store.rules;

    if (rules) {
      this.root.querySelector('#rules-page-container').innerHTML = '';

      const h1 = document.createElement('h1');
      h1.textContent = rules.introduction.introduction_heading;

      /* Introduction */
      const introductionP = document.createElement('p');
      introductionP.textContent = rules.introduction.inroduction_paragraph;

      /* Each Rule Section */
      rules.rules.forEach(ruleGroup => {
        const ruleSection = document.createElement('section');

        const ruleHeading = document.createElement('h2');
        ruleHeading.textContent = ruleGroup.group_name;
        ruleSection.appendChild(ruleHeading);

        const ruleUl = document.createElement('ul');

        ruleGroup.group_items.forEach(item => {
          const li = document.createElement('li');
          li.textContent = item;

          ruleUl.appendChild(li);
        });
        
        ruleSection.appendChild(ruleUl);
      
      });

      /* Wrapping Up */
      const wrappingUp = rules.final_words.wrapping_up;

      const lastP = document.createElement('p');
      lastP.textContent = wrappingUp;
    
      document.body.header.div.div.classList = 'home-nav-alignment';
    } else {
      console.error(`ERROR: Can't access 'rules' property in the 'Store' to render 'RulesPage' component.`);
    }
  }
}


customElements.define('rules-page', RulesPage);