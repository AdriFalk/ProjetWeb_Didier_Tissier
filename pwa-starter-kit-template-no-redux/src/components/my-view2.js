import { html } from '@polymer/lit-element';
import { PageViewElement } from './page-view-element.js';

// These are the shared styles needed by this element.
import { SharedStyles } from './shared-styles.js';
import('../components/youtube-embed.js');
import('../components/program-main.js');

class MyView2 extends PageViewElement {
  render() {
    return html`
      ${SharedStyles}
      <section>
        <program-main></program-main>
      </section>
      `;
  }
}

window.customElements.define('my-view2', MyView2);