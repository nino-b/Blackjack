import BaseComponent from "./BaseComponent.js";
import URLs from "../data/urls.js";

export default class RulesPage extends BaseComponent {
  constructor() {
    super();
    this.pathToCSS = URLs.cssURLs.Rules;
    this.templateID = 'rules-page-template';
    this.eventName = 'appendruleschange';
  }
template() {
  const rules = app.store.rules;
  const ruleSection = this.root.querySelector('#rules-page-container');
  const firstWordMatch = '/^.*?:/';

  /* Introduction */
  const h1 = document.createElement('h1');
  h1.textContent = rules.introduction.introduction_heading;
  ruleSection.appendChild(h1)

  const introductionP = document.createElement('p');
  introductionP.textContent = rules.introduction.inroduction_paragraph;
  ruleSection.appendChild(introductionP);

  /* Each Rule Section */
  rules.rules.forEach(ruleGroup => {
    const ruleDiv = document.createElement('div');

    const ruleHeading = document.createElement('h2');
    ruleHeading.textContent = ruleGroup.group_name;
    ruleDiv.appendChild(ruleHeading);

    const ruleUl = document.createElement('ul');

    ruleGroup.group_items.forEach(item => {
      const li = document.createElement('li');
      li.textContent = item;

      ruleUl.appendChild(li);
    });

    ruleDiv.appendChild(ruleUl);
    ruleSection.appendChild(ruleDiv);
  });

  /* Wrapping Up */
  const wrappingUp = rules.final_words.wrapping_up;

  const lastP = document.createElement('p');
  lastP.textContent = wrappingUp;
  ruleSection.appendChild(lastP);
}
changeBg() {
  const bgContainer = app.store.bgContainer;
  bgContainer.classList = 'rules';
}
  connectedCallback() {
    super.connectedCallback();
    this.template();
    this.changeBg();
  }
}


customElements.define('rules-page', RulesPage);



// const h1 = document.createElement('h1');
// h1.textContent = rules.introduction.introduction_heading;
// 
// /* Introduction */
// const introductionP = document.createElement('p');
// introductionP.textContent = rules.introduction.inroduction_paragraph;
// 
// /* Each Rule Section */
// rules.rules.forEach(ruleGroup => {
//   const ruleSection = document.createElement('section');
// 
//   const ruleHeading = document.createElement('h2');
//   ruleHeading.textContent = ruleGroup.group_name;
//   ruleSection.appendChild(ruleHeading);
// 
//   const ruleUl = document.createElement('ul');
// 
//   ruleGroup.group_items.forEach(item => {
//     const li = document.createElement('li');
//     li.textContent = item;
// 
//     ruleUl.appendChild(li);
//   });
//   
//   ruleSection.appendChild(ruleUl);
// 
// });
// 
// /* Wrapping Up */
// const wrappingUp = rules.final_words.wrapping_up;
// 
// const lastP = document.createElement('p');
// lastP.textContent = wrappingUp;