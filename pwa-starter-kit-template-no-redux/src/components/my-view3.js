import { html } from '@polymer/lit-element';
import { PageViewElement } from './page-view-element.js';

// These are the shared styles needed by this element.
import { SharedStyles } from './shared-styles.js';
import('../components/food-main');

class MyView3 extends PageViewElement {
  render() {
    return html`
      ${SharedStyles}
      <section>
        <food-main></food-main>
      </section>
      `;
  }
}

window.customElements.define('my-view3', MyView3);