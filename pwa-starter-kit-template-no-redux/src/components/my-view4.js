import { html } from '@polymer/lit-element';
import { PageViewElement } from './page-view-element.js';

// These are the shared styles needed by this element.
import { SharedStyles } from './shared-styles.js';
import { ButtonSharedStyles } from './button-shared-styles.js';
import { addToCartIcon } from './my-icons.js';

class Aboutus extends PageViewElement {
  render() {
    return html`
      ${SharedStyles}
      ${ButtonSharedStyles}
      <style>
        
        
      </style>

      <section>
        <h2 class="small">About us</h2>
        <p>We are called Adrien Tissier and Hugo Didier, we are two students of the national engineering 
          school of brest (ENIB). We created this website as part of the interactive application design 
          course.</p>
        <p>We chose to talk about bodybuilding because we know it's not easy to start or find the 
          motivation to continue. We want to create envy and encourage those who still hesitate to 
          start this sport.</p>
      </section>
      <section>
        <p>You can contact us by mail:</p>
        <p>* a5tissie@enib.fr</p>
        <p>* h5didier@enib.fr</p>
      </section>
    `;
  }
}
  window.customElements.define('my-view4', Aboutus);
