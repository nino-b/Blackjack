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
  <form>
    <input type="search" placeholder="Look up a rule">
    <button>Search</button>
  </form>
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

    const introduction = createEl('p', ruleSection, rules.introduction.introduction_paragraph);
    addClass(introduction, 'introduction');

    const ruleContainer = createEl('div', ruleSection);
    addClass(ruleContainer, 'rule-container');

    rules.rules.forEach(ruleGroup => {
      this.#createRuleGroupDiv(ruleContainer, ruleGroup);
    });

    const wrappingUp = rules.wrapping_up.final_words;
    const finalWords = createEl('p', ruleSection, wrappingUp);
    addClass(finalWords, 'final-words');
  }
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
  #createRuleGroupDiv(ruleContainer, ruleGroup) {
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
    return ruleGroupContainer;
  }
  changeBg() {
    const bgContainer = app.store.bgContainer;
    bgContainer.classList = 'rules';
  }
  connectedCallback() {
    super.connectedCallback();
    this.changeBg();
    this.render();
  }
  disconnectedCallback() {
    // Remove event listener from the search box
  }
}


customElements.define('rules-page', RulesPage);