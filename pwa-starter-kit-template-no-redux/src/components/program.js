/**
@license
Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
import { html } from '@polymer/lit-element';
import { PageViewElement } from './page-view-element.js';

import { LitElement, html } from '@polymer/lit-element';

// These are the elements needed by this element.
import { plusIcon, minusIcon } from './my-icons.js';

// These are the shared styles needed by this element.
import { ButtonSharedStyles } from './button-shared-styles.js';

// This is a reusable element. It is not connected to the store. You can
// imagine that it could just as well be a third-party element that you
// got from someone else.
class ProgramElement extends LitElement {
  render() {
    return html`
      ${SharedStyles}
      <div>
        <h2>${this.titre}</h2>
        <p>
          ${this.description}
        </p>
      </div>
    `;
  }

  static get properties() { return {
    /* The total number of clicks you've done. */
    titre: { type: String },
    /* The current value of the counter. */
    description: { type: String }
  }};

  constructor() {
    super();
    this.titre = "no title";
    this.description = "no description";
  }

}

window.customElements.define('program', ProgramElement);
