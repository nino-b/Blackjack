import BaseComponent from "./BaseComponent.js";
import URLs from "../data/urls.js";
import { createEl, addClass } from "../util/domTools.js";

export default class RulesPage extends BaseComponent {
  constructor() {
    super();
    this.pathToCSS = URLs.cssURLs.Rules;
    this.templateID = 'rules-page-template';
    this.eventName = 'appendruleschange';
  }

    /* 
  <section id="rules-page-container">
    <h1></h1>
    <p></p>
    
    <div class="rule-group-container">
      <h2>group_name</h2>

      <ul>

        <li>
          <p>
            <span>label</span> description.
          </p>
        </li>

      </ul>
    </div>

    <p></p>
  </section>
  */
render() {
  const rules = app.store.rules;
  const ruleSection = this.root.querySelector('#rules-page-container');


  createEl('h1', ruleSection, rules.introduction.introduction_heading);
  createEl('p', ruleSection, rules.introduction. introduction_paragraph);

  const ruleContainer = createEl('div', ruleSection);
  addClass(ruleContainer, 'rule-container');

  rules.rules.forEach(ruleGroup => {
    /* 
    <div class="rule-group-container">
      <h2>group_name</h2>

      <ul>

        <li>
          <p>
            <span>label</span> description.
          </p>
        </li>

      </ul>
    </div>
    */
    const ruleGroupContainer = createEl('div', ruleContainer);
    addClass(ruleGroupContainer, 'rule-group-container');

    const ruleTitle = createEl('h2', ruleGroupContainer, ruleGroup.group_name);
    const ruleList = createEl('ul', ruleGroupContainer);

    ruleGroup.group_items.forEach(rule => {
      const ruleListItem = createEl('li', ruleList);
      const ruleListParaghraph = createEl('p', ruleListItem);
      const ruleListTitle = createEl('span', ruleListParaghraph, rule.label);

      const descriptionText = document.createTextNode(rule.description);
      ruleListParaghraph.appendChild(descriptionText);
    });
  });

  const finalWords = rules.wrapping_up.final_words;
  createEl('p', ruleSection, finalWords);
}

createUl() {}
changeBg() {
  const bgContainer = app.store.bgContainer;
  bgContainer.classList = 'rules';
}
  connectedCallback() {
    super.connectedCallback();
    this.changeBg();
    this.render();
  }
}


customElements.define('rules-page', RulesPage);